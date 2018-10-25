import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SelectListItem } from '../common/select-list/select-list-item';

@Injectable()
export class UnitOfMeasureService {
  constructor(private http: Http) { }

  getSelectListCollection(): Promise<SelectListItem[]> {
    // todo: replace fake
    var fakeData: SelectListItem[] = [
      new SelectListItem(1, 'Each'),
      new SelectListItem(2, 'Box'),
      new SelectListItem(3, 'Ounce'),
    ];

    return Promise.resolve(fakeData);
  }

  private handleError(error: any) {
    console.error('An error occurred: ' + error);  // todo: replace with real error handling (and centralize)
    return Promise.reject(error.message || error);
  }
}
