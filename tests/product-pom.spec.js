import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Product tests using POM', () => {

  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.verifyPageLoaded();
  });

  test('Add Sauce Labs Backpack to cart', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    await inventoryPage.verifyCartCount(1);
  });

  test('Add Sauce Labs Bike Light to cart', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');

    await inventoryPage.verifyCartCount(1);
  });

  test('Add product and verify it in cart', async ({page}) => {
  const cartPage = new CartPage(page);

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.verifyCartCount(1);

  await cartPage.openCart();

  await cartPage.verifyItemCount(1);
  await cartPage.verifyProduct('Sauce Labs Backpack');
});
test('Complete checkout using POM', async ({ page }) => {
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addProductToCart('Sauce Labs Backpack');

  await cartPage.openCart();
  await cartPage.verifyProduct('Sauce Labs Backpack');

  await checkoutPage.startCheckout();

  await checkoutPage.fillInformation(
    'Kautsar',
    'QA',
    '15143'
  );

  await checkoutPage.continue();
  await checkoutPage.finishOrder();

  await checkoutPage.verifyOrderComplete();
});

    

});