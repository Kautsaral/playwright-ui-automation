import { test, expect } from '@playwright/test';

test('Practice locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByText('Login').click();

  await expect(page.getByText('Products')).toBeVisible();
});