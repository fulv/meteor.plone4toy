Meteor.subscribe('contenttypes');

Meteor.subscribe('notifications');

Meteor.subscribe('registry', {
    onReady: function() {
        var resetcount = Registry.findOne().resetInstances.length;
        Session.set('SiteStats.resets', resetcount);
    }
});

Meteor.subscribe('connections');
