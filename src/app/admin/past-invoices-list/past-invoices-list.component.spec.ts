import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastInvoicesListComponent } from './past-invoices-list.component';

describe('PastInvoicesListComponent', () => {
  let component: PastInvoicesListComponent;
  let fixture: ComponentFixture<PastInvoicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastInvoicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastInvoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
