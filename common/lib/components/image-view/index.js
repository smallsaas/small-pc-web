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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _imageAdaptive = _interopRequireDefault(require("../image-adaptive"));

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("./index.css");

/**
 * @author LLH
 * @editor 
 * @updated 2018年8月23日
 * @desc 展示一张图片。点击图片可在 模态框 查看大图
 * @eg
      <ImageView
        data={{
            url: 'http://www.a.com/img.jpg',
            alt: '商品图片',
        }}
      />
 */
var ImageView =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ImageView, _React$Component);

  function ImageView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ImageView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ImageView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      previewVisible: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSwitch", function () {
      _this.setState({
        previewVisible: !_this.state.previewVisible
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ImageView, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var previewVisible = this.state.previewVisible;
      var style = (0, _objectSpread2.default)({}, this.props.style);
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "kc-image-view",
        style: style,
        onClick: this.handleSwitch
      }, _react.default.createElement("div", {
        className: "kc-image-view-cover"
      }, _react.default.createElement(_icon.default, {
        type: "eye-o"
      })), _react.default.createElement(_imageAdaptive.default, {
        data: data
      })), _react.default.createElement(_modal.default, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleSwitch
      }, _react.default.createElement("img", {
        alt: data.alt || 'image',
        style: {
          width: '100%'
        },
        src: data.url
      })));
    }
  }]);
  return ImageView;
}(_react.default.Component);

exports.default = ImageView;