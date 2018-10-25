import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkOrderListItem } from './work-order-list-item';
import { WorkOrderService } from '../work-order.service';

@Component({
  selector: 'work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.css']
})
export class WorkOrderListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<WorkOrderListItem>();
  
  workOrders: WorkOrderListItem[];

  constructor(public workOrderService: WorkOrderService) { }

  ngOnInit() {
    this.workOrderService.getCollection(null).then(data => this.workOrders = data);
  }

  select(workOrder: WorkOrderListItem) {
    this.onSelected.emit(workOrder);
  }

}
