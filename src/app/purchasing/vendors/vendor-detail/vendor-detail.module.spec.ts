import { VendorDetailModule } from './vendor-detail.module';

describe('VendorDetailModule', () => {
  let vendorDetailModule: VendorDetailModule;

  beforeEach(() => {
    vendorDetailModule = new VendorDetailModule();
  });

  it('should create an instance', () => {
    expect(vendorDetailModule).toBeTruthy();
  });
});
