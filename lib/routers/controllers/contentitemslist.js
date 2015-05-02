ContentItemsListController = ListControllerBase.extend({
    waitOn: function() {
        this.contentItemsSub =  Meteor.subscribe('contentitems', this.findOptions());
        return this.contentItemsSub;
    },
    items: function() {
        var cursor = ContentItems.find({}, this.findOptions());
        return cursor.map(addParity);
    },
    data: function() {
        var hasMore = this.items().length === this.batchLimit();
        var nextPath = this.route.path({
                batchLimit: this.batchLimit() + this.increment
            });
        if (this.ready()) {
          var data = ContentItemsListController.__super__.data.call(this);
          data.ready = this.contentItemsSub.ready;
          data.Title = 'Site';
          data.RowTemplate = Template.ContentRow;
          data.TableHeadTemplate = Template.FolderContentsTableHead;
          return data;
        }
    }
});
