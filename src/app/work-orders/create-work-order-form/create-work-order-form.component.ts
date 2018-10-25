import { Component, OnInit } from '@angular/core';

import { CreateWorkOrderVm } from './create-work-order-vm';
import { WorkOrderService } from '../work-order.service';

@Component({
  selector: 'create-work-order-form',
  templateUrl: './create-work-order-form.component.html',
  styleUrls: ['./create-work-order-form.component.css']
})
export class CreateWorkOrderFormComponent implements OnInit {
  public model: CreateWorkOrderVm = new CreateWorkOrderVm();

  constructor(public service: WorkOrderService) { }

  ngOnInit() {
  }

  submit(): void {
    // todo
  }

}
