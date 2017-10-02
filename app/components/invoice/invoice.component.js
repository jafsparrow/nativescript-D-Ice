"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var product_service_1 = require("../../shared/services/product.service");
var checkout_services_1 = require("../../shared/services/checkout.services");
var product_modal_component_1 = require("../../shared/modals/product-select/product-modal.component");
var InvoiceComponent = (function () {
    function InvoiceComponent(productService, modal, vcRef, checkoutService) {
        this.productService = productService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.checkoutService = checkoutService;
        this.orderCount = 0;
        this.orderTotalPrice = 0;
        this.isCustomerSelected = true;
        this.getAllProducts();
    }
    InvoiceComponent.prototype.getAllProducts = function () {
        this._products = new observable_array_1.ObservableArray(this.productService.getProducts());
    };
    Object.defineProperty(InvoiceComponent.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    InvoiceComponent.prototype.viewCart = function () {
        alert("view Cart");
    };
    InvoiceComponent.prototype.selectQuantity = function (product) {
        var _this = this;
        var quantity = 0;
        var options = {
            context: { 'product': product },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(product_modal_component_1.ProductQuantityModalComponent, options).then(function (res) {
            // console.log(res);
            if (res) {
                if (res.length < 1) {
                    alert('plz enter a value');
                }
                console.log('this is when it is intergrer');
                _this.checkoutService.addProductToCart(product, res);
                _this.orderCount = _this.checkoutService.getTheCartProductCount();
                _this.orderTotalPrice = _this.checkoutService.getCartTotalPrice();
            }
        });
    };
    InvoiceComponent.prototype.changeCustomer = function () {
        this.isCustomerSelected = false;
    };
    InvoiceComponent = __decorate([
        core_1.Component({
            selector: "app-invoice",
            moduleId: module.id,
            templateUrl: "./invoice.component.html",
            styleUrls: [
                "./invoice.component.css"
            ]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            checkout_services_1.CheckOutService])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZvaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE0RDtBQUU1RCxtRUFBNkU7QUFDN0UsMkVBQXlFO0FBR3pFLHlFQUF1RTtBQUN2RSw2RUFBeUU7QUFHekUsc0dBQTBHO0FBVTFHO0lBS1EsMEJBQW9CLGNBQThCLEVBQ3RDLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGVBQWdDO1FBSHhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFOaEQsZUFBVSxHQUFTLENBQUMsQ0FBQztRQUNyQixvQkFBZSxHQUFTLENBQUMsQ0FBQztRQUMxQix1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFNM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRTVFLENBQUM7SUFFRCxzQkFBSSxzQ0FBUTthQUFaO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBTztRQUF0QixpQkFxQkM7UUFwQkcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksT0FBTyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUM3QixVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsdURBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNqRSxvQkFBb0I7WUFFcEIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDSixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2YsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQ2hFLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BFLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCx5Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFFLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBcERRLGdCQUFnQjtRQVQ1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFO2dCQUNQLHlCQUF5QjthQUM1QjtTQUNKLENBQUM7eUNBTzBDLGdDQUFjO1lBQy9CLDRCQUFrQjtZQUNsQix1QkFBZ0I7WUFDTixtQ0FBZTtPQVJ2QyxnQkFBZ0IsQ0FxRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5cclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGVja091dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2VzXCJcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RRdWFudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RhbHMvcHJvZHVjdC1zZWxlY3QvcHJvZHVjdC1tb2RhbC5jb21wb25lbnRcIlxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1pbnZvaWNlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbnZvaWNlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICBcIi4vaW52b2ljZS5jb21wb25lbnQuY3NzXCJcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZvaWNlQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3Byb2R1Y3RzOiBPYnNlcnZhYmxlQXJyYXk8UHJvZHVjdD47XHJcbiAgICBvcmRlckNvdW50OiBudW1iZXI9MDtcclxuICAgIG9yZGVyVG90YWxQcmljZTogbnVtYmVyPTA7XHJcbiAgICBpc0N1c3RvbWVyU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIFxyXG4gICAgICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tPdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RzID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldCBwcm9kdWN0cygpOiBPYnNlcnZhYmxlQXJyYXk8UHJvZHVjdD4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlld0NhcnQoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlldyBDYXJ0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0UXVhbnRpdHkocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dDogeydwcm9kdWN0JzogcHJvZHVjdH0sXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbHogZW50ZXIgYSB2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3aGVuIGl0IGlzIGludGVyZ3JlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyQ291bnQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclRvdGFsUHJpY2UgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJ0VG90YWxQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgY2hhbmdlQ3VzdG9tZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0N1c3RvbWVyU2VsZWN0ZWQ9IGZhbHNlO1xyXG4gICAgfVxyXG59Il19