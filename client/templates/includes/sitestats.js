Template.SiteStats.helpers({
    usersCount: function() {
      ready = Meteor.subscribe('usersCount').ready();

      if (ready) {
        return UsersCount.findOne().count;
      }
    },
    max_items:  function() {
      return max_items;
    },
    activeState: function() {
      return Session.get('SiteStats.active');
    },
    resets: function() {
      return Session.get('SiteStats.resets');
    },
    lifetimeCreatedItems: function() {
      return Meteor.user().lifetimeCreatedItems;
    },
    connections: function() {
      ready = Meteor.subscribe('connections').ready();

      if (ready) {
        var connections = Connections.find();
        return Connections.find().count();
      }
    }
});

Template.SiteStats.events({
  'click .actionMenuHeader': function(e) {
    e.preventDefault();

    Session.set('SiteStats.active', 'activated');
  },
  'click dl.activated .actionMenuHeader': function(e) {
    e.preventDefault();

    Session.set('SiteStats.active', 'deactivated');
  },
  'click dd': function(e) {
    Session.set('SiteStats.active', 'deactivated');
  },
  'mouseleave dl': function(e) {
    Session.set('SiteStats.active', 'deactivated');
  },
  'click #sitetools-kill a': function(e) {
    e.preventDefault();
    Meteor.call('kill', function(error, result) {
      if (error) {
        throwError(error.reason);
      }
    });
  },
  'click #sitetools-enableLogins a': function(e) {
    e.preventDefault();
    Meteor.call('resuscitate', function(error, result) {
      if (error) {
        throwError(error.reason);
      }
    });
  }
});
