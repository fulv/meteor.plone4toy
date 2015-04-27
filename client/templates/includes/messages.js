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
        console.log(message);
        if (message.type === "Error") {
            console.log("removing Error " + message._id);
            Errors.remove(message._id);
        } else {
            console.log("removing notification " + message._id);
            Notifications.remove(message._id);
        }
    }, 3000);
};


