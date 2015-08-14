Router.configure({
    autoRender: true,
    template: 'TableContents',
    layoutTemplate: 'ListingLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'notFound',
    onAfterAction: function() {
    }
});

Router.route('/@@users/:batchLimit(\\d+)?', {
    name: 'users',
    controller: UsersListController,
});

Router.route('/@@resets/:batchLimit(\\d+)?', {
    name: 'resets',
    controller: ResetsListController,
});

Router.route('/@@connections/:batchLimit(\\d+)?', {
    name: 'connections',
    controller: ConnectionsListController,
});

Router.route('/@@authorcontent/:author([a-zA-Z]\\w*)/:batchLimit(\\d+)?', {
    name: 'authorContentItemsList',
    controller: UserContribsListController,
});

Router.route('/@@owncontent/:batchLimit(\\d+)?', {
    name: 'ownContentItemsList',
    controller: UserContribsListController,
});

Router.route('/:batchLimit(\\d+)?', {
    name: 'contentItemsList',
    controller: ContentItemsListController,
});

Router.route('/:document(\\D[\\w-]*)?', {
    name: 'contentItem',
    controller: ContentItemController,
    template: 'ItemContentCore',
});

Router.plugin('dataNotFound');

Router.onBeforeAction(requireLogin, {only: 'ownContentItemsList'});

Router.onBeforeAction(requireLoginForContentItem, {only: 'contentItem'});

Router.onRerun(unsetBorder, {only: ['users', 'connections', 'resets']});

Router.onRerun(setBorder, {only: ['contentItem', 'contentItemsList', 'authorContentItemsList', 'ownContentItemsList']});

Router.onBeforeAction(unsetBorder, {only: ['users', 'connections', 'resets']});

Router.onBeforeAction(setBorder, {only: ['contentItem', 'contentItemsList', 'authorContentItemsList', 'ownContentItemsList']});

function setBorder() {
  this.state.set('showBorder', !!Meteor.userId());
  this.next();
};

function unsetBorder() {
  this.state.set('showBorder', false);
  this.next();
};
