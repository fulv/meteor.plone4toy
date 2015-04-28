// A global helper that returns the site's root URL
Template.registerHelper("siteRoot", Meteor.absoluteUrl(""));

// When loading the page, fix the <base> href attribute.
Meteor.startup(function () {
  Meteor.autorun(function () {
      $('base').attr('href', Meteor.absoluteUrl(""));
  });
});
