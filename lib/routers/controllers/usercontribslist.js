UserContribsListController = ContentItemsListController.extend({

  author: function() {
    var user = Meteor.user();
    var username = user ? user.username : '';
    return this.params.author || username;
  },

  findOptions: function() {
    return {
      sort: {modified: -1},
      limit: this.batchLimit(),
      author: this.author()
    };
  },

  items: function() {
    var options = this.findOptions();
    var cursor = ContentItems.find({author: this.author()}, _.omit(options, 'username'));
    return cursor.map(addParity);
  },

  totalCount: function() {
    return Counts.get('owncontentcount');
  },

  tabClass: function(tab) {
    var user = Meteor.user(),
        own = !Router.current().params || !Router.current().params.author;

    if (user)
      own = own || (Router.current().params.author == user.username);

    return {class: {
      'contents': !own ? 'selected' : 'plain',
      'owncontents': own ? 'selected' : 'plain'
    }[tab]};
  },

  yieldRegions: _.extend({},
    ContentItemsListController.yieldRegions,
    {'EmptyViewletBelowContentTitle': {to: 'viewlet-below-content-title'} }
  ),

  data: function() {
    var data = UserContribsListController.__super__.data.call(this);
    data.tabClass = this.tabClass;
    if (this.ready()) {
      var hasMore = this.totalCount() > this.batchLimit();
      var nextPath = this.route.path({
              batchLimit: this.batchLimit() + this.increment,
              author: this.author()
          });
      data.nextPath = hasMore ? nextPath : null;
      data.Title = 'Content created by ' + this.author();
    }
    return data;
  }
});
