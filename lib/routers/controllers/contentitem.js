ContentItemController = ControllerBase.extend({
  waitOn: function() {
    this.contentItemsSub =  Meteor.subscribe('contentitems',
                                             this.findOptions());
    return this.contentItemsSub;
  },
  item: function() {
    var cursor = ContentItems.findOne(this.findOptions());
    return cursor;
  },
  tabClass: function(tab) {
    tabs = {
      'view': 'selected',
      'edit': 'plain',
      'sharing': 'plain'
    };
    return {class: tabs[tab]};
  },
  data: function() {
    if (this.ready()) {
      var data = ContentItemController.__super__.data.call(this);
      data.ready = this.contentItemsSub.ready;
      data.Title = data.item.title;
      data.ContentCoreTemplate = Template.ContentItem;
      data.tabClass = this.tabClass;
      return data;
    }
  }
});
