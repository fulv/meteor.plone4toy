( function () {

  'use strict';

  Meteor.methods({
    addUser: function (opts) {
      Meteor.users.remove({});
      Accounts.createUser({
        username: opts.username,
        password: opts.password ? opts.password : "testtest"
      });
    }
  });

})();
