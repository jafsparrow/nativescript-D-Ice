
import { Component, ViewContainerRef } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";


import { ProductService } from "../../shared/services/product.service";
import { CheckOutService } from "../../shared/services/checkout.services"
import { Product } from "../../shared/models/product";

import { ProductQuantityModalComponent } from "../../shared/modals/product-select/product-modal.component"
@Component({
    selector: "app-invoice",
    moduleId: module.id,
    templateUrl: "./invoice.component.html",
    styleUrls: [
        "./invoice.component.css"
    ]
})

export class InvoiceComponent {
    private _products: ObservableArray<Product>;
    orderCount: number=0;
    orderTotalPrice: number=0;
    isCustomerSelected: boolean = true;
        constructor(private productService: ProductService,
            private modal: ModalDialogService, 
            private vcRef: ViewContainerRef,
            private checkoutService: CheckOutService) {
            
            this.getAllProducts();
        }
    
        getAllProducts() {
            this._products = new ObservableArray(this.productService.getProducts());
           
        }
    
        get products(): ObservableArray<Product> {
            
            return this._products;
        }

        viewCart() {
            alert("view Cart");
        }

        selectQuantity(product) {
            let quantity = 0;
           let options = {
                context: {'product': product},
                fullscreen: false,
                viewContainerRef: this.vcRef
            };
            this.modal.showModal(ProductQuantityModalComponent, options).then(res=> {
                // console.log(res);
                
                if(res){
                    if(res.length < 1){
                        alert('plz enter a value');
                    }
                    console.log('this is when it is intergrer');
                    this.checkoutService.addProductToCart(product, res);
                    this.orderCount = this.checkoutService.getTheCartProductCount();
                    this.orderTotalPrice = this.checkoutService.getCartTotalPrice();
                }
                
            });
        }
    
    changeCustomer() {
        this.isCustomerSelected= false;
    }
}