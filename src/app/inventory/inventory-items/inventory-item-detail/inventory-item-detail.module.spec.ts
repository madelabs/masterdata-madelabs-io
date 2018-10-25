import { InventoryItemDetailModule } from './inventory-item-detail.module';

describe('InventoryItemDetailModule', () => {
  let inventoryItemDetailModule: InventoryItemDetailModule;

  beforeEach(() => {
    inventoryItemDetailModule = new InventoryItemDetailModule();
  });

  it('should create an instance', () => {
    expect(inventoryItemDetailModule).toBeTruthy();
  });
});
