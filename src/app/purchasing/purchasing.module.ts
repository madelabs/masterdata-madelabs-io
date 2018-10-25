import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { VendorsModule } from './vendors/vendors.module';


@NgModule({
  imports: [
    CommonModule,
    PurchaseOrdersModule,
    VendorsModule
  ],
  declarations: [],
  providers: [
  ],
  exports: [
  ]
})
export class PurchasingModule { }
