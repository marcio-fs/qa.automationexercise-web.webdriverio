const { getPageElements} = require('../../src/utils/elementsLoader.js');

class Product {

    constructor() {
        this.titleInPage = getPageElements('titleInPage');
        this.searchProductElements = getPageElements('searchProduct');
        this.productsPageHome = getPageElements('productsPageHome');
        this.productPage = getPageElements('productPage');
      }
    async titleIsVisible(text) {
        const elem = await $(this.titleInPage.product)
        await expect(elem).toBeDisplayed()

        const elemText = await elem.getText();
        await expect(elemText).toContain(text);
    }

    async searchProduct(product) {
        const search = await $(this.searchProductElements.searchInput)
        const searchButton = await $(this.searchProductElements.searchButton)
        await expect(search).toBeDisplayed()
        await expect(searchButton).toBeDisplayed()

        await search.setValue(product)
        await searchButton.click()
    }

    async searchResultIsVisible(product) {
        const productsName = await $$(this.searchProductElements.listProductsName);

        try {
            await expect(productsName).toBeDisplayed();
        } catch (error) {
            throw new Error(`No products found for the search term: ${product}`);
        }

        await expect(productsName.length).toBeGreaterThan(0);

        for (const elem of productsName) {
            const text = await elem.getText();
            await expect(text).toContain(product);
        }
    }

    async addProductToCart(productIndex) {
        const productHover = await $(`${this.productsPageHome.listProducts}:nth-child(${productIndex})`);
        const addToCartButton = await $(`${this.searchProductElements.searchResult} div[class="overlay-content"]  a[data-product-id="${productIndex}"`);

        await productHover.moveTo();
        await expect(addToCartButton).toBeDisplayed();
        await addToCartButton.click();
    }

    async clickContinueShopping() {
        const continueButton = await $(this.productsPageHome.continueShoppingButton);
        await expect(continueButton).toBeDisplayed();
        await continueButton.click();
    }

    async viewProduct(productIndex) {
        const viewProductButton = await $(`${this.productsPageHome.viewProduct}:nth-child(${productIndex})`);

        await expect(viewProductButton).toBeDisplayed();
        await viewProductButton.click();
    }

    async increaseProductQuantity(quantity) {
        const inputQuantity = await $(this.productPage.inputQuantity);
        await expect(inputQuantity).toBeDisplayed();
        await inputQuantity.setValue(quantity);

    }

    async btnAddProductToCart() {
        const addToCartButton = await $(this.productPage.buttonAddToCart);
        await expect(addToCartButton).toBeDisplayed();
        await addToCartButton.click();
    }
}

module.exports = new Product();