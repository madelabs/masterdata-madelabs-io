import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryLocationListItem } from './inventory-location-list-item';

@Component({
  selector: 'inventory-sub-location-list',
  templateUrl: './inventory-sub-location-list.component.html',
  styleUrls: ['./inventory-sub-location-list.component.css']
})
export class InventorySubLocationListComponent implements OnInit {
  @Input() subLocations: InventoryLocationListItem[] = null;
  @Output() onSelected = new EventEmitter<InventoryLocationListItem>();

  constructor() { }

  ngOnInit() {
  }

  select(location: InventoryLocationListItem): void {
    this.onSelected.emit(location);
  }
}
