'use strict';

angular.module('RTDemoApp')
  .controller('MainCtrl', function ($scope, ngSync, $routeParams, $location) {
    //This API is a little nicer than scope.model.$sync, because it doesn't require the model to be defined yet. However by having a single method, it makes it more difficult to add more control on the service. E.g. ngSync.stopSyncing.
    
    $scope.openDoc = function (id) {
      if (id && typeof id === 'string') {
        $location.path('/'+id);
      }
    };

    $scope.active = $routeParams.id;

    //Watch A single document model.
    ngSync({
      scope: $scope,
      id: $scope.active,
      collection: 'documents',
      modelName: 'doc',
      host: 'localhost',
      port: '2403'
    });

    ngSync({
      scope: $scope,
      collection: 'documents',
      modelName: 'docs',
      host: 'localhost',
      port: '2403'
    });
  });
