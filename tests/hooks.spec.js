import { test, expect } from '@playwright/test';

test.describe('Test Hooks', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]')
      .click();
  });

  test.afterEach(async ({ page }) => {
    console.log('Test finished');
  });

  test('Verify inventory page', async ({ page }) => {
    await expect(page.locator('.title'))
      .toHaveText('Products');
  });

  test('Verify product list', async ({ page }) => {
    await expect(page.locator('.inventory_item'))
      .toHaveCount(6);
  });

});