"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var FormItem = _form.default.Item;
var defaultLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 10,
      offset: 6
    }
  }
};

var _default = function _default(_ref) {
  var className = _ref.className,
      layout = _ref.layout,
      pre = _ref.pre,
      extra = _ref.extra,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "layout", "pre", "extra"]);
  var theLayout = layout ? layout : defaultLayout;
  return _react.default.createElement(FormItem, theLayout, pre ? pre : '', _react.default.createElement(_button.default, (0, _extends2.default)({
    type: "primary",
    htmlType: "submit"
  }, rest)), extra ? extra : '');
};

exports.default = _default;