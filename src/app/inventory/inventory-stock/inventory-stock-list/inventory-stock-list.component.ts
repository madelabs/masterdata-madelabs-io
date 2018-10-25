import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryStockListItem } from './inventory-stock-list-item';
import { InventoryStockService } from '../inventory-stock.service';

@Component({
  selector: 'inventory-stock-list',
  templateUrl: './inventory-stock-list.component.html',
  styleUrls: ['./inventory-stock-list.component.css']
})
export class InventoryStockListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<InventoryStockListItem>();

  stock: InventoryStockListItem[];

  constructor(public service: InventoryStockService) { }

  ngOnInit() {
    var filter = null;
    this.service.getCollection(filter).then(data => this.stock = data);
  }

  select(item: InventoryStockListItem): void {
    this.onSelected.emit(item);
  }
}
