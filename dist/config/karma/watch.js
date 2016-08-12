'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (config) {
  var base = require('./_base')(config);

  config.set(_extends({}, base, {
    autoWatch: true,
    singleRun: false,
    mochaReporter: _extends({}, config.mochaReporter, {
      output: 'autowatch'
    })
  }));

  return config;
};

module.exports = exports['default'];