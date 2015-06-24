Template.EditBar.helpers({
  showBorder : function() {
    console.log('In Editbar.helpers.showBorder:' + Iron.controller().state.get('showBorder'));
    return Iron.controller().state.get('showBorder');
  },
  tabClass : function(tab) {
    console.log('in Editbar.helpers.tabClass');
    var target = Iron.controller().data();
    console.log(target);
    if (typeof target !== 'undefined' && typeof target.tabClass !== 'undefined') {
      console.log(target.tabClass);
      return target.tabClass(tab);
    }
  }
});
