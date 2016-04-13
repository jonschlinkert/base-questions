'use strict';

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('define-property', 'define');
require('mixin-deep', 'merge');
require('question-store', 'Questions');
require = fn;

utils.sync = function(obj, prop, val) {
  var cached;
  utils.define(obj, prop, {
    configurable: true,
    enumerable: true,
    set: function(v) {
      cached = v;
    },
    get: function() {
      if (typeof cached !== 'undefined') {
        return cached;
      }
      if (typeof val === 'function') {
        val = val.call(obj);
      }
      cached = val;
      return val;
    }
  });
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
