Meteor.publish('contentitems', function(options) {
  check(options, {
      sort: Match.Optional(Object),
      limit: Match.Optional(Number),
      author: Match.Optional(String),
  });
  var user = Meteor.users.findOne(this.userId);
  Counts.publish(this, 'contentcount',
      ContentItems.find(), { noReady: true });
  Counts.publish(this, 'publiccount',
      ContentItems.find({ workflow_state: 'Published' }), { noReady: true });

  if (user) {
      Counts.publish(this, 'owncontentcount',
          ContentItems.find({ author: user.username }), { noReady: true });
  }
  if (options.author) {
    var query = { author: options.author, workflow_state: 'Published' };
    return ContentItems.find( query, _.omit( options, 'author' ));
  } else {
    return ContentItems.find({ workflow_state: 'Published' }, options );
  }
});

Meteor.publish('privateitems', function(options) {
  check(options, {
      sort: Match.Optional(Object),
      limit: Match.Optional(Number),
      author: Match.Optional(String),
      name: Match.Optional(String)
  });
  var user = Meteor.users.findOne(this.userId);
  if (user) {
    var query;
    if (user.username === 'admin') {
      query = { workflow_state: 'Private' };
    } else {
      query = { workflow_state: 'Private', author: user.username };
    }

    Counts.publish(this, 'privatecount',
      ContentItems.find(query), { noReady: true });

    return ContentItems.find( query, options );
  } else {
    return [];
  }
});

Meteor.publish('singleitem', function(options) {
  check(options, {
      name: String
  });
  item = ContentItems.findOne(options);
  if (item) {
    var state = item.workflow_state;
    if (state === 'Private') {
      var user = Meteor.users.findOne(this.userId);
      if (user) {
        var author = item.author;
        var username = user.username;
        if (username === 'admin' || username === author) {
          return ContentItems.find(options);
        } else {
          return ContentItems.find(options, {fields: {name: 1, workflow_state: 1}});
        }
      } else {
        console.log(options);
        return ContentItems.find(options, {fields: {name: 1, workflow_state: 1}});
      }
    } else {
      return ContentItems.find(options);
    }
  } else {
    return [];
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
