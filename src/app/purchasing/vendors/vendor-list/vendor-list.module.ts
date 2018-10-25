import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VendorListComponent
  ],
  exports: [
    VendorListComponent
  ]
})
export class VendorListModule { }
