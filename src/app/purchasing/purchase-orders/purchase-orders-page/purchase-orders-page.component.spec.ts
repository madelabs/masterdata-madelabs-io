import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersPageComponent } from './purchase-orders-page.component';

describe('PurchaseOrdersPageComponent', () => {
  let component: PurchaseOrdersPageComponent;
  let fixture: ComponentFixture<PurchaseOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
