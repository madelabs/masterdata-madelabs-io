import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInventoryLocationFormComponent } from './create-inventory-location-form.component';

describe('CreateInventoryLocationFormComponent', () => {
  let component: CreateInventoryLocationFormComponent;
  let fixture: ComponentFixture<CreateInventoryLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInventoryLocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInventoryLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
