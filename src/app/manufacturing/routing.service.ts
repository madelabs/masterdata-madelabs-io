import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Routing } from './routing';
import { RoutingDetail } from './routing-detail-page/routing-detail';
import { RoutingListItem } from './routing-list/routing-list-item';
import { RoutingSelectListItem } from './routing-select-list/routing-select-list-item';
import { RoutingStepListItem } from './routing-detail-page/routing-step-list-item';

@Injectable()
export class RoutingService {
  constructor(private http: Http) { }

  getCollection(filter): Promise<RoutingListItem[]> {
    var fakeData: RoutingListItem[] = [
      new RoutingListItem(1, 'ABC', 'Recipe #1', new Date(), new Date()),
      new RoutingListItem(1, 'DCA', 'Recipe #2', new Date(), new Date()),
      new RoutingListItem(1, 'XYZ', 'Recipe #3', new Date(), new Date()),
    ];

    return Promise.resolve(fakeData);
  }

  getSelectListCollection(): Promise<RoutingSelectListItem[]> {
    // todo: replace fake
    var fakeData: RoutingSelectListItem[] = [
      new RoutingSelectListItem(1, 'Routing 1'),
      new RoutingSelectListItem(2, 'Routing 2'),
      new RoutingSelectListItem(3, 'Routing 3'),
    ];

    return Promise.resolve(fakeData);
  }

  getSingle(id: number): Promise<RoutingDetail> {
    var fake: RoutingDetail = new RoutingDetail();
    fake.code = 'ABC';
    fake.name = 'Recipe #1';
    fake.description = 'Some good tasting beer.';
    fake.id = 1;
    fake.inventoryItem = 'DaisyCutter';
    fake.steps = [
      new RoutingStepListItem(1, 'Prepping'),
      new RoutingStepListItem(2, 'Mixing'),
      new RoutingStepListItem(3, 'Heating'),
      new RoutingStepListItem(4, 'Sterilization')
    ];

    return Promise.resolve(fake);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
