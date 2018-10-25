import { CreateVendorPageModule } from './create-vendor-page.module';

describe('CreateVendorPageModule', () => {
  let createVendorPageModule: CreateVendorPageModule;

  beforeEach(() => {
    createVendorPageModule = new CreateVendorPageModule();
  });

  it('should create an instance', () => {
    expect(createVendorPageModule).toBeTruthy();
  });
});
