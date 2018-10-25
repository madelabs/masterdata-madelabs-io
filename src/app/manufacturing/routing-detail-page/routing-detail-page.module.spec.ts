import { RoutingDetailPageModule } from './routing-detail-page.module';

describe('RoutingDetailPageModule', () => {
  let routingDetailPageModule: RoutingDetailPageModule;

  beforeEach(() => {
    routingDetailPageModule = new RoutingDetailPageModule();
  });

  it('should create an instance', () => {
    expect(routingDetailPageModule).toBeTruthy();
  });
});
