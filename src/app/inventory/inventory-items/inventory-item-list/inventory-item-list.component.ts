import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InventoryItemListItem } from './inventory-item-list-item';
import { InventoryItemService } from '../inventory-item.service'

@Component({
  selector: 'inventory-item-list',
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.css']
})
export class InventoryItemListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<InventoryItemListItem>();

  items: InventoryItemListItem[];

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    var filter = null;
    this.service.getCollection(filter).then(response => this.items = response);
  }

  select(item: InventoryItemListItem): void {
    this.onSelected.emit(item);
  }
}
