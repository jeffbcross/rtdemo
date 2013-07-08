
describe('Spreadsheet', function () {
  var protractor = require('protractor')
    , tractor = protractor.getInstance()
    , HOST = 'http://localhost:9000/#/spreadsheet'
    // , request = require('request')
    , reqTimeout = 5000
    , queryTimeout = 5000
    , firebaseOption;

  beforeEach(function (done) {
    tractor.get(HOST);    

    firebaseOption = tractor.findElement(protractor.By.repeater('protocol in protocols').row(2));
    firebaseOption.click().then(function () {
      done();
    });
  });

  it('should have a select dropdown', function (done) {
    selector = tractor.findElement(protractor.By.select('protocol'));
    selector.getAttribute('value').then(function (value) {
      expect(value).toEqual('firebase');
      done();
    });
  });
});