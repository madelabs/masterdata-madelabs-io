import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router) { }

  getAccessToken(): string {
    return JSON.parse(localStorage.getItem('auth_access_token'));
  }

  getIdToken(): string {
    return JSON.parse(localStorage.getItem('auth_id_token'));
  }

  getTokenExpiration(): Date {
    return new Date(JSON.parse(localStorage.getItem('auth_expires')));
  }

  getLoginUrl(): string {
    return environment.identity_url + '/login?redirect_uri=' + environment.redirect_uri + '&response_type=token&client_id=' + environment.client_id;
  }

  getUser(): any {
    const jwtHelper = new JwtHelperService();
    var user = jwtHelper.decodeToken(this.getIdToken());
    return user;
  }

  isLoggedIn(): boolean {
    var access_token = this.getAccessToken();
    if (!access_token) {
      return false;
    }

    var expires = this.getTokenExpiration();
    if (expires > new Date()) {
      return true;
    }
    else {
      return false;
    }
  }

  isAdmin(): boolean {
    var user = this.getUser();
    if (user != null && user['cognito:groups']) {
      return user['cognito:groups'].indexOf('sysadmin') > -1;
    }

    return false;
  }

  login(id_token: string, access_token: string, expires_in: number, token_type: string): void {
    
    // set expiration
    var expires = new Date();
    expires.setDate(expires.getSeconds() + expires_in);

    // store tokens
    localStorage.setItem('auth_id_token', JSON.stringify(id_token));
    localStorage.setItem('auth_access_token', JSON.stringify(access_token));
    localStorage.setItem('auth_token_type', JSON.stringify(token_type));
    localStorage.setItem('auth_expires', JSON.stringify(expires));

    // redirect to homepage
    this.router.navigate(['/']);
  }

  logout(): void {
    // clear tokens
    localStorage.removeItem('auth_id_token');
    localStorage.removeItem('auth_access_token');
    localStorage.removeItem('auth_token_type');
    localStorage.removeItem('auth_expires');

    // redirect to logout page
    const logoutUrl = `${environment.identity_url}/logout?client_id=${environment.client_id}&logout_uri=http://localhost:8080`;
    window.location.href = logoutUrl;
  }
}
