import { InventoryItemSelectListModule } from './inventory-item-select-list.module';

describe('InventoryItemSelectListModule', () => {
  let inventoryItemSelectListModule: InventoryItemSelectListModule;

  beforeEach(() => {
    inventoryItemSelectListModule = new InventoryItemSelectListModule();
  });

  it('should create an instance', () => {
    expect(inventoryItemSelectListModule).toBeTruthy();
  });
});
