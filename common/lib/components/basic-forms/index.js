"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _generator = _interopRequireDefault(require("./generator"));

var _Submit = _interopRequireDefault(require("./Submit"));

var _dec, _class, _class2, _temp;

var BasicForm = (_dec = _form.default.create(), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BasicForm, _Component);

  function BasicForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BasicForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BasicForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      type: _this.props.defaultActiveKey,
      active: {}
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onSwitch", function (type) {
      _this.setState({
        type: type
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props$enterNotS = _this.props.enterNotSubmit,
          enterNotSubmit = _this$props$enterNotS === void 0 ? false : _this$props$enterNotS;
      console.log(666, _this.enterKeyDown);

      if (enterNotSubmit && _this.enterKeyDown) {
        _this.enterKeyDown = false;
        return false;
      }

      var _this$state = _this.state,
          active = _this$state.active,
          type = _this$state.type;
      var activeFileds = active[type];

      _this.props.form.validateFields(activeFileds, {
        force: true
      }, function (err, values) {
        _this.props.onSubmit(err, values);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEnterKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.enterKeyDown = true;
      }
    });
    return _this;
  }

  (0, _createClass2.default)(BasicForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onRef) {
        this.props.onRef(this);
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        form: this.props.form,
        updateActive: function updateActive(activeItem) {
          var _this2$state = _this2.state,
              type = _this2$state.type,
              active = _this2$state.active;

          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }

          _this2.setState({
            active: active
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          _this$props$layout = _this$props.layout,
          layout = _this$props$layout === void 0 ? 'horizontal' : _this$props$layout;
      var type = this.state.type;
      var otherChildren = [];

      _react.default.Children.forEach(children, function (item) {
        if (!item) {
          return;
        }

        otherChildren.push(item);
      });

      return _react.default.createElement("div", null, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit,
        layout: layout,
        onKeyDown: this.handleEnterKeyDown
      }, (0, _toConsumableArray2.default)(children)));
    }
  }]);
  return BasicForm;
}(_react.Component), (0, _defineProperty2.default)(_class2, "defaultProps", {
  className: '',
  defaultActiveKey: '',
  onSubmit: function onSubmit() {}
}), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  defaultActiveKey: _propTypes.default.string,
  onSubmit: _propTypes.default.func
}), (0, _defineProperty2.default)(_class2, "childContextTypes", {
  form: _propTypes.default.object,
  updateActive: _propTypes.default.func
}), _temp)) || _class); // for export

BasicForm.Submit = _Submit.default;

BasicForm.generate = function (map) {
  var items = {};
  Object.keys(map).forEach(function (item) {
    items[item] = (0, _generator.default)({
      defaultProps: map[item].props,
      defaultRules: map[item].rules,
      defaultLayout: map[item].layout,
      defaultLabel: map[item].label,
      defaultName: map[item].name
    })(map[item].component ? map[item].component : _input.default);
  });
  return items;
};

var _default = BasicForm;
exports.default = _default;