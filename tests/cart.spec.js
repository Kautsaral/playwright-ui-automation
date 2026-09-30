import { test, expect } from '@playwright/test';

test('Add specific product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByLabel('Username').fill('standard_user');
  await page.getByLabel('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const product = page
    .locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' });

  await product.getByRole('button', { name: 'Add to cart' }).click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');
});


test('Add multiple specific products to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByLabel('Username').fill('standard_user');
  await page.getByLabel('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const backpack = page
    .locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await backpack
    .getByRole('button', { name: 'Add to cart' })
    .click();

  const tShirt = page
    .locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' });

  await tShirt
    .getByRole('button', { name: 'Add to cart' })
    .click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('2');
});