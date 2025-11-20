import { Given, Then, When } from '@wdio/cucumber-framework';

import { UserFactory } from '../models/user-factory.js';
import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';

const user = UserFactory.getStandardUser();

Given('the user is on the login page', async () => {
  await LoginPage.open();
  await LoginPage.validateTitle();
});

When('the user fills the login form with valid credentials', async () => {
  await LoginPage.fillLoginForm(user);
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
  await LoginPage.validateMissingUsernameError();
});

Then('the user should see a missing password error', async () => {
  await LoginPage.validateMissingPasswordError();
});

Then('the user should see a user lock out error', async () => {
  await LoginPage.validateUserLockOutError();
});

When('the user logs in with valid credentials where username {string}', async (username) => {
  await LoginPage.loginByCredentials(username);
});

Then('the header logo text should be validated', async () => {
  await InventoryPage.validateHeaderLogoText();
});
