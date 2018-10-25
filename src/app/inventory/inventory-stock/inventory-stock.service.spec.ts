import { TestBed, inject } from '@angular/core/testing';

import { InventoryStockService } from './inventory-stock.service';

describe('InventoryStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryStockService]
    });
  });

  it('should be created', inject([InventoryStockService], (service: InventoryStockService) => {
    expect(service).toBeTruthy();
  }));
});
