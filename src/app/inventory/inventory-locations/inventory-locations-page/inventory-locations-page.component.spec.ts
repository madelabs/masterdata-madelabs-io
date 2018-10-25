import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLocationsPageComponent } from './inventory-locations-page.component';

describe('InventoryLocationsPageComponent', () => {
  let component: InventoryLocationsPageComponent;
  let fixture: ComponentFixture<InventoryLocationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLocationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLocationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
