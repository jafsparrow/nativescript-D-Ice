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
    
    constructor(private data: DataPullService,
        private modal: ModalDialogService, 
        private vcRef: ViewContainerRef,
        private checkoutService: DistributorOrderService) {
    }
    ngOnInit() {
        this.data.getProducts()
            .subscribe(res => {
                this.products = res;
            });
        this.orderDetails = this.checkoutService.getCartProducts();
        

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
        let options = {
                context: {'product': product},
                fullscreen: false,
                viewContainerRef: this.vcRef
            };
        let selectedQuantity = 0;
        this.modal.showModal(ProductQuantityModalComponent, options).then(res=> {
            console.log(`addtocart promise inside ${res}`);
            if(res){
                if(res.length < 1){
                    alert('plz enter a value');
                    return;
                 
                }
                selectedQuantity = parseInt(res);
                console.log(`the value returned from other method ${selectedQuantity}`);
                const productsDetails = { 
                    productPrice: product.msrp, 
                    quantity: selectedQuantity
                }
                const result = this.checkoutService.updateOrder(productsDetails);
                if (result) {
                    //get the the new line item count.
                    this.orderCount = this.checkoutService.getTheCartProductCount();
                    //stop spinner from spinning.
                } else {
                    alert(`something happened while adding product to cart.`)
                }
                
            };
        });
    }      
}