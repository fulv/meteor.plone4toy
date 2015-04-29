var addParity = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           parity: (index%2)?'odd':'even',
                           class: 'plain'});
    return i;
};

ContentItemListController = RouteController.extend({
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
        return cursor.map(addParity);
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
            batchSize: this.batchSize(),
            showBorder: !!Meteor.userId(),
            Title: 'Site',
            RowTemplate: Template.ContentRow,
            TableHeadTemplate: Template.FolderContentsTableHead
        }
    }
});

ResetsListController = ContentItemListController.extend({
    waitOn: function() {
        this.registrySub = Meteor.subscribe('registry');
        return this.registrySub;
    },
    items: function() {
        var registry = Registry.findOne();
        if (registry) {
            var instances = registry.resetInstances.map(addParity);
            var sorted = _.sortBy(instances, function(i){return -i.datetime;});
            return _.first(sorted, this.batchLimit());
        }
    },
    data: function() {
        if (this.ready()) {
            var data = ResetsListController.__super__.data.call(this);
            data.ready = this.registrySub.ready;
            data.Title = "History of content resets";
            data.RowTemplate = Template.ResetRow;
            data.TableHeadTemplate = Template.ResetsTableHead;
            data.showBorder = false;
            return data;
        }
    },
});

ConnectionsListController = ContentItemListController.extend({
    waitOn: function() {
        this.connectionsSub = Meteor.subscribe('connections', this.findOptions());
        return this.connectionsSub;
    },
    items: function() {
        var cursor = Connections.find();
        if (cursor) {
            return cursor.map(addParity);
        }
    },
    data: function() {
        if (this.ready()) {
            var data = ConnectionsListController.__super__.data.call(this);
            data.ready = this.connectionsSub.ready;
            data.Title = "Current connections";
            data.RowTemplate = Template.ConnectionRow;
            data.TableHeadTemplate = Template.ConnectionsTableHead;
            data.showBorder = false;
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
    template: 'TableContents',
    loadingTemplate: 'Loading',
    layoutTemplate: 'ListingLayout',
    onAfterAction: function() {
    },
});
