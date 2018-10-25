import { PurchaseOrderListModule } from './purchase-order-list.module';

describe('PurchaseOrderListModule', () => {
  let purchaseOrderListModule: PurchaseOrderListModule;

  beforeEach(() => {
    purchaseOrderListModule = new PurchaseOrderListModule();
  });

  it('should create an instance', () => {
    expect(purchaseOrderListModule).toBeTruthy();
  });
});
