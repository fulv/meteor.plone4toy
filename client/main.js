Meteor.subscribe('contenttypes');

Meteor.subscribe('notifications');

Meteor.subscribe('registry', {
    onReady: function() {
        Session.set('SiteStats.resets', Registry.findOne().resets);
    }
});

