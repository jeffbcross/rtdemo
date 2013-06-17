'use strict';

describe('Controller: SpreadsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('RTDemoApp'));

  var SpreadsheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpreadsheetCtrl = $controller('SpreadsheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
