(function () {

  'use strict';

  module.exports = function () {

    this.Before(function (callback) {
      console.log('running!');
      this.server.call('addUser', {username: "bob"}).then(callback);
    });

  };

})();
