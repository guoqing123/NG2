import { NGcliPage } from './app.po';

describe('ngcli App', function() {
  let page: NGcliPage;

  beforeEach(() => {
    page = new NGcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
