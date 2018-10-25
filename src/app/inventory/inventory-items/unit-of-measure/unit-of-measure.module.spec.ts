import { UnitOfMeasureModule } from './unit-of-measure.module';

describe('UnitOfMeasureModule', () => {
  let unitOfMeasureModule: UnitOfMeasureModule;

  beforeEach(() => {
    unitOfMeasureModule = new UnitOfMeasureModule();
  });

  it('should create an instance', () => {
    expect(unitOfMeasureModule).toBeTruthy();
  });
});
