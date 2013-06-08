'use strict';

angular.module('RTDemoApp')
  .controller('MainCtrl', function ($scope, $syncResource, $routeParams, $location, syncDeployd) {
    
    $scope.openDoc = function (id) {
      if (id && typeof id === 'string') {
        $location.path('/'+id);
      }
    };

    $scope.active = $routeParams.id;

    //Watch A single document model.
    var docResource = $syncResource({
      scope: $scope,
      id: $scope.active,
      path: 'documents',
      model: 'doc',
      Transport: syncDeployd, //syncREST, syncFirebase, etc
    });

    /*
    Optional properties:
    host (default to same)
    port (default to same)
    autoDestroy (default to true, destroys when scope is destroyed)
    */

    var docsResource = $syncResource({
      scope: $scope,
      path: 'documents',
      model: 'docs',
      Transport: syncDeployd
    });
  });
