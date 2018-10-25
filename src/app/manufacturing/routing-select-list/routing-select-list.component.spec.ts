import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSelectListComponent } from './routing-select-list.component';

describe('RoutingSelectListComponent', () => {
  let component: RoutingSelectListComponent;
  let fixture: ComponentFixture<RoutingSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
