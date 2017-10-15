import { Component, OnInit } from "@angular/core";
import { DataPullService } from "../../shared/services/datapull.service";

@Component({
    selector: "ns-dist-order",
    moduleId: module.id,
    templateUrl: "./distributor-order.component.html",
    styleUrls: ["./distributor-order.component.css"]
})

export class DistributorOrderComponent implements OnInit {
    products: any;
    OrderID: number;
    constructor(private data: DataPullService) {

    }


    ngOnInit() {
        this.data.getProducts()
            .subscribe(res => {
                console.log(res);
                this.products = res;
            })
    }

    addNewProduct() {
        console.log('adding a new product');
        let products = [];
        // this.data.createOrder(products)
            
        //     .subscribe(res => {
        //         console.log('insider the sbuscribe block'); 
        //         console.log(res);
        //     })

        // this.data.createPlaceholderPOST()
        //     .subscribe(res => console.log(res))

        this.data.createOrder([])
            .subscribe(res=> console.log(res))

        this.data.getCartItems()
            .map(res=> res.json())
            .subscribe(res=> {
                console.log(res);
                
                this.OrderID = res.order_id;
            })  
    }


}