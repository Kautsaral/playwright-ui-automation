import { test, expect } from '@playwright/test';

test('Take screenshot of inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]')
    .fill('standard_user');

  await page.locator('[data-test="password"]')
    .fill('secret_sauce');

  await page.locator('[data-test="login-button"]')
    .click();

  await expect(page.locator('.title'))
    .toHaveText('Products');

  await page.screenshot({
    path: 'screenshots/inventory-page.png',
    fullPage: true
  });
});