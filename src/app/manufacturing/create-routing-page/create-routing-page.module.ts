import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingPageComponent } from './create-routing-page.component';
import { CreateRoutingFormComponent } from '../create-routing-form/create-routing-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreateRoutingFormComponent,
    CreateRoutingPageComponent
  ],
  exports: [
    CreateRoutingPageComponent
  ]
})
export class CreateRoutingPageModule { }
