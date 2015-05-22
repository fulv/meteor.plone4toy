ContentItemController = ControllerBase.extend({
  waitOn: function() {
    var options = this.findOptions();
    this.contentItemsSub =  Meteor.subscribe('singleitem', options);
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
  // showBorder: function() {
  //   var loggedIn = !!Meteor.userId();
  //   var allowed = Meteor.call('checkPermissions', this.params.document);
  //   return loggedIn && allowed;
  // },
  data: function() {
    // if (this.ready()) {
    if (this.item()) {
      var data = ContentItemController.__super__.data.call(this);
      // data.ready = this.contentItemsSub.ready;
      data.Title = data.item.title;
      data.workflow_state = data.item.workflow_state;
      data.ContentCoreTemplate = Template.ContentItem;
      data.tabClass = this.tabClass;
      return data;

    } else {
      return false;
    }
    // }
  }
});
