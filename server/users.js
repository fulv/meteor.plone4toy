/*

Publications:       Collections:      Objects:        Helpers:
- userData          -                 - Meteor.users
- usersCount        - users-count     - UsersCount    - usersCount





*/





Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
    user.profile.github = {};
    user.profile.github.accessToken = user.services.github.accessToken;
    user.profile.github.email = user.services.github.email;
    user.profile.github.username = user.services.github.username;
    user.username = user.services.github.username;
  }
  user.lifetimeCreatedItems = 0;

  return user;
});

Accounts.onLogin(function(attempt) {
  var name = attempt.user.username;
  var clip = Clipboards.findOne({username: name});
  Clipboards.remove(clip);
});


Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({},
                             {fields: {'lifetimeCreatedItems': 1,
                                       'username': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish('usersCount', function() {
    var self = this;
    var count = 0;
    var initializing = true;
    var handle = Meteor.users.find().observeChanges({
        added: function() {
            count++;
            if (!initializing) {
                self.changed('users-count', 1, {count: count});
            }
        },
        removed: function() {
            count--;
            self.changed('users-count', 1, {count: count});
        }
    });

    initializing = false;

    self.added('users-count', 1, {count: count});
    self.ready();

    self.onStop(function() {
        handle.stop();
    });
});
