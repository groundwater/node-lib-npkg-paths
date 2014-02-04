var join = require('path').join;

var Interpoalte = require('lib-interpolate');

var params = {
  home : process.env.HOME,
  pwd  : process.cwd(),
};

var map = {
  config_root            : "%{home}/npkg",
  config_defaults        : "%{home}/npkg/defaults.json",
  config_defaults_module : "%{home}/npkg/%{package}/defaults.json"
};

var globals = new Interpoalte(params);

module.exports = function lookup(key, extras) {
  var line = map[key];
  
  if (!line) throw new Error("no mapping for", key);

  var partial = globals.expand(line);

  if (extras) {
    var locals  = new Interpoalte(extras);
    return locals.expand(partial);
  } else {
    return partial;
  }
  
};
