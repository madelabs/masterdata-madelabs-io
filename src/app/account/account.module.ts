import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AccountService } from './account.service';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';

const appRoutes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'signup', component: RegistrationPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LoginFormComponent, 
    LoginPageComponent,
    RegistrationFormComponent, 
    RegistrationPageComponent, 
    ProfilePageComponent, 
    ProfileFormComponent, ForgotPasswordPageComponent
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
