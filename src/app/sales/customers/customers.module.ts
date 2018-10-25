import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersPageComponent, CustomerListComponent]
})
export class CustomersModule { }
