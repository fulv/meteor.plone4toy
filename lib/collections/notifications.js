Notifications = new Mongo.Collection('notifications');

createNotification = function(message) {
    Notifications.insert({
        read: false,
        message: message,
        class: "warning",
        type: "Notification"
    });
}

Notifications.allow({
  remove: function(userId, doc) {
    // only allow removing if you are logged in
    return !!userId;
  }
});
