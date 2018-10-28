import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SelectListItem } from '../../common/select-list/select-list-item';
import { InventoryItem } from './inventory-item';
import { environment } from '../../../environments/environment';

@Injectable()
export class InventoryItemService {
  private apiUrl = environment.api + '/products';

  constructor(private http: Http) { }

  create(item: InventoryItem): Promise<InventoryItem> {
    return this.http.post(this.apiUrl, item)
      .toPromise()
      .then(response => response.json() as InventoryItem)
      .catch(this.handleError);
  }

  delete(item: InventoryItem): Promise<InventoryItem> {
    return this.http.delete(`${this.apiUrl}/${item.id}`)
      .toPromise()
      .then(response => response.json() as InventoryItem)
      .catch(this.handleError);
  }

  getCollection(filter: any): Promise<InventoryItem[]> {
    // todo: add data from filter
    
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as InventoryItem[])
      .catch(this.handleError);
  }

  getSelectListCollection(): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'Item 1'),
      new SelectListItem(2, 'Item 2'),
      new SelectListItem(3, 'Item 3'),
    ];

    return Promise.resolve(fakeData);
  }

  getSingle(id: string): Promise<InventoryItem> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as InventoryItem)
      .catch(this.handleError);

    // var fakeItem = new InventoryItemDetail(
    //   '1001', 'DC2016', 'Daisy Cutter high grain alcohol', 10, 5, 'DaisyCutter', '1',
    //   'Active', 'EA', 16, 15);

    // fakeItem.activity = [
    //   new AuditEntryListItem('Created', 'DaisyCutter was initially created.', new Date(), 'nbarger', 'Nicholas', 'Barger'),
    //   new AuditEntryListItem('Updated', 'DaisyCutter was updated.', new Date(), 'nbarger', 'Nicholas', 'Barger'),
    //   new AuditEntryListItem('Approved', 'DaisyCutter was approved.', new Date(), 'kbarger', 'Kaitlyn', 'Barger'),
    //   new AuditEntryListItem('Manufactured', 'DaisyCutter was manufactured through Work Order #2001.', new Date(), 'nbarger', 'Nicholas', 'Barger')
    // ];

    // return Promise.resolve(fakeItem);
  }

  update(item: InventoryItem): Promise<InventoryItem> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item)
      .toPromise()
      .then(response => response.json() as InventoryItem)
      .catch(this.handleError);
  }

  upsert(item: InventoryItem): Promise<InventoryItem> {
    if (!item.id) {
      return this.create(item);
    }
    else {
      return this.update(item);
    }
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
