'use strict';

angular.module('RTDemoApp')
  .factory('ngSync', function ($rootScope) {
    function Synchronizer (config) {
      var scope = config.scope
        , lastUpdate;

      //Get initial object from server
      dpd[config.collection].get(config.id, function (value) {
        scope[config.modelName] = value;
        scope.$digest();
      });
      
      //Listen for changes
      dpd[config.collection].on('update:' + config.id, function (message) {
        scope[config.modelName] = message;
        lastUpdate = angular.copy(message);
        scope.$digest();
      });

      //Push changes
      scope.$watch(config.modelName, function (newVal, oldVal) {
        if (!angular.equals(newVal, oldVal) && !angular.equals(newVal, lastUpdate)) {
          dpd[config.collection].put(config.id, newVal);  
        }
        
      }, true);
    }

    // Public API here
    return function (config) {
      return new Synchronizer(config);
    }
  });
