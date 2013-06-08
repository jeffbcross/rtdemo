'use strict';

describe('Service: syncDeployd', function () {

  // load the service's module
  beforeEach(module('RTDemoApp'));

  // instantiate service
  var syncDeployd;
  beforeEach(inject(function (_syncDeployd_) {
    syncDeployd = _syncDeployd_;
  }));

  it('should do something', function () {
    expect(!!syncDeployd).toBe(true);
  });

});
