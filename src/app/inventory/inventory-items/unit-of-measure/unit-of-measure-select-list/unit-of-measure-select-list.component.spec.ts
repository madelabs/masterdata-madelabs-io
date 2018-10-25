import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasureSelectListComponent } from './unit-of-measure-select-list.component';

describe('UnitOfMeasureSelectListComponent', () => {
  let component: UnitOfMeasureSelectListComponent;
  let fixture: ComponentFixture<UnitOfMeasureSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOfMeasureSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasureSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
