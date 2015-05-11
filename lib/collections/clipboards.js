Clipboards = new Mongo.Collection('clipboards');

Meteor.methods({
    clip: function(items, del) {
      check(del, Boolean);
      if (!Match.test(Meteor.userId(), String)) {
        throw new Meteor.Error('anonymousclip',
                               'You must log in to use the clipboard');
      }
      if (!Match.test(items, [String])) {
        throw new Meteor.Error('invalidargument', 'Invalid Argument');
      }
      var username = Meteor.user().username;

      var clip = Clipboards.findOne({username: username});
      if (clip) {
        Clipboards.remove( clip );
      }

      items = ContentItems.find({name: {$in: items}}).map(function(post) {
        return post;
      });
      if (del) {
        if (_.some(_.map(items, function(item) {
                                  return (item.author != username);
                                }
                        )
                  )
            ) {
          throw new Meteor.Error('notpermitted',
                                 "You are not allowed to cut other people's content!");
        }
      }
      var itemId = Clipboards.insert({username: username, items: items});
      return itemId;
    },

    paste: function() {
      if (!Match.test(Meteor.userId(), String)) {
        throw new Meteor.Error('anonymousclip',
                               'You must log in to use the clipboard');
      }
      var clip = Clipboards.findOne({username: Meteor.user().username});

      _.each(clip.items, function(item) {
        delete item._id;
        item.author = Meteor.user().username;
        item.modified = new Date();

        var existing_item = ContentItems.findOne({name: item.name});
        if (existing_item) {
          var new_name = item.name + "-1";
          while (existing_item = ContentItems.findOne({name: new_name})) {
            var found = existing_item.name.match(/(.*-)(\d)/);
            var suffix = parseInt(found.slice(-1)[0]) + 1;
            new_name = found[1] + suffix;
          }
          item.name = new_name;
        }
      });
      try {
        _.each(clip.items, function(item) {
          if (ContentItems.find().count() >= max_items) {
            clearContentItems( Meteor.user() );
          }
          ContentItems.insert( item );
          Meteor.users.update(Meteor.userId(), { $inc: {lifetimeCreatedItems: 1} });
        })
      } catch (e) {
        console.log(e);
      }
    }
});
