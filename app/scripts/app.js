'use strict';

angular.module('RTDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/docs/:id', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl'
      })
      .otherwise({
        redirectTo: '/docs'
      });
  });
