import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridColumn } from './grid-column';

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

  search(): void {
    // todo: emit search request
  }

  select(item: any): void {
    this.onSelected.emit(item);
  }
}
