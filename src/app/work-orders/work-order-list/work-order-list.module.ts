import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderListComponent } from './work-order-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WorkOrderListComponent
  ],
  exports: [
    WorkOrderListComponent
  ]
})
export class WorkOrderListModule { }
