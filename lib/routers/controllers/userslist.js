UsersListController = ListControllerBase.extend({
  findOptions: function() {
    return {
      sort: {username: 1},
      limit: this.batchLimit()
    };
  },
  waitOn: function() {
    this.usersSub = Meteor.subscribe('userData', this.findOptions());
    return this.usersSub;
  },
  items: function() {
    var cursor = Meteor.users.find({}, this.findOptions());
    if (cursor) {
      var instances = cursor.map(addParity);
      return _.first(instances, this.batchLimit());
    }
  },
  totalCount: function() {
    return UsersCount.findOne().count;
  },
  data: function() {
    if (this.ready()) {
      var data = UsersListController.__super__.data.call(this);
      data.ready = this.usersSub.ready;
      data.Title = "Users";
      data.RowTemplate = Template.UserRow;
      data.TableHeadTemplate = Template.UsersTableHead;
      data.ContentCoreTemplate = Template.ListingContents;
      data.showBorder = false;
      return data;
    }
  }
});
