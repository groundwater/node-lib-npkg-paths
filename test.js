var assert = require('assert');

var path  = require('path');
var paths = require('./index.js');

assert.equal(paths('config_root'), path.join(process.env.HOME, 'npkg'));
assert.equal(paths('config_defaults'), path.join(process.env.HOME, 'npkg', 'defaults.json'));

assert.equal(paths('config_root'), path.join(process.env.HOME, 'npkg'));
assert.equal(paths('config_defaults_module', 
  {package: 'abc'}), 
  path.join(process.env.HOME, 'npkg', 'abc', 'defaults.json'));

console.log('ok')

