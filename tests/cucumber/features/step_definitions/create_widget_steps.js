(function () {

  'use strict';

  module.exports = function () {

    this.Given(/^I am logged in$/, function (callback) {
      this.client.
      url(process.env.ROOT_URL).
      waitForExist('body *').
      waitForVisible('body *').
      click('#login-sign-in-link').
      setValue('#login-username', 'bob').
      setValue('#login-password', 'testtest').
      click('#login-buttons-password').
      call(callback);
    });

    this.When(/^I fill in the name with "([^"]*)"$/, function (arg1, callback) {
      callback.pending();
    });

    this.When(/^I click the button "([^"]*)"$/, function (arg1, callback) {
      callback.pending();
    });

    this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1, callback) {
      callback.pending();
    });

  }

})();
