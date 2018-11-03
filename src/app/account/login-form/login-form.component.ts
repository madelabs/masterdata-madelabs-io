import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from './login-credentials';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AuthResponse } from './auth-response';
import { AccountService } from '../account.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    message: string = null;
    model: LoginCredentials = new LoginCredentials();
    submitted: boolean = false;

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
    }

    login(): void {
        this.submitted = true;
        // this.accountService.login(this.model);
    }
}
