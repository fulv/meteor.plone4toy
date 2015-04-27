Template.contentRow.helpers({
    type: function() {
        return ContentTypes.findOne({name: this.typename}).title;
    }
});

