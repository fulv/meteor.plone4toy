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
      this.ContentCoreTemplate = function() {
        return Template.ContentItem;
      };
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

requireLoginForContentItem = function() {
  console.log(this.item());
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.LoadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else if (!this.item[allowed]) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

myDataNotFound = function() {
  if (this.data()) {
    this.next();
  } else {
    this.render('notFound');
  }
};
