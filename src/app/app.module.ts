import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppCommonModule } from './common/app-common.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { InventoryModule } from './inventory/inventory.module';
import { ManufacturingModule } from './manufacturing/manufacturing.module';
import { PurchasingModule } from './purchasing/purchasing.module';
import { SalesModule } from './sales/sales.module';
import { WorkOrdersModule } from './work-orders/work-orders.module';

import { AppComponent } from './app.component';

import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { MyWorkPageComponent } from './dashboard/my-work-page/my-work-page.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
  { path: 'my-work', component: MyWorkPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    AccountModule,
    AdminModule,
    AppCommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    InventoryModule,
    ManufacturingModule,
    PurchasingModule,
    SalesModule,
    WorkOrdersModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    DashboardPageComponent,
    MyWorkPageComponent,
    NotFoundPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
