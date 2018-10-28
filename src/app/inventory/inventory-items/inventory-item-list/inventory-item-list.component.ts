import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InventoryItemService } from '../inventory-item.service'
import { InventoryItem } from '../inventory-item';
import { GridColumn } from '../../../common/grid/grid-column';

@Component({
  selector: 'inventory-item-list',
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.css']
})
export class InventoryItemListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<InventoryItem>();

  columns: GridColumn[];
  items: InventoryItem[];

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    this.columns = [
      new GridColumn('Item', 'name'),
      new GridColumn('Code', 'code'),
      new GridColumn('Status', 'status')
    ];

    var filter = null;
    this.service.getCollection(filter).then(response => this.items = response);
  }

  select(item: InventoryItem): void {
    this.onSelected.emit(item);
  }
}
