Registry = new Mongo.Collection("registry");

incrementResets = function() {
  var reg_id = Registry.findOne()._id;
  var resetInstance = {
    datetime: new Date(),
    author: Meteor.user().username
  };
    Registry.update(reg_id, {
      $inc: {resets: 1},
      $addToSet: {resetInstances: resetInstance}
    });
    if (Meteor.isClient) {
      Session.set('SiteStats.resets', Registry.findOne().resetInstances.length);
  };
};

