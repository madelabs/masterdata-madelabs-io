import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrdersPageComponent } from './sales-orders-page.component';

describe('SalesOrdersPageComponent', () => {
  let component: SalesOrdersPageComponent;
  let fixture: ComponentFixture<SalesOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
