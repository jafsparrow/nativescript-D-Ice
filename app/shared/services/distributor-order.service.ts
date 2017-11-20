import { isArray } from 'nativescript-angular/lang-facade';
import { Injectable, OnInit } from "@angular/core";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { LineItem } from '../models/line-item';
import { orderUrls, serverURL } from "../environment"

@Injectable()
export class DistributorOrderService implements OnInit {
    /**
     * 1. get URLs from environment file.
     * 2. create Http options.
     */
    private serverUrl: string = serverURL;
    private orderCreateURL = `${this.serverUrl}/orders/distributor/1/`;
    private cartItemUrl = `${this.serverUrl}/orders/distributor/1/?status=in_cart`;
    public orderDetails: any;
    public lineItems: LineItem[] = [];
    distributorID: number;
    constructor(private http: Http) {
       console.log('distributor cart service constructed');
    }

    ngOnInit() {
        let isCartExist = false;
        let $cartDetails = this.getCartProducts()
            .subscribe(res=> {
                if (res.length !== 2) {
                    console.log('this is when the response is not empty array');
                    isCartExist = true;
                }
        })
        if(!isCartExist) {
            // call create empty order.
            let $newCart = this.createEmptyOrder()
                .subscribe(res=> {
                    console.log('creating a new order');
                    this.orderDetails = res;
                    this.lineItems = this.orderDetails.ordered_products;
                })
                .unsubscribe();
            
        }
        $cartDetails.unsubscribe();
        this.distributorID = 1; // get this from the local strorage.
    }

    getCartProducts() {
        let headers = this.createRequestHeader();
        return this.http.get(this.cartItemUrl, { headers: headers })
            .map(res => res.json());
    }

    createEmptyOrder() {
        let data = { distributor_id:1, ordered_products: []}
        console.log(JSON.stringify(data));
        let options = this.createRequestOptions();
        return this.http.post(this.orderCreateURL, JSON.stringify(data), options)
    }
    /**
     * 
     * @param productDetails : this contains product and the qunatity.
     * calculate the total price based on the quantity and then send to upate.
     * returns http observable to the compnents.
     */
    updateOrder(productDetails){
        console.log('calling update order');
        const totalPrice: number = productDetails.product.price * productDetails.quantity;
        console.log(`total price calculted ${totalPrice}`);
        let newLineItem: LineItem = {
            productId: productDetails.id,
            quantity: productDetails.quantity,
            totalPrice: totalPrice
        }
        this.lineItems.push(newLineItem);
        const updateUrl = `${this.serverUrl}/${this.orderDetails.orderID}/distributor/${this.distributorID}`
        let data = { 
            distributor_id:1, 
            ordered_products: this.lineItems
        };
        let options = this.createRequestOptions();
        this.http.put(updateUrl, JSON.stringify(data), options)
            .map(res => res.json())
            .subscribe(
                res => {
                    // update the lineItems
                    this.lineItems = res;
                    console.log('update order subscrit sucess');
                    console.log(`the response is ${res}`);
                    return true;
                },
                error => {
                    return false;
                }
            );
    }

    updateLineItems(productToAdd: any) {

    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }

    private createRequestOptions() {
        let headers = new Headers();
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return options;

    }

    
    getTheCartProductCount(): number {
        return this.lineItems.length;
      } 
}