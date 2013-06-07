'use strict';

angular.module('RTDemoApp')
  .factory('ngSync', function ($rootScope) {
    function Synchronizer (config) {
      var scope = config.scope
        , lastUpdate;

      //Synchronize a single object
      if (config.id) {
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
      else {
        dpd[config.collection].get(function (models) {
          scope[config.modelName] = models;
          scope.$digest();
        });


        //Listen for changes
        dpd[config.collection].on('create', function (doc) {
          if (Array.isArray(scope[config.modelName])) {
            scope[config.modelName].push(doc);
          }
          else {
            scope[config.modelName] = [doc];
          }

          scope.$digest();
        });

        dpd[config.collection].on('delete', function (doc) {
          var found;
          scope[config.modelName].forEach(function (item, i, list) {
            if(found) return;
            if (item.id === doc.id) {
              list.splice(i,1);
              found = true;
            }
          });

          scope.$digest();
        });

        dpd[config.collection].on('update', function (doc) {
          var found;
          scope[config.modelName].forEach(function (item, i, list) {
            if(found) return;
            if (item.id === doc.id) {
              list[i] = doc;
              found = true;
            }
          });

          scope.$digest();
        });

        //Push changes
        scope.$watch(config.modelName, function (newVal, oldVal) {
          if (newVal && !Array.isArray(newVal)) throw new Error("Synced models without an id must be an Array.");

          //TODO
          
        }, true);
      }
      

      
    }

    return function (config) {
      return new Synchronizer(config);
    }
  });
