Template.ListingContents.events({
  'click input[name="folder_delete:method"]': function(event, template) {
    event.preventDefault();

    var array = findSelected(template);

    Meteor.call('itemDelete', array, function(error, result) {
        if (error) {
            throwError(error.reason);
        }
    });
  },

  'click input[name="folder_copy:method"]': function(event, template) {
    event.preventDefault();

    var array = findSelected(template);

    Meteor.call('clip', array, false, function(error, result) {
      if (error) {
        throwError(error.reason);
      }
    });
  },

  'click input[name="folder_cut:method"]': function(event, template) {
    event.preventDefault();

    var array = findSelected(template);

    Meteor.call('clip', array, true, function(error, result) {
      if (error) {
        throwError(error.reason);
        return;
      }
      Meteor.call('itemDelete', array, function(error, result) {
        if (error) {
          throwError(error.reason);
        }
      });
    });
  },

  'click input[name="folder_paste:method"]': function(event, template) {
    event.preventDefault();

    Meteor.call('paste', function(error, result) {
      if (error) {
        throwError(error.reason);
      }
    });
  },

  'click #foldercontents-selectall': function(event, template) {
    event.preventDefault();

    var checkboxes = template.findAll("input[type=checkbox]:not(:checked)");
    $(checkboxes).click();
    Iron.controller().state.set('selectAll.template', 'SelectNone');
  },

  'click #foldercontents-clearselection': function(event, template) {
    event.preventDefault();

    var checkboxes = template.findAll("input[type=checkbox]:checked");
    $(checkboxes).click();
    Iron.controller().state.set('selectAll.template', 'SelectAll');
  },

  'change input[type=checkbox]': function(event, template) {
    template.itemCheckboxes.set($(event.target).val(),
                                $(event.target).is(':checked'));
    var reduce = _.reduce(template.itemCheckboxes.keys,
                          function(memo, value) {
                            return (memo || (('' + value) === 'true'));
                          }, false);
    template.buttonsActive.set(reduce);
  }
});

Template.ListingContents.helpers({
  buttonClass: function() {
    if (Template.instance().buttonsActive.get()) {
      return {class: 'context activated'};
    } else {
      return {class: 'context deactivated'};
    }
  },
  pasteButtonClass: function() {
    if (Meteor.userId()) {
      var username = Meteor.user().username;
      if (Clipboards.findOne({username: username})) {
        return {class: 'context activated'};
      }
    }
    return {class: 'context deactivated'};
  }
});

Template.ListingContents.onCreated(function() {
  this.itemCheckboxes = new ReactiveDict();
  this.buttonsActive = new ReactiveVar(true);
});

findSelected = function(template) {
  var selected = template.findAll("input[type=checkbox]:checked");

  var array = _.map(selected, function(item) {
    return item.defaultValue;
  });

  return array;
};
