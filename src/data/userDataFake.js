const { faker } = require('@faker-js/faker');

/**
 * Generates valid fake user data for account creation endpoint
 * @typedef {Object} UserData
 * @property {string} name - Full name
 * @property {string} email - Valid email address
 * @property {string} password - Strong password
 * @property {string} title - Title (Mr/Mrs)
 * @property {string} birth_date - Day of birth (1-28)
 * @property {string} birth_month - Month of birth
 * @property {string} birth_year - Year of birth (1900-2021)
 * @property {string} firstname - First name
 * @property {string} lastname - Last name
 * @property {string} company - Company name
 * @property {string} address1 - Primary address
 * @property {string} address2 - Secondary address
 * @property {string} country - Country
 * @property {string} zipcode - Zip code
 * @property {string} state - State
 * @property {string} city - City
 * @property {string} mobile_number - 10-digit phone number
 */

/**
 * Generates fake user data with optional overrides
 * @param {Partial<UserData>} [overrides={}] - Fields to override in default data
 * @returns {UserData} Complete user data object
 */
function generateFakeUser(overrides = {}) {
    const countries = [
        'India',
        'United States',
        'Canada',
        'Australia',
        'Israel',
        'New Zealand',
        'Singapore'
    ];

    const defaultUserData = {
        name: faker.person.fullName(),
        email: faker.internet.email({ provider: 'test.automationexercise.com' }).toLowerCase(),
        password: generateStrongPassword(),
        title: faker.helpers.arrayElement(['Mr', 'Mrs']),
        birth_date: faker.number.int({ min: 1, max: 28 }).toString(),
        birth_month: faker.date.month(),
        birth_year: faker.number.int({ min: 1900, max: 2021 }).toString(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement(countries),
        zipcode: faker.location.zipCode(),
        state: faker.location.state(),
        city: faker.location.city(),
        mobile_number: faker.phone.number('##########')
    };

    return { ...defaultUserData, ...overrides };
}

/**
 * Generates a strong password with special characters
 * @returns {string} Generated password
 */
function generateStrongPassword() {
    return faker.internet.password({
        length: 10,
        memorable: false,
        prefix: 'P@ssWrd!'
    });
}

module.exports = generateFakeUser;