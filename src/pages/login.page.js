import Page from './page.js';
import { DEFAULT_PASSWORD } from '../../tests/data/test-data.js';
import log from '../utils/logger.js';

class LoginPage extends Page {
  get usernameInput() {
    return $('#user-name');
  }

  get passwordInput() {
    return $('#password');
  }

  get loginButton() {
    return $('#login-button');
  }

  get loginErrorMessage() {
    return $('div.error h3');
  }

  async open() {
    log.info('Navigate to login page');
    await super.open('/');
  }

  async fillLoginForm(username) {
    log.info('Fill login form');
    log.debug(`Fill ${username} to element ${await this.usernameInput.selector}`);
    await this.usernameInput.setValue(username);
    log.debug(`Fill ******** to element ${await this.passwordInput.selector}`);
    await this.passwordInput.setValue(DEFAULT_PASSWORD);
  }

  async clearUsername() {
    log.info('Clear username input');
    log.debug(`Clear data from element ${await this.usernameInput.selector}`);
    // Doesn't work in Chrome
    // await this.usernameInput.clearValue();
    await this.usernameInput.waitForClickable();
    await this.usernameInput.click();
    await browser.keys(['Control', 'a', 'Delete']);
  }

  async clearPassword() {
    log.info('Clear password input');
    log.debug(`Clear data from element ${await this.passwordInput.selector}`);
    // Doesn't work in Chrome
    // await this.passwordInput.clearValue();
    await this.passwordInput.waitForClickable();
    await this.passwordInput.click();
    await browser.keys(['Control', 'a', 'Delete']);
  }

  async pressLoginButton() {
    log.info('Press login button');
    log.debug(`Click element ${await this.loginButton.selector}`);
    await this.loginButton.waitForClickable();
    await this.loginButton.click();
  }

  async login(username) {
    log.info('Login to app');
    await this.fillLoginForm(username);
    await this.pressLoginButton();
  }
}

export default new LoginPage();
