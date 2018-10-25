import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLocationListComponent } from './inventory-location-list.component';

describe('InventoryLocationListComponent', () => {
  let component: InventoryLocationListComponent;
  let fixture: ComponentFixture<InventoryLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
