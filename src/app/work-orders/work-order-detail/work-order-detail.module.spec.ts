import { WorkOrderDetailModule } from './work-order-detail.module';

describe('WorkOrderDetailModule', () => {
  let workOrderDetailModule: WorkOrderDetailModule;

  beforeEach(() => {
    workOrderDetailModule = new WorkOrderDetailModule();
  });

  it('should create an instance', () => {
    expect(workOrderDetailModule).toBeTruthy();
  });
});
