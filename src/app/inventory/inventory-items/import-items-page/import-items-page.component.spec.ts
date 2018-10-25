import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportItemsPageComponent } from './import-items-page.component';

describe('ImportItemsPageComponent', () => {
  let component: ImportItemsPageComponent;
  let fixture: ComponentFixture<ImportItemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportItemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
