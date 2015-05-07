ContentItemsListController = ListControllerBase.extend({
  waitOn: function() {
      this.contentItemsSub =  Meteor.subscribe('contentitems',
                                               this.findOptions());
      return this.contentItemsSub;
  },
  items: function() {
      var cursor = ContentItems.find({}, this.findOptions());
      return cursor.map(addParity);
  },
  totalCount: function() {
    return Counts.get('contentcount');
  },
  tabClass: function(tab) {
    tabs = {
      'contents': 'selected',
      'owncontents': 'plain'
    };
    return {class: tabs[tab]};
  },
  data: function() {
      if (this.ready()) {
        var data = ContentItemsListController.__super__.data.call(this);
        data.ready = this.contentItemsSub.ready;
        data.Title = 'Site';
        data.RowTemplate = Template.ContentRow;
        data.TableHeadTemplate = Template.FolderContentsTableHead;
        data.tabClass = this.tabClass;
        return data;
      }
  }
});

