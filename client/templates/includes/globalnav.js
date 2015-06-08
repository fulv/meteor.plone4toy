Template.GlobalNav.helpers({
  navItems: function() {
    var cursor = ContentItems.find({}, {sort: {modified: -1}, limit: 5});
    return cursor.map(addPlain);
  },
  isFolderish: function() {
    return this.typename === 'folder';
  },
  home: function() {

    var router = Router.current();
    var homeclass;

    if (router && router.params.document)
      homeclass = 'plain';
    else
      homeclass = 'selected';

    return {
      name: 'index_html',
      title: 'Home',
      class: homeclass
    }
  }
});

addPlain = function(doc, index, cursor) {

  var navItemClass = function navItemClass(name) {
    var current = Router.current().params.document;
    if (current) {
      if (name === current)
        return 'selected'
      else
        return 'plain';
    } else {
      return 'plain';
    }
  };

  var i = _.extend(doc, {index: index,
                         class: navItemClass(doc.name),
                         document: doc.name,
                        });
  return i;
};
