
import { Component, ViewContainerRef} from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DropDown } from "nativescript-drop-down";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

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

    // public selectedIndex = 1;
    // public items: Array<string>;

    isCustomerSelected: boolean = false;
    selectedCustomer: string = "";
    items: any;
        constructor(private productService: ProductService,
            private modal: ModalDialogService, 
            private vcRef: ViewContainerRef,
            private checkoutService: CheckOutService) {
            
                this.items = [];
                for (var i = 0; i < 5; i++) {
                    this.items.push("Customer :" + i);
                }

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
        this.isCustomerSelected= !this.isCustomerSelected;
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
        console.log(this.items[args.newIndex]);
    
        this.checkoutService.tearDownCurrentCart();
        this.orderCount = this.checkoutService.getTheCartProductCount();
        this.orderTotalPrice = this.checkoutService.getCartTotalPrice();

        this.selectedCustomer = this.items[args.newIndex];
        this.isCustomerSelected = true;
    }

    public onopen() {
        console.log("Drop Down opened.");

    }

    public onclose() {
        console.log("Drop Down closed.");
    }

}