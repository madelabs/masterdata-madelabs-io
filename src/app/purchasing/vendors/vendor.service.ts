import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuditEntryListItem } from '../../common/audit-list/audit-entry-list-item';
import { SelectListItem } from '../../common/select-list/select-list-item';
import { VendorListItem } from './vendor-list/vendor-list-item';
import { VendorDetail } from './vendor-detail/vendor-detail';

@Injectable()
export class VendorService {
  private apiUrl = 'http://localhost:5000/api/vendors';

  constructor(private http: Http) { }

  getCollection(filter): Promise<VendorListItem[]> {
    // todo: add data from filter
    
    // return this.http.get(this.apiUrl)
    //   .toPromise()
    //   .then(response => response.json() as VendorListItem[])
    //   .catch(this.handleError);

    var fakeItems: VendorListItem[] = [
      new VendorListItem(1, 'A', 'Acme', 'Active'),
      new VendorListItem(2, 'B', 'Betaworks', 'Active')
    ];
    return Promise.resolve(fakeItems);
  }

  getSelectListCollection(): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'Acme'),
      new SelectListItem(2, 'Betaworks')
    ];

    return Promise.resolve(fakeData);
  }

  getSingle(id: number): Promise<VendorDetail> {
    // return this.http.get(this.apiUrl + '/' + id)
    //   .toPromise()
    //   .then(response => response.json() as InventoryItem)
    //   .catch(this.handleError);

    var fakeItem = new VendorDetail('1', 'Acme', 'This vendor sometimes runs 1-2 days later on arrivals.', 'Active');

    fakeItem.activity = [
      new AuditEntryListItem('Created', 'DaisyCutter was initially created.', new Date(), 'nbarger', 'Nicholas', 'Barger'),
      new AuditEntryListItem('Updated', 'DaisyCutter was updated.', new Date(), 'nbarger', 'Nicholas', 'Barger'),
      new AuditEntryListItem('Approved', 'DaisyCutter was approved.', new Date(), 'kbarger', 'Kaitlyn', 'Barger'),
      new AuditEntryListItem('Manufactured', 'DaisyCutter was manufactured through Work Order #2001.', new Date(), 'nbarger', 'Nicholas', 'Barger')
    ];

    return Promise.resolve(fakeItem);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
