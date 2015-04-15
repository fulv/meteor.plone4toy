ContentItems = new Mongo.Collection("contentitems");

ContentTypes = new Mongo.Collection("contenttypes");

Meteor.methods({
    itemCreate: function(itemAttributes) {
        if (ContentItems.find().count() < 20) {

            delaySlowTypes(itemAttributes.typename);

            var item = _.extend(itemAttributes, {
                size: Math.floor(Math.random() * 32) + ' KB',
                modified: new Date(),
                objPositionInParent: 1,
                defaultview: false
            });

            return insertOrFail(item);
        } else {
            clearContentItems();
        }
    }
});

clearContentItems = function() {
    ContentItems.find().map(function(post, index, cursor) {
        ContentItems.remove(post);
    });
    createNotification("All content erased!  At most 20 items are allowed.");
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

        return {
            _id: itemId
        };
    }
}