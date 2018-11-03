import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryStockService } from './inventory-stock.service';
import { StockPageComponent } from './stock-page/stock-page.component';
import { InventoryStockDetailComponent } from './inventory-stock-detail/inventory-stock-detail.component';
import { InventoryStockListComponent } from './inventory-stock-list/inventory-stock-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../../common/app-common.module';
import { AuthGuard } from '../../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'inventory/stock', component: StockPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    InventoryStockListComponent,
    InventoryStockDetailComponent,
    StockPageComponent
  ],
  providers: [
    InventoryStockService
  ],
  exports: [
    InventoryStockDetailComponent,
    InventoryStockListComponent
  ]
})
export class InventoryStockModule { }
