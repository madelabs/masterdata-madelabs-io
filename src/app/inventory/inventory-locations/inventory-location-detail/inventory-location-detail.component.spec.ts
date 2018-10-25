import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLocationDetailComponent } from './inventory-location-detail.component';

describe('InventoryLocationDetailComponent', () => {
  let component: InventoryLocationDetailComponent;
  let fixture: ComponentFixture<InventoryLocationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLocationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
