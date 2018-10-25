import { CreatePurchaseOrderPageModule } from './create-purchase-order-page.module';

describe('CreatePurchaseOrderPageModule', () => {
  let createPurchaseOrderPageModule: CreatePurchaseOrderPageModule;

  beforeEach(() => {
    createPurchaseOrderPageModule = new CreatePurchaseOrderPageModule();
  });

  it('should create an instance', () => {
    expect(createPurchaseOrderPageModule).toBeTruthy();
  });
});
