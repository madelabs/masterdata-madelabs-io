import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Tenant } from './tenant';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private apiUrl = environment.api + '/tenants';
  
  constructor(private http: Http) { }

  getSingle(): Promise<Tenant> {
    return this.http.get(`${this.apiUrl}/mine`)
      .toPromise()
      .then(response => response.json() as Tenant)
      .catch(this.handleError);
  }

  update(tenant: Tenant): Promise<Tenant> {
    return this.http.put(`${this.apiUrl}/mine`, tenant)
      .toPromise()
      .then(response => response.json() as Tenant)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
