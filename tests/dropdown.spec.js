import { test, expect } from '@playwright/test';

test('Select product sort dropdown', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const dropdown = page.locator('[data-test="product-sort-container"]');

  await dropdown.selectOption('lohi');

  await expect(dropdown).toHaveValue('lohi');
});

test('Select product sort by label', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const dropdown = page.locator('[data-test="product-sort-container"]');

  await dropdown.selectOption({ label: 'Price (high to low)' });

  await expect(dropdown).toHaveValue('hilo');
});

test('Verify product sort options', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const dropdown = page.locator('[data-test="product-sort-container"]');

  await expect(dropdown.locator('option')).toHaveCount(4);

  await expect(dropdown.locator('option').nth(0)).toHaveText(
    'Name (A to Z)'
  );

  await expect(dropdown.locator('option').nth(1)).toHaveText(
    'Name (Z to A)'
  );

  await expect(dropdown.locator('option').nth(2)).toHaveText(
    'Price (low to high)'
  );

  await expect(dropdown.locator('option').nth(3)).toHaveText(
    'Price (high to low)'
  );
});