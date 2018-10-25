import { ManufacturingModule } from './manufacturing.module';

describe('ManufacturingModule', () => {
  let manufacturingModule: ManufacturingModule;

  beforeEach(() => {
    manufacturingModule = new ManufacturingModule();
  });

  it('should create an instance', () => {
    expect(manufacturingModule).toBeTruthy();
  });
});
