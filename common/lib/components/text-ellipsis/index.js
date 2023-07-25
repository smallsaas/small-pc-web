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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

/**
 * @author LLH
 * @editor LLH
 * @updated 2018年9月11日
 * @desc 指定行数，然后展示一段文字。超过行数的字将会被 … 截断。非等宽字体下，截取的长度有所误差。
 * @eg
      <TextEllipsis data={{
          title: 'a long text',
          row: 2,
      }} />
 */
var TextEllipsis =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextEllipsis, _Component);

  function TextEllipsis() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TextEllipsis);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextEllipsis)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      title: _this.props.data && _this.props.data.title || ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "format", function () {
      var _this$props$data = _this.props.data,
          _this$props$data$titl = _this$props$data.title,
          title = _this$props$data$titl === void 0 ? '' : _this$props$data$titl,
          _this$props$data$row = _this$props$data.row,
          row = _this$props$data$row === void 0 ? 1 : _this$props$data$row;

      if (_this.titleElement) {
        var fontSize = parseInt(getComputedStyle(_this.titleElement, undefined).fontSize, 10);
        var titleWidth = _this.titleElement.offsetWidth;
        var maxLength = Math.floor(titleWidth / fontSize) * row - 1;

        if (title.length > maxLength) {
          title = title.slice(0, maxLength) + '…';
        }
      }

      _this.setState({
        title: title
      });
    });
    return _this;
  }

  (0, _createClass2.default)(TextEllipsis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.format();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevProps.data.title !== this.props.data.title) {
        this.setState({
          title: prevProps.data.title
        }, function () {
          return _this2.format();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var title = this.state.title;
      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this3.titleElement = el;
        },
        className: this.props.className
      }, title);
    }
  }]);
  return TextEllipsis;
}(_react.Component);

exports.default = TextEllipsis;