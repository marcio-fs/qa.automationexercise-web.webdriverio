const Home = require('../pageobjects/home.page.js')
const { getPageElements} = require('../../src/utils/elementsLoader.js');
const Product = require('../pageobjects/product.page.js')
const CartPage = require('../pageobjects/cart.page.js')
const homePage = new Home();


describe('[TC-013] Test Case 13: Verify Product quantity in Cart', () => {

    let productId = 1
    let quantity = 4
    before(() => {
        homePage.open()
        this.menuLinksElements = getPageElements('menuLinks');
    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Click 'View Product' for any product on home page", async () => {
        await Product.viewProduct(productId)
    });

    it("5. Verify product detail is opened", async () => {
        expect(browser).toHaveUrl(`http://automationexercise.com/product_details/${productId}`);
    });

    it("6. Increase quantity to 4", async () => {
        await Product.increaseProductQuantity(quantity)
    });

    it("7. Click 'Add to cart' button", async () => {
        await Product.btnAddProductToCart();
        await Product.clickContinueShopping();
    });

    it("8. Click 'View Cart' button", async () => {
        await homePage.chooseMenu(this.menuLinksElements.cartLink);
    });

    it("9. Verify that product is displayed in cart page with exact quantity", async () => {
        await CartPage.verifyProductsInCart(quantity)
    });

});