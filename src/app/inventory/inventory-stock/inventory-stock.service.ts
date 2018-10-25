import { Injectable } from '@angular/core';
import { InventoryStockListItem } from './inventory-stock-list/inventory-stock-list-item';

@Injectable()
export class InventoryStockService {

  constructor() { }

  getCollection(filter): Promise<InventoryStockListItem[]> {
    var fakeStock: InventoryStockListItem[] = [
      new InventoryStockListItem(1, 'DaisyCutter', 12000, 'Approved'),
      new InventoryStockListItem(2, 'Pony', 300, 'Approved')
    ];
    return Promise.resolve(fakeStock);
  }
}
