import { test, expect } from '@playwright/test';

test('Count products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const products = page.locator('.inventory_item');

  await expect(products.first()).toBeVisible();

  const productCount = await products.count();

  expect(productCount).toBe(6);
});

test('Access specific products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const products = page.locator('.inventory_item');

  await expect(products.first()).toBeVisible();
  await expect(products.last()).toBeVisible();
  await expect(products.nth(2)).toBeVisible();
});


test('Get all products and verify each product', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const products = page.locator('.inventory_item');

  await expect(products.first()).toBeVisible();

  const productList = await products.all();

  expect(productList.length).toBe(6);

  for (const product of productList) {
    await expect(product).toBeVisible();
  }
});

test('Find specific product using filter', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const products = page.locator('.inventory_item');

  await expect(products.first()).toBeVisible();

  const product = products.filter({
    hasText: 'Sauce Labs Backpack'
  });

  await expect(product).toBeVisible();

  await expect(product.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');
});

test('Add specific product to cart using filter', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const product = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack'
  });

  await expect(product).toBeVisible();

  await product.getByRole('button', {
    name: 'Add to cart'
  }).click();

  await expect(product.getByRole('button', {
    name: 'Remove'
  })).toBeVisible();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});