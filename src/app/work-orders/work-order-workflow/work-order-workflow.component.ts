import { Component, Input, OnInit } from '@angular/core';
import { WorkOrderDetail } from '../work-order-detail/work-order-detail';

@Component({
  selector: 'work-order-workflow',
  templateUrl: './work-order-workflow.component.html',
  styleUrls: ['./work-order-workflow.component.css']
})
export class WorkOrderWorkflowComponent implements OnInit {
  @Input() order: WorkOrderDetail;

  constructor() { }

  ngOnInit() {
  }

}
