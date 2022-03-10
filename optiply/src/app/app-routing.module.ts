import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardRoutes } from "./dashboard";
import { PurchaseRoutes } from "./purchase";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/optiply-dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...PurchaseRoutes
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
