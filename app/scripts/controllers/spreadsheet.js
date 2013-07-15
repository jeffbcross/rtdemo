'use strict';

angular.module('RTDemoApp')
  .controller('SpreadsheetCtrl', function ($scope, $syncResource, $differ, syncDeployd, syncFirebase) {
    var protocol, syncer;

    $scope.protocols = [
      {
        name: 'deployd',
        service: syncDeployd,
        config: {

        },
        query: {
          path: 'items'  
        }
      },
      {
        name: 'firebase',
        service: syncFirebase,
        config: {
          url: 'http://superheroic.firebaseio.com'
        },
        query: {
          path: 'items'
        }
      }
    ];

    $scope.addItem = function (item) {
      if (!$scope.items || !Array.isArray($scope.items)) $scope.items = [];
      item.id = Math.round((Math.random() * 100) * (Math.random() * 100) * (Math.random() * 100)).toString();
      $scope.items.push(angular.copy(item));
      console.log($scope.items);
    };

    $scope.removeItem = function (i) {
      if ($scope.items.length >= i) $scope.items.splice(i, 1);
    };

    function changeProtocol (p) {
      protocol = p.service(p.config);
      syncer = $syncResource({
        protocol: protocol
      });

      syncer.bind({
        scope: $scope,
        query: p.query,
        model: 'items',
        type: 'collection',
        onModelChange: [$differ.compareArrays, $differ.checkArrayForDupe],
        onProtocolChange: [$differ.compareArrays, $differ.checkArrayForDupe, function (binder, delta, next) {
          console.log('dupe?', delta.duplicate);
          if (!delta.duplicate) next();
        }]
      });

    }

    $scope.$watch('protocol', function (protocol) {
      angular.forEach($scope.protocols, function (p, i) {
        if (p.name === protocol) changeProtocol(p);
      });

    });
  });
