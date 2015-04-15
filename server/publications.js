Meteor.publish('contentitems', function(options) {
	check(options, {
		sort: Object,
		limit: Number
	});
	return ContentItems.find({}, options);
});

Meteor.publish('contenttypes', function(options) {
	return ContentTypes.find({});
})