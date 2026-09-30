import { test, expect } from '@playwright/test';
import { loginData, invalidLoginData } from '../data/loginData';

test.describe('Data-driven login tests', () => {

  for (const data of loginData) {

    test(`Login with ${data.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      await page.locator('[data-test="username"]')
        .fill(data.username);

      await page.locator('[data-test="password"]')
        .fill(data.password);

      await page.locator('[data-test="login-button"]')
        .click();

      await expect(page.locator('.title'))
        .toHaveText(data.expectedTitle,{
          timeout: 15000
        });
    });

  }

});

test.describe('Data-driven negative login tests', () => {

  for (const data of invalidLoginData) {

    test(`Invalid login with ${data.username || 'empty username'}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      await page.locator('[data-test="username"]')
        .fill(data.username);

      await page.locator('[data-test="password"]')
        .fill(data.password);

      await page.locator('[data-test="login-button"]')
        .click();

      await expect(page.locator('[data-test="error"]'))
        .toContainText(data.expectedError);
    });

  }

});