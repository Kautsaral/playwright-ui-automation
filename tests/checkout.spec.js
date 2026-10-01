import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-CHECKOUT-001 - Checkout single product', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await cartPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.fillInformation(
      'Kautsar',
      'QA',
      '15111'
    );

    await checkoutPage.continue();
    await checkoutPage.finishOrder();

    await checkoutPage.verifyOrderComplete();
  });

  test('TC-CHECKOUT-002 - Checkout multiple products', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await inventoryPage.addProductToCart(
      'Sauce Labs Bike Light'
    );

    await cartPage.openCart();

    await cartPage.verifyItemCount(2);

    await checkoutPage.startCheckout();

    await checkoutPage.fillInformation(
      'Kautsar',
      'QA',
      '15111'
    );

    await checkoutPage.continue();
    await checkoutPage.finishOrder();

    await checkoutPage.verifyOrderComplete();
  });

  test('TC-CHECKOUT-003 - Verify order completion', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack'
    );

    await cartPage.openCart();
    await checkoutPage.startCheckout();

    await checkoutPage.fillInformation(
      'Kautsar',
      'QA',
      '15111'
    );

    await checkoutPage.continue();
    await checkoutPage.finishOrder();

    await checkoutPage.verifyOrderComplete();
  });

});