import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemListComponent } from './inventory-item-list.component';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [
    InventoryItemListComponent    
  ],
  exports: [
    InventoryItemListComponent
  ]
})
export class InventoryItemListModule { }
