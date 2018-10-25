import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicesPageComponent } from './invoices-page/invoices-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvoiceListComponent, InvoicesPageComponent]
})
export class InvoicesModule { }
