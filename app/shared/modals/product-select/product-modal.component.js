"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ProductQuantityModalComponent = (function () {
    function ProductQuantityModalComponent(params) {
        this.params = params;
        this.selectedProdcut = this.params.context.product;
    }
    ProductQuantityModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ProductQuantityModalComponent.prototype.sendToOrder = function (product) {
        // console.log(product);
        this.params.closeCallback(product);
    };
    ProductQuantityModalComponent.prototype.printTextValue = function (value) {
        // console.log(value);
        this.params.closeCallback(value);
    };
    ProductQuantityModalComponent = __decorate([
        core_1.Component({
            selector: "my-modal",
            moduleId: module.id,
            templateUrl: "./product-modal.component.html",
            styleUrls: ["./product-modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ProductQuantityModalComponent);
    return ProductQuantityModalComponent;
}());
exports.ProductQuantityModalComponent = ProductQuantityModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxtRUFBNEU7QUFTNUU7SUFLSSx1Q0FBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdkQsQ0FBQztJQUVNLDZDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTSxtREFBVyxHQUFsQixVQUFtQixPQUFPO1FBQ3RCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0RBQWMsR0FBZCxVQUFlLEtBQUs7UUFDaEIsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF0QlEsNkJBQTZCO1FBTnpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQU1xQywyQkFBaUI7T0FMM0MsNkJBQTZCLENBeUJ6QztJQUFELG9DQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQge1xyXG4gXHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkUHJvZGN1dDogYW55O1xyXG4gXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2RjdXQgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnByb2R1Y3Q7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNlbmRUb09yZGVyKHByb2R1Y3Qpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRUZXh0VmFsdWUodmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gXHJcbn0iXX0=