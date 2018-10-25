import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkOrderPageComponent } from './create-work-order-page.component';

describe('CreateWorkOrderPageComponent', () => {
  let component: CreateWorkOrderPageComponent;
  let fixture: ComponentFixture<CreateWorkOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
