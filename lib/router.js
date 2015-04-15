Router.route('/:batchLimit?', {
    name: 'contentItemList',
    template: 'layout',
    waitOn: function() {
        var limit = parseInt(this.params.batchLimit) || 5,
            modifiers = {sort: {modified: -1}, limit: limit};
        return Meteor.subscribe('contentitems', modifiers);
    },
    data: function() {
        var limit = parseInt(this.params.batchLimit) || 5,
            modifiers = {sort: {modified: -1}, limit: limit},
            cursor = ContentItems.find({}, modifiers);

        return { 
            contentItems: cursor.map(function(doc, index, cursor) {
                var i = _.extend(doc, {index: index, evenodd: (index%2)?'odd':'even'});
                return i;
            })
        };
    }
});

Router.configure({
    autoRender: true,
    loadingTemplate: 'loading',
    layoutTemplate: 'mainlayout',
    onAfterAction: function() {
        jQuery(initializeMenus);
    }
});