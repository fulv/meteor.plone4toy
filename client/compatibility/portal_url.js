// This needs to be global and be loaded after plone.js
// It so happens that the current filename comes after
// plone.js alphabetically, which is why it works.
portal_url = Meteor.absoluteUrl("");
