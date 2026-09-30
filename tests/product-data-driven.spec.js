import { test } from '../fixtures/test';
import { productData } from '../data/productData';

test.describe('Data-driven product tests', () => {

  for (const data of productData) {

    test(`Add ${data.product} to cart`, async ({ inventoryPage }) => {
      await inventoryPage.addProductToCart(data.product);

      await inventoryPage.verifyCartCount(1);
    });

  }

});