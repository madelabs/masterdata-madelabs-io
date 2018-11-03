import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemModule } from './create-item/create-item.module';
import { InventoryItemService } from './inventory-item.service';
import { InventoryItemsPageComponent } from './inventory-items-page/inventory-items-page.component';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../../common/app-common.module';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemSelectListModule } from './inventory-item-select-list/inventory-item-select-list.module';
import { InventoryItemDetailModule } from './inventory-item-detail/inventory-item-detail.module';
import { InventoryItemListModule } from './inventory-item-list/inventory-item-list.module';
import { ImportItemsPageComponent } from './import-items-page/import-items-page.component';
import { UnitOfMeasureModule } from './unit-of-measure/unit-of-measure.module';
import { AuthGuard } from '../../auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'inventory', component: InventoryItemsPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent, canActivate: [AuthGuard] },
  { path: 'inventory/items/create', component: InventoryItemsPageComponent },
  { path: 'inventory/items/import', component: InventoryItemsPageComponent },
  { path: 'inventory/items/:id', component: InventoryItemsPageComponent },
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CreateItemModule,
    InventoryItemDetailModule,
    InventoryItemListModule,
    InventoryItemSelectListModule,
    UnitOfMeasureModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    InventoryItemsPageComponent,
    ImportItemsPageComponent
  ],
  providers: [
    InventoryItemService
  ],
  exports: [
  ]
})
export class InventoryItemsModule { }
