import { Component, Input, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RoutingService } from '../routing.service';
import { RoutingSelectListItem } from './routing-select-list-item';

@Component({
  selector: 'routing-select-list',
  templateUrl: './routing-select-list.component.html',
  styleUrls: ['./routing-select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RoutingSelectListComponent),
    multi: true
  }]
})
export class RoutingSelectListComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() model: NgModel;

  list: RoutingSelectListItem[];

  constructor(public service: RoutingService) { }

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
