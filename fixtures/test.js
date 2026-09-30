import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await use(loginPage);
  },

  inventoryPage: async ({ loginPage }, use) => {
    const inventoryPage = new InventoryPage(loginPage.page);

    await inventoryPage.verifyPageLoaded();

    await use(inventoryPage);
  },
});

export { expect } from '@playwright/test';