import Page from './page.js';

class InventoryPage extends Page {
  get headerLogo() {
    return $('div.app_logo');
  }
}

export default new InventoryPage();
