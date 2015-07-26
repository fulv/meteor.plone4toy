Template.ListingTable.helpers({
    ContentCoreTemplate: function() {
      if (Router.current().route)
        return Router.current().ContentCoreTemplate();
      else
        return Template.notFound;
    }
});
