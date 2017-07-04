import { TestComponentPage } from './app.po';

describe('test-component App', () => {
  let page: TestComponentPage;

  beforeEach(() => {
    page = new TestComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
