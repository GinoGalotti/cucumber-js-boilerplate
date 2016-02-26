'use strict';

const Q = require('q'),
  utils = require('../support/utils'),
  sync = utils.sync;

function sendKeyUp(targetSelector, keyCode) {
  const event = this.window.document.createEvent('HTMLEvents');
  event.initEvent('keyup', true, true);
  event.which = keyCode;
  event.keyCode = keyCode;
  const target = this.query(targetSelector);
  if (target)
    target.dispatchEvent(event);
  return this.wait();
}

module.exports = function (browser) {
  browser.sendKeyUp = sendKeyUp;

  return {
    visit (url) {
      return browser.visit(url);
    },
    fillIt: Q.nfbind(sync(function (text) {
      browser.fill('CSS_SELECTOR_TO_FILL', text);
    })),
    clickButtonWithTextExample() {
      return browser.pressButton('Example');
    },
    getElements(){
      return browser.querySelectorAll('WRITE_YOUR_CSS_SELECTOR');
    },
    goToTab(number){
      const elements = browser.querySelectorAll('TAB_CSS_SELECTOR');
      return browser.click(elements[number]);
    },
  };

};
