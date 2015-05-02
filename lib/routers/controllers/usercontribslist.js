UserContribsListController = ContentItemsListController.extend({
  author: function() {
    var user = Meteor.user();
    var username = user ? user.username : '';
    return username;
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
  data: function() {
    if (this.ready()) {
      var data = UserContribsListController.__super__.data.call(this);
      data.Title = 'Content created by ' + this.author();
      return data;
    }
  }
});
