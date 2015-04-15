Meteor.publish('contentitems', function(options) {
	check(options, {
		sort: Object,
		limit: Number
	});
	Counts.publish(this, 'contentcount', ContentItems.find(), { noReady: true });
	return ContentItems.find({}, options);
});

Meteor.publish('contenttypes', function(options) {
	return ContentTypes.find({});
})