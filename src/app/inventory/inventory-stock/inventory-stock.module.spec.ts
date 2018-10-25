import { InventoryStockModule } from './inventory-stock.module';

describe('InventoryStockModule', () => {
  let inventoryStockModule: InventoryStockModule;

  beforeEach(() => {
    inventoryStockModule = new InventoryStockModule();
  });

  it('should create an instance', () => {
    expect(inventoryStockModule).toBeTruthy();
  });
});
