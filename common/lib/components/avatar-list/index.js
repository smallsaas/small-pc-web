"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _avatar = _interopRequireDefault(require("antd/lib/avatar"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var AvatarList = function AvatarList(_ref) {
  var children = _ref.children,
      size = _ref.size,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "size"]);

  var childrenWithProps = _react.default.Children.map(children, function (child) {
    return _react.default.cloneElement(child, {
      size: size
    });
  });

  return _react.default.createElement("div", (0, _extends2.default)({}, other, {
    className: "kc-avatar-list"
  }), _react.default.createElement("ul", null, " ", childrenWithProps, " "));
};

var Item = function Item(_ref2) {
  var _classNames;

  var src = _ref2.src,
      size = _ref2.size,
      tips = _ref2.tips,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick;
  var cls = (0, _classnames.default)('kc-avatar-item', (_classNames = {}, (0, _defineProperty2.default)(_classNames, 'kc-avatar-item-large', size === 'large'), (0, _defineProperty2.default)(_classNames, 'kc-avatar-item-small', size === 'small'), (0, _defineProperty2.default)(_classNames, 'kc-avatar-item-mini', size === 'mini'), _classNames));
  return _react.default.createElement("li", {
    className: cls,
    onClick: onClick
  }, tips ? _react.default.createElement(_tooltip.default, {
    title: tips
  }, _react.default.createElement(_avatar.default, {
    src: src,
    size: size,
    style: {
      cursor: 'pointer'
    }
  })) : _react.default.createElement(_avatar.default, {
    src: src,
    size: size
  }));
};

AvatarList.Item = Item;
var _default = AvatarList;
exports.default = _default;