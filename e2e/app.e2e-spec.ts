import { PlusPhramesPage } from './app.po';

describe('plus-phrames App', () => {
  let page: PlusPhramesPage;

  beforeEach(() => {
    page = new PlusPhramesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
