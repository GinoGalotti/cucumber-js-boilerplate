'use strict';

module.exports = {
  enterTheApp (url, done) {
    this.UI().visit(url).then(done, done);
  },
  toIndex (n) {
    return Number(n) - 1;
  },
  sync (fn) {
    return function () {
      const lastIndex = arguments.length - 1,
        done = arguments[lastIndex];
      try {
        fn.apply(this, Array.prototype.slice.call(arguments, 0, lastIndex));
        done();
      } catch (err) {
        done(err);
      }
    };
  }};
