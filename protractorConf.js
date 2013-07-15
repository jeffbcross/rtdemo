// An example configuration file.
exports.config = {
  // The address of a running selenium server. If this is specified,
  // seleniumServerJar and seleniumPort will be ignored.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9000',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // Spec folders are relative to the current working directly when
    // protractor is called.
    specFolders: ['test/e2e'],
    // onComplete will be called before the driver quits.
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true
  }
};
