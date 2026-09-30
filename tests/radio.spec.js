import { test, expect } from '@playwright/test';

test('Select radio button', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  const yesRadio = page.getByText('Yes', { exact: true });

  await yesRadio.click();

  await expect(page.locator('.text-success')).toHaveText('Yes');
});