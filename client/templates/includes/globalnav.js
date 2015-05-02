Template.GlobalNav.helpers({
    navItems: function() {
        var cursor = ContentItems.find({}, {sort: {modified: -1}, limit: 5});
        return cursor.map(addPlain);
    },
    isFolderish: function() {
        return this.typename === 'folder';
    }
});

addPlain = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           class: 'plain',
                           href: Meteor.absoluteUrl(doc.name)  // this should eventually be replaced by the route
                          });
    return i;
};
