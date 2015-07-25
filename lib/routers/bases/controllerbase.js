ControllerBase = RouteController.extend({
  findOptions: function() {
    return {
      name: this.params.document
    };
  },
  item: function() {
    return {}
  },
  yieldRegions: {
    'Title': {to: 'title'},
  },
  data: function() {
    if (this.ready()) {
      return {
        item: this.item(),
        displayContentsTab: false,
        getData: this.params
      }
    } else {
      return {};
    }
  }
});

