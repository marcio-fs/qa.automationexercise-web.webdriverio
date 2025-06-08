const {
    $,
    expect
} = require('@wdio/globals')

const { getPageElements} = require('../../src/utils/elementsLoader.js');
const Home = require('../pageobjects/home.page')

class LoginPage extends Home {
    constructor() {
        super();
        this.signUpElements = getPageElements('signUp');
        this.formLogin = getPageElements('formLogin');
      }

    async verifyNewUserSignupIsVisible() {
        const elem = $(this.signUpElements.signupText)
        await expect(elem).toBeDisplayed();
        await expect(elem).toHaveText('New User Signup!')
    }

    async formRegisterNewUser(userLoginData) {
        console.log('Registering new user with data:', userLoginData); // Log o user para debugging
        await $(this.formLogin.nameInput).setValue(userLoginData.name);
        await $(this.formLogin.emailInput).setValue(userLoginData.email);
    }

    async registerNewUser() {
        const signUpButton = $(this.formLogin.signUpButton);
        await expect(signUpButton).toBeDisplayed();
        await expect(signUpButton).toBeClickable();
        await signUpButton.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();