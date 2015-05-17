Template.PloneContentmenuActions.helpers({
    activeState: function() {
        return Session.get('PloneContentmenuActions.active');
    },
});

Template.PloneContentmenuActions.events({
    'click .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuActions.active', 'activated');
    },
    'click dl.activated .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuActions.active', 'deactivated');
    },
    'click dd': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuActions.active', 'deactivated');
    },
    'mouseleave dl': function(e) {
        Session.set('PloneContentmenuActions.active', 'deactivated');
    }
});

