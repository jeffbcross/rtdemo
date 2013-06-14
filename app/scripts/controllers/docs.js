'use strict';

angular.module('RTDemoApp')
  .controller('DocsCtrl', function ($scope, $syncResource, $routeParams, $location, syncDeployd) {
    $scope.openDoc = function (id) {
      $location.path('/docs/' + id);
    };

    var deployd = Object.create(syncDeployd.prototype);
    syncDeployd.call(deployd, {
      path: 'documents'
    });

    $scope.active = $routeParams.id;

    var docResource = $syncResource({
      scope: $scope,
      id: $scope.active,
      path: 'documents',
      model: 'doc',
      protocol: deployd,
    });

    var docsResource = $syncResource({
      scope: $scope,
      path: 'documents',
      model: 'docs',
      protocol: deployd
    });
  });
