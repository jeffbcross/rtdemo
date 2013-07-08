'use strict';

angular.module('RTDemoApp')
  .controller('ArduinoCtrl', function ($scope, $syncResource) {
    var socket = {on:function (){}, write:function(){}}
    var socket = io.connect('http://localhost:1234');
    var binder = $syncResource({
      protocol: {
        change: function (query, delta) {
          socket.emit('write', delta.newVal);
        },
        subscribe: function (query, callback) {
          socket.on('update', function (data) {
            var delta = {data: data};
            
            callback(delta);
            $scope.$apply();
          });
        }
      }
    }).bind({
      scope: $scope,
      model: 'degrees'
    });
  });
