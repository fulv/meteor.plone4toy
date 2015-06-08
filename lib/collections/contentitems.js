ContentItems = new Mongo.Collection("contentitems");

ContentTypes = new Mongo.Collection("contenttypes");

Meteor.methods({
    itemCreate: function(itemAttributes) {
      if (!Match.test(Meteor.userId(), String)) {
        throw new Meteor.Error('anonymouspost',
                               'You must log in to add content');
      }
      if (!Match.test(itemAttributes.typename, isContentType)) {
        throw new Meteor.Error('invalidtype', 'Invalid Content Type');
      }
      if (ContentItems.find().count() >= max_items) {
        clearContentItems( Meteor.user() );
      }
      delaySlowTypes(itemAttributes.typename);

      if (Meteor.isServer) {
        var text = dimsum.sentence(5),
            wordcount = Math.floor(Math.random() * 5) + 1,
            titleregexp = new RegExp("((\\S+\\s+){" + wordcount + "}).*"),
            punctregexp = new RegExp('[,.!?;:-]', 'g');
            title = text.replace(punctregexp, '');
            title = title.replace(titleregexp, "$1").trim();
        title.replace(/(\W|\S)/, "" );
      }
      if (Meteor.isClient) {
        title = 'TBD';
        text = 'TBD';
      }

      var item = _.extend(itemAttributes, {
        title: title,
        name: title.toLowerCase().split(' ').join('-'),
        description: text,
        size: Math.floor(Math.random() * 32) + ' KB',
        modified: new Date(),
        objPositionInParent: 1,
        defaultview: false,
        author: Meteor.user().username,
        workflow_state: 'Published'
      });

      return insertOrFail(item);
    },

    itemDelete: function(itemArray) {
      if (!Match.test(Meteor.userId(), String)) {
        throw new Meteor.Error('anonymousdelete',
                               'You must log in to delete content');
      }
      if (!Match.test(itemArray, [String])) {
        throw new Meteor.Error('invalidargument', 'Invalid Argument');
      }
      ContentItems.find({name: {$in: itemArray}}).map(function(post, index, cursor) {
        var username = Meteor.user().username;
        var author = post.author;

        if (username === author) {
          ContentItems.remove(post);
        } else {
          throw new Meteor.Error('notpermitted',
                    "You are not allowed to delete other people's content!");
        }
      })
    },

    itemTransition: function(id, transition) {
      var transitions = [
        'workflow-transition-reject',
        'workflow-transition-retract',
        'workflow-transition-publish',
        'workflow-transition-submit'
      ];
      if (!Match.test(Meteor.userId(), String)) {
        throw new Meteor.Error('anonymoustransition',
                               'You must log in to hide/show content');
      }
      if (!Match.test(id, String) || !Match.test(transition, String)) {
        throw new Meteor.Error('invalidargument', 'Invalid Argument');
      }
      if (!_.contains(transitions, transition)) {
        throw new Meteor.Error('invalidtransition', 'Invalid Transition');
      }
      var item = ContentItems.findOne(id);
      if (item) {
        var username = Meteor.user().username;
        var author = item.author;
        var state = '';
        if (username === author || username === 'admin') {
          if (_.contains(['workflow-transition-reject', 'workflow-transition-retract'], transition)) {
            newstate = 'Private';
          }
          if (_.contains(['workflow-transition-publish', 'workflow-transition-submit'], transition)) {
            newstate = 'Published';
          }
          ContentItems.update(id, {$set: {workflow_state: newstate}});
        } else {
          throw new Meteor.Error('notpermitted',
                    "You are not allowed to hide other people's content!");
        }
      } else {
        throw new Meteor.Error('nosuchitem', 'No such item');
      }
    }
});

clearContentItems = function(user) {
    ContentItems.find().map(function(post, index, cursor) {
        ContentItems.remove(post);
    });
    incrementResets();
    createNotification("All content erased!  At most " + max_items + " items are allowed.");
    if (Meteor.isServer) {
        Email.send({
            to: 'fulviocasali@gmail.com',
            from: 'plone4toy@solitonconsulting.com',
            subject: 'All content erased for the ' + Registry.findOne().resets + 'th time',
            text: user.username + ' was the culprit this time, created ' + user.lifetimeCreatedItems + ' items.'
        });
    }
}

delaySlowTypes = function(typename) {
    if (typename === 'slow-success' || typename === 'slow-fail') {
        if (Meteor.isServer) {
            Meteor._sleepForMs(5000);
        }
    }
}

insertOrFail = function(item) {
    typename = item.typename;
    if (Meteor.isServer && typename === 'slow-fail') {
        throw new Meteor.Error('gone', "And.... it's gone!");
    } else {
        if (typename === 'slow-success' || typename === 'slow-fail') {
            if (Meteor.isServer) {
                item.title += " (Server)";
            } else {
                item.title += " (Client)";
            }
        }
        var itemId = ContentItems.insert(item);

        Meteor.users.update(Meteor.userId(), { $inc: {lifetimeCreatedItems: 1} });

        return {
            _id: itemId
        };
    }
}

isContentType = Match.Where(function(typename) {
  var type = ContentTypes.findOne({name: typename});
  return !!type;
});
