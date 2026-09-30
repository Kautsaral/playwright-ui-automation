import { test, expect } from '../fixtures/test';

test('Verify inventory using LoginPage fixture', async ({ loginPage }) => {
  await loginPage.verifyLoginSuccess();

  await expect(loginPage.page.locator('.inventory_item'))
    .toHaveCount(6);
});
test('Use multiple Page Objects from fixtures', async ({ inventoryPage }) => {
  await inventoryPage.addProductToCart('Sauce Labs Backpack');

  await inventoryPage.verifyCartCount(1);
});