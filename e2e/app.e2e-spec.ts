import { LoveLetterPage } from './app.po';

describe('love-letter App', function() {
  let page: LoveLetterPage;

  beforeEach(() => {
    page = new LoveLetterPage();
  });

  it('should display message welcoming the user', () => {
    page.navigateTo();
    expect(page.getHomeTitleText()).toEqual('Welcome');
  });
});
