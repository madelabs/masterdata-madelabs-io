import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkOrderFormComponent } from './create-work-order-form.component';

describe('CreateWorkOrderFormComponent', () => {
  let component: CreateWorkOrderFormComponent;
  let fixture: ComponentFixture<CreateWorkOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
