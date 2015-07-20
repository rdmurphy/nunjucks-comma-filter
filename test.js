/* global it */
'use strict';

var assert = require('assert');
var commaFilter = require('./');

it('should return a number as a string with commas', function () {
	assert.strictEqual(commaFilter(123456789), '123,456,789');
});

it('should return a number string as a string with commas', function () {
	assert.strictEqual(commaFilter('123456789'), '123,456,789');
});

it('should return a "NaN" if a non-convertable number is not passed in', function () {
	assert.strictEqual(commaFilter('123456,789'), 'NaN');
});
