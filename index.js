'use strict';

var format = require('d3-format');
var commaFormatter = format.format(',');

module.exports = function commaify(str) {
  return commaFormatter(str);
};
