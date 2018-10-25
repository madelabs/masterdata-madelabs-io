import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersCalendarPageComponent } from './work-orders-calendar-page.component';

describe('WorkOrdersCalendarPageComponent', () => {
  let component: WorkOrdersCalendarPageComponent;
  let fixture: ComponentFixture<WorkOrdersCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrdersCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
