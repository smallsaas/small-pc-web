"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _alert = _interopRequireDefault(require("antd/lib/alert"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("./index.css");

var _BodyWrapper = _interopRequireDefault(require("./wrapper/BodyWrapper"));

var _PropsProxy = _interopRequireDefault(require("./wrapper/PropsProxy"));

function initTotalList(columns) {
  var totalList = [];
  columns.forEach(function (column) {
    if (column.needTotal) {
      totalList.push((0, _objectSpread2.default)({}, column, {
        total: 0
      }));
    }
  });
  return totalList;
}

var StandardTable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StandardTable, _Component);

  function StandardTable(props) {
    var _this;

    (0, _classCallCheck2.default)(this, StandardTable);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StandardTable).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleRowSelectChange", function (selectedRowKeys, selectedRows) {
      console.log("handleRowSelectChange: ", selectedRowKeys, selectedRows);
      var needTotalList = (0, _toConsumableArray2.default)(_this.state.needTotalList);
      needTotalList = needTotalList.map(function (item) {
        return (0, _objectSpread2.default)({}, item, {
          total: selectedRows.reduce(function (sum, val) {
            return sum + parseFloat(val[item.dataIndex], 10);
          }, 0)
        });
      });

      if (_this.props.onSelectRow) {
        _this.props.onSelectRow(selectedRows);
      }

      _this.setState({
        selectedRowKeys: selectedRowKeys,
        needTotalList: needTotalList
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTableChange", function (pagination, filters, sorter) {
      if (_this.props.onChange) {
        _this.props.onChange(pagination, filters, sorter);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "cleanSelectedKeys", function () {
      _this.handleRowSelectChange([], []);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "refresh", function () {
      if (_this.props.onRefresh) {
        _this.props.onRefresh();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderAlert", function () {
      var _this$state = _this.state,
          selectedRowKeys = _this$state.selectedRowKeys,
          needTotalList = _this$state.needTotalList;
      var _this$props = _this.props,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? false : _this$props$loading,
          _this$props$showAlert = _this$props.showAlert,
          showAlert = _this$props$showAlert === void 0 ? true : _this$props$showAlert,
          _this$props$rowSelect = _this$props.rowSelection,
          rowSelection = _this$props$rowSelect === void 0 ? true : _this$props$rowSelect,
          data = _this$props.data,
          pagination = _this$props.pagination;

      if (showAlert && rowSelection) {
        var total = pagination && (0, _typeof2.default)(pagination) === 'object' ? pagination.total : data.length;
        var totalMsg = total && "\u5171 ".concat(total, " \u9879. ");
        return _react.default.createElement(_alert.default, {
          message: _react.default.createElement("div", null, totalMsg, "\u5DF2\u9009\u62E9 ", _react.default.createElement("a", {
            style: {
              fontWeight: 600
            }
          }, selectedRowKeys.length), " \u9879\xA0\xA0", needTotalList.map(function (item) {
            return _react.default.createElement("span", {
              style: {
                marginLeft: 8
              },
              key: item.dataIndex
            }, item.title, "\u603B\u8BA1\xA0", _react.default.createElement("span", {
              style: {
                fontWeight: 600
              }
            }, item.render ? item.render(item.total) : item.total));
          }), selectedRowKeys.length > 0 ? _react.default.createElement("a", {
            onClick: _this.cleanSelectedKeys,
            style: {
              marginLeft: 24
            }
          }, "\u6E05\u7A7A") : '', _this.props.onRefresh ? _react.default.createElement("a", {
            onClick: _this.refresh,
            style: {
              float: 'right'
            }
          }, _react.default.createElement(_icon.default, {
            type: "reload",
            spin: loading
          })) : ''),
          type: "info",
          showIcon: true
        });
      }
    });
    _this.handleRowSelectChange = _this.handleRowSelectChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.cleanSelectedKeys = _this.cleanSelectedKeys.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleTableChange = _this.handleTableChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.refresh = _this.refresh.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    var columns = props.columns,
        _props$size = props.size,
        size = _props$size === void 0 ? 'default' : _props$size;

    var _needTotalList = initTotalList(columns);

    _this.state = {
      selectedRowKeys: props.selectedRowKeys || [],
      needTotalList: _needTotalList
    };
    return _this;
  }

  (0, _createClass2.default)(StandardTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // clean state
      if (nextProps.selectedRowKeys && nextProps.selectedRowKeys.length === 0) {
        var needTotalList = initTotalList(nextProps.columns);
        this.setState({
          selectedRowKeys: [],
          needTotalList: needTotalList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          selectedRowKeys = _this$state2.selectedRowKeys,
          needTotalList = _this$state2.needTotalList;
      var _this$props2 = this.props,
          data = _this$props2.data,
          pagination = _this$props2.pagination,
          loading = _this$props2.loading,
          columns = _this$props2.columns,
          footer = _this$props2.footer,
          _this$props2$rowSelec = _this$props2.rowSelection,
          rowSelection = _this$props2$rowSelec === void 0 ? true : _this$props2$rowSelec;
      var paginationProps = pagination && (0, _typeof2.default)(pagination) === 'object' ? (0, _objectSpread2.default)({
        showSizeChanger: true,
        showQuickJumper: true
      }, pagination) : false;
      var rowSelectionProps = rowSelection ? {
        selectedRowKeys: selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.disabled
          };
        }
      } : null;
      var BodyWrapperWithProps = (0, _PropsProxy.default)(_BodyWrapper.default, {
        data: data,
        columns: columns
      });
      return _react.default.createElement("div", {
        className: "kc-std-table"
      }, _react.default.createElement("div", {
        className: "kc-std-table-alert"
      }, this.renderAlert()), _react.default.createElement(_table.default, {
        components: {
          body: {
            wrapper: BodyWrapperWithProps
          }
        },
        scroll: this.props.scroll,
        size: this.props.size,
        loading: loading,
        rowKey: function rowKey(record) {
          return record.key;
        },
        rowSelection: rowSelectionProps,
        dataSource: data,
        columns: columns,
        pagination: paginationProps,
        footer: footer,
        onChange: this.handleTableChange
      }));
    }
  }]);
  return StandardTable;
}(_react.Component);

StandardTable.propTypes = {
  onChange: _propTypes.default.func,
  data: _propTypes.default.array,
  pagination: _propTypes.default.object,
  columns: _propTypes.default.array,
  loading: _propTypes.default.bool
};
var _default = StandardTable;
exports.default = _default;