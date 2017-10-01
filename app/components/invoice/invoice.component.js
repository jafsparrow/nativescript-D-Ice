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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZvaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE0RDtBQUU1RCxtRUFBNkU7QUFDN0UsMkVBQXlFO0FBR3pFLHlFQUF1RTtBQUN2RSw2RUFBeUU7QUFHekUsc0dBQTBHO0FBVTFHO0lBSVEsMEJBQW9CLGNBQThCLEVBQ3RDLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGVBQWdDO1FBSHhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMaEQsZUFBVSxHQUFTLENBQUMsQ0FBQztRQUNyQixvQkFBZSxHQUFTLENBQUMsQ0FBQztRQU1sQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELHNCQUFJLHNDQUFRO2FBQVo7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELG1DQUFRLEdBQVI7UUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxPQUFPO1FBQXRCLGlCQXFCQztRQXBCRyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUc7WUFDVCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQzdCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx1REFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pFLG9CQUFvQjtZQUVwQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNKLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDZixLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDaEUsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDcEUsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9DSSxnQkFBZ0I7UUFUNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDUCx5QkFBeUI7YUFDNUI7U0FDSixDQUFDO3lDQU0wQyxnQ0FBYztZQUMvQiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ04sbUNBQWU7T0FQdkMsZ0JBQWdCLENBZ0Q1QjtJQUFELHVCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2tPdXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlc1wiXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kYWxzL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50XCJcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaW52b2ljZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaW52b2ljZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgXCIuL2ludm9pY2UuY29tcG9uZW50LmNzc1wiXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW52b2ljZUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9wcm9kdWN0czogT2JzZXJ2YWJsZUFycmF5PFByb2R1Y3Q+O1xyXG4gICAgb3JkZXJDb3VudDogbnVtYmVyPTA7XHJcbiAgICBvcmRlclRvdGFsUHJpY2U6IG51bWJlcj0wO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIFxyXG4gICAgICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tPdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RzID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldCBwcm9kdWN0cygpOiBPYnNlcnZhYmxlQXJyYXk8UHJvZHVjdD4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlld0NhcnQoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidmlldyBDYXJ0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0UXVhbnRpdHkocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dDogeydwcm9kdWN0JzogcHJvZHVjdH0sXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbHogZW50ZXIgYSB2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3aGVuIGl0IGlzIGludGVyZ3JlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyQ291bnQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclRvdGFsUHJpY2UgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJ0VG90YWxQcmljZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxufSJdfQ==