import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { SalesOrdersPageComponent } from './sales-orders/sales-orders-page/sales-orders-page.component';
import { SalesOrderListComponent } from './sales-orders/sales-order-list/sales-order-list.component';
import { CreateSalesOrderPageComponent } from './sales-orders/create-sales-order-page/create-sales-order-page.component';
import { SalesOrderDetailComponent } from './sales-orders/sales-order-detail/sales-order-detail.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'sales/customers', component: CustomersPageComponent, canActivate: [AuthGuard] },
  { path: 'sales/customers/:id', component: CustomersPageComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-orders', component: SalesOrdersPageComponent, canActivate: [AuthGuard] },
  { path: 'sales/sales-orders/:id', component: SalesOrdersPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    CustomersModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    SalesOrdersPageComponent, 
    SalesOrderListComponent, 
    CreateSalesOrderPageComponent, 
    SalesOrderDetailComponent],
  providers: [
  ],
  exports: [
  ]
})
export class SalesModule { }
