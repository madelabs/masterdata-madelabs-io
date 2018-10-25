import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVendorPageComponent } from './create-vendor-page.component';
import { CreateVendorFormComponent } from '../create-vendor-form/create-vendor-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CreateVendorPageComponent,
    CreateVendorFormComponent
  ],
  exports: [
    CreateVendorPageComponent
  ]
})
export class CreateVendorPageModule { }
