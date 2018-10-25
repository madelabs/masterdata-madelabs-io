import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WorkOrderService } from '../work-order.service';
import { WorkOrderDetail } from './work-order-detail';

@Component({
  selector: 'work-order-detail',
  templateUrl: './work-order-detail.component.html',
  styleUrls: ['./work-order-detail.component.css']
})
export class WorkOrderDetailComponent implements OnInit, OnChanges {

  @Input() id: number;
  model: WorkOrderDetail = null;

  constructor(private service: WorkOrderService) { 
  }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

  ngOnChanges(changes: any) {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

}
