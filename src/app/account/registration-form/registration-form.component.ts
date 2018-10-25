import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from './registration-form';
import { AccountService } from '../account.service';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  model: RegistrationForm = new RegistrationForm();

  constructor(private service: AccountService) { }

  ngOnInit() {
  }

  register(): void {
    // todo: call service to register new user
  }

}
