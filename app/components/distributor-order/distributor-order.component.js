"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_modal_component_1 = require("../../shared/modals/product-select/product-modal.component");
var distributor_order_service_1 = require("../../shared/services/distributor-order.service");
var core_1 = require("@angular/core");
var datapull_service_1 = require("../../shared/services/datapull.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var DistributorOrderComponent = (function () {
    function DistributorOrderComponent(data, modal, vcRef, cartService) {
        this.data = data;
        this.modal = modal;
        this.vcRef = vcRef;
        this.cartService = cartService;
        this.orderCount = 0;
        this.lineItems = [];
    }
    DistributorOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getProducts()
            .subscribe(function (res) {
            _this.products = res;
        });
        this.setupTheCart();
    };
    DistributorOrderComponent.prototype.setupTheCart = function () {
        var _this = this;
        if (!this.cartService.orderDetails.hasOwnProperty('ordered_products')) {
            this.cartService.createANewOrder([])
                .first()
                .subscribe(function (res) {
                console.log(res);
                _this.orderDetails = res;
            });
        }
    };
    /**
     * Get the cart item.
     * if it is empty, call create order rul.
     */
    DistributorOrderComponent.prototype.addToCart = function (product) {
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
    };
    DistributorOrderComponent.prototype.selectQuantity = function (product) {
        var _this = this;
        console.log(this.cartService.orderDetails);
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        var selectedQuantity = 0;
        this.modal.showModal(product_modal_component_1.ProductQuantityModalComponent, options).then(function (res) {
            console.log("addtocart promise inside " + res);
            if (res) {
                selectedQuantity = parseInt(res);
                console.log("the value returned from other method " + selectedQuantity);
                var productsDetails = {
                    product: product.id,
                    productPrice: product.msrp,
                    quantity: selectedQuantity
                };
                _this.addProductToLineItems(productsDetails);
                // call the service to update the order with new line items.
                _this.cartService.updateProductsInCart(_this.orderDetails)
                    .subscribe(function (res) {
                    _this.orderDetails = res;
                    _this.lineItems = res.ordered_products;
                }, function (error) { return alert('product update failed.' + error); });
            }
            ;
        });
    };
    DistributorOrderComponent.prototype.addProductToLineItems = function (productDetails) {
        var totalPrice = productDetails.productPrice * productDetails.quantity;
        var newLineItem = {
            product: productDetails.product,
            quantity: productDetails.quantity,
            price: totalPrice
        };
        console.log("product " + newLineItem.product + " and quantity is " + newLineItem.quantity);
        this.lineItems.push(newLineItem);
        this.orderDetails.ordered_products = this.lineItems;
    };
    DistributorOrderComponent = __decorate([
        core_1.Component({
            selector: "ns-dist-order",
            moduleId: module.id,
            templateUrl: "./distributor-order.component.html",
            styleUrls: ["./distributor-order.component.css"]
        }),
        __metadata("design:paramtypes", [datapull_service_1.DataPullService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            distributor_order_service_1.DistributorOrderService])
    ], DistributorOrderComponent);
    return DistributorOrderComponent;
}());
exports.DistributorOrderComponent = DistributorOrderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0dBQTJHO0FBQzNHLDZGQUEwRjtBQUMxRixzQ0FBb0U7QUFDcEUsMkVBQXlFO0FBRXpFLG1FQUE2RTtBQWU3RTtJQVFJLG1DQUFvQixJQUFxQixFQUM3QixLQUF5QixFQUN6QixLQUF1QixFQUN2QixXQUFvQztRQUg1QixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFSaEQsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixjQUFTLEdBQWUsRUFBRSxDQUFDO0lBTTNCLENBQUM7SUFDRCw0Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTthQUNsQixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdEQUFZLEdBQVo7UUFBQSxpQkFhQztRQVhHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5FLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztpQkFDL0IsS0FBSyxFQUFFO2lCQUNQLFNBQVMsQ0FBRSxVQUFBLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFH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LENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFuSFEseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDO3lDQVU0QixrQ0FBZTtZQUN0Qiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ1YsbURBQXVCO09BWHZDLHlCQUF5QixDQW9IckM7SUFBRCxnQ0FBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RRdWFudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGFscy9wcm9kdWN0LXNlbGVjdC9wcm9kdWN0LW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpc3RyaWJ1dG9yT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Rpc3RyaWJ1dG9yLW9yZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhUHVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGFwdWxsLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5cclxuaW1wb3J0IHsgTGluZUl0ZW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9saW5lLWl0ZW1cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRpc3Qtb3JkZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Rpc3RyaWJ1dG9yLW9yZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dG9yT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJvZHVjdHM6IGFueTtcclxuICAgIG9yZGVyZWRfcHJvZHVjdHM7XHJcbiAgICBvcmRlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgb3JkZXJJZDogbnVtYmVyO1xyXG4gICAgb3JkZXJEZXRhaWxzOiBhbnk7XHJcbiAgICBsaW5lSXRlbXM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBEYXRhUHVsbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IERpc3RyaWJ1dG9yT3JkZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0UHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldHVwVGhlQ2FydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwVGhlQ2FydCgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMuY2FydFNlcnZpY2Uub3JkZXJEZXRhaWxzLmhhc093blByb3BlcnR5KCdvcmRlcmVkX3Byb2R1Y3RzJykpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5jcmVhdGVBTmV3T3JkZXIoW10pXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSggcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJEZXRhaWxzID0gcmVzfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjYXJ0IGl0ZW0uXHJcbiAgICAgKiBpZiBpdCBpcyBlbXB0eSwgY2FsbCBjcmVhdGUgb3JkZXIgcnVsLlxyXG4gICAgICovXHJcbiAgICBhZGRUb0NhcnQocHJvZHVjdDogYW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbGV0IHNlbGVjdGVkUXVhbnRpdHk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgLy8gLy8gZm9ybSBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvZHVjdCBkZXRhaWxzIHRvIHVzZSBmb3IgdGhlIGNhcnQgc2VydmljZS5cclxuICAgICAgICAvLyB0aGlzLnNlbGVjdFF1YW50aXR5KHByb2R1Y3QpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIC8vICAgICBzZWxlY3RlZFF1YW50aXR5ID0gcmVzO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBhZnRlciByZWFkaW5nIGZyb20gdGhlIG1ldGhvZCAke3NlbGVjdGVkUXVhbnRpdHl9YCk7XHJcbiAgICAgICAgLy8gaWYgKHNlbGVjdGVkUXVhbnRpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3aGVuIHRoZSBubyBxdWFudGl0eSBpcyBjaG9zZW4uJyk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc3QgcHJvZHVjdHNEZXRhaWxzID0geyBcclxuICAgICAgICAvLyAgICAgcHJvZHVjdElkOiBwcm9kdWN0LCBcclxuICAgICAgICAvLyAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgLy8gICogdGhlIGNhcnQgdXBkYXRlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGFuIG9ic2VydmFibGUgb2Ygc3VjY2VzcyBzdGF0dXMsIFxyXG4gICAgICAgIC8vICAgICBpZiBub3QgdG9hc3QgYSBtZXNzYWdlICwgc3Vic2NyaXB0IHRobyB1cGR0ZSBvcmRlci5cclxuICAgICAgICAvLyAgKi9cclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS51cGRhdGVPcmRlcihwcm9kdWN0c0RldGFpbHMpO1xyXG4gICAgICAgIC8vIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAvLyAgICAgLy9nZXQgdGhlIHRoZSBuZXcgbGluZSBpdGVtIGNvdW50LlxyXG4gICAgICAgIC8vICAgICB0aGlzLm9yZGVyQ291bnQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcbiAgICAgICAgLy8gICAgIC8vc3RvcCBzcGlubmVyIGZyb20gc3Bpbm5pbmcuXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICAgfVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RRdWFudGl0eShwcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJ0U2VydmljZS5vcmRlckRldGFpbHMpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dDogeydwcm9kdWN0JzogcHJvZHVjdH0sXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWRkdG9jYXJ0IHByb21pc2UgaW5zaWRlICR7cmVzfWApO1xyXG4gICAgICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWFudGl0eSA9IHBhcnNlSW50KHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gb3RoZXIgbWV0aG9kICR7c2VsZWN0ZWRRdWFudGl0eX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzRGV0YWlscyA9IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6IHByb2R1Y3QubXNycCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvTGluZUl0ZW1zKHByb2R1Y3RzRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIHRvIHVwZGF0ZSB0aGUgb3JkZXIgd2l0aCBuZXcgbGluZSBpdGVtcy5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlUHJvZHVjdHNJbkNhcnQodGhpcy5vcmRlckRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lSXRlbXMgPSByZXMub3JkZXJlZF9wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KCdwcm9kdWN0IHVwZGF0ZSBmYWlsZWQuJyArIGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGFkZFByb2R1Y3RUb0xpbmVJdGVtcyhwcm9kdWN0RGV0YWlscykge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2U6IG51bWJlciA9IHByb2R1Y3REZXRhaWxzLnByb2R1Y3RQcmljZSAqIHByb2R1Y3REZXRhaWxzLnF1YW50aXR5O1xyXG4gICAgICAgIGxldCBuZXdMaW5lSXRlbTogTGluZUl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3REZXRhaWxzLnByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGV0YWlscy5xdWFudGl0eSxcclxuICAgICAgICAgICAgcHJpY2U6IHRvdGFsUHJpY2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBwcm9kdWN0ICR7bmV3TGluZUl0ZW0ucHJvZHVjdH0gYW5kIHF1YW50aXR5IGlzICR7bmV3TGluZUl0ZW0ucXVhbnRpdHl9YCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zLnB1c2gobmV3TGluZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJEZXRhaWxzLm9yZGVyZWRfcHJvZHVjdHMgPSB0aGlzLmxpbmVJdGVtcztcclxuICAgIH1cclxufSJdfQ==