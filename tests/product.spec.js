import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Product Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-PRODUCT-001 - Add one product to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    await inventoryPage.verifyCartCount(1);
  });

  test('TC-PRODUCT-002 - Add multiple products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');

    await inventoryPage.verifyCartCount(2);
  });

  test('TC-PRODUCT-003 - Verify product exists in inventory', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    const product = await inventoryPage.getProduct(
      'Sauce Labs Backpack'
    );

    await expect(product).toBeVisible();
  });

});