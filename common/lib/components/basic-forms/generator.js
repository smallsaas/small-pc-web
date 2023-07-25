"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var innerDefaultFormItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 7
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    },
    md: {
      span: 10
    }
  }
};
var itemStyle = {// alignItems: 'center',
  // display: 'flex'
};

function generator(_ref) {
  var defaultProps = _ref.defaultProps,
      defaultRules = _ref.defaultRules,
      defaultLayout = _ref.defaultLayout,
      defaultLabel = _ref.defaultLabel,
      defaultName = _ref.defaultName;
  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(BasicComponent, _Component);

      function BasicComponent(props) {
        var _this;

        (0, _classCallCheck2.default)(this, BasicComponent);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BasicComponent).call(this, props));
        _this.state = {
          count: 0
        };
        return _this;
      }

      (0, _createClass2.default)(BasicComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.context.updateActive) {
            this.context.updateActive(this.props.name);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearInterval(this.interval);
        }
      }, {
        key: "render",
        value: function render() {
          var getFieldDecorator = this.context.form.getFieldDecorator;
          var options = {};
          var otherProps = {};
          var _this$props = this.props,
              onChange = _this$props.onChange,
              defaultValue = _this$props.defaultValue,
              rules = _this$props.rules,
              name = _this$props.name,
              layout = _this$props.layout,
              label = _this$props.label,
              valuePropName = _this$props.valuePropName,
              getValueFromEvent = _this$props.getValueFromEvent,
              _this$props$isPlain = _this$props.isPlain,
              isPlain = _this$props$isPlain === void 0 ? false : _this$props$isPlain,
              restProps = (0, _objectWithoutProperties2.default)(_this$props, ["onChange", "defaultValue", "rules", "name", "layout", "label", "valuePropName", "getValueFromEvent", "isPlain"]);
          var count = this.state.count;
          options.rules = rules || defaultRules;

          if (onChange) {
            options.onChange = onChange;
          }

          if (defaultValue) {
            options.initialValue = defaultValue;
          }

          if (valuePropName) {
            options.valuePropName = valuePropName;
          }

          if (getValueFromEvent) {
            options.getValueFromEvent = getValueFromEvent;
          }

          otherProps = restProps || otherProps;
          var formItemLayout = layout || defaultLayout || innerDefaultFormItemLayout;
          var labelName = label || defaultLabel;
          var fieldName = name || defaultName; //console.log("generator: options = ", options);

          return _react.default.createElement(_form.default.Item, (0, _extends2.default)({}, formItemLayout, {
            label: labelName,
            style: itemStyle
          }), isPlain ? _react.default.createElement("span", null, defaultValue) : getFieldDecorator(fieldName, options)(_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, defaultProps, otherProps))));
        }
      }]);
      return BasicComponent;
    }(_react.Component), (0, _defineProperty2.default)(_class, "contextTypes", {
      form: _propTypes.default.object,
      updateActive: _propTypes.default.func
    }), _temp;
  };
}