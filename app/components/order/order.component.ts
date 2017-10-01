import { Component } from "@angular/core";

import { ObservableArray } from "tns-core-modules/data/observable-array";

import { ProductService } from "../../shared/services/product.service";
import { CheckOutService } from "../../shared/services/checkout.services";
import { Product } from "../../shared/models/product";
import { LineItem } from "../../shared/models/line-item";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./order.component.html",
    styleUrls: [
        "./order.component.css"
    ]
})

export class OrderComponent {
    private _cartItems: ObservableArray<LineItem>;
    cartItemCount: number;
    cartTotalPrice: number;

    constructor(private productService: ProductService,
                private cartService: CheckOutService) {
        
        this.getAllCartItems();
        this.cartItemCount = this.cartService.getTheCartProductCount()
        this.cartTotalPrice = this.cartService.getCartTotalPrice();
    }

    getAllCartItems() {
        this._cartItems = new ObservableArray(this.cartService.getTheCart());
              
    }

    get cartItems(): ObservableArray<LineItem> {
        return this._cartItems;
    }

    // get cartItemCount(): number {
    //     console.log("number of times");
    //     return 4;//this.cartService.getTheCartProductCount();
    
    // }

    printInvoice() {
        alert('I am printing it now, please wait..!')
    }
}