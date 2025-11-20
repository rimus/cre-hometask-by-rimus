import Page from './page.js';
import { log } from '../utils/logger.js';
import { staticText } from '../../tests/data/static-text.js';

class InventoryPage extends Page {
  get headerLogo() {
    return $('div.app_logo');
  }

  async validateHeaderLogoText() {
    log.info('Validate header logo text');
    log.debug(`Expect element ${await this.headerLogo.selector} to have "${staticText.swagLabs}" text`);
    await expect(this.headerLogo).toHaveText(staticText.swagLabs);
  }
}

export default new InventoryPage();
