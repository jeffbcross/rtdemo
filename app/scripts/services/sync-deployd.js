'use strict';

angular.module('RTDemoApp')
  .factory('syncDeployd', function () {
    function DeploydTransport (options) {
      this.options = options;
    };

    DeploydTransport.prototype.getCollection = function (callback) {
      dpd[this.options.path].get(callback);
    };

    DeploydTransport.prototype.getObject = function (id, callback) {
      dpd[this.options.path].get(id, callback);
    };

    DeploydTransport.prototype.subscribeToCollection = function (callback) {
      dpd[this.options.path].on('create', function (doc) {
        callback.call(this, 'create', doc);
      });

      dpd[this.options.path].on('delete', function (doc) {
        callback.call(this, 'delete', doc);
      });

      dpd[this.options.path].on('update', function (doc) {
        callback.call(this, 'update', doc);
      });
    };

    DeploydTransport.prototype.subscribeToObject = function (id, callback) {
      dpd[this.options.path].on('update:' + id, callback);
    };

    DeploydTransport.prototype.unsubscribeFromObject = function () {

    };

    DeploydTransport.prototype.updateObject = function (id, value) {
      dpd[this.options.path].put(id, value);
    };

    return DeploydTransport;
  });
