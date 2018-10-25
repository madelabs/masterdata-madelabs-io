import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { InventoryItemService } from '../inventory-item.service';
import { UnitOfMeasureModule } from '../unit-of-measure/unit-of-measure.module';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    UnitOfMeasureModule
  ],
  declarations: [
    CreateItemFormComponent,
    CreateInventoryItemPageComponent
  ],
  providers: [
    InventoryItemService
  ],
  exports: [
    CreateInventoryItemPageComponent
  ]
})
export class CreateItemModule { }
