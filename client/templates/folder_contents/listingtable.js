Template.ListingTable.events({
  'submit .kssattr-serveraction-foldercontents_update_table': function(event, template) {
    event.preventDefault();

    var selected = template.findAll("input[type=checkbox]:checked");

    var array = _.map(selected, function(item) {
      return item.defaultValue;
    });

    Meteor.call('itemDelete', array, function(error, result) {
        if (error) {
            throwError(error.reason);
        }
    });
  },

  'click #foldercontents-selectall': function(event, template) {
    event.preventDefault();

    var checkboxes = template.findAll("input[type=checkbox]");

    _.each(checkboxes, function(item) {
      $(item).prop("checked", true);
    });
    Iron.controller().state.set('selectAll.template', 'SelectNone');
  },

  'click #foldercontents-clearselection': function(event, template) {
    event.preventDefault();

    var checkboxes = template.findAll("input[type=checkbox]");

    _.each(checkboxes, function(item) {
      $(item).prop("checked", false);
    });
    Iron.controller().state.set('selectAll.template', 'SelectAll');
  }
});
