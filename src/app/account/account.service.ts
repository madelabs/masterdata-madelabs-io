import { Injectable } from '@angular/core';
import { AppUser } from '../common/app-user';
import { LoginCredentials } from './login-form/login-credentials';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../common/error-handler.service';

@Injectable()
export class AccountService {

  private loginUrl: string = '${environment.api}/appuser/login';

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { }

  public isAuthenticated(): boolean {
    var auth_token = localStorage.getItem('auth_token');
    if (auth_token) {
      return true;
    }
    
    return false;
  }

  public login(credentials: LoginCredentials): Promise<any> {
    // call api to login
    return this.http.post<any>(this.loginUrl, credentials)
      .map(response => {
          if(response) {
              localStorage.setItem('auth_token', response.token);

              // todo: redirect to homepage
              return true;
          }
          else {
              return false;
          }
      })
      .toPromise()
      .catch(this.errorHandlerService.handle);
  }
}
