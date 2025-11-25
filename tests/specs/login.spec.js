import LoginPage from '../../src/pages/login.page.js';
import InventoryPage from '../../src/pages/inventory.page.js';
import log from '../../src/utils/logger.js';
import { usernames, staticText } from '../data/test-data.js';

const defaultUsername = usernames[0];

describe('Final hometask', async () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('UC-1: Test Login Form with Empty Credentials', async () => {
    await LoginPage.fillLoginForm(defaultUsername);
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
    await LoginPage.pressLoginButton();
    log.info('Validate missing username error message');
    log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.missingUsernameErrorMessage}" message`);
    await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingUsernameErrorMessage));
  });


  it('UC-2: Test Login Form with Only Username', async () => {
    await LoginPage.fillLoginForm(defaultUsername);
    await LoginPage.clearPassword();
    await LoginPage.pressLoginButton();
    log.info('Validate missing password error message');
    log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.missingPasswordErrorMessage}" message`);
    await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.missingPasswordErrorMessage));
  });

  usernames.forEach((username) => {
    it(`UC-3: Test Login Form with Valid Credentials (${username})`, async () => {
      await LoginPage.login(username);
      if (username === 'locked_out_user') {
        log.info('Validate user lock out error');
        log.debug(`Expect element ${await LoginPage.loginErrorMessage.selector} to contain "${staticText.userLockedOutErrorMessage}" message`);
        await expect(LoginPage.loginErrorMessage).toHaveText(expect.stringContaining(staticText.userLockedOutErrorMessage));
      } else {
        log.info('Validate header logo text');
        log.debug(`Expect element ${await InventoryPage.headerLogo.selector} to have "${staticText.swagLabs}" text`);
        await expect(InventoryPage.headerLogo).toHaveText(staticText.swagLabs);
      }
    });
  })
});
