"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _kqdLayoutFlex = require("kqd-layout-flex");

var TextArea = _antd.Input.TextArea;

var DirectComment =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DirectComment, _Component);

  function DirectComment() {
    (0, _classCallCheck2.default)(this, DirectComment);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DirectComment).apply(this, arguments));
  }

  (0, _createClass2.default)(DirectComment, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        span: [2, 22],
        className: "kc-comment-box",
        leftClassName: "kc-comment-textConter"
      }, _react.default.createElement("div", null), _react.default.createElement(TextArea, {
        rows: 2,
        placeholder: "\u8BF7\u8F93\u5165\u8BC4\u8BBA\u2026\u2026",
        value: this.props.value,
        onChange: this.props.onChange
      }));
    }
  }]);
  return DirectComment;
}(_react.Component);

exports.default = DirectComment;