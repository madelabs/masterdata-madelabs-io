import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderWorkflowComponent } from './work-order-workflow.component';

describe('WorkOrderWorkflowComponent', () => {
  let component: WorkOrderWorkflowComponent;
  let fixture: ComponentFixture<WorkOrderWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
