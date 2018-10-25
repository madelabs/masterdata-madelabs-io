import { Component, forwardRef, Input, OnChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectListComponent),
    multi: true
  }]
})
export class SelectListComponent implements ControlValueAccessor {
  @Input() list: any[];
  @Input() name: string;
  @Input() model: NgModel;

  constructor() { }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };
  public writeValue(val: any) {
    this.model = val;
  }
  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
