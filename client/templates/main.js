Template.globalnav.helpers({
    isFolderish: function() {
        return this.typename === 'folder';
    }
});

Template.contentRow.helpers({
    modifiedText: function() {
        return moment(this.modified).format('MMM DD, YYYY h:mm A');
    },
    modifiedClass: function() {
        return moment(this.modified).format('YYYY-MM-DD-hh-mm-ss');
    },
    type: function() {
        return ContentTypes.findOne({name: this.typename}).title;
    }
});

Template.actionMenuContent.helpers({
    contentTypes: function() {
        return ContentTypes.find();
    }
});

Template.addItem.events({
    'click a': function(e) {
        e.preventDefault();

        var element = e.target;
        if (element.nodeName != 'A') {
            element = e.target.parentNode;
        }
        var type = element.id,
            text = dimsum.sentence(2),
            wordcount = Math.floor(Math.random() * 5) + 1,
            regexp = new RegExp("((\\S+\\s+){" + wordcount + "}).*"),
            title = text.replace(regexp, "$1").trim();
        title.replace(/(\W|\S)/, "" );
        var item = {
            title: title,
            name: title.toLowerCase().split(' ').join('-'),
            description: text,
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

Template.errors.helpers({
    errors: function() {
        return Errors.find();
    },
    notifications: function() {
        return Notifications.find();
    }
});

Template.error.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(error._id);
    }, 3000);
};


Template.notification.rendered = function() {
    var notification = this.data;
    Meteor.setTimeout(function() {
        Notifications.remove(notification._id);
    }, 3000);
};

Template.SiteStats.helpers({
    usersCount: function() {
        console.log('helper');
        return UsersCount.findOne().count;
    },
    activeState: function() {
        return Session.get('SiteStats.active');
    },
});

Template.SiteStats.events({
    'click': function(e) {
        e.preventDefault();

        Session.set('SiteStats.active', 'activated');
    },
    'mouseleave dl': function(e) {
        Session.set('SiteStats.active', 'deactivated');
    }
});
