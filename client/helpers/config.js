Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

addPlain = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           class: 'plain',
                           href: Meteor.absoluteUrl(doc.name)  // this should eventually be replaced by the route
                          });
    return i;
};
