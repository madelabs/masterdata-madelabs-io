import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderDetailComponent } from './work-order-detail.component';
import { WorkOrderWorkflowComponent } from '../work-order-workflow/work-order-workflow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WorkOrderDetailComponent,
    WorkOrderWorkflowComponent
  ],
  exports: [
    WorkOrderDetailComponent
  ]
})
export class WorkOrderDetailModule { }
