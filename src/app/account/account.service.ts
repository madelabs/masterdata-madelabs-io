import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../common/error-handler.service';

  @Injectable()
  export class AccountService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { }

  // todo: add methods to update user and tenant info
}
