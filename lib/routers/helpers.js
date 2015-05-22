addParity = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           parity: (index%2)?'odd':'even',
                           class: 'plain'});
    return i;
};


requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.LoadingTemplate);
    } else {
        this.render('accessDenied');
    }
  } else {
    this.next();
  }
};


// checkPermissions = function() {
//   if (Meteor.call('canView', this.params.document)) {
//     this.next();
//   } else {
//     this.render('accessDenied');
//   }
// };

myDataNotFound = function() {
  if (this.data()) {
    this.next();
  } else {
    this.render('notFound');
  }
};
