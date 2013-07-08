'use strict';

describe('Controller: ArduinoCtrl', function () {

  // load the controller's module
  beforeEach(module('RTDemoApp'));

  var ArduinoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArduinoCtrl = $controller('ArduinoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
