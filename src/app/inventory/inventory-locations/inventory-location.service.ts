import { Injectable } from '@angular/core';
import { InventoryLocationListItem } from './inventory-location-list/inventory-location-list-item';

@Injectable()
export class InventoryLocationService {

  constructor() { }

  getCollection(filter): Promise<InventoryLocationListItem[]> {
    var fakeLocations: InventoryLocationListItem[] = [
      new InventoryLocationListItem(1, 'Warehouse A', 'Active', 
        [
          new InventoryLocationListItem(3, 'East Hangar', 'Active', [
            new InventoryLocationListItem(5, 'Room 101', 'Active', [
              new InventoryLocationListItem(6, 'Aisle 4', 'Active', [
                new InventoryLocationListItem(7, 'Bin 13', 'Active')
              ])
            ])
          ]),
          new InventoryLocationListItem(4, 'West Hangar', 'Active')
        ]),
      new InventoryLocationListItem(2, 'Warehouse B', 'Active')
    ];
    return Promise.resolve(fakeLocations);
  }
}
