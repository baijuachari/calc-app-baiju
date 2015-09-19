'use strict';

var CALC = {
	add: function(a,b) {
		return a + b;
	},
	
	sub: function(a,b) {
		return a - b;
	}
};
module.exports = CALC;

var assert = require('assert');
var calcAppBaiju = require('../lib');

describe('calc-app-baiju', function () {
  it('should have unit test!', function () {
    assert(false, 'we expected this package author to add actual unit tests.');
  });
});
