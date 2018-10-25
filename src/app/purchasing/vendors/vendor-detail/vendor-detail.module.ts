import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDetailComponent } from './vendor-detail.component';
import { AppCommonModule } from '../../../common/app-common.module';
import { CreatePurchaseOrderPageModule } from '../../purchase-orders/create-purchase-order-page/create-purchase-order-page.module';
import { PurchaseOrderDetailModule } from '../../purchase-orders/purchase-order-detail/purchase-order-detail.module';
import { PurchaseOrderListModule } from '../../purchase-orders/purchase-order-list/purchase-order-list.module';
import { InventoryItemListModule } from '../../../inventory/inventory-items/inventory-item-list/inventory-item-list.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreatePurchaseOrderPageModule,
    InventoryItemListModule,
    PurchaseOrderDetailModule,
    PurchaseOrderListModule
  ],
  declarations: [
    VendorDetailComponent
  ],
  exports: [
    VendorDetailComponent
  ]
})
export class VendorDetailModule { }
