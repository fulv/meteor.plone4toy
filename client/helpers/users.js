UsersCount = new Mongo.Collection('users-count');

Meteor.subscribe("userData");

Template.registerHelper('routeData', function() {
  console.log(this);
  return {author: this.author};
});
