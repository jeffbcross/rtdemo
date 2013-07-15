
describe('Spreadsheet', function () {
  var protractor = require('protractor')
    , tractor = protractor.getInstance()
    , HOST = '/#/spreadsheet'
    , fb
    , uniqueName = 'name-' + new Date().getTime()
    , uniqueDescription = 'desc-' + new Date().getTime()
    , firebaseOption;

  beforeEach(function (done) {
    tractor.get(HOST);  
    firebaseOption = tractor.findElement(protractor.By.repeater('protocol in protocols').row(2));
    firebaseOption.click().then(function () {
      done();
    });
  });

  it('should have firebase selected in the select dropdown', function (done) {
    selector = tractor.findElement(protractor.By.select('protocol'));
    selector.getAttribute('value').then(function (value) {
      expect(value).toEqual('firebase');
      done();
    });
  });

  it('should persist an object to firebase when creating', function (done) {
    var nameInput = tractor.findElement(protractor.By.input('item.name'));
    nameInput.click().then(function () {
      nameInput.sendKeys(uniqueName).then(function () {
        var descInput = tractor.findElement(protractor.By.input('item.description'));
        descInput.click().then(function () {
          descInput.sendKeys(uniqueDescription).then(function () {
            var saveBtn = tractor.findElement(protractor.By.css('button[type="submit"]'));
            saveBtn.click();
            
            var lastRowName = tractor.findElement(protractor.By.css('[ng-repeat="i in items"]:last-child [ng-bind="i.name"]'));
            lastRowName.getText().then(function (text) {
              expect(text).toEqual(uniqueName);
              done();
            });
          });
        });
      });
    });
  });

  it('should have persisted data to firebase', function (done) {
    var elementCount;

    function checkCount() {
      tractor.findElements(protractor.By.css('[ng-repeat="i in items"]')).then(function (elements) {
        if (elements.length) {
          elementCount = elements.length;
        }
        else {
          checkCount();
        }
      });
    }

    runs(function () {
      checkCount();
    });

    waitsFor(function () {
      return elementCount > 1;
    }, "rows to be greater than 1", 2000);

    runs(function () {
      var lastRowName = tractor.findElement(protractor.By.css('[ng-repeat="i in items"]:last-child [ng-bind="i.name"]'));
      lastRowName.getText().then(function (text) {
        expect(text).toEqual(uniqueName);
        done();
      });
    });
  });
});