import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderDetailComponent } from './purchase-order-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PurchaseOrderDetailComponent
  ],
  exports: [
    PurchaseOrderDetailComponent
  ]
})
export class PurchaseOrderDetailModule { }
