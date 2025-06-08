const Home = require('../pageobjects/home.page.js')
const { getPageElements} = require('../../src/utils/elementsLoader.js');
const Product = require('../pageobjects/product.page.js')

describe('[TC-009] Test Case 9: Search Product', () => {

    let productName = 'bue';
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

    it("5. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
        await Product.titleIsVisible('ALL PRODUCTS');
    });

    it("6. Enter product name in search input and click search button", async () => {
        await Product.searchProduct(productName)
    });

    it("7. Verify 'SEARCHED PRODUCTS' is visible", async () => {
        await Product.titleIsVisible('SEARCHED PRODUCTS');
    });

    /**
     * @bug This test is skipped because the search results are not working with automation.
     */
    it.skip("8. Verify all the products related to search are visible", async () => {
        allure.addInfo('This test is skipped because the search results are not working with automation.');

        await Product.searchResultIsVisible(productName);
    });
});