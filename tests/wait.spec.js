import { test, expect } from '@playwright/test';

test('Playwright auto wait', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.title')).toHaveText('Products');
});
test('Wait for selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForSelector('.title');

  await expect(page.locator('.title')).toHaveText('Products');
});
test('Wait for URL after login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL('**/inventory.html');

  await expect(page).toHaveURL(/inventory\.html/);
});
test('Understand waitForTimeout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForTimeout(2000);

  await expect(page.locator('.title')).toHaveText('Products');
});
test('Wait for network response', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes('saucedemo.com') &&
      response.status() === 200
  );

  await page.reload();

  const response = await responsePromise;

  expect(response.status()).toBe(200);
});