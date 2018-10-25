import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../../common/app-common.module';
import { VendorService } from './vendor.service';
import { VendorsPageComponent } from './vendors-page/vendors-page.component';
import { VendorListModule } from './vendor-list/vendor-list.module';
import { PurchaseOrderListModule } from '../purchase-orders/purchase-order-list/purchase-order-list.module';
import { CreatePurchaseOrderPageModule } from '../purchase-orders/create-purchase-order-page/create-purchase-order-page.module';
import { PurchaseOrderDetailModule } from '../purchase-orders/purchase-order-detail/purchase-order-detail.module';
import { VendorDetailModule } from './vendor-detail/vendor-detail.module';
import { CreateVendorPageModule } from './create-vendor-page/create-vendor-page.module';

const appRoutes: Routes = [
  { path: 'purchasing/vendors', component: VendorsPageComponent },
  { path: 'purchasing/vendors/:id', component: VendorsPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CreatePurchaseOrderPageModule,
    CreateVendorPageModule,
    AppCommonModule,
    FormsModule,
    PurchaseOrderDetailModule,
    PurchaseOrderListModule,
    VendorDetailModule,
    VendorListModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    VendorsPageComponent
  ],
  providers: [
    VendorService
  ],
  exports: [
  ]
})
export class VendorsModule { }
