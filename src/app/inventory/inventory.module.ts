import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';
import { InventoryItemsModule } from './inventory-items/inventory-items.module';
import { InventoryLocationsModule } from './inventory-locations/inventory-locations.module';
import { InventoryStockModule } from './inventory-stock/inventory-stock.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    InventoryItemsModule,
    InventoryLocationsModule,
    InventoryStockModule    
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
  ]
})
export class InventoryModule { }
