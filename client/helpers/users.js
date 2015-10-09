UsersCount = new Mongo.Collection('users-count');

Meteor.subscribe("userData");

Template.registerHelper('routeData', function() {
  return {author: this.author};
});

Template.registerHelper('isAdmin', function() {
  return isAdmin();
});

Template.registerHelper('loginsEnabled', function() {
  ready = Meteor.subscribe('registry').ready();

  if (ready) {
    return Registry.findOne().loginsEnabled;
  };
});
