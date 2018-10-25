import { CreateRoutingPageModule } from './create-routing-page.module';

describe('CreateRoutingPageModule', () => {
  let createRoutingPageModule: CreateRoutingPageModule;

  beforeEach(() => {
    createRoutingPageModule = new CreateRoutingPageModule();
  });

  it('should create an instance', () => {
    expect(createRoutingPageModule).toBeTruthy();
  });
});
