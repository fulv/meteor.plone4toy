ContentItemListController = RouteController.extend({
    template: 'layout',
    increment: 5,
    batchLimit: function() {
        return parseInt(this.params.batchLimit) || this.increment;
    },
    batchSize: function() {
        return Math.min(this.contentItems().length, this.batchLimit());
    },
    findOptions: function() {
        return {
            sort: {modified: -1},
            limit: this.batchLimit()
        };
    },
    subscriptions: function() {
        this.contentItemsSub =  Meteor.subscribe('contentitems', this.findOptions());
    },
    contentItems: function() {
        var cursor = ContentItems.find({}, this.findOptions()),
            addEvenOdd = function(doc, index, cursor) {
                var i = _.extend(doc, {index: index,
                                       evenodd: (index%2)?'odd':'even'});
                return i;
            };

        return cursor.map(addEvenOdd);
    },
    data: function() {
        var hasMore = this.contentItems().length === this.batchLimit(),
            nextPath = this.route.path({
                batchLimit: this.batchLimit() + this.increment
            });
        return {
            contentItems: this.contentItems(),
            ready: this.contentItemsSub.ready,
            nextPath: hasMore ? nextPath : null,
            batchIncrement: this.increment,
            batchSize: this.batchSize()
        }
    }
})

Router.route('/:batchLimit?', {
    name: 'contentItemList',
});

Router.configure({
    autoRender: true,
    loadingTemplate: 'loading',
    layoutTemplate: 'mainlayout',
    onAfterAction: function() {
        jQuery(initializeMenus);
    },
});