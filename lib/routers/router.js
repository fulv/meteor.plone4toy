Router.configure({
    autoRender: true,
    template: 'TableContents',
    loadingTemplate: 'Loading',
    layoutTemplate: 'ListingLayout',
    onAfterAction: function() {
    },
});

Router.route('/@@users/:batchLimit?', {
    name: 'users',
    controller: UsersListController
});

Router.route('/@@resets/:batchLimit?', {
    name: 'resets',
    controller: ResetsListController
});

Router.route('/@@connections/:batchLimit?', {
    name: 'connections',
    controller: ConnectionsListController
});

Router.route('/@@owncontent/:batchLimit?/author/:author', {
    name: 'authorContentItemsList',
    controller: UserContribsListController
});

Router.route('/@@owncontent/:batchLimit?', {
    name: 'ownContentItemsList',
    controller: UserContribsListController
});

Router.route('/:batchLimit(\\d+)?', {
    name: 'contentItemsList',
    controller: ContentItemsListController
});

Router.route('/:document(\\D.*)?', {
    name: 'contentItem',
    controller: ContentItemController,
    template: 'ItemContentCore'
});

Router.onBeforeAction(requireLogin, {only: 'ownContentItemsList'});
