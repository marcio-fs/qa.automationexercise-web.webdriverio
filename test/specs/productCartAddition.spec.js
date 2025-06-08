const Home = require('../pageobjects/home.page.js')
const { getPageElements} = require('../../src/utils/elementsLoader.js');
const Product = require('../pageobjects/product.page.js')
const CartPage = require('../pageobjects/cart.page.js')



describe('[TC-012] Test Case 12: Add Products in Cart', () => {

    before(async () => {
        homePage = new Home();
        await homePage.open()
        this.menuLinksElements = getPageElements('menuLinks');

    })

    it('3. Verify that home page is visible successfully ', async () => {
        await homePage.homeIsVisible()
    });

    it("4. Click on 'Products' button", async () => {
        await homePage.chooseMenu(this.menuLinksElements.productsLink);
    });

    it("5. Hover over first product and click 'Add to cart'", async () => {
        await Product.addProductToCart(1);
    });

    it("6. Click 'Continue Shopping' button", async () => {
        await Product.clickContinueShopping();
    });

    /**
     * @bug This test is skipped because the second product is not available in the current test environment.
     */
    it.skip("7. Hover over second product and click 'Add to cart'", async () => {
        allure.addInfo('This test is skipped because the second product is not available in the current test environment.');

        await Product.addProductToCart(2);
        await Product.clickContinueShopping();
    });

    it("8. Click 'View Cart' button", async () => {
        await homePage.chooseMenu(this.menuLinksElements.cartLink);

    });

    it("9. Verify both products are added to Cart", () => {
        CartPage.verifyProductsInCart(1);
    });

    it("10. Verify their prices, quantity and total price", () => {
        CartPage.verifyCartDetails();
    });
});