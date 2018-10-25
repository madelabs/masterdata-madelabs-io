import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemListComponent } from './inventory-item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InventoryItemListComponent    
  ],
  exports: [
    InventoryItemListComponent
  ]
})
export class InventoryItemListModule { }
