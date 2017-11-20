"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckOutService = (function () {
    function CheckOutService() {
        this.lineItems = [];
    }
    CheckOutService.prototype.addProductToCart = function (product, quantity) {
        console.log("product name is " + product.name + " and quantitiy is " + quantity);
        var lineItem = Object.assign({}, product);
        lineItem.id = product.id;
        lineItem.quantity = quantity;
        lineItem.totalPrice = product.price * quantity;
        console.log(lineItem.totalPrice);
        var index = this.lineItems.findIndex(function (item) {
            return item.id === product.id;
        });
        if (index > -1) {
            // edit the current item .
            this.lineItems[index].quantity = quantity;
            this.lineItems[index].totalPrice = quantity * product.price;
        }
        else {
            this.lineItems.push(lineItem);
        }
        console.log("the length now is " + this.lineItems.length);
        console.log(this.lineItems);
    };
    CheckOutService.prototype.removeProductFromCart = function (product) {
        // const index = this.lineItems.indexOf(product);
        var filteredItems = this.lineItems.filter(function (item) {
            return item.id !== product.id;
        });
        this.lineItems = filteredItems;
    };
    CheckOutService.prototype.changeProdcutQuantity = function (product, newQuantity) {
        var lineItem = Object.assign({}, product);
        lineItem.quantity = newQuantity;
        lineItem.totalPrice = product.price * newQuantity;
        var index = this.lineItems.findIndex(function (item) {
            return item.productId === product.id;
        });
        Object.assign(this.lineItems[index], lineItem);
    };
    CheckOutService.prototype.editProductFromCart = function (product) {
    };
    CheckOutService.prototype.getTheCartProductCount = function () {
        return this.lineItems.length;
    };
    CheckOutService.prototype.getCartTotalPrice = function () {
        return this.lineItems.reduce(function (prev, item) {
            return prev = prev + item.totalPrice;
        }, 0);
    };
    CheckOutService.prototype.getTheCart = function () {
        console.log('from service fetching cart item.');
        console.log(this.lineItems);
        return this.lineItems;
    };
    CheckOutService.prototype.getCartSummary = function () {
        // return {
        //   count: this.lineItems.length;
        //   totalPrice: this.line
        // }
    };
    CheckOutService.prototype.tearDownCurrentCart = function () {
        console.log(this.lineItems.length);
        for (var i = this.lineItems.length; i > 0; i--) {
            this.lineItems.pop();
            console.log('*********');
        }
        console.log(this.lineItems.length);
    };
    CheckOutService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CheckOutService);
    return CheckOutService;
}());
exports.CheckOutService = CheckOutService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQUlJO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUlELDBDQUFnQixHQUFoQixVQUFpQixPQUFZLEVBQUUsUUFBZ0I7UUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksMEJBQXFCLFFBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLFVBQUMsSUFBSTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7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LEFBbkdELElBbUdDO0FBbkdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvbGluZS1pdGVtXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL21vZGVscy9vcmRlclwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja091dFNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBsaW5lSXRlbXM6IExpbmVJdGVtW107XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5saW5lSXRlbXMgPSBbXTtcclxuICAgIH1cclxuICBcclxuXHJcbiAgXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3Q6IGFueSwgcXVhbnRpdHk6IG51bWJlcikge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYHByb2R1Y3QgbmFtZSBpcyAke3Byb2R1Y3QubmFtZX0gYW5kIHF1YW50aXRpeSBpcyAke3F1YW50aXR5fWApO1xyXG4gICAgICBjb25zdCBsaW5lSXRlbTogTGluZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0KTtcclxuICAgICAgbGluZUl0ZW0uaWQgPSBwcm9kdWN0LmlkO1xyXG4gICAgICBsaW5lSXRlbS5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICBsaW5lSXRlbS50b3RhbFByaWNlID0gcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5O1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lSXRlbS50b3RhbFByaWNlKTtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpbmVJdGVtcy5maW5kSW5kZXgoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgIHJldHVybiBpdGVtLmlkID09PSBwcm9kdWN0LmlkXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIC8vIGVkaXQgdGhlIGN1cnJlbnQgaXRlbSAuXHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXNbaW5kZXhdLnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXNbaW5kZXhdLnRvdGFsUHJpY2UgPSBxdWFudGl0eSAqIHByb2R1Y3QucHJpY2U7XHJcbiAgXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB0aGlzLmxpbmVJdGVtcy5wdXNoKGxpbmVJdGVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGxlbmd0aCBub3cgaXMgJHt0aGlzLmxpbmVJdGVtcy5sZW5ndGh9YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbW92ZVByb2R1Y3RGcm9tQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICAgICAgLy8gY29uc3QgaW5kZXggPSB0aGlzLmxpbmVJdGVtcy5pbmRleE9mKHByb2R1Y3QpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5saW5lSXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBwcm9kdWN0LmlkO1xyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgICB0aGlzLmxpbmVJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjaGFuZ2VQcm9kY3V0UXVhbnRpdHkocHJvZHVjdDogYW55LCBuZXdRdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGxpbmVJdGVtOiBMaW5lSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpO1xyXG4gICAgICBsaW5lSXRlbS5xdWFudGl0eSA9IG5ld1F1YW50aXR5O1xyXG4gICAgICBsaW5lSXRlbS50b3RhbFByaWNlID0gcHJvZHVjdC5wcmljZSAqIG5ld1F1YW50aXR5O1xyXG4gIFxyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGluZUl0ZW1zLmZpbmRJbmRleCggaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ucHJvZHVjdElkID09PSBwcm9kdWN0LmlkXHJcbiAgICAgIH0pO1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubGluZUl0ZW1zW2luZGV4XSwgbGluZUl0ZW0pO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZWRpdFByb2R1Y3RGcm9tQ2FydChwcm9kdWN0OiBhbnkpIHtcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFRoZUNhcnRQcm9kdWN0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zLmxlbmd0aDtcclxuICAgIH0gICAgXHJcblxyXG4gICAgZ2V0Q2FydFRvdGFsUHJpY2UoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zLnJlZHVjZSgocHJldiwgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2ID0gcHJldiArIGl0ZW0udG90YWxQcmljZTtcclxuICAgICAgICBcclxuICAgICAgfSwwKTtcclxuICAgIH1cclxuICAgIGdldFRoZUNhcnQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmcm9tIHNlcnZpY2UgZmV0Y2hpbmcgY2FydCBpdGVtLicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVJdGVtcyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpbmVJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJ0U3VtbWFyeSgpIHtcclxuXHJcblxyXG5cclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICBjb3VudDogdGhpcy5saW5lSXRlbXMubGVuZ3RoO1xyXG4gICAgICAvLyAgIHRvdGFsUHJpY2U6IHRoaXMubGluZVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgdGVhckRvd25DdXJyZW50Q2FydCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGluZUl0ZW1zLmxlbmd0aDsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zLnBvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKionKTtcclxuICAgICAgIH1cclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG59Il19