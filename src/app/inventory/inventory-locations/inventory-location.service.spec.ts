import { TestBed, inject } from '@angular/core/testing';

import { InventoryLocationService } from './inventory-location.service';

describe('InventoryLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryLocationService]
    });
  });

  it('should be created', inject([InventoryLocationService], (service: InventoryLocationService) => {
    expect(service).toBeTruthy();
  }));
});
