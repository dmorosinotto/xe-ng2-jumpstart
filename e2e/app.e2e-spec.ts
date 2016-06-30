import { XeNg2JumpstartPage } from './app.po';

describe('xe-ng2-jumpstart App', function() {
  let page: XeNg2JumpstartPage;

  beforeEach(() => {
    page = new XeNg2JumpstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
