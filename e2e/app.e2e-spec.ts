import { AngularNodeVkapiPage } from './app.po';

describe('angular-node-vkapi App', function() {
  let page: AngularNodeVkapiPage;

  beforeEach(() => {
    page = new AngularNodeVkapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
