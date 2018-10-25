import { CreateItemModule } from './create-item.module';

describe('CreateItemModule', () => {
  let createItemModule: CreateItemModule;

  beforeEach(() => {
    createItemModule = new CreateItemModule();
  });

  it('should create an instance', () => {
    expect(createItemModule).toBeTruthy();
  });
});
