Notifications = new Mongo.Collection('notifications');

createNotification = function(message) {
    console.log('notify');
    Notifications.insert({
        read: false,
        message: message
    });
}