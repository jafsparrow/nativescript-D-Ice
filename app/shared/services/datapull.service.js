"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var DataPullService = (function () {
    function DataPullService(http) {
        this.http = http;
        this.serverUrl = "http://34.211.173.234/product/manufacturer/1/?available=true";
        this.orderCreateURL = "http://34.211.173.234/orders/distributor/1/";
        this.incartURL = "http://34.211.173.234/orders/distributor/1/?status=in_cart";
        this.placeholderURL = "http://jsonplaceholder.typicode.com/posts";
        this.placeHolderData = {
            "userId": 1,
            "title": "test hello rovident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
    }
    DataPullService.prototype.getProducts = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataPullService.prototype.getResponseInfo = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .do(function (res) { return res; });
    };
    DataPullService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    };
    DataPullService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data: data }, options)
            .map(function (res) { return res.json(); });
    };
    DataPullService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    DataPullService.prototype.createOrder = function (products) {
        var data = { distributor_id: 1, ordered_products: products };
        console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        return this.http.post(this.orderCreateURL, JSON.stringify(data), options);
    };
    DataPullService.prototype.createPlaceholderPOST = function () {
        return this.http.post(this.placeholderURL, this.placeHolderData);
    };
    DataPullService.prototype.getCartItems = function () {
        return this.http.get(this.incartURL);
    };
    DataPullService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataPullService);
    return DataPullService;
}());
exports.DataPullService = DataPullService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXB1bGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFwdWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdFO0FBR3hFLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFHOUI7SUFlUSx5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFkMUIsY0FBUyxHQUFHLDhEQUE4RCxDQUFDO1FBRTNFLG1CQUFjLEdBQUcsNkNBQTZDLENBQUM7UUFDdkUsY0FBUyxHQUFHLDREQUE0RCxDQUFDO1FBQ3pFLG1CQUFjLEdBQUcsMkNBQTJDLENBQUM7UUFFN0Qsb0JBQWUsR0FBRztZQUNkLFFBQVEsRUFBRSxDQUFDO1lBRVgsT0FBTyxFQUFFLDZEQUE2RDtZQUN0RSxNQUFNLEVBQUUsbUtBQW1LO1NBQzVLLENBQUE7SUFHbUMsQ0FBQztJQUVuQyxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDckQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDckQsRUFBRSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyw2Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLDhDQUFvQixHQUE1QjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsdUNBQXVDO1FBQ3ZDLDJDQUEyQztRQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxRQUFlO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsY0FBYyxFQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUMsQ0FBQTtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRzdFLENBQUM7SUFHRCwrQ0FBcUIsR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUF4RUksZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQWdCcUIsV0FBSTtPQWZ6QixlQUFlLENBeUUzQjtJQUFELHNCQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFQdWxsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovLzM0LjIxMS4xNzMuMjM0L3Byb2R1Y3QvbWFudWZhY3R1cmVyLzEvP2F2YWlsYWJsZT10cnVlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmRlckNyZWF0ZVVSTCA9IFwiaHR0cDovLzM0LjIxMS4xNzMuMjM0L29yZGVycy9kaXN0cmlidXRvci8xL1wiO1xyXG4gICAgaW5jYXJ0VVJMID0gXCJodHRwOi8vMzQuMjExLjE3My4yMzQvb3JkZXJzL2Rpc3RyaWJ1dG9yLzEvP3N0YXR1cz1pbl9jYXJ0XCI7XHJcbiAgICBwbGFjZWhvbGRlclVSTCA9IFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIjtcclxuXHJcbiAgICBwbGFjZUhvbGRlckRhdGEgPSB7XHJcbiAgICAgICAgXCJ1c2VySWRcIjogMSxcclxuICAgICAgICBcclxuICAgICAgICBcInRpdGxlXCI6IFwidGVzdCBoZWxsbyByb3ZpZGVudCBvY2NhZWNhdGkgZXhjZXB0dXJpIG9wdGlvIHJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICBcImJvZHlcIjogXCJxdWlhIGV0IHN1c2NpcGl0XFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXFxucmVwcmVoZW5kZXJpdCBtb2xlc3RpYWUgdXQgdXQgcXVhcyB0b3RhbVxcbm5vc3RydW0gcmVydW0gZXN0IGF1dGVtIHN1bnQgcmVtIGV2ZW5pZXQgYXJjaGl0ZWN0b1wiXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgXHJcbiAgICAgICAgZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldFJlc3BvbnNlSW5mbygpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAgICAgLmRvKHJlcyA9PiByZXMpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRoS2V5XCIsIFwibXkta2V5XCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcG9zdERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwsIHsgZGF0YSB9LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aFRva2VuXCIsIFwibXktdG9rZW5cIik7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVPcmRlcihwcm9kdWN0czogYW55W10pIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7IGRpc3RyaWJ1dG9yX2lkOjEsIG9yZGVyZWRfcHJvZHVjdHM6IHByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5vcmRlckNyZWF0ZVVSTCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY3JlYXRlUGxhY2Vob2xkZXJQT1NUKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5wbGFjZWhvbGRlclVSTCwgdGhpcy5wbGFjZUhvbGRlckRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0Q2FydEl0ZW1zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmluY2FydFVSTClcclxuICAgICAgICB9XHJcbn0iXX0=