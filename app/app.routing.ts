
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { OrderComponent } from "./components/order/order.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";

const routes: Routes = [
    { path: "", redirectTo: "/invoice", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "order", component: OrderComponent },
    { path: "invoice", component: InvoiceComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }