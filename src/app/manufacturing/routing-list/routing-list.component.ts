import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { RoutingListItem } from './routing-list-item';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'routing-list',
  templateUrl: './routing-list.component.html',
  styleUrls: ['./routing-list.component.css']
})
export class RoutingListComponent implements OnInit {
  list: RoutingListItem[];
  @Output() onSelected = new EventEmitter<RoutingListItem>();

  constructor(private service: RoutingService) { }

  ngOnInit() {
    this.service.getCollection(null).then(data => this.list = data);
  }

  select(item: RoutingListItem): void {
    this.onSelected.emit(item);
  }
}
