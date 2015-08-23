EmptyController = RouteController.extend({
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
      }
    } else {
      return {};
    }
  }
});

