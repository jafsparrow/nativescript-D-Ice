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
        // public selectedIndex = 1;
        // public items: Array<string>;
        this.isCustomerSelected = false;
        this.selectedCustomer = "";
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("Customer :" + i);
        }
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
        this.isCustomerSelected = !this.isCustomerSelected;
    };
    InvoiceComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
        console.log(this.items[args.newIndex]);
        this.checkoutService.tearDownCurrentCart();
        this.orderCount = this.checkoutService.getTheCartProductCount();
        this.orderTotalPrice = this.checkoutService.getCartTotalPrice();
        this.selectedCustomer = this.items[args.newIndex];
        this.isCustomerSelected = true;
    };
    InvoiceComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    InvoiceComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZvaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUUzRCxtRUFBNkU7QUFDN0UsMkVBQXlFO0FBSXpFLHlFQUF1RTtBQUN2RSw2RUFBeUU7QUFHekUsc0dBQTBHO0FBVTFHO0lBWVEsMEJBQW9CLGNBQThCLEVBQ3RDLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGVBQWdDO1FBSHhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFaaEQsZUFBVSxHQUFTLENBQUMsQ0FBQztRQUNyQixvQkFBZSxHQUFTLENBQUMsQ0FBQztRQUUxQiw0QkFBNEI7UUFDNUIsK0JBQStCO1FBRS9CLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFPbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRUQsc0JBQUksc0NBQVE7YUFBWjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsbUNBQVEsR0FBUjtRQUNJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLE9BQU87UUFBdEIsaUJBcUJDO1FBcEJHLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBRztZQUNULE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDN0IsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLHVEQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDakUsb0JBQW9CO1lBRXBCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ0osRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNmLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNoRSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNwRSxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwseUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUN0RCxDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFtQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLENBQUMsUUFBUSxZQUFPLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWhFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFFTSxrQ0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFyRlEsZ0JBQWdCO1FBVDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1AseUJBQXlCO2FBQzVCO1NBQ0osQ0FBQzt5Q0FjMEMsZ0NBQWM7WUFDL0IsNEJBQWtCO1lBQ2xCLHVCQUFnQjtZQUNOLG1DQUFlO09BZnZDLGdCQUFnQixDQXVGNUI7SUFBRCx1QkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2tPdXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlc1wiXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kYWxzL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50XCJcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaW52b2ljZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaW52b2ljZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgXCIuL2ludm9pY2UuY29tcG9uZW50LmNzc1wiXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW52b2ljZUNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Byb2R1Y3RzOiBPYnNlcnZhYmxlQXJyYXk8UHJvZHVjdD47XHJcbiAgICBvcmRlckNvdW50OiBudW1iZXI9MDtcclxuICAgIG9yZGVyVG90YWxQcmljZTogbnVtYmVyPTA7XHJcblxyXG4gICAgLy8gcHVibGljIHNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgLy8gcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGlzQ3VzdG9tZXJTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0ZWRDdXN0b21lcjogc3RyaW5nID0gXCJcIjtcclxuICAgIGl0ZW1zOiBhbnk7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja091dFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChcIkN1c3RvbWVyIDpcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldEFsbFByb2R1Y3RzKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9kdWN0cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBnZXQgcHJvZHVjdHMoKTogT2JzZXJ2YWJsZUFycmF5PFByb2R1Y3Q+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZpZXdDYXJ0KCkge1xyXG4gICAgICAgICAgICBhbGVydChcInZpZXcgQ2FydFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdFF1YW50aXR5KHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcclxuICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsncHJvZHVjdCc6IHByb2R1Y3R9LFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFByb2R1Y3RRdWFudGl0eU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGx6IGVudGVyIGEgdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgd2hlbiBpdCBpcyBpbnRlcmdyZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5hZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlckNvdW50ID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJUb3RhbFByaWNlID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2FydFRvdGFsUHJpY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIGNoYW5nZUN1c3RvbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNDdXN0b21lclNlbGVjdGVkPSAhdGhpcy5pc0N1c3RvbWVyU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtc1thcmdzLm5ld0luZGV4XSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS50ZWFyRG93bkN1cnJlbnRDYXJ0KCk7XHJcbiAgICAgICAgdGhpcy5vcmRlckNvdW50ID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpO1xyXG4gICAgICAgIHRoaXMub3JkZXJUb3RhbFByaWNlID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2FydFRvdGFsUHJpY2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gdGhpcy5pdGVtc1thcmdzLm5ld0luZGV4XTtcclxuICAgICAgICB0aGlzLmlzQ3VzdG9tZXJTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ub3BlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25jbG9zZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==