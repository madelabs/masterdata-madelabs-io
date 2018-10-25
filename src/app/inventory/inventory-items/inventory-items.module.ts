import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemService } from './inventory-item.service';
import { InventoryItemsPageComponent } from './inventory-items-page/inventory-items-page.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../../common/app-common.module';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemSelectListModule } from './inventory-item-select-list/inventory-item-select-list.module';
import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';
import { UnitOfMeasureSelectListComponent } from '../unit-of-measure-select-list/unit-of-measure-select-list.component';
import { UnitOfMeasureService } from '../unit-of-measure.service';
import { InventoryItemDetailModule } from './inventory-item-detail/inventory-item-detail.module';
import { InventoryItemListModule } from './inventory-item-list/inventory-item-list.module';
import { ImportItemsPageComponent } from './import-items-page/import-items-page.component';

const appRoutes: Routes = [
  { path: 'inventory', component: InventoryItemsPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent },
  { path: 'inventory/items/create', component: InventoryItemsPageComponent },
  { path: 'inventory/items/import', component: InventoryItemsPageComponent },
  { path: 'inventory/items/:id', component: InventoryItemsPageComponent },
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    InventoryItemDetailModule,
    InventoryItemListModule,
    InventoryItemSelectListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateItemFormComponent,
    CreateInventoryItemPageComponent,
    InventoryItemsPageComponent,
    UnitOfMeasureSelectListComponent,
    ImportItemsPageComponent
  ],
  providers: [
    InventoryItemService,
    UnitOfMeasureService
  ],
  exports: [
  ]
})
export class InventoryItemsModule { }
