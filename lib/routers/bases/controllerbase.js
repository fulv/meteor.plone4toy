ControllerBase = RouteController.extend({
  findOptions: function() {
    return {
        name: this.params.document
    };
  },
  item: function() {
    return {}
  },
  data: function() {
    return {
      showBorder:  !!Meteor.userId(),
      item: this.item(),
      displayContentsTab: false,
      getData: this.params
    }
  }
});

