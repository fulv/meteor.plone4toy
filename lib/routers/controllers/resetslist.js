ResetsListController = ListControllerBase.extend({
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
    totalCount: function() {
      return Registry.findOne().resetInstances.length;
    },
    data: function() {
        if (this.ready()) {
            var data = ResetsListController.__super__.data.call(this);
            data.ready = this.registrySub.ready;
            data.Title = "History of content resets";
            data.RowTemplate = Template.ResetRow;
            data.TableHeadTemplate = Template.ResetsTableHead;
            data.ContentCoreTemplate = Template.ListingContents;
            data.showBorder = false;
            return data;
        } else
          return [];
    },
});
