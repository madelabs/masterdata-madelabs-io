import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UsStateService } from './us-state.service';
import { SelectListItem } from '../select-list/select-list-item';

@Component({
  selector: 'state-select-list',
  templateUrl: './state-select-list.component.html',
  styleUrls: ['./state-select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StateSelectListComponent),
    multi: true
  }]
})
export class StateSelectListComponent implements ControlValueAccessor, OnInit {
  @Input() countryId: number;
  @Input() name: string;
  @Input() model: NgModel;

  list: SelectListItem[];

  constructor(private service: UsStateService) { }

  ngOnInit() {
    this.service.getSelectListCollection(this.countryId).then(data => this.list = data);
  }

  public _onChange = (_: any) => { };
  public _onTouched = () => { };
  public writeValue(val: any) {
    this.model = val;
  }
  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
