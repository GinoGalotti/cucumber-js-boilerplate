'use strict';

module.exports = function () {
  this.World = require('../support/world');

  this.When('I click Example', function (done) {
    this.UI().clickButtonWithTextExample().then(done, done);
    //We should wait until the data load completly
  });

  this.When('I click on tab number \'$tab\'', function(tab, done){
    this.UI().goToTab(tab - 1).then(done, done);
  });

};
