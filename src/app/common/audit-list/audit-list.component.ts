import { Component, Input, OnInit } from '@angular/core';
import { AuditEntryListItem } from './audit-entry-list-item';

@Component({
  selector: 'audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  @Input() list: AuditEntryListItem[];

  constructor() { }

  ngOnInit() {
  }

}
