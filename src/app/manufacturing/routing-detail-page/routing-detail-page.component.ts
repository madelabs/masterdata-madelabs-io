import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { RoutingDetail } from './routing-detail';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'routing-detail-page',
  templateUrl: './routing-detail-page.component.html',
  styleUrls: ['./routing-detail-page.component.css']
})
export class RoutingDetailPageComponent implements OnInit, OnChanges {
  @Input() id: number;
  model: RoutingDetail = null;

  constructor(private service: RoutingService) { }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

  ngOnChanges(changes: any) {
    this.service.getSingle(this.id).then(data => this.model = data);
  }
}
