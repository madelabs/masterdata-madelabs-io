import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UnitOfMeasureService } from '../unit-of-measure.service';
import { SelectListItem } from '../../common/select-list/select-list-item';

@Component({
  selector: 'unit-of-measure-select-list',
  templateUrl: './unit-of-measure-select-list.component.html',
  styleUrls: ['./unit-of-measure-select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UnitOfMeasureSelectListComponent),
    multi: true
  }]
})
export class UnitOfMeasureSelectListComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() model: NgModel;

  list: SelectListItem[];

  constructor(public service: UnitOfMeasureService) { }

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
