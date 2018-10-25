import { InventoryLocationsModule } from './inventory-locations.module';

describe('InventoryLocationsModule', () => {
  let inventoryLocationsModule: InventoryLocationsModule;

  beforeEach(() => {
    inventoryLocationsModule = new InventoryLocationsModule();
  });

  it('should create an instance', () => {
    expect(inventoryLocationsModule).toBeTruthy();
  });
});
