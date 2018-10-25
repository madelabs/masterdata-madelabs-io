import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuditListComponent } from './audit-list/audit-list.component';
import { CountrySelectListComponent } from './country-select-list/country-select-list.component';
import { CountryService } from './country.service';
import { NavigationComponent } from './navigation/navigation.component'
import { SelectListComponent } from './select-list/select-list.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { StateService } from './state.service';

import { StateSelectListComponent } from './state-select-list/state-select-list.component';
import { GridComponent } from './grid/grid.component';
import { MediaListComponent } from './media-list/media-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    SelectListComponent,
    SidePanelComponent,
    AuditListComponent,
    CountrySelectListComponent,
    StateSelectListComponent,
    GridComponent,
    MediaListComponent
  ],
  exports: [
    AuditListComponent,
    GridComponent,
    NavigationComponent,
    SelectListComponent,
    SidePanelComponent,
    CountrySelectListComponent,
    StateSelectListComponent,
    MediaListComponent
  ],
  providers: [
    CountryService,
    StateService
  ]
})
export class AppCommonModule { }
