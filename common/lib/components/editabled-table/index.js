"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _divider = _interopRequireDefault(require("antd/lib/divider"));

var FormItem = _form.default.Item;

var EditableContext = _react.default.createContext();

var EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
      index = _ref.index,
      props = (0, _objectWithoutProperties2.default)(_ref, ["form", "index"]);
  return _react.default.createElement(EditableContext.Provider, {
    value: form
  }, _react.default.createElement("tr", props));
};

var EditableFormRow = _form.default.create()(EditableRow);

var EditableCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EditableCell, _React$Component);

  function EditableCell() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EditableCell)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getInput", function () {
      if (_this.props.inputType === 'number') {
        return _react.default.createElement(_inputNumber.default, {
          size: "small"
        });
      }

      return _react.default.createElement(_input.default, {
        size: "small"
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EditableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editing = _this$props.editing,
          dataIndex = _this$props.dataIndex,
          title = _this$props.title,
          record = _this$props.record,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["editing", "dataIndex", "title", "record"]);
      return _react.default.createElement(EditableContext.Consumer, null, function (form) {
        var getFieldDecorator = form.getFieldDecorator;
        return _react.default.createElement("td", restProps, editing ? _react.default.createElement(FormItem, null, getFieldDecorator(dataIndex, {
          rules: [{
            required: true,
            message: "Please Input ".concat(title, "!")
          }],
          initialValue: record[dataIndex]
        })(_this2.getInput())) : restProps.children);
      });
    }
  }]);
  return EditableCell;
}(_react.default.Component);

var EditabledTable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(EditabledTable, _Component);

  function EditabledTable(props) {
    var _this3;

    (0, _classCallCheck2.default)(this, EditabledTable);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(EditabledTable).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "handleRowSelectChange", function (selectedRowKeys, selectedRows) {
      _this3.props.onSelectRow(selectedRowKeys);

      _this3.setState({
        selectedRowKeys: selectedRowKeys
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "isEditing", function (record) {
      return record.id === _this3.state.editingKey;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "cancel", function () {
      _this3.setState({
        editingKey: ''
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), "delete", function (id) {
      _this3.props.onDeleteRow(id);
    });
    _this3.handleRowSelectChange = _this3.handleRowSelectChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)));
    _this3.state = {
      data: [],
      columns: [],
      editingKey: '',
      selectedRowKeys: [],
      operate: {
        title: 'operation',
        dataIndex: 'operation',
        render: function render(text, record) {
          var editable = _this3.isEditing(record);

          return _react.default.createElement("div", {
            className: "editable-row-operations"
          }, editable ? _react.default.createElement("span", null, _react.default.createElement(EditableContext.Consumer, null, function (form) {
            return _react.default.createElement("a", {
              href: "javascript:;",
              onClick: function onClick() {
                return _this3.save(form, record.id);
              }
            }, "Save");
          }), _react.default.createElement(_popconfirm.default, {
            title: "Sure to cancel?",
            onConfirm: function onConfirm() {
              return _this3.cancel(record.id);
            }
          }, _react.default.createElement("a", null, "Cancel"))) : _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: function onClick() {
              return _this3.edit(record.id);
            }
          }, "Edit"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "Sure to delete",
            onConfirm: function onConfirm() {
              return _this3.delete(record.id);
            }
          }, _react.default.createElement("a", null, "Delete"))));
        }
      }
    };
    return _this3;
  }

  (0, _createClass2.default)(EditabledTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          columns = _this$props2.columns;
      this.setState({
        data: data,
        columns: columns
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // clean state
      if (nextProps.selectedRows && nextProps.selectedRows.length === 0) {
        this.setState({
          selectedRowKeys: []
        });
      }
    }
  }, {
    key: "edit",
    value: function edit(id) {
      this.setState({
        editingKey: id
      });
    }
  }, {
    key: "save",
    value: function save(from, key) {
      var _this4 = this;

      from.validateFields(function (error, row) {
        if (error) {
          return;
        }

        var newData = (0, _toConsumableArray2.default)(_this4.state.data);
        var index = newData.findIndex(function (item) {
          return key === item.id;
        });

        if (index > -1) {
          var item = newData[index];
          newData.splice(index, 1, (0, _objectSpread2.default)({}, item, row));
          var rowValue = (0, _objectSpread2.default)({}, item, row);

          _this4.props.onEditRow(rowValue);

          _this4.setState({
            data: newData,
            editingKey: ''
          });
        } else {
          newData.push(_this4.props.data);

          _this4.setState({
            data: newData,
            editingKey: ''
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      var _this$props3 = this.props,
          pagination = _this$props3.pagination,
          loading = _this$props3.loading,
          _this$props3$rowSelec = _this$props3.rowSelection,
          rowSelection = _this$props3$rowSelec === void 0 ? true : _this$props3$rowSelec,
          data = _this$props3.data;
      var paginationProps = pagination && (0, _typeof2.default)(pagination) === 'object' ? (0, _objectSpread2.default)({
        showSizeChanger: true,
        showQuickJumper: true
      }, pagination) : false;
      var components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell
        }
      };
      var columns = this.state.columns.map(function (col) {
        if (!col.editable) {
          return col;
        }

        return (0, _objectSpread2.default)({}, col, {
          onCell: function onCell(record) {
            return {
              record: record,
              inputType: 'text',
              dataIndex: col.dataIndex,
              title: col.title,
              editing: _this5.isEditing(record)
            };
          }
        });
      });
      columns.push(this.state.operate);
      var rowSelectionProps = rowSelection ? {
        selectedRowKeys: selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.disabled
          };
        }
      } : null;
      return _react.default.createElement("div", {
        className: "kc-std-table"
      }, _react.default.createElement(_table.default, {
        components: components,
        bordered: true // dataSource={this.state.data.length > 0 ? this.state.data : data}
        ,
        dataSource: this.state.data.length > 0 ? this.state.data : data,
        columns: columns,
        rowKey: function rowKey(record) {
          return record.id;
        },
        pagination: paginationProps,
        loading: loading,
        rowSelection: rowSelectionProps
      }));
    }
  }]);
  return EditabledTable;
}(_react.Component);

EditabledTable.propTypes = {
  onEditRow: _propTypes.default.func,
  data: _propTypes.default.array,
  pagination: _propTypes.default.object,
  columns: _propTypes.default.array,
  loading: _propTypes.default.bool
};
var _default = EditabledTable;
exports.default = _default;