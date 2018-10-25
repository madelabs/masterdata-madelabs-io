import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';
import { RoutingListPageComponent } from './routing-list-page/routing-list-page.component';
import { RoutingService } from './routing.service';
import { RoutingDetailPageModule } from './routing-detail-page/routing-detail-page.module';
import { RoutingListModule } from './routing-list/routing-list.module';
import { CreateRoutingPageModule } from './create-routing-page/create-routing-page.module';
import { RoutingSelectListModule } from './routing-select-list/routing-select-list.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreateRoutingPageModule,
    RoutingDetailPageModule,
    RoutingListModule,
    RoutingSelectListModule
  ],
  declarations: [
    RoutingListPageComponent
  ],
  providers: [
    RoutingService
  ]
})
export class ManufacturingModule { }
