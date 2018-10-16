const {Given} = require('cucumber');
const page = require('../pageObjects/page');
const loginPage = require('../pageObjects/loginPage');
const {adminAbilities, subscriberAbilities} = require('../actorInteractions/abilities');

Given(/^that (an admin|a subscriber) user logs into WP-Admin$/, (userAccount) => {
    if (userAccount === 'an admin') {
        adminAbilities.login();
    } else if (userAccount === 'a subscriber') {
        subscriberAbilities.login();
    } else {
        throw new Error("The user role does not exist.");
    }
});

Given(/^that the login page is loaded$/, () => {
    page.accessPage(loginPage.path());
});