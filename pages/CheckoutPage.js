import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.checkoutButton = page.getByRole('button', {
      name: 'Checkout'
    });

    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');

    this.continueButton = page.getByRole('button', {
      name: 'Continue'
    });

    this.finishButton = page.getByRole('button', {
      name: 'Finish'
    });

    this.completeMessage = page.locator('.complete-header');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async verifyOrderComplete() {
    await expect(this.completeMessage).toHaveText(
      'Thank you for your order!'
    );
  }
}