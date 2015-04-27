Template.Messages.helpers({
    errors: function() {
        return Errors.find();
    },
    notifications: function() {
        return Notifications.find();
    }
});

Template.MessageBox.rendered = function() {
    var message = this.data;
    Meteor.setTimeout(function() {
        if (message.type === "Error") {
            Errors.remove(message._id);
        } else {
            Notifications.remove(message._id);
        }
    }, 3000);
};


