'use strict';

angular.module('RTDemoApp')
  .controller('MainCtrl', function ($scope, ngSync, $routeParams) {
    //This API is a little nicer than scope.model.$sync, because it doesn't require the model to be defined yet.
    ngSync({
      scope: $scope,
      id: $routeParams.id,
      collection: 'documents',
      modelName: 'doc',
      host: 'localhost',
      port: '2403',
      transport: 'socket',
      protocol: 'http'
    });


  });
