/* deps: mocha */
var assert = require('assert');
var re = require('./');

function interpolate(str, data) {
  return str.replace(re(), function(m, prop) {
    return data[prop] || prop;
  });
}

describe('es6 regex', function () {
  it('should match es6 template delimiters in a string.', function () {
    var str = 'foo ${bar} baz ${quux}';
    var data = {bar: 'AAA', quux: 'BBB'};
    assert.equal(interpolate(str, data), 'foo AAA baz BBB');
  });
});
