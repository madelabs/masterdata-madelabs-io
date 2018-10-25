import { Component, OnInit } from '@angular/core';
import { InventoryStockListItem } from '../inventory-stock-list/inventory-stock-list-item';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {
  isDetailVisible: boolean = false;
  selectedItemId: number;

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(item: InventoryStockListItem): void {
    this.selectedItemId = item.id;
    this.isDetailVisible = true;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
