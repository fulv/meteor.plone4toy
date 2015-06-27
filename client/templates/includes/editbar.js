Template.EditBar.helpers({
  showBorder : function() {
    return Iron.controller().state.get('showBorder');
  },
  tabClass : function(tab) {
    var target = Iron.controller().data();
    if (typeof target !== 'undefined' && typeof target.tabClass !== 'undefined') {
      return target.tabClass(tab);
    }
  }
});
