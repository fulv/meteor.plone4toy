// plog.js

if (Meteor.isClient) {
  // This code only runs on the client

  // A global helper that returns the site's root URL
  Template.registerHelper("siteroot", Meteor.absoluteUrl(""));

  // When loading the page, fix the <base> href attribute.
  Meteor.startup(function () {
    Meteor.autorun(function () {
        $('base').attr('href', Meteor.absoluteUrl(""));
    });
  });
}
