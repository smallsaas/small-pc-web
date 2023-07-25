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

var _antd = require("antd");

var _kqdLayoutFlex = require("kqd-layout-flex");

var AddCommentItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AddCommentItem, _Component);

  function AddCommentItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AddCommentItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddCommentItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDeleteItem", function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onDeleteItem = _this$props.onDeleteItem;

      if (onDeleteItem) {
        onDeleteItem(data.id, data);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(AddCommentItem, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          data = _this$props$data === void 0 ? {} : _this$props$data;
      return _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        span: [2, 20],
        leftOffset: 2,
        className: "kc-comment-item",
        leftClassName: "kc-comment-avatar"
      }, _react.default.createElement(_antd.Avatar, {
        size: "large",
        src: data.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }), _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        span: [20, 4],
        rightClassName: "kc-comment-action"
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "kc-comment-secondary-color"
      }, data.memberName, " ", data.createTime), _react.default.createElement("div", {
        className: "kc-comment-secondary-content"
      }, data.content)), _react.default.createElement("div", null, _react.default.createElement(_antd.Popconfirm, {
        title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u8FFD\u52A0\u7684\u8BC4\u8BBA\u5417\uFF1F",
        okText: "\u5220\u9664",
        cancelText: "\u53D6\u6D88",
        onConfirm: this.handleDeleteItem
      }, _react.default.createElement("a", {
        href: "#"
      }, "\u5220\u9664")))));
    }
  }]);
  return AddCommentItem;
}(_react.Component);

exports.default = AddCommentItem;