UsersCount = new Mongo.Collection('users-count');

Meteor.subscribe("userData");

Template.registerHelper('routeData', function() {
  return {author: this.author};
});
