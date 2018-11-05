import { Component, OnInit, SimpleChange } from '@angular/core';
import { WorkOrderListItem } from '../work-order-list/work-order-list-item';

@Component({
  selector: 'work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.css']
})
export class WorkOrdersPageComponent implements OnInit {

  isCreateVisible: boolean = false;
  isDetailVisible: boolean = false;
  selectedWorkOrderId: number;

  constructor() { }

  ngOnInit() {
  }

  onWorkOrderSelected(workOrderListItem: WorkOrderListItem): void {
    this.selectedWorkOrderId = workOrderListItem.id;
    this.isDetailVisible = true;
  }

  toggleCreateVisibility(visible: boolean): void {
    this.isCreateVisible = visible;
  }

  toggleDetailVisibility(visible: boolean): void {
    this.isDetailVisible = visible;
  }
}
