ContentItemController = ControllerBase.extend({
  waitOn: function() {
    var options = this.findOptions();
    this.contentItemsSub =  Meteor.subscribe('singleitem', options);
    if (Meteor.isServer) {
        console.log("sleeping....");
        Meteor._sleepForMs(5000);
        console.log("waking up!");
    }
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
    var data = ContentItemController.__super__.data.call(this);
    data.tabClass = this.tabClass;
    if (this.ready()) {
      if (this.item()) {
        data.Title = data.item.title;
        data.workflow_state = data.item.workflow_state;
      } else {
        data = false;
      }
      return data;
    }
    else
      return null;
  }
});
