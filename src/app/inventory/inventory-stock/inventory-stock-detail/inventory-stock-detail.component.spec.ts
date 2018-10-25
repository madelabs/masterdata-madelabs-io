import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStockDetailComponent } from './inventory-stock-detail.component';

describe('InventoryStockDetailComponent', () => {
  let component: InventoryStockDetailComponent;
  let fixture: ComponentFixture<InventoryStockDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryStockDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
