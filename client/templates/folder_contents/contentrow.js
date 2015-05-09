Template.ContentRow.helpers({
    type: function() {
        return ContentTypes.findOne({name: this.typename}).title;
    }
});

Template.FolderContentsTableHead.helpers({
  SelectAllTemplate: function() {
    return Iron.controller().state.get('selectAll.template');
  }
});

Template.ContentRow.onRendered(function() {
  this.$("input[type=checkbox]").change();
});
