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
            return item.product.id === product.id;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja291dC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQUlJO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUlELDBDQUFnQixHQUFoQixVQUFpQixPQUFZLEVBQUUsUUFBZ0I7UUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksMEJBQXFCLFFBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFFLFVBQUMsSUFBSTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7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c0JBQUM7Q0FBQSxBQW5HRCxJQW1HQztBQW5HWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgTGluZUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2xpbmUtaXRlbVwiO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9tb2RlbHMvb3JkZXJcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tPdXRTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgbGluZUl0ZW1zOiBMaW5lSXRlbVtdO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMubGluZUl0ZW1zID0gW107XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0OiBhbnksIHF1YW50aXR5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9kdWN0IG5hbWUgaXMgJHtwcm9kdWN0Lm5hbWV9IGFuZCBxdWFudGl0aXkgaXMgJHtxdWFudGl0eX1gKTtcclxuICAgICAgY29uc3QgbGluZUl0ZW06IExpbmVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XHJcbiAgICAgIGxpbmVJdGVtLmlkID0gcHJvZHVjdC5pZDtcclxuICAgICAgbGluZUl0ZW0ucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgICAgbGluZUl0ZW0udG90YWxQcmljZSA9IHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eTtcclxuICAgICAgY29uc29sZS5sb2cobGluZUl0ZW0udG90YWxQcmljZSk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saW5lSXRlbXMuZmluZEluZGV4KCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAvLyBlZGl0IHRoZSBjdXJyZW50IGl0ZW0gLlxyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zW2luZGV4XS5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zW2luZGV4XS50b3RhbFByaWNlID0gcXVhbnRpdHkgKiBwcm9kdWN0LnByaWNlO1xyXG4gIFxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXMucHVzaChsaW5lSXRlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgY29uc29sZS5sb2coYHRoZSBsZW5ndGggbm93IGlzICR7dGhpcy5saW5lSXRlbXMubGVuZ3RofWApO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVJdGVtcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW1vdmVQcm9kdWN0RnJvbUNhcnQocHJvZHVjdDogYW55KSB7XHJcbiAgICAgIC8vIGNvbnN0IGluZGV4ID0gdGhpcy5saW5lSXRlbXMuaW5kZXhPZihwcm9kdWN0KTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMubGluZUl0ZW1zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCAhPT0gcHJvZHVjdC5pZDtcclxuICAgICAgfSlcclxuICBcclxuICAgICAgdGhpcy5saW5lSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2hhbmdlUHJvZGN1dFF1YW50aXR5KHByb2R1Y3Q6IGFueSwgbmV3UXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBsaW5lSXRlbTogTGluZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0KTtcclxuICAgICAgbGluZUl0ZW0ucXVhbnRpdHkgPSBuZXdRdWFudGl0eTtcclxuICAgICAgbGluZUl0ZW0udG90YWxQcmljZSA9IHByb2R1Y3QucHJpY2UgKiBuZXdRdWFudGl0eTtcclxuICBcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpbmVJdGVtcy5maW5kSW5kZXgoIGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnByb2R1Y3QuaWQgPT09IHByb2R1Y3QuaWRcclxuICAgICAgfSk7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5saW5lSXRlbXNbaW5kZXhdLCBsaW5lSXRlbSk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBlZGl0UHJvZHVjdEZyb21DYXJ0KHByb2R1Y3Q6IGFueSkge1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5saW5lSXRlbXMubGVuZ3RoO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBnZXRDYXJ0VG90YWxQcmljZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5saW5lSXRlbXMucmVkdWNlKChwcmV2LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYgPSBwcmV2ICsgaXRlbS50b3RhbFByaWNlO1xyXG4gICAgICAgIFxyXG4gICAgICB9LDApO1xyXG4gICAgfVxyXG4gICAgZ2V0VGhlQ2FydCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Zyb20gc2VydmljZSBmZXRjaGluZyBjYXJ0IGl0ZW0uJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICAgICAgcmV0dXJuIHRoaXMubGluZUl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcnRTdW1tYXJ5KCkge1xyXG5cclxuXHJcblxyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIGNvdW50OiB0aGlzLmxpbmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgIC8vICAgdG90YWxQcmljZTogdGhpcy5saW5lXHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZWFyRG93bkN1cnJlbnRDYXJ0KCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVJdGVtcy5sZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5saW5lSXRlbXMubGVuZ3RoOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5saW5lSXRlbXMucG9wKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKicpO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=