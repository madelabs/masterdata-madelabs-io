import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemSelectListComponent } from './inventory-item-select-list.component';

describe('InventoryItemSelectListComponent', () => {
  let component: InventoryItemSelectListComponent;
  let fixture: ComponentFixture<InventoryItemSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryItemSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
