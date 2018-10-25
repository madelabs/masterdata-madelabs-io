import { PurchaseOrderDetailModule } from './purchase-order-detail.module';

describe('PurchaseOrderDetailModule', () => {
  let purchaseOrderDetailModule: PurchaseOrderDetailModule;

  beforeEach(() => {
    purchaseOrderDetailModule = new PurchaseOrderDetailModule();
  });

  it('should create an instance', () => {
    expect(purchaseOrderDetailModule).toBeTruthy();
  });
});
