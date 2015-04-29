Router.configure({
    autoRender: true,
    template: 'TableContents',
    loadingTemplate: 'Loading',
    layoutTemplate: 'ListingLayout',
    onAfterAction: function() {
    },
});

Router.route('/@@resets/:batchLimit?', {
    name: 'resets',
    controller: ResetsListController
});

Router.route('/@@connections/:batchLimit?', {
    name: 'connections',
    controller: ConnectionsListController
});

Router.route('/:batchLimit?', {
    name: 'contentItemsList',
    controller: ContentItemsListController
});

