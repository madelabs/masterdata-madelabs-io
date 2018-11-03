import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService : AuthService, 
    private location: Location,
    private router : Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this.enforceLoggedInUser();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this.enforceLoggedInUser();
  }

  private enforceLoggedInUser(): boolean {
    // check logged in status
    if(this.authService.isLoggedIn()) {
      return true;
    }
    else {
      window.location.href = this.authService.getLoginUrl();
    }
  }
}
