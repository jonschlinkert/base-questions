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

require('extend-shallow', 'extend');
require('question-store', 'questions');
require('common-questions');
require('micromatch', 'mm');
require('set-value', 'set');
require('get-value', 'get');
require('to-choices');
require('for-own');
require = fn;

/**
 * Expose `utils` modules
 */

module.exports = utils;
