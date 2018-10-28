import { Component, OnInit, Input } from '@angular/core';
import { InventoryItem } from '../../inventory-item';

@Component({
  selector: 'create-inventory-item-page',
  templateUrl: './create-item-page.component.html',
  styleUrls: ['./create-item-page.component.css']
})
export class CreateInventoryItemPageComponent implements OnInit {
  
  @Input()
  item: InventoryItem;

  constructor() { }

  ngOnInit() {
    if (!this.item) {
      this.item = new InventoryItem();
    }
  }

}
