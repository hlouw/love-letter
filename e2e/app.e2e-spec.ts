import { LoveLetterPage } from './app.po';

describe('love-letter App', function() {
  let page: LoveLetterPage;

  beforeEach(() => {
    page = new LoveLetterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
