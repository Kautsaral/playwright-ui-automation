import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator('.title');
    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async verifyPageLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async getProduct(productName) {
    return this.products.filter({
      hasText: productName
    });
  }

  async addProductToCart(productName) {
    const product = this.products.filter({
      hasText: productName
    });

    await product.getByRole('button', {
      name: 'Add to cart'
    }).click();
  }

  async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}