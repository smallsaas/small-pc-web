"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var FooterToolbar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FooterToolbar, _Component);

  function FooterToolbar() {
    (0, _classCallCheck2.default)(this, FooterToolbar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FooterToolbar).apply(this, arguments));
  }

  (0, _createClass2.default)(FooterToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          _this$props$layout = _this$props.layout,
          layout = _this$props$layout === void 0 ? 'defaults' : _this$props$layout,
          extra = _this$props.extra,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "layout", "extra"]);
      var layoutMap = {
        defaults: function defaults() {
          return _react.default.createElement("div", null, _react.default.createElement("div", {
            className: "kc-footer-toolbar-left"
          }, extra), _react.default.createElement("div", {
            className: "kc-footer-toolbar-right"
          }, children));
        },
        left: function left() {
          return _react.default.createElement("div", null, _react.default.createElement("div", {
            className: "kc-footer-toolbar-left"
          }, children), _react.default.createElement("div", {
            className: "kc-footer-toolbar-left"
          }, extra));
        }
      };
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(className, 'kc-footer-toolbar')
      }, restProps), layoutMap[layout]());
    }
  }]);
  return FooterToolbar;
}(_react.Component);

exports.default = FooterToolbar;