import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectListItem } from '../select-list/select-list-item';
import { CountryService } from '../country.service';

@Component({
  selector: 'country-select-list',
  templateUrl: './country-select-list.component.html',
  styleUrls: ['./country-select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountrySelectListComponent),
    multi: true
  }]
})
export class CountrySelectListComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() model: NgModel;

  list: SelectListItem[];

  constructor(private service: CountryService) { }

  ngOnInit() {
    this.service.getSelectListCollection().then(data => this.list = data);
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };
  public writeValue(val: any) {
    this.model = val;
  }
  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
