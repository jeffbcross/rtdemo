'use strict';

angular.module('RTDemoApp', ['firebase', 'SyncResource', 'SyncDeployd'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/docs', {
        templateUrl: '/views/docs.html',
        controller: 'DocsCtrl'
      })
      .when('/docs/:id', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl'
      })
      .when('/firebase', {
        templateUrl: 'views/firebase.html',
        controller: 'FirebaseCtrl'
      })
      .when('/spreadsheet', {
        templateUrl: 'views/spreadsheet.html',
        controller: 'SpreadsheetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
