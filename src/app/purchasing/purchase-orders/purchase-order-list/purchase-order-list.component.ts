import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PurchaseOrderListItem } from './purchase-order-list-item';

@Component({
  selector: 'purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<PurchaseOrderListItem>();
  
  columns: any;
  items: PurchaseOrderListItem[];

  constructor() { }

  ngOnInit() {
    // todo: change out fake data
    this.columns = [
      {
        name: 'Number', 
        binding: 'number'
      },
      {
        name: 'Status',
        binding: 'status'
      }
    ];

    this.items = new Array<PurchaseOrderListItem>();
    this.items.push(new PurchaseOrderListItem(1, '1000', 'Active'));
    this.items.push(new PurchaseOrderListItem(2, '1001', 'Active'));
    this.items.push(new PurchaseOrderListItem(3, '1002', 'Active'));
  }

  select(purchaseOrder: PurchaseOrderListItem) {
    console.log('from po list', purchaseOrder);
    this.onSelected.emit(purchaseOrder);
  }
}
