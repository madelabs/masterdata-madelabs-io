import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutingPageComponent } from './create-routing-page.component';

describe('CreateRoutingPageComponent', () => {
  let component: CreateRoutingPageComponent;
  let fixture: ComponentFixture<CreateRoutingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
