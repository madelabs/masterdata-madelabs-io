import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AuditListComponent } from './audit-list/audit-list.component';
import { CountrySelectListComponent } from './country-select-list/country-select-list.component';
import { CountryService } from './country-select-list/country.service';
import { NavigationComponent } from './navigation/navigation.component'
import { SelectListComponent } from './select-list/select-list.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { UsStateService } from './state-select-list/us-state.service';

import { StateSelectListComponent } from './state-select-list/state-select-list.component';
import { GridComponent } from './grid/grid.component';
import { MediaListComponent } from './media-list/media-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        closeButton: true
      }
    )
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
    MediaListComponent,
    ToastrModule
  ],
  providers: [
    CountryService,
    UsStateService
  ]
})
export class AppCommonModule { }
