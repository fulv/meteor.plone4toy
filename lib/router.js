ContentItemListController = RouteController.extend({
    template: 'layout',
    increment: 5,
    batchLimit: function() {
        return parseInt(this.params.batchLimit) || this.increment;
    },
    findOptions: function() {
        return {
            sort: {modified: -1},
            limit: this.batchLimit()
        };
    },
    waitOn: function() {
        return Meteor.subscribe('contentitems', this.findOptions());
    },
    data: function() {
        var cursor = ContentItems.find({}, this.findOptions()),
            addEvenOdd = function(doc, index, cursor) {
                var i = _.extend(doc, {index: index,
                                       evenodd: (index%2)?'odd':'even'});
                return i;
            };

        return { contentItems: cursor.map(addEvenOdd) };
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
    }
});