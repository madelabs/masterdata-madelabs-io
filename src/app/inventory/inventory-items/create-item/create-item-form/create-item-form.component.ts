import { Component, OnInit, Input } from '@angular/core';

import { CreateInventoryItem } from './create-inventory-item';
import { InventoryItemService } from '../../inventory-item.service';

@Component({
  selector: 'create-inventory-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {

  @Input()
  model: CreateInventoryItem;

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    if (!this.model) {
      this.model = new CreateInventoryItem()
    }
  }

  submit(): void {
    // todo
  }

}
