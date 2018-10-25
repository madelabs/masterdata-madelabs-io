import { WorkOrdersModule } from './work-orders.module';

describe('WorkOrdersModule', () => {
  let workOrdersModule: WorkOrdersModule;

  beforeEach(() => {
    workOrdersModule = new WorkOrdersModule();
  });

  it('should create an instance', () => {
    expect(workOrdersModule).toBeTruthy();
  });
});
