import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';

import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { ChangeBillingFormComponent } from './change-billing-form/change-billing-form.component';
import { PastInvoicesListComponent } from './past-invoices-list/past-invoices-list.component';
import { InviteUserFormComponent } from './invite-user-form/invite-user-form.component';
import { UserService } from './user.service';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    SettingsPageComponent,
    UserListComponent,
    CompanyFormComponent,
    ChangeBillingFormComponent,
    PastInvoicesListComponent,
    InviteUserFormComponent
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
  