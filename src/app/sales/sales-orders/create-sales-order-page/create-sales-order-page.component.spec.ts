import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesOrderPageComponent } from './create-sales-order-page.component';

describe('CreateSalesOrderPageComponent', () => {
  let component: CreateSalesOrderPageComponent;
  let fixture: ComponentFixture<CreateSalesOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalesOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalesOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
