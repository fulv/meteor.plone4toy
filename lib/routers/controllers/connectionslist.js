ConnectionsListController = ListControllerBase.extend({
    waitOn: function() {
        this.connectionsSub = Meteor.subscribe('connections', this.findOptions());
        return this.connectionsSub;
    },
    findOptions: function() {
        return {
            sort: {datetime: -1},
            limit: this.batchLimit()
        };
    },
    items: function() {
        var cursor = Connections.find({}, this.findOptions());
        if (cursor) {
            return cursor.map(addParity);
        }
    },
    totalCount: function() {
      return Connections.find().count();
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
