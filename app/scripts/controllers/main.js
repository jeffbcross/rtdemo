'use strict';

angular.module('RTDemoApp')
  .controller('MainCtrl', function ($scope, ngSync) {
    console.log('typeof', typeof ngSync);
    console.log('ngSync', ngSync);
    
    ngSync({
      scope: $scope,
      id:'c318b43da623882c',
      collection: 'documents',
      modelName: 'doc'
    });
  });
