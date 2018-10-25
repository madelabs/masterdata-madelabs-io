import { Component, OnInit } from '@angular/core';
import { BillingForm } from './billing-form';

@Component({
  selector: 'change-billing-form',
  templateUrl: './change-billing-form.component.html',
  styleUrls: ['./change-billing-form.component.css']
})
export class ChangeBillingFormComponent implements OnInit {
  expirationYears: number[] = [];
  model: BillingForm = new BillingForm();

  constructor() { }

  ngOnInit() {
    var currentYear: number = +new Date().getFullYear().toString().substr(-2);
    for(var i: number = 0; i < 10; i++) {
      this.expirationYears.push(currentYear + i);
    }    
  }

}
