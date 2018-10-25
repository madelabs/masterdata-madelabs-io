import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInventoryLocationPageComponent } from './create-inventory-location-page.component';

describe('CreateInventoryLocationPageComponent', () => {
  let component: CreateInventoryLocationPageComponent;
  let fixture: ComponentFixture<CreateInventoryLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInventoryLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInventoryLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
