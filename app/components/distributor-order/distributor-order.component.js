"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_modal_component_1 = require("../../shared/modals/product-select/product-modal.component");
var distributor_order_service_1 = require("../../shared/services/distributor-order.service");
var core_1 = require("@angular/core");
var datapull_service_1 = require("../../shared/services/datapull.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var DistributorOrderComponent = (function () {
    function DistributorOrderComponent(data, modal, vcRef, checkoutService) {
        this.data = data;
        this.modal = modal;
        this.vcRef = vcRef;
        this.checkoutService = checkoutService;
        this.orderCount = 0;
    }
    DistributorOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getProducts()
            .subscribe(function (res) {
            _this.products = res;
        });
        this.orderDetails = this.checkoutService.getCartProducts();
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
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        var selectedQuantity = 0;
        this.modal.showModal(product_modal_component_1.ProductQuantityModalComponent, options).then(function (res) {
            console.log("addtocart promise inside " + res);
            if (res) {
                if (res.length < 1) {
                    alert('plz enter a value');
                    return;
                }
                selectedQuantity = parseInt(res);
                console.log("the value returned from other method " + selectedQuantity);
                var productsDetails = {
                    productPrice: product.msrp,
                    quantity: selectedQuantity
                };
                var result = _this.checkoutService.updateOrder(productsDetails);
                if (result) {
                    //get the the new line item count.
                    _this.orderCount = _this.checkoutService.getTheCartProductCount();
                    //stop spinner from spinning.
                }
                else {
                    alert("something happened while adding product to cart.");
                }
            }
            ;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0dBQTJHO0FBQzNHLDZGQUEwRjtBQUMxRixzQ0FBb0U7QUFDcEUsMkVBQXlFO0FBRXpFLG1FQUE2RTtBQWU3RTtJQU9JLG1DQUFvQixJQUFxQixFQUM3QixLQUF5QixFQUN6QixLQUF1QixFQUN2QixlQUF3QztRQUhoQyxTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBeUI7UUFQcEQsZUFBVSxHQUFXLENBQUMsQ0FBQztJQVF2QixDQUFDO0lBQ0QsNENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7YUFDbEIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRy9ELENBQUM7SUFFRDs7O09BR0c7SUFDSCw2Q0FBUyxHQUFULFVBQVUsT0FBWTtRQUVsQixvQ0FBb0M7UUFDcEMsMEVBQTBFO1FBQzFFLDRDQUE0QztRQUM1Qyw4QkFBOEI7UUFDOUIsTUFBTTtRQUNOLG9FQUFvRTtRQUNwRSxrQ0FBa0M7UUFDbEMsOERBQThEO1FBQzlELGNBQWM7UUFDZCxJQUFJO1FBQ0osNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQixpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLE1BQU07UUFDTiw0RUFBNEU7UUFDNUUsMERBQTBEO1FBQzFELE1BQU07UUFDTixvRUFBb0U7UUFDcEUsZ0JBQWdCO1FBQ2hCLHlDQUF5QztRQUN6Qyx1RUFBdUU7UUFDdkUsb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCxTQUFTO1FBQ1QsSUFBSTtJQUNQLENBQUM7SUFDTSxrREFBYyxHQUF0QixVQUF1QixPQUFPO1FBQTlCLGlCQWdDQztRQS9CRyxJQUFJLE9BQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDN0IsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNOLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLHVEQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsR0FBSyxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDSixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2YsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQzNCLE1BQU0sQ0FBQztnQkFFWCxDQUFDO2dCQUNELGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBd0MsZ0JBQWtCLENBQUMsQ0FBQztnQkFDeEUsSUFBTSxlQUFlLEdBQUc7b0JBQ3BCLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDMUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDN0IsQ0FBQTtnQkFDRCxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDakUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDVCxrQ0FBa0M7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUNoRSw2QkFBNkI7Z0JBQ2pDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUE7Z0JBQzdELENBQUM7WUFFTCxDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZGUSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ25ELENBQUM7eUNBUzRCLGtDQUFlO1lBQ3RCLDRCQUFrQjtZQUNsQix1QkFBZ0I7WUFDTixtREFBdUI7T0FWM0MseUJBQXlCLENBd0ZyQztJQUFELGdDQUFDO0NBQUEsQUF4RkQsSUF3RkM7QUF4RlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kYWxzL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzdHJpYnV0b3JPcmRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZGlzdHJpYnV0b3Itb3JkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFQdWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YXB1bGwuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGlzdC1vcmRlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9kaXN0cmlidXRvci1vcmRlci5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0b3JPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9kdWN0czogYW55O1xyXG4gICAgb3JkZXJlZF9wcm9kdWN0cztcclxuICAgIG9yZGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBvcmRlcklkOiBudW1iZXI7XHJcbiAgICBvcmRlckRldGFpbHM6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBEYXRhUHVsbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBEaXN0cmlidXRvck9yZGVyU2VydmljZSkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmRlckRldGFpbHMgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJ0UHJvZHVjdHMoKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNhcnQgaXRlbS5cclxuICAgICAqIGlmIGl0IGlzIGVtcHR5LCBjYWxsIGNyZWF0ZSBvcmRlciBydWwuXHJcbiAgICAgKi9cclxuICAgIGFkZFRvQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRRdWFudGl0eTogbnVtYmVyID0gMDtcclxuICAgICAgICAvLyAvLyBmb3JtIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9kdWN0IGRldGFpbHMgdG8gdXNlIGZvciB0aGUgY2FydCBzZXJ2aWNlLlxyXG4gICAgICAgIC8vIHRoaXMuc2VsZWN0UXVhbnRpdHkocHJvZHVjdCkudGhlbihyZXM9PiB7XHJcbiAgICAgICAgLy8gICAgIHNlbGVjdGVkUXVhbnRpdHkgPSByZXM7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGFmdGVyIHJlYWRpbmcgZnJvbSB0aGUgbWV0aG9kICR7c2VsZWN0ZWRRdWFudGl0eX1gKTtcclxuICAgICAgICAvLyBpZiAoc2VsZWN0ZWRRdWFudGl0eSA9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHdoZW4gdGhlIG5vIHF1YW50aXR5IGlzIGNob3Nlbi4nKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBwcm9kdWN0c0RldGFpbHMgPSB7IFxyXG4gICAgICAgIC8vICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QsIFxyXG4gICAgICAgIC8vICAgICBxdWFudGl0eTogc2VsZWN0ZWRRdWFudGl0eVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvKipcclxuICAgICAgICAvLyAgKiB0aGUgY2FydCB1cGRhdGUgbWV0aG9kIHNob3VsZCByZXR1cm4gYW4gb2JzZXJ2YWJsZSBvZiBzdWNjZXNzIHN0YXR1cywgXHJcbiAgICAgICAgLy8gICAgIGlmIG5vdCB0b2FzdCBhIG1lc3NhZ2UgLCBzdWJzY3JpcHQgdGhvIHVwZHRlIG9yZGVyLlxyXG4gICAgICAgIC8vICAqL1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnVwZGF0ZU9yZGVyKHByb2R1Y3RzRGV0YWlscyk7XHJcbiAgICAgICAgLy8gaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICAvL2dldCB0aGUgdGhlIG5ldyBsaW5lIGl0ZW0gY291bnQuXHJcbiAgICAgICAgLy8gICAgIHRoaXMub3JkZXJDb3VudCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTtcclxuICAgICAgICAvLyAgICAgLy9zdG9wIHNwaW5uZXIgZnJvbSBzcGlubmluZy5cclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICB9XHJcbiAgICBwcml2YXRlIHNlbGVjdFF1YW50aXR5KHByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsncHJvZHVjdCc6IHByb2R1Y3R9LFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUXVhbnRpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFByb2R1Y3RRdWFudGl0eU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGFkZHRvY2FydCBwcm9taXNlIGluc2lkZSAke3Jlc31gKTtcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgncGx6IGVudGVyIGEgdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFF1YW50aXR5ID0gcGFyc2VJbnQocmVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBvdGhlciBtZXRob2QgJHtzZWxlY3RlZFF1YW50aXR5fWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNEZXRhaWxzID0geyBcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6IHByb2R1Y3QubXNycCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnVwZGF0ZU9yZGVyKHByb2R1Y3RzRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgdGhlIHRoZSBuZXcgbGluZSBpdGVtIGNvdW50LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJDb3VudCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3N0b3Agc3Bpbm5lciBmcm9tIHNwaW5uaW5nLlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgc29tZXRoaW5nIGhhcHBlbmVkIHdoaWxlIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQuYClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICAgIFxyXG59Il19