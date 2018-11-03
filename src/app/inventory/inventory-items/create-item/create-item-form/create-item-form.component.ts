import { Component, OnInit, Input } from '@angular/core';

import { InventoryItemService } from '../../inventory-item.service';
import { InventoryItem } from '../../inventory-item';
import { StateService } from '../../../../common/state.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'create-inventory-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {

  @Input()
  model: InventoryItem;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: InventoryItemService, 
    public state: StateService) { }

  ngOnInit() {
    if (!this.model) {
      this.model = new InventoryItem()
    }
  }

  cancel(): void {
    if (this.model.id) {
      this.state.isInventoryItemEditVisible.next(false)
    }
    else {
      this.state.isInventoryItemCreateVisible.next(false)
    }
  }

  submit(): void {
    // save
    this.service.upsert(this.model).then(item => {
      this.model = item;

      // toast
      this.toastr.success(`${this.model.name} saved!`);

      // route
      this.router.navigate(['/inventory/items', this.model.id]);
    });
  }

}
