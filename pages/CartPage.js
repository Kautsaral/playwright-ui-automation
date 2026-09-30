import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = page.locator('.shopping_cart_link');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', {
      name: 'Checkout'
    });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyProduct(productName) {
    const product = this.cartItems.filter({
      hasText: productName
    });

    await expect(product).toBeVisible();
  }

  async verifyItemCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }
}