'use strict';

const enterTheApp = require('../support/utils').enterTheApp;

module.exports = function () {
  this.World = require('../support/world');

  this.Given('I visit \'$url\'', enterTheApp);

  this.Given('I write \'$text\' as text', function (text, done) {
    this.UI().fillIt(url).then(done, done);
  });

};
