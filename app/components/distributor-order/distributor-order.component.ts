import { ProductQuantityModalComponent } from '../../shared/modals/product-select/product-modal.component';
import { DistributorOrderService } from '../../shared/services/distributor-order.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataPullService } from "../../shared/services/datapull.service";

import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DropDown } from "nativescript-drop-down";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

import { LineItem } from "../../shared/models/line-item";


@Component({
    selector: "ns-dist-order",
    moduleId: module.id,
    templateUrl: "./distributor-order.component.html",
    styleUrls: ["./distributor-order.component.css"]
})

export class DistributorOrderComponent implements OnInit {
    products: any;
    ordered_products;
    orderCount: number = 0;
    orderId: number;
    orderDetails: any;
    lineItems: Array<any> = [];
    
    constructor(private data: DataPullService,
        private modal: ModalDialogService, 
        private vcRef: ViewContainerRef,
        private cartService: DistributorOrderService) {
    }
    ngOnInit() {
        this.data.getProducts()
            .subscribe(res => {
                this.products = res;
            });
        
        this.setupTheCart();
    }

    setupTheCart() {
               
        if(!this.cartService.orderDetails.hasOwnProperty('ordered_products')) {
           
            this.cartService.createANewOrder([])
                .first()
                .subscribe( res => {
                    console.log(res);
                    this.orderDetails = res});


                
        }
    }
    /**
     * Get the cart item.
     * if it is empty, call create order rul.
     */
    addToCart(product: any) {
        
        // let selectedQuantity: number = 0;
        // // form an object with the product details to use for the cart service.
        // this.selectQuantity(product).then(res=> {
        //     selectedQuantity = res;
        // });
        // console.log(`after reading from the method ${selectedQuantity}`);
        // if (selectedQuantity == null) {
        //     console.log('this is when the no quantity is chosen.');
        //     return;
        // }
        // const productsDetails = { 
        //     productId: product, 
        //     quantity: selectedQuantity
        // }
        // /**
        //  * the cart update method should return an observable of success status, 
        //     if not toast a message , subscript tho updte order.
        //  */
        // const result = this.checkoutService.updateOrder(productsDetails);
        // if (result) {
        //     //get the the new line item count.
        //     this.orderCount = this.checkoutService.getTheCartProductCount();
        //     //stop spinner from spinning.
        // } else {
        //     //
        // }
     }
    private selectQuantity(product) {
        console.log(this.cartService.orderDetails);
        let options = {
                context: {'product': product},
                fullscreen: false,
                viewContainerRef: this.vcRef
            };
        let selectedQuantity = 0;
        this.modal.showModal(ProductQuantityModalComponent, options).then(res=> {
            console.log(`addtocart promise inside ${res}`);
            if(res){
                selectedQuantity = parseInt(res);
                console.log(`the value returned from other method ${selectedQuantity}`);
                const productsDetails = { 
                    product: product.id,
                    productPrice: product.msrp, 
                    quantity: selectedQuantity
                }
                this.addProductToLineItems(productsDetails);
                // call the service to update the order with new line items.
                this.cartService.updateProductsInCart(this.orderDetails)
                    .subscribe(res => {
                        this.orderDetails = res;
                        this.lineItems = res.ordered_products;
                    },
                    error => alert('product update failed.' + error));
                
                

            };
        });
    }     
    
    
    addProductToLineItems(productDetails) {
        const totalPrice: number = productDetails.productPrice * productDetails.quantity;
        let newLineItem: LineItem = {
            product: productDetails.product,
            quantity: productDetails.quantity,
            price: totalPrice
        }

        console.log(`product ${newLineItem.product} and quantity is ${newLineItem.quantity}`);

        this.lineItems.push(newLineItem);
        this.orderDetails.ordered_products = this.lineItems;
    }
}