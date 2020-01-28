import { EmailTemplateGeneratorPage } from './app.po';

describe('email-template-generator App', function() {
  let page: EmailTemplateGeneratorPage;

  beforeEach(() => {
    page = new EmailTemplateGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
