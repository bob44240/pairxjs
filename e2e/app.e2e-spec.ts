import { Hero3ModelMakerPage } from './app.po';

describe('hero3-model-maker App', () => {
  let page: Hero3ModelMakerPage;

  beforeEach(() => {
    page = new Hero3ModelMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
