Meteor.methods({
  kill: function() {
    if (!this.isSimulation) {
      if (isAdmin()) {
        Meteor.users.update(
            {'username': {$ne : "admin"}},
            {$set : { "services.resume.loginTokens" : [] }},
            {multi:true}
        );
        createNotification("Logins are disabled");
        toggleLogins();
      }
      return true;
    }
  },

  resuscitate: function() {
    if (isAdmin()) {
      toggleLogins();
    };
  }
});


