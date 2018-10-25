import { Component, Input, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InventoryItemService } from '../inventory-item.service';
import { SelectListItem } from '../../../common/select-list/select-list-item';

@Component({
  selector: 'inventory-item-select-list',
  templateUrl: './inventory-item-select-list.component.html',
  styleUrls: ['./inventory-item-select-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InventoryItemSelectListComponent),
    multi: true
  }]
})
export class InventoryItemSelectListComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() model: NgModel;

  list: SelectListItem[];

  constructor(public service: InventoryItemService) { }

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
