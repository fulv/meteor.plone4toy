Router.route('/:batchLimit?', {
    name: 'contentItemList',
    loadingTemplate: 'loading',
    template: 'layout',
    waitOn: function() {
        var limit = parseInt(this.params.batchLimit) || 5;
        return Meteor.subscribe('contentitems', 
                                {sort: {modified: -1}, 
                                limit: limit});
    },
});

Router.configure({
    autoRender: true,
    layoutTemplate: 'mainlayout',
    onAfterAction: function() {
        jQuery(initializeMenus);
    }
});