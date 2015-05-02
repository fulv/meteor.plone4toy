Template.AddContentMenu.helpers({
    activeState: function() {
        return Session.get('AddContentMenu.active');
    },
    contentTypes: function() {
        return ContentTypes.find();
    }
});

Template.AddContentMenu.events({
    'click .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('AddContentMenu.active', 'activated');
    },
    'click dl.activated .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('AddContentMenu.active', 'deactivated');
    },
    'click dd': function(e) {
        e.preventDefault();

        Session.set('AddContentMenu.active', 'deactivated');
    },
    'mouseleave dl': function(e) {
        Session.set('AddContentMenu.active', 'deactivated');
    }
});

Template.AddItem.events({
    'click a': function(e) {
        e.preventDefault();

        var element = e.target;
        if (element.nodeName != 'A') {
            element = e.target.parentNode;
        }
        var type = element.id;
        var item = {
            typename: type,
        };

        Meteor.call('itemCreate', item, function(error, result) {
            if (error) {
                throwError(error.reason);
            }
        });

        if (type === 'slow-fail') {
            throwError("This type will always fail to add an item on the server.")
        }

        if (type === 'slow-success') {
            throwError("The server takes 5 seconds to create one of these items. Watch how the title suffix changes from (Client) to (Server).")
        }

    }
});
