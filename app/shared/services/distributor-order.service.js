"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/first");
var environment_1 = require("../environment");
var DistributorOrderService = (function () {
    function DistributorOrderService(http) {
        var _this = this;
        this.http = http;
        this.serverUrl = environment_1.serverURL;
        this.orderDetails = [];
        console.log('distributor cart service constructed');
        // read the distributor ID from the local Storage and assign to distributor ID.
        this.distributorID = 1;
        var $productsInCart = this.getProductsInTheCart();
        $productsInCart
            .first()
            .subscribe(function (res) {
            console.log(res);
            _this.orderDetails = res;
        });
    }
    // create a in cart search observable
    DistributorOrderService.prototype.getProductsInTheCart = function () {
        var headers = this.createRequestHeader();
        var cartItemsUrl = this.serverUrl + "/orders/distributor/" + this.distributorID + "/?status=in_cart";
        console.log('inside get cart products method.');
        return this.http.get(cartItemsUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // create new empty order observalbe.
    DistributorOrderService.prototype.createANewOrder = function (orderedProducts) {
        var orderCreateUrl = this.serverUrl + "/orders/distributor/" + this.distributorID + "/";
        var data = { distributor_id: this.distributorID, ordered_products: orderedProducts };
        console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        return this.http.post(orderCreateUrl, JSON.stringify(data), options)
            .map(function (res) { return res.json(); });
    };
    // create update order objservable.
    DistributorOrderService.prototype.updateProductsInCart = function (orderDetails) {
        var updateUrl = this.serverUrl + "/orders/" + orderDetails.id + "/distributor/" + this.distributorID + "/";
        // orderDetails.distributor_id = this.distributorID;
        var options = this.createRequestOptions();
        var data = {
            ordered_products: orderDetails.ordered_products
        };
        return this.http.put(updateUrl, JSON.stringify(data), options)
            .map(function (res) { return res.json(); });
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
    DistributorOrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DistributorOrderService);
    return DistributorOrderService;
}());
exports.DistributorOrderService = DistributorOrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3RyaWJ1dG9yLW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUQ7QUFFbkQsc0NBQXdFO0FBR3hFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsdUNBQXFDO0FBQ3JDLG1DQUFpQztBQUdqQyw4Q0FBcUQ7QUFJckQ7SUFLSSxpQ0FBb0IsSUFBVTtRQUE5QixpQkFXQztRQVhtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnRCLGNBQVMsR0FBVyx1QkFBUyxDQUFDO1FBQy9CLGlCQUFZLEdBQU0sRUFBRSxDQUFDO1FBSXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFbEQsZUFBZTthQUNWLEtBQUssRUFBRTthQUNQLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFBO1FBQUEsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxzREFBb0IsR0FBcEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFNLFlBQVksR0FBTSxJQUFJLENBQUMsU0FBUyw0QkFBdUIsSUFBSSxDQUFDLGFBQWEscUJBQWtCLENBQUM7UUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxxQ0FBcUM7SUFDckMsaURBQWUsR0FBZixVQUFnQixlQUEyQjtRQUN2QyxJQUFNLGNBQWMsR0FBTSxJQUFJLENBQUMsU0FBUyw0QkFBdUIsSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFDO1FBQ3JGLElBQUksSUFBSSxHQUFHLEVBQUUsY0FBYyxFQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQzthQUMzRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVMLG1DQUFtQztJQUNuQyxzREFBb0IsR0FBcEIsVUFBcUIsWUFBaUI7UUFDbEMsSUFBTSxTQUFTLEdBQU0sSUFBSSxDQUFDLFNBQVMsZ0JBQVcsWUFBWSxDQUFDLEVBQUUscUJBQWdCLElBQUksQ0FBQyxhQUFhLE1BQUcsQ0FBQTtRQUNsRyxvREFBb0Q7UUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsSUFBSSxJQUFJLEdBQUc7WUFDUCxnQkFBZ0IsRUFBRyxZQUFZLENBQUMsZ0JBQWdCO1NBQ25ELENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBR0cscURBQW1CLEdBQTNCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxzREFBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLHVDQUF1QztRQUN2QywyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFuRVEsdUJBQXVCO1FBRG5DLGlCQUFVLEVBQUU7eUNBTWlCLFdBQUk7T0FMckIsdUJBQXVCLENBcUUvQjtJQUFELDhCQUFDO0NBQUEsQUFyRUwsSUFxRUs7QUFyRVEsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2xhbmctZmFjYWRlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpcnN0JztcclxuXHJcbmltcG9ydCB7IExpbmVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2xpbmUtaXRlbSc7XHJcbmltcG9ydCB7IG9yZGVyVXJscywgc2VydmVyVVJMIH0gZnJvbSBcIi4uL2Vudmlyb25tZW50XCJcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRvck9yZGVyU2VydmljZSAge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmw6IHN0cmluZyA9IHNlcnZlclVSTDtcclxuICAgIHB1YmxpYyBvcmRlckRldGFpbHM6IGFueT1bXTtcclxuICAgIHByaXZhdGUgZGlzdHJpYnV0b3JJRDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkaXN0cmlidXRvciBjYXJ0IHNlcnZpY2UgY29uc3RydWN0ZWQnKTtcclxuICAgICAgICAvLyByZWFkIHRoZSBkaXN0cmlidXRvciBJRCBmcm9tIHRoZSBsb2NhbCBTdG9yYWdlIGFuZCBhc3NpZ24gdG8gZGlzdHJpYnV0b3IgSUQuXHJcbiAgICAgICAgdGhpcy5kaXN0cmlidXRvcklEID0gMTtcclxuICAgICAgICBsZXQgJHByb2R1Y3RzSW5DYXJ0ID0gdGhpcy5nZXRQcm9kdWN0c0luVGhlQ2FydCgpO1xyXG5cclxuICAgICAgICAkcHJvZHVjdHNJbkNhcnRcclxuICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJEZXRhaWxzID0gcmVzfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBpbiBjYXJ0IHNlYXJjaCBvYnNlcnZhYmxlXHJcbiAgICBnZXRQcm9kdWN0c0luVGhlQ2FydCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zVXJsID0gYCR7dGhpcy5zZXJ2ZXJVcmx9L29yZGVycy9kaXN0cmlidXRvci8ke3RoaXMuZGlzdHJpYnV0b3JJRH0vP3N0YXR1cz1pbl9jYXJ0YDtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGdldCBjYXJ0IHByb2R1Y3RzIG1ldGhvZC4nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChjYXJ0SXRlbXNVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAvLyBjcmVhdGUgbmV3IGVtcHR5IG9yZGVyIG9ic2VydmFsYmUuXHJcbiAgICBjcmVhdGVBTmV3T3JkZXIob3JkZXJlZFByb2R1Y3RzOiBBcnJheTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBvcmRlckNyZWF0ZVVybCA9IGAke3RoaXMuc2VydmVyVXJsfS9vcmRlcnMvZGlzdHJpYnV0b3IvJHt0aGlzLmRpc3RyaWJ1dG9ySUR9L2A7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IGRpc3RyaWJ1dG9yX2lkOnRoaXMuZGlzdHJpYnV0b3JJRCwgb3JkZXJlZF9wcm9kdWN0czogb3JkZXJlZFByb2R1Y3RzIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChvcmRlckNyZWF0ZVVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIHVwZGF0ZSBvcmRlciBvYmpzZXJ2YWJsZS5cclxuICAgIHVwZGF0ZVByb2R1Y3RzSW5DYXJ0KG9yZGVyRGV0YWlsczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVVcmwgPSBgJHt0aGlzLnNlcnZlclVybH0vb3JkZXJzLyR7b3JkZXJEZXRhaWxzLmlkfS9kaXN0cmlidXRvci8ke3RoaXMuZGlzdHJpYnV0b3JJRH0vYFxyXG4gICAgICAgIC8vIG9yZGVyRGV0YWlscy5kaXN0cmlidXRvcl9pZCA9IHRoaXMuZGlzdHJpYnV0b3JJRDtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgb3JkZXJlZF9wcm9kdWN0czogIG9yZGVyRGV0YWlscy5vcmRlcmVkX3Byb2R1Y3RzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cGRhdGVVcmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIH0iXX0=