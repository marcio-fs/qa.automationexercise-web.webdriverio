const {
    $,
    expect
} = require('@wdio/globals')

const { getPageElements} = require('../../src/utils/elementsLoader.js');

class NotificationPage {
    constructor() {
        this.deleteAccount = getPageElements('deleteAccount');
        this.registerAccount = getPageElements('registerAccount');
      }

    async verifyTitleAccountCreatedIsVisible() {
        const elem = $(this.registerAccount.title)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('ACCOUNT CREATED!')
    }

    async btnAccountCreatedContinue() {
        const elem = await $(this.registerAccount.btnContinue)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async verifyTitleDeleteAccountIsVisible() {
        const elem = $(this.deleteAccount.title)
        await expect(elem).toBeDisplayed();
       await expect(elem).toHaveText('ACCOUNT DELETED!')
    }

    async btnDeleteAccountContinue() {
        const elem = await $(this.deleteAccount.btnContinue)
        await expect(elem).toBeDisplayed()
        elem.click()
    }
}

module.exports = new NotificationPage();