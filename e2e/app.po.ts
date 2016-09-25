import { browser, element, by } from 'protractor/globals';

export class LoveLetterPage {

  navigateTo() {
    return browser.get('/');
  }

  getHomeTitleText() {
    return element(by.css('app-home h3')).getText();
  }
}
