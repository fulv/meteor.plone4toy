Template.actionMenuContent.helpers({
    contentTypes: function() {
        return ContentTypes.find();
    }
});

Template.addItem.events({
    'click a': function(e) {
        e.preventDefault();

        var element = e.target;
        if (element.nodeName != 'A') {
            element = e.target.parentNode;
        }
        var type = element.id,
            text = dimsum.sentence(2),
            wordcount = Math.floor(Math.random() * 5) + 1,
            regexp = new RegExp("((\\S+\\s+){" + wordcount + "}).*"),
            title = text.replace(regexp, "$1").trim();
        title.replace(/(\W|\S)/, "" );
        var item = {
            title: title,
            name: title.toLowerCase().split(' ').join('-'),
            description: text,
            typename: type,
        };

        Meteor.call('itemCreate', item, function(error, result) {
            if (error) {
                throwError(error.reason);
            }
        });

        if (type === 'slow-fail') {
            throwError("This type will always fail to add an item on the server.")
        }

        if (type === 'slow-success') {
            throwError("The server takes 5 seconds to create one of these items. Watch how the title suffix changes from (Client) to (Server).")
        }

    }
});
