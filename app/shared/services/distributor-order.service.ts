import { isArray } from 'nativescript-angular/lang-facade';
import { Injectable, OnInit } from "@angular/core";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

import { LineItem } from '../models/line-item';
import { orderUrls, serverURL } from "../environment"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DistributorOrderService  {
    private serverUrl: string = serverURL;
    public orderDetails: any=[];
    private distributorID: number;

    constructor(private http: Http) {
        console.log('distributor cart service constructed');
        // read the distributor ID from the local Storage and assign to distributor ID.
        this.distributorID = 1;
        let $productsInCart = this.getProductsInTheCart();

        $productsInCart
            .first()
            .subscribe(res => {
                console.log(res);
                this.orderDetails = res})
    }

    // create a in cart search observable
    getProductsInTheCart(): Observable<any> {
        let headers = this.createRequestHeader();
        const cartItemsUrl = `${this.serverUrl}/orders/distributor/${this.distributorID}/?status=in_cart`;
        console.log('inside get cart products method.');
        return this.http.get(cartItemsUrl, { headers: headers })
            .map(res => res.json());
        }
    // create new empty order observalbe.
    createANewOrder(orderedProducts: Array<any>): Observable<any> {
        const orderCreateUrl = `${this.serverUrl}/orders/distributor/${this.distributorID}/`;
        let data = { distributor_id:this.distributorID, ordered_products: orderedProducts };
        console.log(JSON.stringify(data));
        let options = this.createRequestOptions();
        return this.http.post(orderCreateUrl, JSON.stringify(data), options)
                .map(res => res.json());
        }

    // create update order objservable.
    updateProductsInCart(orderDetails: any): Observable<any> {
        const updateUrl = `${this.serverUrl}/orders/${orderDetails.id}/distributor/${this.distributorID}/`
        // orderDetails.distributor_id = this.distributorID;
        let options = this.createRequestOptions();
        let data = {
            ordered_products:  orderDetails.ordered_products
        };
        return this.http.put(updateUrl, JSON.stringify(data), options)
            .map(res => res.json())
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

    }