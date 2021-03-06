addParity = function(doc, index, cursor) {
  var i = _.extend(doc, {index: index,
                         parity: (index%2)?'odd':'even',
                         class: 'plain'});
  return i;
};


isAdmin = function() {
  if (Meteor.user()) {
    return ('admin' === Meteor.user().username);
  } else {
    return false;
  }
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
  var state = this.item().workflow_state;
  if (state === 'Private') {
    if (! Meteor.user()) {
      if (Meteor.loggingIn()) {
        this.render(this.LoadingTemplate);
      } else {
        this.render('accessDenied');
      }
    } else if (!this.item().title) {
      console.log(this.item().title);
      this.render('accessDenied');
    } else {
      this.next();
    }
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
