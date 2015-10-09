if (Meteor.users.find({username: 'admin'}).count() === 0) {
  Accounts.createUser({username: 'admin', password: 'admin'});
}


if (ContentItems.find().count() === 0) {
  var now = new Date().getTime();

  insertOrFail({
    title: 'Welcome to Plone',
    name: 'front-page',
    description: 'Congratulations! You have successfully installed Plone.',
    typename: 'document',
    size: '4.8 KB',
    modified: new Date(now - 12 * 3600 * 1000),
    objPositionInParent: 0,
    defaultview: true,
    author: 'admin',
    workflow_state: 'Published'
  });

  insertOrFail({
    title: 'News',
    name: 'news',
    description: 'Site News',
    typename: 'folder',
    size: '1 KB',
    modified: new Date(now - 12 * 3600 * 1000),
    objPositionInParent: 1,
    defaultview: false,
    author: 'admin',
    workflow_state: 'Published'
  });

  insertOrFail({
    title: 'Events',
    name: 'events',
    description: 'Site Events',
    typename: 'folder',
    size: '1 KB',
    modified: new Date(now - 12 * 3600 * 1000),
    objPositionInParent: 2,
    defaultview: false,
    author: 'admin',
    workflow_state: 'Published'
  });

  insertOrFail({
    title: 'Users',
    name: 'Members',
    description: 'Site Users',
    typename: 'folder',
    size: '1 KB',
    modified: new Date(now - 12 * 3600 * 1000),
    objPositionInParent: 3,
    defaultview: false,
    author: 'admin',
    workflow_state: 'Published'
  });
}


if (ContentTypes.find().count() === 0) {
  ContentTypes.insert({
    type: 'Collection',
    title: 'Collection',
    name: 'collection',
    description: 'Collection of searchable information',
  });

  ContentTypes.insert({
    type: 'Event',
    title: 'Event',
    name: 'event',
    description: 'Events can be shown in calendars.',
  });

  ContentTypes.insert({
    type: 'File',
    title: 'File',
    name: 'file',
    description: 'Lets you upload a file to the site.',
  });

  ContentTypes.insert({
    type: 'Folder',
    title: 'Folder',
    name: 'folder',
    description: '',
  });

  ContentTypes.insert({
    type: 'Image',
    title: 'Image',
    name: 'image',
    description: 'Images can be referenced in pages or displayed in an album.',
  });

  ContentTypes.insert({
    type: 'Link',
    title: 'Link',
    name: 'link',
    description: 'Links to an internal or external resource.',
  });

  ContentTypes.insert({
    type: 'News Item',
    title: 'News Item',
    name: 'news-item',
    description: 'An announcement that will show up in news listings.',
  });

  ContentTypes.insert({
    type: 'Document',
    title: 'Page',
    name: 'document',
    description: '',
  });

  ContentTypes.insert({
    type: 'Document',
    title: 'Slow Success',
    name: 'slow-success',
    description: '',
  });

  ContentTypes.insert({
    type: 'Document',
    title: 'Slow Fail',
    name: 'slow-fail',
    description: '',
  });

}

if (Registry.find().count() === 0) {
  Registry.insert({
    resets: 0,
    resetInstances: [],
    loginsEnabled: true
  });
}
