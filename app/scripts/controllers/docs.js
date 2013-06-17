'use strict';

angular.module('RTDemoApp')
  .controller('DocsCtrl', function ($scope, $syncResource, $routeParams, $location, syncDeployd) {
    $scope.openDoc = function (id) {
      $location.path('/docs/' + id);
    };

    var deployd = syncDeployd();
    var syncer = $syncResource({
      protocol: deployd,
      scope: $scope
    });

    $scope.active = $routeParams.id;

    if ($scope.active) {
      $scope.doc = syncer.bind({
        path: 'documents',
        id: $scope.active
      }, 'doc');
    }
    
    $scope.docs = syncer.bind({
      path: 'documents'
    }, 'docs');
  });