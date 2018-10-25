import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectListComponent } from './country-select-list.component';

describe('CountrySelectListComponent', () => {
  let component: CountrySelectListComponent;
  let fixture: ComponentFixture<CountrySelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
