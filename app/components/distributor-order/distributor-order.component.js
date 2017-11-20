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
        // let selectedQuantity = this.selectQuantity(product);
        var selectedQuantity = 0;
        this.selectQuantity(product).then(function (res) {
            console.log("addtocart promise inside " + res);
            if (res) {
                if (res.length < 1) {
                    alert('plz enter a value');
                }
                selectedQuantity = parseInt(res);
                console.log("the value returned from other method " + selectedQuantity);
            }
        });
        // form an object with the product details to use for the cart service.
        if (selectedQuantity == null) {
            console.log('this is when the no quantity is chosen.');
            return;
        }
        var productsDetails = {
            productId: product,
            quantity: selectedQuantity
        };
        /**
         * the cart update method should return an observable of success status,
            if not toast a message , subscript tho updte order.
         */
        var result = this.checkoutService.updateOrder(productsDetails);
        if (result) {
            //get the the new line item count.
            this.orderCount = this.checkoutService.getTheCartProductCount();
            //stop spinner from spinning.
        }
        else {
            //
        }
    };
    DistributorOrderComponent.prototype.selectQuantity = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            context: { 'product': product },
                            fullscreen: false,
                            viewContainerRef: this.vcRef
                        };
                        return [4 /*yield*/, this.modal.showModal(product_modal_component_1.ProductQuantityModalComponent, options)];
                    case 1: 
                    //  const quantity = await this.modal.showModal(ProductQuantityModalComponent, options).then(res=> {
                    //         if(res){
                    //             if(res.length < 1){
                    //                 alert('plz enter a value');
                    //                 return 0;
                    //             }
                    //             console.log( `quantity chosen is ${res}`);
                    //             return parseInt(res);
                    //         }    
                    //     });
                    return [2 /*return*/, _a.sent()];
                }
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0dBQTJHO0FBQzNHLDZGQUEwRjtBQUMxRixzQ0FBb0U7QUFDcEUsMkVBQXlFO0FBRXpFLG1FQUE2RTtBQWU3RTtJQU9JLG1DQUFvQixJQUFxQixFQUM3QixLQUF5QixFQUN6QixLQUF1QixFQUN2QixlQUF3QztRQUhoQyxTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBeUI7UUFQcEQsZUFBVSxHQUFXLENBQUMsQ0FBQztJQVF2QixDQUFDO0lBQ0QsNENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7YUFDbEIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRy9ELENBQUM7SUFFRDs7O09BR0c7SUFDSCw2Q0FBUyxHQUFULFVBQVUsT0FBWTtRQUNsQix1REFBdUQ7UUFDdkQsSUFBSSxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQTRCLEdBQUssQ0FBQyxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ0osRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNmLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUUvQixDQUFDO2dCQUNELGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBd0MsZ0JBQWtCLENBQUMsQ0FBQTtZQUMzRSxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUE7UUFDRix1RUFBdUU7UUFDdkUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQU0sZUFBZSxHQUFHO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQTtRQUNEOzs7V0FHRztRQUNILElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFVCxrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEUsNkJBQTZCO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEVBQUU7UUFDTixDQUFDO0lBQ0osQ0FBQztJQUVZLGtEQUFjLEdBQTVCLFVBQTZCLE9BQU87Ozs7Ozt3QkFDNUIsT0FBTyxHQUFHOzRCQUNOLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUM7NEJBQzdCLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSzt5QkFDL0IsQ0FBQzt3QkFhQyxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx1REFBNkIsRUFBRSxPQUFPLENBQUMsRUFBQTs7b0JBVnpFLG9HQUFvRztvQkFDcEcsbUJBQW1CO29CQUNuQixrQ0FBa0M7b0JBQ2xDLDhDQUE4QztvQkFDOUMsNEJBQTRCO29CQUM1QixnQkFBZ0I7b0JBQ2hCLHlEQUF5RDtvQkFDekQsb0NBQW9DO29CQUNwQyxnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1Ysc0JBQU8sU0FBa0UsRUFBQzs7OztLQUU3RTtJQXJGUSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ25ELENBQUM7eUNBUzRCLGtDQUFlO1lBQ3RCLDRCQUFrQjtZQUNsQix1QkFBZ0I7WUFDTixtREFBdUI7T0FWM0MseUJBQXlCLENBd0ZyQztJQUFELGdDQUFDO0NBQUEsQUF4RkQsSUF3RkM7QUF4RlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kYWxzL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzdHJpYnV0b3JPcmRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZGlzdHJpYnV0b3Itb3JkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFQdWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZGF0YXB1bGwuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGlzdC1vcmRlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9kaXN0cmlidXRvci1vcmRlci5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0b3JPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9kdWN0czogYW55O1xyXG4gICAgb3JkZXJlZF9wcm9kdWN0cztcclxuICAgIG9yZGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBvcmRlcklkOiBudW1iZXI7XHJcbiAgICBvcmRlckRldGFpbHM6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBEYXRhUHVsbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBEaXN0cmlidXRvck9yZGVyU2VydmljZSkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmRlckRldGFpbHMgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJ0UHJvZHVjdHMoKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNhcnQgaXRlbS5cclxuICAgICAqIGlmIGl0IGlzIGVtcHR5LCBjYWxsIGNyZWF0ZSBvcmRlciBydWwuXHJcbiAgICAgKi9cclxuICAgIGFkZFRvQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRRdWFudGl0eSA9IHRoaXMuc2VsZWN0UXVhbnRpdHkocHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUXVhbnRpdHk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RRdWFudGl0eShwcm9kdWN0KS50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGFkZHRvY2FydCBwcm9taXNlIGluc2lkZSAke3Jlc31gKTtcclxuICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgncGx6IGVudGVyIGEgdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWFudGl0eSA9IHBhcnNlSW50KHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gb3RoZXIgbWV0aG9kICR7c2VsZWN0ZWRRdWFudGl0eX1gKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGZvcm0gYW4gb2JqZWN0IHdpdGggdGhlIHByb2R1Y3QgZGV0YWlscyB0byB1c2UgZm9yIHRoZSBjYXJ0IHNlcnZpY2UuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkUXVhbnRpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3aGVuIHRoZSBubyBxdWFudGl0eSBpcyBjaG9zZW4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNEZXRhaWxzID0geyBcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LCBcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHNlbGVjdGVkUXVhbnRpdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIGNhcnQgdXBkYXRlIG1ldGhvZCBzaG91bGQgcmV0dXJuIGFuIG9ic2VydmFibGUgb2Ygc3VjY2VzcyBzdGF0dXMsIFxyXG4gICAgICAgICAgICBpZiBub3QgdG9hc3QgYSBtZXNzYWdlICwgc3Vic2NyaXB0IHRobyB1cGR0ZSBvcmRlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS51cGRhdGVPcmRlcihwcm9kdWN0c0RldGFpbHMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vZ2V0IHRoZSB0aGUgbmV3IGxpbmUgaXRlbSBjb3VudC5cclxuICAgICAgICAgICAgdGhpcy5vcmRlckNvdW50ID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpO1xyXG4gICAgICAgICAgICAvL3N0b3Agc3Bpbm5lciBmcm9tIHNwaW5uaW5nLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZWxlY3RRdWFudGl0eShwcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7J3Byb2R1Y3QnOiBwcm9kdWN0fSxcclxuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgY29uc3QgcXVhbnRpdHkgPSBhd2FpdCB0aGlzLm1vZGFsLnNob3dNb2RhbChQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXM9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYWxlcnQoJ3BseiBlbnRlciBhIHZhbHVlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyggYHF1YW50aXR5IGNob3NlbiBpcyAke3Jlc31gKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocmVzKTtcclxuICAgICAgICAvLyAgICAgICAgIH0gICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsLnNob3dNb2RhbChQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgfSAgICAgIFxyXG5cclxuXHJcbn0iXX0=