'use strict';

angular.module('RTDemoApp')
  .controller('FirebaseCtrl', function ($scope, angularFireCollection) {
    var url = 'http://superheroic.firebaseio.com/items';
    $scope.items = angularFireCollection(url);
  });
