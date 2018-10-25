import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingMatrixComponent } from './pricing-matrix.component';

describe('PricingMatrixComponent', () => {
  let component: PricingMatrixComponent;
  let fixture: ComponentFixture<PricingMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
