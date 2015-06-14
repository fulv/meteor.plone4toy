Router.configure({
    autoRender: true,
    template: 'TableContents',
    layoutTemplate: 'ListingLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'notFound',
    onAfterAction: function() {
    }
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

Router.onBeforeAction(myDataNotFound, {only: 'contentItem'});

Router.onRerun(unsetBorder, {only: ['users', 'connections', 'resets']});

Router.onRerun(setBorder, {only: ['contentItem', 'contentItemsList', 'authorContentItemsList', 'ownContentItemsList']});

function setBorder() {
  this.state.set('showBorder', !!Meteor.userId());
  console.log("in setBorder");
  console.log(this.state);
  // this.totalCount = function() { return 0; };
  // this.data = function() {
  //   var data = UsersListController.__super__.data.call(this);
  //   data.showBorder = function () { console.log("not ready!"); return false;}
  //   return data;
  // }
  this.next();
};

function unsetBorder() {
  this.state.set('showBorder', false);
  console.log("in unsetBorder");
  console.log(this.state);
  // this.totalCount = function() { return 0; };
  // this.data = function() {
  //   var data = UsersListController.__super__.data.call(this);
  //   data.showBorder = function () { console.log("not ready!"); return false;}
  //   return data;
  // }
  this.next();
};
