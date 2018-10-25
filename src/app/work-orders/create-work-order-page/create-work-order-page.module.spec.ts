import { CreateWorkOrderPageModule } from './create-work-order-page.module';

describe('CreateWorkOrderPageModule', () => {
  let createWorkOrderPageModule: CreateWorkOrderPageModule;

  beforeEach(() => {
    createWorkOrderPageModule = new CreateWorkOrderPageModule();
  });

  it('should create an instance', () => {
    expect(createWorkOrderPageModule).toBeTruthy();
  });
});
