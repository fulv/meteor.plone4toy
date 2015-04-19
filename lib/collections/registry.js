Registry = new Mongo.Collection("registry");

incrementResets = function() {
	reg_id = Registry.findOne()._id;
    Registry.update(reg_id, { $inc: {resets: 1} });
    if (Meteor.isClient) {
	    Session.set('SiteStats.resets', Registry.findOne().resets);
	};
};

