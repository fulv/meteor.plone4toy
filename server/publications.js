Meteor.publish('contentitems', function(options) {
    check(options, {
        sort: Object,
        limit: Number
    });
    var user = Meteor.users.findOne(this.userId);
    Counts.publish(this, 'contentcount',
        ContentItems.find(), { noReady: true });
    if (user) {
        Counts.publish(this, 'owncontentcount',
            ContentItems.find({author: user.username}), { noReady: true});
    }
    return ContentItems.find({}, options);
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
