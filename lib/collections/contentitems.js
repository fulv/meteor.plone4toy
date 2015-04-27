ContentItems = new Mongo.Collection("contentitems");

ContentTypes = new Mongo.Collection("contenttypes");

Meteor.methods({
    itemCreate: function(itemAttributes) {
        if (ContentItems.find().count() < max_items) {

            delaySlowTypes(itemAttributes.typename);

            var item = _.extend(itemAttributes, {
                size: Math.floor(Math.random() * 32) + ' KB',
                modified: new Date(),
                objPositionInParent: 1,
                defaultview: false,
                author: Meteor.user().username
            });

            return insertOrFail(item);
        } else {
            clearContentItems( Meteor.user() );
        }
    }
});

clearContentItems = function(user) {
    ContentItems.find().map(function(post, index, cursor) {
        ContentItems.remove(post);
    });
    incrementResets();
    createNotification("All content erased!  At most " + max_items + " items are allowed.");
    if (Meteor.isServer) {
        Email.send({
            to: 'fulviocasali@gmail.com',
            from: 'plone4toy@solitonconsulting.com',
            subject: 'All content erased for the ' + Registry.findOne().resets + 'th time',
            text: user.username + ' was the culprit this time, created ' + user.lifetimeCreatedItems + ' items.'
        });
    }
}

delaySlowTypes = function(typename) {
    if (typename === 'slow-success' || typename === 'slow-fail') {
        if (Meteor.isServer) {
            Meteor._sleepForMs(5000);
        }
    }
}

insertOrFail = function(item) {
    typename = item.typename;
    if (Meteor.isServer && typename === 'slow-fail') {
        throw new Meteor.Error('gone', "And.... it's gone!");
    } else {
        if (typename === 'slow-success' || typename === 'slow-fail') {
            if (Meteor.isServer) {
                item.title += " (Server)";
            } else {
                item.title += " (Client)";
            }
        }
        var itemId = ContentItems.insert(item);

        Meteor.users.update(Meteor.userId(), { $inc: {lifetimeCreatedItems: 1} });

        return {
            _id: itemId
        };
    }
}
