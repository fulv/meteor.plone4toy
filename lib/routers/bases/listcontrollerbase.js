var increment = 5;

ListControllerBase = RouteController.extend({
    increment: increment,
    batchLimit: function() {
        return parseInt(this.params.batchLimit) || this.increment;
    },
    batchSize: function() {
        return Math.min(this.items().length, this.batchLimit());
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
    data: function() {
      var hasMore = this.items().length === this.batchLimit();
      var nextPath = this.route.path({
              batchLimit: this.batchLimit() + this.increment
          });
      return {
          items: this.items(),
          nextPath: hasMore ? nextPath : null,
          batchIncrement: this.increment,
          batchSize: this.batchSize(),
          showBorder: !!Meteor.userId(),
        }
    }
});

