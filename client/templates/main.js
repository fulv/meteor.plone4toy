Template.contentRow.helpers({
    type: function() {
        return ContentTypes.findOne({name: this.typename}).title;
    }
});

Template.ActionMenu.helpers({
    activeState: function() {
        return Session.get('ActionMenu.active');
    }
});

Template.ActionMenu.events({
    'click .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('ActionMenu.active', 'activated');
    },
    'click dl.activated .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('ActionMenu.active', 'deactivated');
    },
    'click dd': function(e) {
        e.preventDefault();

        Session.set('ActionMenu.active', 'deactivated');
    },
    'mouseleave dl': function(e) {
        Session.set('ActionMenu.active', 'deactivated');
    }
});

