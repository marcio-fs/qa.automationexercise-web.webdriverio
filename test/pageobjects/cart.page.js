const { getPageElements} = require('../../src/utils/elementsLoader.js');

class CartPage {
  constructor() {
    this.cartElements = getPageElements('cart');
    this.emptyCartElements = getPageElements('emptyCart');
  }

  async verifyCartPageIsVisible() {
    const elem = await $(this.cartElements.cartTitle);
    await expect(elem).toBeDisplayed();
    await expect(elem).toHaveText('Shopping Cart');
  }

  async verifyProductsInCart(qtd) {
    const items = await $(this.cartElements.cartQuantity);
    await expect(items).toHaveText(qtd.toString());
  }

  async verifyCartDetails() {
    const items = await $(this.cartElements.cartItems);

    for (const item of items) {
      const price = parseFloat(await item.$(this.cartElements.cartPrice).getText().replace('$', ''));
      const quantity = parseInt(await item.$(this.cartElements.cartQuantity).getText());
      const total = parseFloat(await item.$(this.cartElements.cartTotal).getText().replace('$', ''));

      await expect(total).toBeCloseTo(price * quantity, 2);
    }
  }

  async verifyProductQuantityInCart(expectedQuantity) {
    const items = await $(this.cartElements.cartQuantity);
  
    const quantityText = await items[0].$$(this.cartElements.cartQuantity).getText();
    const actualQuantity = parseInt(quantityText, 10);

    await expect(actualQuantity).toBe(expectedQuantity);
  }

  async removeProductsInCart() {
    const items = await $(this.cartElements.cartDelete);
    await expect(items).toBeDisplayed()
    items.click()
  }

  async verifyEmptyCartMessage() {

    const emptyCartMessage = await $(this.emptyCartElements.emptyCartMessage);
    await emptyCartMessage.waitForExist();
    await expect(emptyCartMessage).toBeDisplayed();
    const text = await emptyCartMessage.getText();
    await expect(text).toContain('Cart is empty!');
  }
}

module.exports = new CartPage();