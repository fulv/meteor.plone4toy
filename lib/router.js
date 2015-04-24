var addEvenOdd = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           evenodd: (index%2)?'odd':'even'});
    return i;
};

ContentItemListController = RouteController.extend({
    template: 'layout',
    increment: 5,
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
    subscriptions: function() {
        this.contentItemsSub =  Meteor.subscribe('contentitems', this.findOptions());
        },
    items: function() {
        var cursor = ContentItems.find({}, this.findOptions());
        return cursor.map(addEvenOdd);
    },
    data: function() {
        var hasMore = this.items().length === this.batchLimit();
        var nextPath = this.route.path({
                batchLimit: this.batchLimit() + this.increment
            });
        return {
            items: this.items(),
            navItems: ContentItems.find({}, { limit: 5}), 
            ready: this.contentItemsSub.ready,
            nextPath: hasMore ? nextPath : null,
            batchIncrement: this.increment,
            batchSize: this.batchSize()
        }
    }
});

ResetsListController = ContentItemListController.extend({
    subscriptions: function() {
        this.registrySub = Meteor.subscribe('registry');
    },
    waitOn: function() {
        return Meteor.subscribe('registry');
    },
    items: function() {
        var registry = Registry.findOne();
        if (registry) {
            var instances = registry.resetInstances.map(addEvenOdd);
            var sorted = _.sortBy(instances, function(i){return -i.datetime;});
            return _.first(sorted, this.batchLimit());
        }
    },
    data: function() {
        if (this.ready()) {
            var data = ResetsListController.__super__.data.call(this);
            data.ready = this.registrySub.ready;
            return data;
        }
    }
});

ConnectionsListController = ContentItemListController.extend({
    subscriptions: function() {
        this.connectionsSub = Meteor.subscribe('connections', this.findOptions());
    },
    connectionInstances: function() {
        var cursor = Connections.find();
        return cursor.map(addEvenOdd);
    },
    data: function() {
        var data = ConnectionsListController.__super__.data.call(this);
        data.ready = this.connectionsSub.ready;
        return _.extend(data, {connectionInstances: this.connectionInstances()});
    }
});

Router.route('/resets/:batchLimit?', {
    name: 'resets',
    template: 'resets',
    controller: ResetsListController
});

Router.route('/connections/:batchLimit?', {
    name: 'connections',
    template: 'connections',
    controller: ConnectionsListController
});

Router.route('/:batchLimit?', {
    name: 'contentItemList',
});

Router.configure({
    autoRender: true,
    loadingTemplate: 'loading',
    layoutTemplate: 'mainlayout',
    onAfterAction: function() {
        // jQuery(initializeMenus);
    },
});