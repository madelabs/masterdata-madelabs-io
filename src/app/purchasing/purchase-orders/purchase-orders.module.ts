import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrdersPageComponent } from './purchase-orders-page/purchase-orders-page.component';
import { AppCommonModule } from '../../common/app-common.module';
import { PurchaseOrderListModule } from './purchase-order-list/purchase-order-list.module';
import { CreatePurchaseOrderPageModule } from './create-purchase-order-page/create-purchase-order-page.module';
import { PurchaseOrderDetailModule } from './purchase-order-detail/purchase-order-detail.module';

const appRoutes: Routes = [
  { path: 'purchasing/purchase-orders', component: PurchaseOrdersPageComponent },
  { path: 'purchasing/purchase-orders/:id', component: PurchaseOrdersPageComponent },
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreatePurchaseOrderPageModule,
    PurchaseOrderDetailModule,
    PurchaseOrderListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    PurchaseOrdersPageComponent
  ],
  providers: [
  ],
  exports: [
  ]
})
export class PurchaseOrdersModule { }
