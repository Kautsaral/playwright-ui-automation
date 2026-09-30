import { test, expect } from "@playwright/test";

test("Verify input value", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const username = page.getByLabel("Username");

  await username.fill("standard_user");

  await expect(username).toHaveValue("standard_user");
});

test('Verify page title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const title = page.locator('.login_logo');

  await expect(title).toHaveText('Swag Labs');
});

test('Verify login button is visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await expect(loginButton).toBeVisible();
});

test('Verify error message is not visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).not.toBeVisible();
});