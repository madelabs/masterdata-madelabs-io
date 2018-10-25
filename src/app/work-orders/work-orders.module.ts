import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderService } from './work-order.service';
import { WorkOrdersCalendarPageComponent } from './work-orders-calendar-page/work-orders-calendar-page.component';
import { WorkOrdersPageComponent } from './work-orders-page/work-orders-page.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderDetailModule } from './work-order-detail/work-order-detail.module';
import { WorkOrderListModule } from './work-order-list/work-order-list.module';
import { CreateWorkOrderPageModule } from './create-work-order-page/create-work-order-page.module';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppCommonModule } from '../common/app-common.module';

const appRoutes: Routes = [
  { path: 'work-orders', component: WorkOrdersPageComponent },
  { path: 'work-orders/calendar', component: WorkOrdersCalendarPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreateWorkOrderPageModule,
    FullCalendarModule,
    WorkOrderDetailModule,
    WorkOrderListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    WorkOrdersCalendarPageComponent,
    WorkOrdersPageComponent
  ],
  providers: [
    WorkOrderService
  ],
  exports: [
  ]
})
export class WorkOrdersModule { }
