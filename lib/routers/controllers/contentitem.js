ContentItemController = ControllerBase.extend({
  waitOn: function() {
    var options = this.findOptions();
    this.contentItemsSub =  Meteor.subscribe('contentitems', options);
    this.privateItemsSub = Meteor.subscribe('privateitems', options);
    return [ this.contentItemsSub, this.privateItemsSub ];
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
    // if (this.ready()) {
      var data = ContentItemController.__super__.data.call(this);
      // data.ready = this.contentItemsSub.ready;
      data.Title = data.item.title;
      data.workflow_state = data.item.workflow_state;
      data.ContentCoreTemplate = Template.ContentItem;
      data.tabClass = this.tabClass;
      return data;
    // }
  }
});
