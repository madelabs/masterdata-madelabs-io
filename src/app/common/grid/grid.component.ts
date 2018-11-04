import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridColumn } from './grid-column';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Output() onSelected = new EventEmitter<any>();
  @Input() columns: GridColumn[];
  @Input() includeCheckboxes: boolean = true;
  @Input() includeSearch: boolean = true;
  @Input() items: any;

  private availableCount: number;
  private colspan: number;
  private checkAll: boolean;
  
  constructor() { }

  ngOnInit() {
    this.setColumnSpan();
  }

  private setColumnSpan(): void {
    // calculate column span
    this.colspan = this.columns.length;

    if (this.includeCheckboxes) {
      this.colspan++;
    }
  }

  checkAllToggle(): void {
    this.items.forEach(item => {
      item.checked = this.checkAll;
    });
  }

  search(): void {
    // todo: emit search request
  }

  select(item: any): void {
    this.onSelected.emit(item);
  }
}
