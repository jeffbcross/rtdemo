'use strict';

angular.module('RTDemoApp')
  .factory('ngSync', function ($rootScope) {
    function Synchronizer (config) {
      var scope = config.scope;

      //Get initial object
      dpd[config.collection].get(config.id, function (value) {
        console.log('loaded value', value);
        console.log('config.modelName', config.modelName);
        scope[config.modelName] = value.body;
        scope.$digest();
      })
      
      //Listen for changes
      dpd[config.collection].on('update:' + config.id, function (message) {
        console.log('updated?', message.body);
        scope[config.modelName] = message.body;
        scope.$digest();
      });

      //Push changes
      scope.$watch(config.modelName, function (newVal) {
        dpd[config.collection].put(config.id, {body: newVal});
      });
    }

    // Public API here
    return function (config) {
      return new Synchronizer(config);
    }
  });
