Template.EditBar.helpers({
  showBorder : function() {
    console.log('In Editbar.helpers.showBorder:' + Iron.controller().state.get('showBorder'));
    return Iron.controller().state.get('showBorder');
  }
});
