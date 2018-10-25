import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSelectListComponent } from './state-select-list.component';

describe('StateSelectListComponent', () => {
  let component: StateSelectListComponent;
  let fixture: ComponentFixture<StateSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
