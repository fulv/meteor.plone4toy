Template.PloneContentmenuWorkflow.helpers({
    activeState: function() {
        return Session.get('PloneContentmenuWorkflow.active');
    },
});

Template.PloneContentmenuWorkflow.events({
    'click .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuWorkflow.active', 'activated');
    },
    'click dl.activated .actionMenuHeader': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuWorkflow.active', 'deactivated');
    },
    'click dd': function(e) {
        e.preventDefault();

        Session.set('PloneContentmenuWorkflow.active', 'deactivated');
    },
    'mouseleave dl': function(e) {
        Session.set('PloneContentmenuWorkflow.active', 'deactivated');
    }
});

