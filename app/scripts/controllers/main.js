'use strict';

angular.module('RTDemoApp')
  .controller('MainCtrl', function ($scope, ngSync, $routeParams) {
    ngSync({
      scope: $scope,
      id: $routeParams.id,
      collection: 'documents',
      modelName: 'doc'
    });
  });
