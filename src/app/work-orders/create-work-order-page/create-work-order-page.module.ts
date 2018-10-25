import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkOrderFormComponent } from '../create-work-order-form/create-work-order-form.component';
import { CreateWorkOrderPageComponent } from './create-work-order-page.component';
import { FormsModule } from '@angular/forms';
import { RoutingSelectListModule } from '../../manufacturing/routing-select-list/routing-select-list.module';
import { WorkOrderService } from '../work-order.service';
import { InventoryItemSelectListModule } from '../../inventory/inventory-items/inventory-item-select-list/inventory-item-select-list.module';

const appRoutes: Routes = [
  { path: 'work-orders/create', component: CreateWorkOrderPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventoryItemSelectListModule,
    RoutingSelectListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateWorkOrderFormComponent,
    CreateWorkOrderPageComponent
  ],
  providers: [
    WorkOrderService
  ],
  exports: [
    CreateWorkOrderPageComponent
  ]
})
export class CreateWorkOrderPageModule { }
