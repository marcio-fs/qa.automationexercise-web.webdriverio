const {
    $,
    expect
} = require('@wdio/globals')
const { getPageElements} = require('../../src/utils/elementsLoader.js');

class RegisterPage {
    constructor() {
        this.formRegister = getPageElements('formRegister');
        this.titleRegister = getPageElements('titleRegister');
        this.adressRegister = getPageElements('adressRegister');
        this.checkBox = getPageElements('checkBox');
        this.createNewAccountElements = getPageElements('createNewAccount');
      }

    async verifyTitleAccountInformationIsVisible() {
        const elem = $(this.titleRegister.titleAccountInformation)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('ENTER ACCOUNT INFORMATION')
    }

    async formAccountInformation(userData) {
        await $(this.formRegister.title).click();

        const nameFieldAccountInfo = $(this.formRegister.name)
        await expect(nameFieldAccountInfo).toHaveValue(userData.name)
        const emailFieldAccountInfo = $(this.formRegister.email)
        await expect(emailFieldAccountInfo).toHaveValue(userData.email)

        await $(this.formRegister.password).setValue(userData.password);

        await $(this.formRegister.daysDropdwon).selectByAttribute('value', userData.birth_date);
        await $(this.formRegister.mothDropdown).selectByVisibleText(userData.birth_month);
        await $(this.formRegister.yearDropdwon).selectByAttribute('value', userData.birth_year);

    }

    async checkNewsletter() {
        const elem = await $(this.checkBox.newsletter)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async checkOffers() {
        const elem = await $(this.checkBox.offers)
        await expect(elem).toBeDisplayed()
        elem.click()
    }

    async formAdressInformation(userData) {
        await $(this.adressRegister.firstNameInput).setValue(userData.firstname);
        await $(this.adressRegister.lastNameInput).setValue(userData.lastname);
        await $(this.adressRegister.companyInput).setValue(userData.company);
        await $(this.adressRegister.address1Input).setValue(userData.address1);
        await $(this.adressRegister.address2Input).setValue(userData.address2);

        await $(this.adressRegister.countryDropdown).selectByAttribute('value', userData.country);

        await $(this.adressRegister.stateInput).setValue(userData.state);
        await $(this.adressRegister.cityInput).setValue(userData.city);
        await $(this.adressRegister.zipcodeInpt).setValue(userData.zipcode);
        await $(this.adressRegister.mobileNumberInput).setValue(userData.mobile_number);
    }

    async createNewAccount() {
        const createAccountButton = $(this.createNewAccountElements.btnCreateNewAccount);
        await expect(createAccountButton).toBeDisplayed();
        await expect(createAccountButton).toBeClickable();
        await createAccountButton.click();
    }
}

module.exports = new RegisterPage();