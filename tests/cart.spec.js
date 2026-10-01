import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-CART-001 - Open cart and verify product', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await cartPage.openCart();

    await cartPage.verifyProduct(
      'Sauce Labs Backpack'
    );
  });

  test('TC-CART-002 - Verify multiple products in cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await inventoryPage.addProductToCart(
      'Sauce Labs Bike Light'
    );

    await cartPage.openCart();

    await cartPage.verifyItemCount(2);
  });

  test('TC-CART-003 - Remove product from cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await inventoryPage.addProductToCart(
      'Sauce Labs Bike Light'
    );

    await cartPage.openCart();

    await cartPage.removeProduct(
      'Sauce Labs Backpack'
    );

    await cartPage.verifyItemCount(1);

    await cartPage.verifyProduct(
      'Sauce Labs Bike Light'
    );
  });

});