import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list.component';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [
    VendorListComponent
  ],
  exports: [
    VendorListComponent
  ]
})
export class VendorListModule { }
