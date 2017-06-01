import { EshopPage } from './app.po';

describe('eshop App', () => {
  let page: EshopPage;

  beforeEach(() => {
    page = new EshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
