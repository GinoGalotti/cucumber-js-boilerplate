'use strict';

const utils = require('../support/utils'),
  sync = utils.sync,
  chai = require('chai'),
  expect = chai.expect;

module.exports = function () {
  this.World = require('../support/world');

  this.Then('I should see some data', sync(function(){
    expect(this.UI().getElements()).to.have.length.above(0);
  }));

  this.Then('I should see at least \'$number\' elements', sync(function(number){
    expect(this.UI().getElements()).to.have.length.above(number);
  }));
};
