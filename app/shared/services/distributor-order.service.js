"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var environment_1 = require("../environment");
var DistributorOrderService = (function () {
    function DistributorOrderService(http) {
        this.http = http;
        /**
         * 1. get URLs from environment file.
         * 2. create Http options.
         */
        this.serverUrl = environment_1.serverURL;
        this.orderCreateURL = this.serverUrl + "/orders/distributor/1/";
        this.cartItemUrl = this.serverUrl + "/orders/distributor/1/?status=in_cart";
        this.lineItems = [];
        console.log('distributor cart service constructed');
    }
    DistributorOrderService.prototype.ngOnInit = function () {
        var _this = this;
        var isCartExist = false;
        var $cartDetails = this.getCartProducts()
            .subscribe(function (res) {
            if (res.length !== 2) {
                console.log('this is when the response is not empty array');
                isCartExist = true;
            }
        });
        if (!isCartExist) {
            // call create empty order.
            var $newCart = this.createEmptyOrder()
                .subscribe(function (res) {
                console.log('creating a new order');
                _this.orderDetails = res;
                _this.lineItems = _this.orderDetails.ordered_products;
            })
                .unsubscribe();
        }
        $cartDetails.unsubscribe();
        this.distributorID = 1; // get this from the local strorage.
    };
    DistributorOrderService.prototype.getCartProducts = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.cartItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DistributorOrderService.prototype.createEmptyOrder = function () {
        var data = { distributor_id: 1, ordered_products: [] };
        console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        return this.http.post(this.orderCreateURL, JSON.stringify(data), options);
    };
    /**
     *
     * @param productDetails : this contains product and the qunatity.
     * calculate the total price based on the quantity and then send to upate.
     * returns http observable to the compnents.
     */
    DistributorOrderService.prototype.updateOrder = function (productDetails) {
        var _this = this;
        console.log('calling update order');
        var totalPrice = productDetails.product.price * productDetails.quantity;
        console.log("total price calculted " + totalPrice);
        var newLineItem = {
            productId: productDetails.id,
            quantity: productDetails.quantity,
            totalPrice: totalPrice
        };
        this.lineItems.push(newLineItem);
        var updateUrl = this.serverUrl + "/" + this.orderDetails.orderID + "/distributor/" + this.distributorID;
        var data = {
            distributor_id: 1,
            ordered_products: this.lineItems
        };
        var options = this.createRequestOptions();
        this.http.put(updateUrl, JSON.stringify(data), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // update the lineItems
            _this.lineItems = res;
            console.log('update order subscrit sucess');
            console.log("the response is " + res);
            return true;
        }, function (error) {
            return false;
        });
    };
    DistributorOrderService.prototype.updateLineItems = function (productToAdd) {
    };
    DistributorOrderService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    };
    DistributorOrderService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    DistributorOrderService.prototype.getTheCartProductCount = function () {
        return this.lineItems.length;
    };
    DistributorOrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DistributorOrderService);
    return DistributorOrderService;
}());
exports.DistributorOrderService = DistributorOrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RyaWJ1dG9yLW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUQ7QUFFbkQsc0NBQXdFO0FBR3hFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFHOUIsOENBQXFEO0FBR3JEO0lBV0ksaUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBVjlCOzs7V0FHRztRQUNLLGNBQVMsR0FBVyx1QkFBUyxDQUFDO1FBQzlCLG1CQUFjLEdBQU0sSUFBSSxDQUFDLFNBQVMsMkJBQXdCLENBQUM7UUFDM0QsZ0JBQVcsR0FBTSxJQUFJLENBQUMsU0FBUywwQ0FBdUMsQ0FBQztRQUV4RSxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBRy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0JBQzVELFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsMkJBQTJCO1lBQzNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtpQkFDakMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFz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LEtBQUs7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVELGlEQUFlLEdBQWYsVUFBZ0IsWUFBaUI7SUFFakMsQ0FBQztJQUVPLHFEQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sc0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix1Q0FBdUM7UUFDdkMsMkNBQTJDO1FBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBR0Qsd0RBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFwSE0sdUJBQXVCO1FBRG5DLGlCQUFVLEVBQUU7eUNBWWlCLFdBQUk7T0FYckIsdUJBQXVCLENBcUhuQztJQUFELDhCQUFDO0NBQUEsQUFySEQsSUFxSEM7QUFySFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2xhbmctZmFjYWRlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuXHJcbmltcG9ydCB7IExpbmVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2xpbmUtaXRlbSc7XHJcbmltcG9ydCB7IG9yZGVyVXJscywgc2VydmVyVVJMIH0gZnJvbSBcIi4uL2Vudmlyb25tZW50XCJcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dG9yT3JkZXJTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8qKlxyXG4gICAgICogMS4gZ2V0IFVSTHMgZnJvbSBlbnZpcm9ubWVudCBmaWxlLlxyXG4gICAgICogMi4gY3JlYXRlIEh0dHAgb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZyA9IHNlcnZlclVSTDtcclxuICAgIHByaXZhdGUgb3JkZXJDcmVhdGVVUkwgPSBgJHt0aGlzLnNlcnZlclVybH0vb3JkZXJzL2Rpc3RyaWJ1dG9yLzEvYDtcclxuICAgIHByaXZhdGUgY2FydEl0ZW1VcmwgPSBgJHt0aGlzLnNlcnZlclVybH0vb3JkZXJzL2Rpc3RyaWJ1dG9yLzEvP3N0YXR1cz1pbl9jYXJ0YDtcclxuICAgIHB1YmxpYyBvcmRlckRldGFpbHM6IGFueTtcclxuICAgIHB1YmxpYyBsaW5lSXRlbXM6IExpbmVJdGVtW10gPSBbXTtcclxuICAgIGRpc3RyaWJ1dG9ySUQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ2Rpc3RyaWJ1dG9yIGNhcnQgc2VydmljZSBjb25zdHJ1Y3RlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBpc0NhcnRFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkY2FydERldGFpbHMgPSB0aGlzLmdldENhcnRQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3aGVuIHRoZSByZXNwb25zZSBpcyBub3QgZW1wdHkgYXJyYXknKTtcclxuICAgICAgICAgICAgICAgICAgICBpc0NhcnRFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighaXNDYXJ0RXhpc3QpIHtcclxuICAgICAgICAgICAgLy8gY2FsbCBjcmVhdGUgZW1wdHkgb3JkZXIuXHJcbiAgICAgICAgICAgIGxldCAkbmV3Q2FydCA9IHRoaXMuY3JlYXRlRW1wdHlPcmRlcigpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgb3JkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IHRoaXMub3JkZXJEZXRhaWxzLm9yZGVyZWRfcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAkY2FydERldGFpbHMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmRpc3RyaWJ1dG9ySUQgPSAxOyAvLyBnZXQgdGhpcyBmcm9tIHRoZSBsb2NhbCBzdHJvcmFnZS5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJ0UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNhcnRJdGVtVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRW1wdHlPcmRlcigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgZGlzdHJpYnV0b3JfaWQ6MSwgb3JkZXJlZF9wcm9kdWN0czogW119XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLm9yZGVyQ3JlYXRlVVJMLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgb3B0aW9ucylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcHJvZHVjdERldGFpbHMgOiB0aGlzIGNvbnRhaW5zIHByb2R1Y3QgYW5kIHRoZSBxdW5hdGl0eS5cclxuICAgICAqIGNhbGN1bGF0ZSB0aGUgdG90YWwgcHJpY2UgYmFzZWQgb24gdGhlIHF1YW50aXR5IGFuZCB0aGVuIHNlbmQgdG8gdXBhdGUuXHJcbiAgICAgKiByZXR1cm5zIGh0dHAgb2JzZXJ2YWJsZSB0byB0aGUgY29tcG5lbnRzLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVPcmRlcihwcm9kdWN0RGV0YWlscyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcgdXBkYXRlIG9yZGVyJyk7XHJcbiAgICAgICAgY29uc3QgdG90YWxQcmljZTogbnVtYmVyID0gcHJvZHVjdERldGFpbHMucHJvZHVjdC5wcmljZSAqIHByb2R1Y3REZXRhaWxzLnF1YW50aXR5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0b3RhbCBwcmljZSBjYWxjdWx0ZWQgJHt0b3RhbFByaWNlfWApO1xyXG4gICAgICAgIGxldCBuZXdMaW5lSXRlbTogTGluZUl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdERldGFpbHMuaWQsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0RGV0YWlscy5xdWFudGl0eSxcclxuICAgICAgICAgICAgdG90YWxQcmljZTogdG90YWxQcmljZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmVJdGVtcy5wdXNoKG5ld0xpbmVJdGVtKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVVcmwgPSBgJHt0aGlzLnNlcnZlclVybH0vJHt0aGlzLm9yZGVyRGV0YWlscy5vcmRlcklEfS9kaXN0cmlidXRvci8ke3RoaXMuZGlzdHJpYnV0b3JJRH1gXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IFxyXG4gICAgICAgICAgICBkaXN0cmlidXRvcl9pZDoxLCBcclxuICAgICAgICAgICAgb3JkZXJlZF9wcm9kdWN0czogdGhpcy5saW5lSXRlbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wdXQodXBkYXRlVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBsaW5lSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIG9yZGVyIHN1YnNjcml0IHN1Y2VzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgcmVzcG9uc2UgaXMgJHtyZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaW5lSXRlbXMocHJvZHVjdFRvQWRkOiBhbnkpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgIH0gXHJcbn0iXX0=