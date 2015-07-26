var increment = 5;

ListControllerBase = ControllerBase.extend({
    increment: increment,
    batchLimit: function() {
      return parseInt(this.params.batchLimit) || this.increment;
    },
    batchSize: function() {
      return Math.min(this.items().length, this.batchLimit());
    },
    batchIncrement: function() {
      return Math.min(this.totalCount() - this.batchLimit(), this.increment);
    },
    findOptions: function() {
        return {
            sort: {modified: -1},
            limit: this.batchLimit()
        };
    },
    items: function() {
      return {}
    },
    totalCount: function() {
      return items().length;
    },
    ContentCoreTemplate: function() {
      if (Meteor.isClient) {
        return Template.ListingContents;
      }
    },
    data: function() {
      var hasMore = this.totalCount() > this.batchLimit();
      var nextPath = this.route.path({
              batchLimit: this.batchLimit() + this.increment
          });
      var data = ListControllerBase.__super__.data.call(this);
      data.items = this.items();
      data.nextPath = hasMore ? nextPath : null;
      data.batchIncrement = this.batchIncrement();
      data.batchSize = this.batchSize();
      data.displayContentsTab = true;
      return data;
    }
});

