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
    'EditBar': {to: 'greenbar'},
    'Title': {to: 'title'},
    'ViewletBelowContentTitle': {to: 'viewlet-below-content-title'},
  },
  ContentCoreTemplate: function() {
    if (Meteor.isClient) {
      return Template.ContentItem;
    }
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

