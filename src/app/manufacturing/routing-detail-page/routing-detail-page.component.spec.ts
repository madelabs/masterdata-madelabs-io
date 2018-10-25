import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDetailPageComponent } from './routing-detail-page.component';

describe('RoutingDetailPageComponent', () => {
  let component: RoutingDetailPageComponent;
  let fixture: ComponentFixture<RoutingDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
