import { WorkOrderListModule } from './work-order-list.module';

describe('WorkOrderListModule', () => {
  let workOrderListModule: WorkOrderListModule;

  beforeEach(() => {
    workOrderListModule = new WorkOrderListModule();
  });

  it('should create an instance', () => {
    expect(workOrderListModule).toBeTruthy();
  });
});
