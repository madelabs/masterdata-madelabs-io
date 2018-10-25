import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderListComponent } from './purchase-order-list.component';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule
  ],
  declarations: [
    PurchaseOrderListComponent
  ],
  exports: [
    PurchaseOrderListComponent
  ]
})
export class PurchaseOrderListModule { }
