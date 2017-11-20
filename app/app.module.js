"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-drop-down/angular");
var angular_2 = require("nativescript-pro-ui/listview/angular");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var order_component_1 = require("./components/order/order.component");
var invoice_component_1 = require("./components/invoice/invoice.component");
var distributor_order_component_1 = require("./components/distributor-order/distributor-order.component");
var product_modal_component_1 = require("./shared/modals/product-select/product-modal.component");
var product_service_1 = require("./shared/services/product.service");
var checkout_services_1 = require("./shared/services/checkout.services");
var datapull_service_1 = require("./shared/services/datapull.service");
var distributor_order_service_1 = require("./shared/services/distributor-order.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            entryComponents: [product_modal_component_1.ProductQuantityModalComponent],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_2.NativeScriptUIListViewModule,
                angular_1.DropDownModule,
                http_1.NativeScriptHttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                order_component_1.OrderComponent,
                invoice_component_1.InvoiceComponent,
                product_modal_component_1.ProductQuantityModalComponent,
                distributor_order_component_1.DistributorOrderComponent
            ],
            providers: [
                item_service_1.ItemService,
                product_service_1.ProductService,
                modal_dialog_1.ModalDialogService,
                checkout_services_1.CheckOutService,
                datapull_service_1.DataPullService,
                distributor_order_service_1.DistributorOrderService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDBEQUFnRTtBQUNoRSxnRUFBb0Y7QUFDcEYsa0VBQXVFO0FBRXZFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0VBQW9FO0FBQ3BFLDRFQUEwRTtBQUMxRSwwR0FBdUc7QUFFdkcsa0dBQXVHO0FBRXZHLHFFQUFtRTtBQUNuRSx5RUFBc0U7QUFDdEUsdUVBQXFFO0FBQ3JFLHlGQUFzRjtBQUN0RiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFzQ25FO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBDckIsZUFBUSxDQUFDO1lBQ04sZUFBZSxFQUFFLENBQUMsdURBQTZCLENBQUM7WUFDaEQsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHNDQUE0QjtnQkFDNUIsd0JBQWM7Z0JBQ2QsNkJBQXNCO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQix1REFBNkI7Z0JBQzdCLHVEQUF5QjthQUM1QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCxpQ0FBa0I7Z0JBQ2xCLG1DQUFlO2dCQUNmLGtDQUFlO2dCQUNmLG1EQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEludm9pY2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERpc3RyaWJ1dG9yT3JkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Rpc3RyaWJ1dG9yLW9yZGVyL2Rpc3RyaWJ1dG9yLW9yZGVyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9tb2RhbHMvcHJvZHVjdC1zZWxlY3QvcHJvZHVjdC1tb2RhbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGVja091dFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvY2hlY2tvdXQuc2VydmljZXNcIjtcbmltcG9ydCB7IERhdGFQdWxsU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9kYXRhcHVsbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEaXN0cmlidXRvck9yZGVyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9kaXN0cmlidXRvci1vcmRlci5zZXJ2aWNlXCI7XG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgT3JkZXJDb21wb25lbnQsXG4gICAgICAgIEludm9pY2VDb21wb25lbnQsXG4gICAgICAgIFByb2R1Y3RRdWFudGl0eU1vZGFsQ29tcG9uZW50LFxuICAgICAgICBEaXN0cmlidXRvck9yZGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIENoZWNrT3V0U2VydmljZSxcbiAgICAgICAgRGF0YVB1bGxTZXJ2aWNlLFxuICAgICAgICBEaXN0cmlidXRvck9yZGVyU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==