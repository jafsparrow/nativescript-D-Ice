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
        this.serverUrl = environment_1.serverURL;
        this.orderCreateURL = this.serverUrl + "/orders/distributor/1/";
        this.cartItemUrl = this.serverUrl + "/orders/distributor/1/?status=in_cart";
        this.lineItems = [];
        console.log('distributor cart service constructed');
        this.copyInCartOrders();
    }
    DistributorOrderService.prototype.copyInCartOrders = function () {
        var _this = this;
        console.log('reading in cart orders');
        var $cartDetails = this.getCartProducts()
            .subscribe(function (res) {
            console.log("res log after checking in cart " + res + " and length is " + res.length);
            _this.orderDetails = res;
        });
    };
    DistributorOrderService.prototype.setupOrders = function () {
        var _this = this;
        console.log('ng on init is perfroming now');
        var isCartExist = false;
        var $cartDetails = this.getCartProducts()
            .subscribe(function (res) {
            console.log('some respnse');
            console.log("res log after checking in cart " + res);
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
        console.log('inside get cart products method.');
        return this.http.get(this.cartItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DistributorOrderService.prototype.createEmptyOrder = function () {
        var data = { distributor_id: 1, ordered_products: [] };
        // console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        return this.http.post(this.orderCreateURL, JSON.stringify(data), options)
            .map(function (res) { return res.json(); });
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
        var totalPrice = productDetails.productPrice * productDetails.quantity;
        console.log("total price calculted " + totalPrice);
        var newLineItem = {
            product: 10,
            quantity: productDetails.quantity,
            totalPrice: totalPrice
        };
        console.log("item before new push " + this.lineItems.length);
        this.lineItems.push(newLineItem);
        console.log("item after new push " + this.lineItems.length);
        console.log("check id is real " + this.orderDetails.id);
        var updateUrl = this.serverUrl + "/" + this.orderDetails.id + "/distributor/" + this.distributorID;
        var data = {
            distributor_id: 1,
            ordered_products: this.lineItems
        };
        var options = this.createRequestOptions();
        if (this.orderDetails.length == 1) {
            // call create empty order.
            var $newCart = this.createEmptyOrder()
                .subscribe(function (res) {
                console.log('creating a new order');
                _this.orderDetails = res;
            });
            console.log('just before returning the empty order creation');
            return true;
        }
        else {
            this.http.put(updateUrl, JSON.stringify(data), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                // update the lineItems
                _this.lineItems = res.lineItems;
                console.log('update order subscrit sucess');
                console.log("the response is " + res);
                _this.lineItems = _this.orderDetails.ordered_products;
                return true;
            }, function (error) {
                return false;
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RyaWJ1dG9yLW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUQ7QUFFbkQsc0NBQXdFO0FBR3hFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFHOUIsOENBQXFEO0FBR3JEO0lBUUksaUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBUHRCLGNBQVMsR0FBVyx1QkFBUyxDQUFDO1FBQzlCLG1CQUFjLEdBQU0sSUFBSSxDQUFDLFNBQVMsMkJBQXdCLENBQUM7UUFDM0QsZ0JBQVcsR0FBTSxJQUFJLENBQUMsU0FBUywwQ0FBdUMsQ0FBQztRQUV4RSxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBSS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0MsR0FBRyx1QkFBa0IsR0FBRyxDQUFDLE1BQVEsQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUdELDZDQUFXLEdBQVg7UUFBQSxpQkF5QkM7UUF4QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzVDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2FBQ3BDLFNB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LHVCQUF1QjtRQURuQyxpQkFBVSxFQUFFO3lDQVNpQixXQUFJO09BUnJCLHVCQUF1QixDQW9KbkM7SUFBRCw4QkFBQztDQUFBLEFBcEpELElBb0pDO0FBcEpZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9sYW5nLWZhY2FkZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcblxyXG5pbXBvcnQgeyBMaW5lSXRlbSB9IGZyb20gJy4uL21vZGVscy9saW5lLWl0ZW0nO1xyXG5pbXBvcnQgeyBvcmRlclVybHMsIHNlcnZlclVSTCB9IGZyb20gXCIuLi9lbnZpcm9ubWVudFwiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRvck9yZGVyU2VydmljZSAge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZyA9IHNlcnZlclVSTDtcclxuICAgIHByaXZhdGUgb3JkZXJDcmVhdGVVUkwgPSBgJHt0aGlzLnNlcnZlclVybH0vb3JkZXJzL2Rpc3RyaWJ1dG9yLzEvYDtcclxuICAgIHByaXZhdGUgY2FydEl0ZW1VcmwgPSBgJHt0aGlzLnNlcnZlclVybH0vb3JkZXJzL2Rpc3RyaWJ1dG9yLzEvP3N0YXR1cz1pbl9jYXJ0YDtcclxuICAgIHB1YmxpYyBvcmRlckRldGFpbHM6IGFueTtcclxuICAgIHB1YmxpYyBsaW5lSXRlbXM6IExpbmVJdGVtW10gPSBbXTtcclxuICAgIGRpc3RyaWJ1dG9ySUQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgIGNvbnNvbGUubG9nKCdkaXN0cmlidXRvciBjYXJ0IHNlcnZpY2UgY29uc3RydWN0ZWQnKTtcclxuICAgICAgIHRoaXMuY29weUluQ2FydE9yZGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJbkNhcnRPcmRlcnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWRpbmcgaW4gY2FydCBvcmRlcnMnKTtcclxuICAgICAgICBsZXQgJGNhcnREZXRhaWxzID0gdGhpcy5nZXRDYXJ0UHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXMgbG9nIGFmdGVyIGNoZWNraW5nIGluIGNhcnQgJHtyZXN9IGFuZCBsZW5ndGggaXMgJHtyZXMubGVuZ3RofWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlckRldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXR1cE9yZGVycygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmcgb24gaW5pdCBpcyBwZXJmcm9taW5nIG5vdycpO1xyXG4gICAgICAgIGxldCBpc0NhcnRFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCAkY2FydERldGFpbHMgPSB0aGlzLmdldENhcnRQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWUgcmVzcG5zZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHJlcyBsb2cgYWZ0ZXIgY2hlY2tpbmcgaW4gY2FydCAke3Jlc31gKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgd2hlbiB0aGUgcmVzcG9uc2UgaXMgbm90IGVtcHR5IGFycmF5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDYXJ0RXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICBpZighaXNDYXJ0RXhpc3QpIHtcclxuICAgICAgICAgICAgLy8gY2FsbCBjcmVhdGUgZW1wdHkgb3JkZXIuXHJcbiAgICAgICAgICAgIGxldCAkbmV3Q2FydCA9IHRoaXMuY3JlYXRlRW1wdHlPcmRlcigpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgb3JkZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IHRoaXMub3JkZXJEZXRhaWxzLm9yZGVyZWRfcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAkY2FydERldGFpbHMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmRpc3RyaWJ1dG9ySUQgPSAxOyAvLyBnZXQgdGhpcyBmcm9tIHRoZSBsb2NhbCBzdHJvcmFnZS5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJ0UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGdldCBjYXJ0IHByb2R1Y3RzIG1ldGhvZC4nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNhcnRJdGVtVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRW1wdHlPcmRlcigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgZGlzdHJpYnV0b3JfaWQ6MSwgb3JkZXJlZF9wcm9kdWN0czogW119XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLm9yZGVyQ3JlYXRlVVJMLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwcm9kdWN0RGV0YWlscyA6IHRoaXMgY29udGFpbnMgcHJvZHVjdCBhbmQgdGhlIHF1bmF0aXR5LlxyXG4gICAgICogY2FsY3VsYXRlIHRoZSB0b3RhbCBwcmljZSBiYXNlZCBvbiB0aGUgcXVhbnRpdHkgYW5kIHRoZW4gc2VuZCB0byB1cGF0ZS5cclxuICAgICAqIHJldHVybnMgaHR0cCBvYnNlcnZhYmxlIHRvIHRoZSBjb21wbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9yZGVyKHByb2R1Y3REZXRhaWxzKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyB1cGRhdGUgb3JkZXInKTtcclxuICAgICAgICBjb25zdCB0b3RhbFByaWNlOiBudW1iZXIgPSBwcm9kdWN0RGV0YWlscy5wcm9kdWN0UHJpY2UgKiBwcm9kdWN0RGV0YWlscy5xdWFudGl0eTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdG90YWwgcHJpY2UgY2FsY3VsdGVkICR7dG90YWxQcmljZX1gKTtcclxuICAgICAgICBsZXQgbmV3TGluZUl0ZW06IExpbmVJdGVtID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiAxMCwgLy9wcm9kdWN0RGV0YWlscy5wcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvZHVjdERldGFpbHMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHRvdGFsUHJpY2U6IHRvdGFsUHJpY2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYGl0ZW0gYmVmb3JlIG5ldyBwdXNoICR7dGhpcy5saW5lSXRlbXMubGVuZ3RofWApO1xyXG4gICAgICAgIHRoaXMubGluZUl0ZW1zLnB1c2gobmV3TGluZUl0ZW0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpdGVtIGFmdGVyIG5ldyBwdXNoICR7dGhpcy5saW5lSXRlbXMubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjaGVjayBpZCBpcyByZWFsICR7dGhpcy5vcmRlckRldGFpbHMuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlVXJsID0gYCR7dGhpcy5zZXJ2ZXJVcmx9LyR7dGhpcy5vcmRlckRldGFpbHMuaWR9L2Rpc3RyaWJ1dG9yLyR7dGhpcy5kaXN0cmlidXRvcklEfWBcclxuICAgICAgICBsZXQgZGF0YSA9IHsgXHJcbiAgICAgICAgICAgIGRpc3RyaWJ1dG9yX2lkOjEsIFxyXG4gICAgICAgICAgICBvcmRlcmVkX3Byb2R1Y3RzOiB0aGlzLmxpbmVJdGVtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3JkZXJEZXRhaWxzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgY3JlYXRlIGVtcHR5IG9yZGVyLlxyXG4gICAgICAgICAgICBsZXQgJG5ld0NhcnQgPSB0aGlzLmNyZWF0ZUVtcHR5T3JkZXIoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgbmV3IG9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlckRldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2p1c3QgYmVmb3JlIHJldHVybmluZyB0aGUgZW1wdHkgb3JkZXIgY3JlYXRpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgIFxyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wdXQodXBkYXRlVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBsaW5lSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVJdGVtcyA9IHJlcy5saW5lSXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBvcmRlciBzdWJzY3JpdCBzdWNlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHJlc3BvbnNlIGlzICR7cmVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZUl0ZW1zID0gdGhpcy5vcmRlckRldGFpbHMub3JkZXJlZF9wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaW5lSXRlbXMocHJvZHVjdFRvQWRkOiBhbnkpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0VGhlQ2FydFByb2R1Y3RDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgIH0gXHJcbn0iXX0=