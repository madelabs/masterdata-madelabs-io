import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SelectListItem } from '../../common/select-list/select-list-item';
import { InventoryItem } from './inventory-item';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventoryItemService {
  private apiUrl = environment.api + '/products';

  constructor(private http: HttpClient) { }

  create(item: InventoryItem): Promise<InventoryItem> {
    return this.http.post(this.apiUrl, item)
      .toPromise()
      .then(response => response as InventoryItem)
      .catch(this.handleError);
  }

  delete(item: InventoryItem): Promise<InventoryItem> {
    return this.http.delete(`${this.apiUrl}/${item.id}`)
      .toPromise()
      .then(response => response as InventoryItem)
      .catch(this.handleError);
  }

  getCollection(filter: any): Promise<InventoryItem[]> {
    // todo: add data from filter
    
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response as InventoryItem[])
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
      .then(response => response as InventoryItem)
      .catch(this.handleError);
  }

  update(item: InventoryItem): Promise<InventoryItem> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item)
      .toPromise()
      .then(response => response as InventoryItem)
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
