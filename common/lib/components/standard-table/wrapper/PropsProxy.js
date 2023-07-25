"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

/**
 * 传递 props 用的代理组件，用来解决一些第三方框架 无脑使用 React.createElement 导致报错的问题。比如说 antd table 的 components 。
 * 
 * 使用方式：
 *  const BodyWrapperWithProps = PropsProxy(BodyWrapper,{ data, columns });
 */
var _default = function _default(WrappedComponent, props) {
  var PropsProxy =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(PropsProxy, _Component);

    function PropsProxy() {
      (0, _classCallCheck2.default)(this, PropsProxy);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PropsProxy).apply(this, arguments));
    }

    (0, _createClass2.default)(PropsProxy, [{
      key: "render",
      value: function render() {
        var newProps = (0, _objectSpread2.default)({}, props, this.props);
        return _react.default.createElement(WrappedComponent, newProps);
      }
    }]);
    return PropsProxy;
  }(_react.Component);

  return PropsProxy;
};

exports.default = _default;