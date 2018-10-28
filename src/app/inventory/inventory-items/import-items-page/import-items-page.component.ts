import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../common/state.service';

@Component({
  selector: 'import-items-page',
  templateUrl: './import-items-page.component.html',
  styleUrls: ['./import-items-page.component.css']
})
export class ImportItemsPageComponent implements OnInit {

  model: any = {};

  constructor(public state: StateService) { }

  ngOnInit() {
  }

}
