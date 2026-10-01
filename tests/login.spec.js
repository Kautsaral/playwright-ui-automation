import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {
  validLoginData,
  invalidLoginData
} from '../data/loginData';

test.describe('Login Module', () => {

  for (const data of validLoginData) {
    test(`Valid login - ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      await expect(page.locator('.title'))
        .toHaveText(data.expectedTitle);
    });
  }

  for (const data of invalidLoginData) {
    test(
      `Invalid login - ${data.username || 'empty credentials'}`,
      async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(data.username, data.password);

        await expect(page.locator('[data-test="error"]'))
          .toContainText(data.expectedError);
      }
    );
  }

});