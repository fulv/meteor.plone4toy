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
      call(callback);
    });

    this.When(/^I click the Add new menu$/, function (callback) {
      this.client.
      click('#plone-contentmenu-factories').
      call(callback);
    });

    this.When(/^I click the News Item menu item$/, function (callback) {
      var firstname = "Empty";
      // this.client.
      // getText('#listing-table tr:first-child td:first-child a').
      // then( function(names) {
      //   console.log("Names: " + names);
      //   firstname = names[0];
      // });
      // console.log("First Item: " + firstname);
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

  }

})();
