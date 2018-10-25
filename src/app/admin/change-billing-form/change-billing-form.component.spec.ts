import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBillingFormComponent } from './change-billing-form.component';

describe('ChangeBillingFormComponent', () => {
  let component: ChangeBillingFormComponent;
  let fixture: ComponentFixture<ChangeBillingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBillingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
