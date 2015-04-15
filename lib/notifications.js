Notifications = new Mongo.Collection('notifications');

createNotification = function(message) {
    Notifications.insert({
        read: false,
        message: message
    });
}