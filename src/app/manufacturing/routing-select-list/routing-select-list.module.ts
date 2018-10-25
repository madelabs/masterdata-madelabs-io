import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingSelectListComponent } from './routing-select-list.component';
import { AppCommonModule } from '../../common/app-common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    RoutingSelectListComponent
  ],
  exports: [
    RoutingSelectListComponent
  ]
})
export class RoutingSelectListModule { }
