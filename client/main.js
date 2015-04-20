Meteor.subscribe('contenttypes');

Meteor.subscribe('notifications');

usersCountSub = Meteor.subscribe('usersCount');

Meteor.subscribe('registry', {
    onReady: function() {
        Session.set('SiteStats.resets', Registry.findOne().resets);
    }
});

