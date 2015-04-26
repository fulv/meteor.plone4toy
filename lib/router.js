var addEvenOdd = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           evenodd: (index%2)?'odd':'even',
                           class: 'plain'});
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
    waitOn: function() {
        this.contentItemsSub =  Meteor.subscribe('contentitems', this.findOptions());
        return this.contentItemsSub;
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
            ready: this.contentItemsSub.ready,
            nextPath: hasMore ? nextPath : null,
            batchIncrement: this.increment,
            batchSize: this.batchSize()
        }
    }
});

ResetsListController = ContentItemListController.extend({
    template: 'TableContents',
    layoutTemplate: 'newlayout',
    waitOn: function() {
        this.registrySub = Meteor.subscribe('registry');
        return this.registrySub;
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
            data.Title = "History of content resets";
            data.RowTemplate = Template.resetRow;
            data.TableHeadTemplate = Template.ResetsTableHead;
            return data;
        }
    },
});

ConnectionsListController = ContentItemListController.extend({
    template: 'TableContents',
    layoutTemplate: 'newlayout',
    waitOn: function() {
        this.connectionsSub = Meteor.subscribe('connections', this.findOptions());
        return this.connectionsSub;
    },
    items: function() {
        var cursor = Connections.find();
        if (cursor) {
            return cursor.map(addEvenOdd);
        }
    },
    data: function() {
        if (this.ready()) {
            var data = ConnectionsListController.__super__.data.call(this);
            data.ready = this.connectionsSub.ready;
            data.Title = "Current connections";
            data.RowTemplate = Template.connectionRow;
            data.TableHeadTemplate = Template.ConnectionsTableHead;
            return data;
        }
    }
});

// UsersListController = ContentItemListController.extend({
//     subscription: function() {
//         this.usersSub = Meteor.subscribe('users', this.findOptions());
//     },
// });

Router.route('/@@resets/:batchLimit?', {
    name: 'resets',
    controller: ResetsListController
});

Router.route('/@@connections/:batchLimit?', {
    name: 'connections',
    controller: ConnectionsListController
});

// Router.route('/users/:batchLimit?', {
//     name: 'users',
//     template: 'users',
//     controller: UsersListController
// });

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