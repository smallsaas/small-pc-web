"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var _default = function _default(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size;
  var className = 'k-white-space-' + size;
  return _react.default.createElement("div", {
    className: className
  });
};

exports.default = _default;