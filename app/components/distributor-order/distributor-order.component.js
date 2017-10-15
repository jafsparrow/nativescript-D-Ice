"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datapull_service_1 = require("../../shared/services/datapull.service");
var DistributorOrderComponent = (function () {
    function DistributorOrderComponent(data) {
        this.data = data;
    }
    DistributorOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getProducts()
            .subscribe(function (res) {
            console.log(res);
            _this.products = res;
        });
    };
    DistributorOrderComponent.prototype.addNewProduct = function () {
        var _this = this;
        console.log('adding a new product');
        var products = [];
        // this.data.createOrder(products)
        //     .subscribe(res => {
        //         console.log('insider the sbuscribe block'); 
        //         console.log(res);
        //     })
        // this.data.createPlaceholderPOST()
        //     .subscribe(res => console.log(res))
        this.data.createOrder([])
            .subscribe(function (res) { return console.log(res); });
        this.data.getCartItems()
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.OrderID = res.order_id;
        });
    };
    DistributorOrderComponent = __decorate([
        core_1.Component({
            selector: "ns-dist-order",
            moduleId: module.id,
            templateUrl: "./distributor-order.component.html",
            styleUrls: ["./distributor-order.component.css"]
        }),
        __metadata("design:paramtypes", [datapull_service_1.DataPullService])
    ], DistributorOrderComponent);
    return DistributorOrderComponent;
}());
exports.DistributorOrderComponent = DistributorOrderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF5RTtBQVN6RTtJQUdJLG1DQUFvQixJQUFxQjtRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFpQjtJQUV6QyxDQUFDO0lBR0QsNENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7YUFDbEIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsaURBQWEsR0FBYjtRQUFBLGlCQXVCQztRQXRCRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGtDQUFrQztRQUVsQywwQkFBMEI7UUFDMUIsdURBQXVEO1FBQ3ZELDRCQUE0QjtRQUM1QixTQUFTO1FBRVQsb0NBQW9DO1FBQ3BDLDBDQUEwQztRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDcEIsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFHLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ25CLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDckIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQXZDUSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ25ELENBQUM7eUNBSzRCLGtDQUFlO09BSGhDLHlCQUF5QixDQTBDckM7SUFBRCxnQ0FBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVB1bGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhcHVsbC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRpc3Qtb3JkZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Rpc3RyaWJ1dG9yLW9yZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vZGlzdHJpYnV0b3Itb3JkZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dG9yT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJvZHVjdHM6IGFueTtcclxuICAgIE9yZGVySUQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogRGF0YVB1bGxTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0UHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdQcm9kdWN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgYSBuZXcgcHJvZHVjdCcpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YS5jcmVhdGVPcmRlcihwcm9kdWN0cylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGVyIHRoZSBzYnVzY3JpYmUgYmxvY2snKTsgXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLmRhdGEuY3JlYXRlUGxhY2Vob2xkZXJQT1NUKClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmNyZWF0ZU9yZGVyKFtdKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcz0+IGNvbnNvbGUubG9nKHJlcykpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5nZXRDYXJ0SXRlbXMoKVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5PcmRlcklEID0gcmVzLm9yZGVyX2lkO1xyXG4gICAgICAgICAgICB9KSAgXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==