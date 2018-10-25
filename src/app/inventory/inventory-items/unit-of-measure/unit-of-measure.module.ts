import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnitOfMeasureSelectListComponent } from './unit-of-measure-select-list/unit-of-measure-select-list.component';
import { UnitOfMeasureService } from './unit-of-measure.service';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule
  ],
  declarations: [
    UnitOfMeasureSelectListComponent
  ],
  providers: [
    UnitOfMeasureService
  ],
  exports: [
    UnitOfMeasureSelectListComponent
  ]
})
export class UnitOfMeasureModule { }
