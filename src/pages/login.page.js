import Page from './page.js';
import { DEFAULT_PASSWORD } from '../models/user-factory.js';
import { log } from '../utils/logger.js';
import { staticText } from '../../tests/data/static-text.js';

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
    return $('//button[@class = "error-button"]/ancestor::h3');
  }

  async open() {
    log.info('Navigate to login page');
    await super.open('/');
  }

  async fillLoginForm(user) {
    log.info('Fill login form');
    log.debug(`Fill ${user.username} to element ${await this.usernameInput.selector}`);
    await this.usernameInput.setValue(user.username);
    log.debug(`Fill ******** to element ${await this.passwordInput.selector}`);
    await this.passwordInput.setValue(user.password);
  }

  async fillLoginFormWithCredentials(username) {
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
    await this.usernameInput.click();
    await browser.keys(['Control', 'a', 'Backspace']);
  }

  async clearPassword() {
    log.info('Clear password input');
    log.debug(`Clear data from element ${await this.passwordInput.selector}`);
    // Doesn't work in Chrome
    // await this.passwordInput.clearValue();
    await this.passwordInput.click();
    await browser.keys(['Control', 'a', 'Backspace']);
  }

  async pressLoginButton() {
    log.info('Press login button');
    log.debug(`Click element ${await this.loginButton.selector}`);
    await this.loginButton.click();
  }

  async login(user) {
    log.info('Login to app');
    await this.fillLoginForm(user);
    await this.pressLoginButton();
  }

  async loginByCredentials(username) {
    log.info('Login to app');
    await this.fillLoginFormWithCredentials(username);
    await this.pressLoginButton();
  }

  async validateTitle() {
    log.info('Validate login page title');
    log.debug(`Expect page to have "${staticText.swagLabs}" title`);
    await expect(browser).toHaveTitle(staticText.swagLabs);
  }

  async validateMissingUsernameError() {
    log.info('Validate missing username error message');
    log.debug(`Expect element ${await this.loginErrorMessage.selector} to contain "${staticText.missingUsernameErrorMessage}" message`);
    await expect(this.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingUsernameErrorMessage));
  }

  async validateMissingPasswordError() {
    log.info('Validate missing password error message');
    log.debug(`Expect element ${await this.loginErrorMessage.selector} to contain "${staticText.missingPasswordErrorMessage}" message`);
    await expect(this.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingPasswordErrorMessage));
  }

  async validateUserLockOutError() {
    log.info('Validate user lock out error');
    log.debug(`Expect element ${await this.loginErrorMessage.selector} to contain "${staticText.userLockOutErrorMessage}" message`);
    await expect(this.loginErrorMessage).toHaveText(expect.stringContaining(staticText.userLockOutErrorMessage));
  }
}

export default new LoginPage();
