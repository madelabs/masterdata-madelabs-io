import { InventoryItemListModule } from './inventory-item-list.module';

describe('InventoryItemListModule', () => {
  let inventoryItemListModule: InventoryItemListModule;

  beforeEach(() => {
    inventoryItemListModule = new InventoryItemListModule();
  });

  it('should create an instance', () => {
    expect(inventoryItemListModule).toBeTruthy();
  });
});
