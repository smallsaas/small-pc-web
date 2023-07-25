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

var _classnames = _interopRequireDefault(require("classnames"));

var _kqdLayoutFlex = require("kqd-layout-flex");

var _antd = require("antd");

var _AddCommentItem = _interopRequireDefault(require("./AddCommentItem"));

var TextArea = _antd.Input.TextArea;

var CommentItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CommentItem, _Component);

  function CommentItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CommentItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CommentItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      edit: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "content", "");
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDelete", function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onDelete = _this$props.onDelete;

      if (onDelete) {
        onDelete(data.id, data);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (e) {
      _this.content = e.target.value;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleAdd", function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          onAdd = _this$props2.onAdd;

      _this.setState({
        edit: false
      });

      if (onAdd) {
        if (_this.content.trim().length > 0) {
          onAdd(data.id, _this.content);
          _this.content = "";
        } else {
          _antd.message.warn('回复内容不能为空！');
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "flatMap", function (array, item) {
      if (item.replys instanceof Array && item.replys.length > 0) {
        _this.flatMap(array, item.replys[0]);
      }

      array.unshift(item);
    });
    return _this;
  }

  (0, _createClass2.default)(CommentItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var edit = this.state.edit;
      var _this$props3 = this.props,
          _this$props3$data = _this$props3.data,
          data = _this$props3$data === void 0 ? {} : _this$props3$data,
          onDeleteItem = _this$props3.onDeleteItem;
      var containerClassName = (0, _classnames.default)({
        'kc-comment-item': true,
        'active': edit
      });
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        span: [2, 22],
        className: containerClassName,
        leftClassName: "kc-comment-avatar"
      }, _react.default.createElement(_antd.Avatar, {
        size: "large",
        src: data.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }), _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        span: edit ? [24, 0] : [20, 4],
        rightClassName: "kc-comment-action"
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "kc-comment-secondary-color"
      }, data.memberName, " ", data.createTime), _react.default.createElement("div", {
        className: "kc-comment-secondary-content"
      }, data.content)), _react.default.createElement("div", null, true ? // data.isDeleteAllow === 1
      _react.default.createElement(_react.Fragment, null, _react.default.createElement(_antd.Popconfirm, {
        title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u8BC4\u8BBA\u5417\uFF1F",
        okText: "\u5220\u9664",
        cancelText: "\u53D6\u6D88",
        onConfirm: this.handleDelete
      }, _react.default.createElement("a", {
        href: "#"
      }, "\u5220\u9664")), _react.default.createElement(_antd.Divider, {
        type: "vertical"
      })) : '', _react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        onClick: function onClick(_) {
          return _this2.setState({
            edit: true
          });
        }
      }, "\u56DE\u590D")))), data.replys && data.replys.map(function (item) {
        var list = [];

        _this2.flatMap(list, item);

        return list.map(function (reply) {
          return _react.default.createElement(_AddCommentItem.default, {
            key: reply.id,
            data: reply,
            onDeleteItem: onDeleteItem
          });
        });
      }), edit ? _react.default.createElement(_react.Fragment, null, _react.default.createElement(TextArea, {
        rows: 2,
        placeholder: "\u8BF7\u8F93\u5165\u56DE\u590D\u2026\u2026",
        onChange: this.handleChange
      }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_kqdLayoutFlex.LRLayout, {
        rightClassName: "kc-comment-textRight"
      }, _react.default.createElement(_react.Fragment, null), _react.default.createElement("div", null, _react.default.createElement(_antd.Button, {
        size: "small",
        onClick: function onClick(_) {
          return _this2.setState({
            edit: false
          });
        }
      }, "\u53D6\u6D88"), _react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        onClick: this.handleAdd
      }, "\u56DE\u590D")))) : '');
    }
  }]);
  return CommentItem;
}(_react.Component);

exports.default = CommentItem;