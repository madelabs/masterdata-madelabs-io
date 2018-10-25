import { RoutingSelectListModule } from './routing-select-list.module';

describe('RoutingSelectListModule', () => {
  let routingSelectListModule: RoutingSelectListModule;

  beforeEach(() => {
    routingSelectListModule = new RoutingSelectListModule();
  });

  it('should create an instance', () => {
    expect(routingSelectListModule).toBeTruthy();
  });
});
