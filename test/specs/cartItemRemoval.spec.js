const Home = require('../pageobjects/home.page.js')
const { getPageElements} = require('../../src/utils/elementsLoader.js');
const Product = require('../pageobjects/product.page.js')
const CartPage = require('../pageobjects/cart.page.js')
const homePage = new Home();


describe('[TC-017] Test Case 17: Remove Products From Cart', () => {
    let productId = 1
    let quantity = 1

    before(() => {
        homePage.open()
        this.menuLinksElements = getPageElements('menuLinks');
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Add products to cart", async () => {
        await Product.viewProduct(productId)
        await Product.increaseProductQuantity(quantity)
        await Product.btnAddProductToCart();
        await Product.clickContinueShopping();
    });

    it("5. Click 'Cart' button", async () => {
        await homePage.chooseMenu(this.menuLinksElements.cartLink);
    });

    it("6. Verify that cart page is displayed", async () => {
        await CartPage.verifyCartPageIsVisible();
    });

    it("7. Click 'X' button corresponding to particular product", async () => {
        await CartPage.removeProductsInCart();
    });

    it("8. Verify that product is removed from the cart", async () => {
        await CartPage.verifyEmptyCartMessage();
    });

});