import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SelectListItem } from '../common/select-list/select-list-item';

@Injectable()
export class StateService {
  constructor(private http: Http) { }

  getSelectListCollection(countryId: number): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'Florida'),
      new SelectListItem(2, 'Illinois'),
      new SelectListItem(3, 'Alabama'),
    ];

    return Promise.resolve(fakeData);
  }
}
