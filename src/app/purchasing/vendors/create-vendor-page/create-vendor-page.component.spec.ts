import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorPageComponent } from './create-vendor-page.component';

describe('CreateVendorPageComponent', () => {
  let component: CreateVendorPageComponent;
  let fixture: ComponentFixture<CreateVendorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
