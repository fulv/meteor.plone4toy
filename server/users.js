Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    user.profile = options.profile;
    user.profile.github = {};
    user.profile.github.accessToken = user.services.github.accessToken;
    user.profile.github.email = user.services.github.email;
    user.profile.github.username = user.services.github.username;
    user.username = user.services.github.username;
  }
 
  return user;
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
