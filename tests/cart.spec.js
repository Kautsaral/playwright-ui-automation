import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.inventory_item_name').first()).toHaveText(
    'Sauce Labs Backpack'
  );
});