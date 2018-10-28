import { Component, OnInit, Input } from '@angular/core';

import { InventoryItemService } from '../../inventory-item.service';
import { InventoryItem } from '../../inventory-item';
import { StateService } from '../../../../common/state.service';

@Component({
  selector: 'create-inventory-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {

  @Input()
  model: InventoryItem;

  constructor(private service: InventoryItemService, public state: StateService) { }

  ngOnInit() {
    if (!this.model) {
      this.model = new InventoryItem()
    }
  }

  submit(): void {
    this.service.upsert(this.model);
  }

}
