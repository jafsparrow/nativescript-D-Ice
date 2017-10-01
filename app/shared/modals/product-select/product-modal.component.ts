import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";


@Component({
    selector: "my-modal",
    moduleId: module.id,
    templateUrl: "./product-modal.component.html",
    styleUrls: ["./product-modal.component.css"]
})
export class ProductQuantityModalComponent {
 

    public selectedProdcut: any;
 
    public constructor(private params: ModalDialogParams) {
        this.selectedProdcut = this.params.context.product;
    }
 
    public close(res: string) {
        this.params.closeCallback(res);
    }


    public sendToOrder(product){
        // console.log(product);
        this.params.closeCallback(product);
    }

    printTextValue(value) {
        // console.log(value);
        this.params.closeCallback(value);
    }

 
}