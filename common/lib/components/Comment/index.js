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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _kqdLayoutFlex = require("kqd-layout-flex");

var _antd = require("antd");

var _DirectComment = _interopRequireDefault(require("./components/DirectComment"));

var _CommentItem = _interopRequireDefault(require("./components/CommentItem"));

require("./index.css");

var Comment =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Comment, _Component);

  function Comment() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Comment)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      directContent: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (e) {
      _this.setState({
        directContent: e.target.value || ''
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDirect", function () {
      var onComment = _this.props.onComment;
      var directContent = _this.state.directContent;

      if (onComment) {
        if (directContent.trim().length > 0) {
          onComment(directContent);

          _this.setState({
            directContent: ''
          });
        } else {
          _antd.message.warn('评论内容不能为空！');
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Comment, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          onChange = _this$props.onChange,
          onShowSizeChange = _this$props.onShowSizeChange,
          pagination = _this$props.pagination,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["data", "onChange", "onShowSizeChange", "pagination"]);
      var directContent = this.state.directContent;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_DirectComment.default, {
        value: directContent,
        onChange: this.handleChange
      }), _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        rightClassName: "kc-comment-textRight"
      }, _react.default.createElement(_react.Fragment, null), _react.default.createElement(_antd.Button, {
        type: "primary",
        onClick: this.handleDirect
      }, "\u6DFB\u52A0\u8BC4\u8BBA")), _react.default.createElement("br", null), data.map(function (item, i) {
        return _react.default.createElement(_CommentItem.default, (0, _extends2.default)({
          key: i,
          data: item
        }, restProps));
      }), _react.default.createElement("br", null), data.length > 0 ? _react.default.createElement("div", {
        className: "kc-comment-textRight"
      }, _react.default.createElement(_antd.Pagination, (0, _extends2.default)({}, pagination, {
        onChange: onChange,
        onShowSizeChange: onShowSizeChange,
        showQuickJumper: true,
        showSizeChanger: true
      }))) : '暂无数据');
    }
  }]);
  return Comment;
}(_react.Component);

exports.default = Comment;