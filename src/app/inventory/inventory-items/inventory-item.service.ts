import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuditEntryListItem } from '../../common/audit-list/audit-entry-list-item';
import { InventoryItemDetail } from './inventory-item-detail/inventory-item-detail';
import { InventoryItemListItem } from './inventory-item-list/inventory-item-list-item';
import { SelectListItem } from '../../common/select-list/select-list-item';

@Injectable()
export class InventoryItemService {
  private apiUrl = 'http://localhost:5000/api/inventoryitem';

  constructor(private http: Http) { }

  getCollection(filter): Promise<InventoryItemListItem[]> {
    // todo: add data from filter
    
    // return this.http.get(this.apiUrl)
    //   .toPromise()
    //   .then(response => response.json() as InventoryItem[])
    //   .catch(this.handleError);

    var fakeItems: InventoryItemListItem[] = [
      new InventoryItemListItem(1, 'DaisyCutter', 'DC2016', 'Active'),
      new InventoryItemListItem(2, 'Vallejo', 'V2017', 'Active')
    ];
    return Promise.resolve(fakeItems);
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

  getSingle(id: number): Promise<InventoryItemDetail> {
    // return this.http.get(this.apiUrl + '/' + id)
    //   .toPromise()
    //   .then(response => response.json() as InventoryItem)
    //   .catch(this.handleError);

    var fakeItem = new InventoryItemDetail(
      '1001', 'DC2016', 'Daisy Cutter high grain alcohol', 10, 5, 'DaisyCutter', '1',
      'Active', 'EA', 16, 15);

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
