import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CallbackPageComponent } from './callback-page/callback-page.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthInterceptorService } from './auth-interceptor.service';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CallbackPageComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthInterceptorService
  ]
})
export class AuthModule { }
