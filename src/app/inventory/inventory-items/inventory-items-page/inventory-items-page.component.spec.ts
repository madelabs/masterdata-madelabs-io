import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemsPageComponent } from './inventory-items-page.component';

describe('InventoryItemsPageComponent', () => {
  let component: InventoryItemsPageComponent;
  let fixture: ComponentFixture<InventoryItemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryItemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
