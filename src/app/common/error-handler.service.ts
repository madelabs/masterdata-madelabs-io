import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handle(error: any): void {
    console.error('An error occurred', error);
  }
}
