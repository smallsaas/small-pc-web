"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var BodyWrapper =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BodyWrapper, _Component);

  function BodyWrapper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BodyWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BodyWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      count: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "reRender", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getColumns", function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          data = _this$props.data;
      var totalColumns = [];
      var render = false;

      if (data.length > 0) {
        totalColumns = (0, _toConsumableArray2.default)(columns.map(function (column, index) {
          if (column.dataIndex !== 'operation') {
            var rst = '';

            if (column.bottomTotal) {
              render = true;
              rst = data.reduce(function (total, rowData) {
                // 下面的正则主要是用于处理一些简单的夹带非数字字符的情况，比如 ￥ 123.58
                var num = rowData[column.dataIndex] || 0;

                if (typeof num === 'string') {
                  num = num.replace(/[^0-9.]/ig, '');
                }

                return total + num;
              }, 0);

              if (column.dataIndex === 'transactionTotalSkuPrice') {}

              rst = +parseFloat(rst.toPrecision(14));

              if (typeof column.format === 'function') {
                rst = column.format(rst);
              }
            }

            return _react.default.createElement("td", {
              key: index,
              className: "kc-std-table-total-td",
              style: {
                textAlign: 'right'
              }
            }, rst);
          } else {
            return _react.default.createElement("td", {
              key: index
            });
          }
        }));

        if (columns && columns[1].dataIndex === 'total') {
          totalColumns.splice(1, 1, _react.default.createElement("td", {
            key: "_total"
          }, "\u603B\u8BA1"));
        }
      }

      if (render) {
        if (_this.reRender === false) {
          _this.reRender = setInterval(function (_) {
            _this.forceUpdate();
          }, 500);
        }

        return _react.default.createElement("tr", {
          className: "ant-table-row"
        }, totalColumns);
      } else {
        return null;
      }
    });
    return _this;
  }

  (0, _createClass2.default)(BodyWrapper, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.reRender);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("tbody", this.props, _react.default.createElement(_react.default.Fragment, null, this.props.children, this.getColumns()));
    }
  }]);
  return BodyWrapper;
}(_react.Component);

exports.default = BodyWrapper;