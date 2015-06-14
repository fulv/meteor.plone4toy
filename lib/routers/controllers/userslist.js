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
      console.log('data is ready');
      console.log(this);
      var data = UsersListController.__super__.data.call(this);
      data.ready = this.usersSub.ready;
      data.Title = "Users";
      data.RowTemplate = Template.UserRow;
      data.TableHeadTemplate = Template.UsersTableHead;
      data.ContentCoreTemplate = Template.ListingContents;
      data.showBorder = function() { console.log("FOO!"); return false;};
      return data;
    // } else {
    //   console.log("data not ready!");
    //   this.totalCount = function() { return 0; };
    //   var data = UsersListController.__super__.data.call(this);
    //   data.showBorder = function () { console.log("not ready!"); return false;}
    //   return data;
    }
  },
  action: function() {
    if (this.ready()) {
      this.render();
    } else {
      this.render('Loading');
    }
  }
});
