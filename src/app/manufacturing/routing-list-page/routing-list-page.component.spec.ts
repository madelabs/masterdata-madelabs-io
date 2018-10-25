import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingListPageComponent } from './routing-list-page.component';

describe('RoutingListPageComponent', () => {
  let component: RoutingListPageComponent;
  let fixture: ComponentFixture<RoutingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
