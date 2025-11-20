import { UserFactory } from '../../src/models/user-factory.js';
import LoginPage from '../../src/pages/login.page.js';
import InventoryPage from '../../src/pages/inventory.page.js';

describe('Final hometask', async () => {
  const user = UserFactory.getStandardUser();

  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.validateTitle();
  });

  it('UC-1: Test Login Form with Empty Credentials', async () => {
    await LoginPage.fillLoginForm(user);
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
    await LoginPage.pressLoginButton();
    await LoginPage.validateMissingUsernameError();
  });


  it('UC-2: Test Login Form with Only Username', async () => {
    await LoginPage.fillLoginForm(user);
    await LoginPage.clearPassword();
    await LoginPage.pressLoginButton();
    await LoginPage.validateMissingPasswordError();
  });

  it('UC-3: Test Login Form with Valid Credentials', async () => {
    await LoginPage.login(user);
    await InventoryPage.validateHeaderLogoText();
  });
});
