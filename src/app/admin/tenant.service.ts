import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Tenant } from './tenant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private apiUrl = environment.api + '/tenants';
  
  constructor(private http: HttpClient) { }

  getSingle(): Promise<Tenant> {
    return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then(response => response as Tenant)
      .catch(this.handleError);
  }

  update(tenant: Tenant): Promise<Tenant> {
    return this.http.put(`${this.apiUrl}`, tenant)
      .toPromise()
      .then(response => response as Tenant)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
