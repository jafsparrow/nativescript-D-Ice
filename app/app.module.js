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
                datapull_service_1.DataPullService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDBEQUFnRTtBQUNoRSxnRUFBb0Y7QUFDcEYsa0VBQXVFO0FBRXZFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0VBQW9FO0FBQ3BFLDRFQUEwRTtBQUMxRSwwR0FBdUc7QUFFdkcsa0dBQXVHO0FBRXZHLHFFQUFtRTtBQUNuRSx5RUFBc0U7QUFDdEUsdUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLGtEQUFtRTtBQXFDbkU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBbkNyQixlQUFRLENBQUM7WUFDTixlQUFlLEVBQUUsQ0FBQyx1REFBNkIsQ0FBQztZQUNoRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsc0NBQTRCO2dCQUM1Qix3QkFBYztnQkFDZCw2QkFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQixnQ0FBYztnQkFDZCxvQ0FBZ0I7Z0JBQ2hCLHVEQUE2QjtnQkFDN0IsdURBQXlCO2FBQzVCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLGdDQUFjO2dCQUNkLGlDQUFrQjtnQkFDbEIsbUNBQWU7Z0JBQ2Ysa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnZvaWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEaXN0cmlidXRvck9yZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kaXN0cmlidXRvci1vcmRlci9kaXN0cmlidXRvci1vcmRlci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvbW9kYWxzL3Byb2R1Y3Qtc2VsZWN0L3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hlY2tPdXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBEYXRhUHVsbFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZGF0YXB1bGwuc2VydmljZVwiO1xuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFF1YW50aXR5TW9kYWxDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIE9yZGVyQ29tcG9uZW50LFxuICAgICAgICBJbnZvaWNlQ29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0UXVhbnRpdHlNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRGlzdHJpYnV0b3JPcmRlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBDaGVja091dFNlcnZpY2UsXG4gICAgICAgIERhdGFQdWxsU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==