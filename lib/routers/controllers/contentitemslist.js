ContentItemsListController = ListControllerBase.extend({
  waitOn: function() {
      var options = this.findOptions();
      this.contentItemsSub =  Meteor.subscribe('contentitems', options);
      this.privateItemsSub = Meteor.subscribe('privateitems', options);
      return [ this.contentItemsSub, this.privateItemsSub ];
  },
  items: function() {
      var cursor = ContentItems.find({}, this.findOptions());
      return cursor.map(addParity);
  },
  totalCount: function() {
    var public = Counts.get('publiccount');
    var private = Counts.get('privatecount');
    if (private) {
      return public + private;
    } else {
      return public;
    }
  },
  tabClass: function(tab) {
    tabs = {
      'contents': 'selected',
      'owncontents': 'plain'
    };
    return {class: tabs[tab]};
  },
  data: function() {
      // if (this.ready()) {
        this.state.set('selectAll.template', 'SelectAll');
        var data = ContentItemsListController.__super__.data.call(this);
        data.ready = this.contentItemsSub.ready;
        data.Title = 'Site';
        data.RowTemplate = Template.ContentRow;
        data.TableHeadTemplate = Template.FolderContentsTableHead;
        data.ContentCoreTemplate = Template.ListingContents;
        data.tabClass = this.tabClass;
        return data;
      // }
  }
});

