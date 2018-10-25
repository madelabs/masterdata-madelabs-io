import { InventoryItemsModule } from './inventory-items.module';

describe('InventoryItemsModule', () => {
  let inventoryItemsModule: InventoryItemsModule;

  beforeEach(() => {
    inventoryItemsModule = new InventoryItemsModule();
  });

  it('should create an instance', () => {
    expect(inventoryItemsModule).toBeTruthy();
  });
});
