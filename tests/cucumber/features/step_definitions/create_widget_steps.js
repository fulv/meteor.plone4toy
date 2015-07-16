var assert = require('assert');

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
      getText('#login-name-link').
      should.eventually.contain('bob').
      and.notify(callback);
    });

    this.When(/^I click the Add new menu$/, function (callback) {
      this.client.
      waitForExist('#plone-contentmenu-factories').
      click('#plone-contentmenu-factories').
      waitForVisible('#news-item').
      call(callback);
    });

    this.When(/^I click the News Item menu item$/, function (callback) {
      this.client.debug().
      click('#news-item').
      call(callback);
    });

    this.When(/^I click the button "([^"]*)"$/, function (arg1, callback) {
      callback.pending();
    });

    this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1, callback) {
      callback.pending();
    });

    this.Then(/^I should see a content item of type News$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });
  }

})();
