"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var product_service_1 = require("../../shared/services/product.service");
var checkout_services_1 = require("../../shared/services/checkout.services");
var OrderComponent = (function () {
    function OrderComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.getAllCartItems();
        this.cartItemCount = this.cartService.getTheCartProductCount();
        this.cartTotalPrice = this.cartService.getCartTotalPrice();
    }
    OrderComponent.prototype.getAllCartItems = function () {
        this._cartItems = new observable_array_1.ObservableArray(this.cartService.getTheCart());
    };
    Object.defineProperty(OrderComponent.prototype, "cartItems", {
        get: function () {
            return this._cartItems;
        },
        enumerable: true,
        configurable: true
    });
    // get cartItemCount(): number {
    //     console.log("number of times");
    //     return 4;//this.cartService.getTheCartProductCount();
    // }
    OrderComponent.prototype.printInvoice = function () {
        alert('I am printing it now, please wait..!');
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./order.component.html",
            styleUrls: [
                "./order.component.css"
            ]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            checkout_services_1.CheckOutService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDJFQUF5RTtBQUV6RSx5RUFBdUU7QUFDdkUsNkVBQTBFO0FBYTFFO0lBS0ksd0JBQW9CLGNBQThCLEVBQzlCLFdBQTRCO1FBRDVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFFNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFRCxzQkFBSSxxQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLDREQUE0RDtJQUU1RCxJQUFJO0lBRUoscUNBQVksR0FBWjtRQUNJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUE5QlEsY0FBYztRQVQxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFO2dCQUNQLHVCQUF1QjthQUMxQjtTQUNKLENBQUM7eUNBT3NDLGdDQUFjO1lBQ2pCLG1DQUFlO09BTnZDLGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2tPdXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3JkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgIFwiLi9vcmRlci5jb21wb25lbnQuY3NzXCJcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9jYXJ0SXRlbXM6IE9ic2VydmFibGVBcnJheTxMaW5lSXRlbT47XHJcbiAgICBjYXJ0SXRlbUNvdW50OiBudW1iZXI7XHJcbiAgICBjYXJ0VG90YWxQcmljZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2hlY2tPdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRBbGxDYXJ0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLmNhcnRJdGVtQ291bnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldFRoZUNhcnRQcm9kdWN0Q291bnQoKVxyXG4gICAgICAgIHRoaXMuY2FydFRvdGFsUHJpY2UgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnRUb3RhbFByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ2FydEl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2NhcnRJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5jYXJ0U2VydmljZS5nZXRUaGVDYXJ0KCkpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXJ0SXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PExpbmVJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgY2FydEl0ZW1Db3VudCgpOiBudW1iZXIge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwibnVtYmVyIG9mIHRpbWVzXCIpO1xyXG4gICAgLy8gICAgIHJldHVybiA0Oy8vdGhpcy5jYXJ0U2VydmljZS5nZXRUaGVDYXJ0UHJvZHVjdENvdW50KCk7XHJcbiAgICBcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcmludEludm9pY2UoKSB7XHJcbiAgICAgICAgYWxlcnQoJ0kgYW0gcHJpbnRpbmcgaXQgbm93LCBwbGVhc2Ugd2FpdC4uIScpXHJcbiAgICB9XHJcbn0iXX0=