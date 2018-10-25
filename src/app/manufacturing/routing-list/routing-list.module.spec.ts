import { RoutingListModule } from './routing-list.module';

describe('RoutingListModule', () => {
  let routingListModule: RoutingListModule;

  beforeEach(() => {
    routingListModule = new RoutingListModule();
  });

  it('should create an instance', () => {
    expect(routingListModule).toBeTruthy();
  });
});
