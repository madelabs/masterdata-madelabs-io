import { Component, OnInit } from '@angular/core';
import { CreateVendor } from './create-vendor';

@Component({
  selector: 'create-vendor-form',
  templateUrl: './create-vendor-form.component.html',
  styleUrls: ['./create-vendor-form.component.css']
})
export class CreateVendorFormComponent implements OnInit {
  model: CreateVendor = new CreateVendor();

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    // todo
  }

}
