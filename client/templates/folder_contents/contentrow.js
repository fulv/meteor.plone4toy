Template.ContentRow.helpers({
    type: function() {
        return ContentTypes.findOne({name: this.typename}).title;
    }
});

Template.FolderContentsTableHead.helpers({
  SelectAllTemplate: function() {
    if (Session.get('selectAll.template') === 'all') {
      return Template.SelectAll;
    } else {
      return Template.SelectNone;
    }
  }
});
