import { PurchasingModule } from './purchasing.module';

describe('PurchasingModule', () => {
  let purchasingModule: PurchasingModule;

  beforeEach(() => {
    purchasingModule = new PurchasingModule();
  });

  it('should create an instance', () => {
    expect(purchasingModule).toBeTruthy();
  });
});
