import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingListComponent } from './routing-list.component';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule
  ],
  declarations: [
    RoutingListComponent
  ],
  exports: [
    RoutingListComponent
  ]
})
export class RoutingListModule { }
