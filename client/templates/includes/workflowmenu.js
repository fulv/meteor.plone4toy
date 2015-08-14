Template.PloneContentmenuWorkflow.helpers({
  activeState: function() {
    return Session.get('PloneContentmenuWorkflow.active');
  },
  workflowState: function() {
    return this.item.workflow_state;
  },
  workflowStateClass: function() {
    return this.item.workflow_state.toLowerCase();
  },
  public: function() {
    return (this.item.workflow_state === 'Published');
  },
  own: function() {
    if (this.item) {
      return (!!Meteor.userId() && this.item.author === Meteor.user().username);
    } else {
      return false;
    }
  },
  ready: function() {
    return Router.current().ready() && this.item;
  }
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
  },
  'click a.kssIgnore': function(e) {
    e.preventDefault();

    var element = e.target;
    if (element.nodeName != 'A') {
      element = e.target.parentNode;
    }
    var transition = element.id;
    var id = this.item._id;

    Meteor.call('itemTransition', id, transition, function(error, result) {
      if (error) {
        throwError(error.reason);
      }
    });
  }
});

