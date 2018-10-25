import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurchaseOrderPageComponent } from './create-purchase-order-page.component';

describe('CreatePurchaseOrderPageComponent', () => {
  let component: CreatePurchaseOrderPageComponent;
  let fixture: ComponentFixture<CreatePurchaseOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePurchaseOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurchaseOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
