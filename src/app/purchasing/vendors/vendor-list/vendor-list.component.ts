import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { VendorListItem } from './vendor-list-item';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<VendorListItem>();

  items: VendorListItem[];

  constructor(private service: VendorService) { }

  ngOnInit() {
    var filter = null;
    this.service.getCollection(filter).then(response => this.items = response);
  }

  select(item: VendorListItem): void {
    this.onSelected.emit(item);
  }

}
