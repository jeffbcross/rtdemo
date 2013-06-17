'use strict';

angular.module('RTDemoApp')
  .controller('SpreadsheetCtrl', function ($scope) {
    $scope.addItem = function (item) {
      if (!$scope.items || !Array.isArray($scope.items)) $scope.items = [];
      item.id = Math.round((Math.random() * 100) * (Math.random() * 100)).toString();
      $scope.items.push(angular.copy(item));
    };

    $scope.removeItem = function (id) {
      console.log('id', id);
      if ($scope.items.length) {
        for (var i = 0; i < $scope.items.length; i++) {
          if ($scope.items[i].id === id) {
            $scope.items.splice(i, 1);
            break;
          }
        }
      }
      console.log('items', $scope.items);
    };
  });
