Meteor.publish('contentitems', function(options) {
  check(options, {
      sort: Match.Optional(Object),
      limit: Match.Optional(Number),
      author: Match.Optional(String),
      name: Match.Optional(String)
  });
  var user = Meteor.users.findOne(this.userId);
  Counts.publish(this, 'contentcount',
      ContentItems.find(), { noReady: true });
  if (user) {
      Counts.publish(this, 'owncontentcount',
          ContentItems.find({author: user.username}), { noReady: true});
  }
  if (options.author) {
    return ContentItems.find({author: options.author,
                              workflow_state: 'Published'
                             },
                             _.omit(options, 'author')
                            );
  } else {
    return ContentItems.find({workflow_state: 'Published'}, options);
  }
});

Meteor.publish('ownprivatecontentitems', function(options) {
  check(options, {
      sort: Match.Optional(Object),
      limit: Match.Optional(Number),
      author: Match.Optional(String),
      name: Match.Optional(String)
  });
  var user = Meteor.users.findOne(this.userId);
  if (user) {
    return ContentItems.find({
                              workflow_state: 'Private',
                              author: user.username
                             },
                             options);
  }
});

Meteor.publish('contenttypes', function(options) {
  return ContentTypes.find({});
});

Meteor.publish('notifications', function() {
  return Notifications.find({});
});

Meteor.publish('registry', function() {
  return Registry.find({});
});

Meteor.publish('connections', function() {
  return Connections.find({});
});

Meteor.publish(('clipboards'), function() {
  var user = Meteor.users.findOne(this.userId);
  if (user) {
    return Clipboards.find({username: user.username});
  } else {
    return [];
  }
});
