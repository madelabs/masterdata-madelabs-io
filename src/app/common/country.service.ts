import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SelectListItem } from '../common/select-list/select-list-item';

@Injectable()
export class CountryService {
  constructor(private http: Http) { }

  getSelectListCollection(): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'USA'),
      new SelectListItem(2, 'Spain'),
      new SelectListItem(3, 'England'),
    ];

    return Promise.resolve(fakeData);
  }
}
