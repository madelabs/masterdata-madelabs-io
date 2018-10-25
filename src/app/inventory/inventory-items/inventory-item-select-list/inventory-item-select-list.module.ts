import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemSelectListComponent } from './inventory-item-select-list.component';
import { AppCommonModule } from '../../../common/app-common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    InventoryItemSelectListComponent
  ],
  exports: [
    InventoryItemSelectListComponent
  ]
})
export class InventoryItemSelectListModule { }
