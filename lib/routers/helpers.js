addParity = function(doc, index, cursor) {
    var i = _.extend(doc, {index: index,
                           parity: (index%2)?'odd':'even',
                           class: 'plain'});
    return i;
};


requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};
