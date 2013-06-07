'use strict';

angular.module('RTDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
