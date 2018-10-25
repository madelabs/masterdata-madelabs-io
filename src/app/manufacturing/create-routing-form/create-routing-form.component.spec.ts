import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutingFormComponent } from './create-routing-form.component';

describe('CreateRoutingFormComponent', () => {
  let component: CreateRoutingFormComponent;
  let fixture: ComponentFixture<CreateRoutingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
