import { Given, Then, When } from '@wdio/cucumber-framework';

import { staticText } from '../../tests/data/test-data.js';
import log from '../utils/logger.js';
import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';

Given('the user is on the login page', async () => {
  await LoginPage.open();
});

When('the user fills the login form with username {string}', async (username) => {
  await LoginPage.fillLoginForm(username);
});

When('clears the username field', async () => {
  await LoginPage.clearUsername();
});

When('clears the password field', async () => {
  await LoginPage.clearPassword();
});

When('presses the login button', async () => {
  await LoginPage.pressLoginButton();
});

Then('the user should see a missing username error', async () => {
  log.info('Validate missing username error message');
  log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.missingUsernameErrorMessage}" message`);
  await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingUsernameErrorMessage));

});

Then('the user should see a missing password error', async () => {
  log.info('Validate missing password error message');
  log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.missingPasswordErrorMessage}" message`);
  await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingPasswordErrorMessage));
});

Then('the user should see a user lock out error', async () => {
  log.info('Validate user lock out error');
  log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.userLockedOutErrorMessage}" message`);
  await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.userLockedOutErrorMessage));
});

When('the user logs in with valid credentials where username {string}', async (username) => {
  await LoginPage.login(username);
});

Then('the header logo text should be validated', async () => {
  log.info('Validate header logo text');
  log.debug(`Expect element ${await InventoryPage.headerLogo.selector} to have "${staticText.swagLabs}" text`);
  await expect(InventoryPage.headerLogo).toHaveText(staticText.swagLabs);
});
