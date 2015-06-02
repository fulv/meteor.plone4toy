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
    // 'click dd': function(e) {
    //     e.preventDefault();

    //     Session.set('PloneContentmenuActions.active', 'deactivated');
    // },
    'mouseleave dl': function(e) {
        Session.set('PloneContentmenuActions.active', 'deactivated');
    },

    'click a#plone-contentmenu-actions-delete': function(event, template) {
      event.preventDefault();

      Session.set('PloneContentmenuActions.active', 'deactivated');

      var item = itemData(Router.current());


      Meteor.call('itemDelete', [item.doc], function(error, result) {
          if (error) {
              throwError(error.reason);
          }
      });

      Router.go('/');
      throwError("Item " + item.title + " deleted");
    },

    'click a#plone-contentmenu-actions-cut': function(event, template) {
      event.preventDefault();

      Session.set('PloneContentmenuActions.active', 'deactivated');

      var item = itemData(Router.current());

      Meteor.call('clip', [item.doc], true, function(error, result) {
        if (error) {
          throwError(error.reason);
          return;
        }
        Meteor.call('itemDelete', [item.doc], function(error, result) {
          if (error) {
            throwError(error.reason);
          }
        });
      });

      Router.go('/');
      throwError("Item " + item.title + " cut to clipboard");
    },

    'click a#plone-contentmenu-actions-copy': function(event, template) {
      event.preventDefault();

      Session.set('PloneContentmenuActions.active', 'deactivated');

      var item = itemData(Router.current());

      Meteor.call('clip', [item.doc], false, function(error, result) {
        if (error) {
          throwError(error.reason);
        }
      });

      throwError("Item " + item.title + " copied to clipboard");
    },

    'click a#plone-contentmenu-actions-paste': function(event, template) {
      event.preventDefault();

      Session.set('PloneContentmenuActions.active', 'deactivated');

      Meteor.call('paste', function(error, result) {
        if (error) {
          throwError(error.reason);
        }
        console.log(result);
      });

      throwError("Item " + " pasted from clipboard");
    }

});


function itemData(router) {
  return {
    doc: router.params.document,
    title: router.data().Title
  };
}
