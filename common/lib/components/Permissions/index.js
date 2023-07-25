"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPerm = createPerm;
exports.Permissions = exports.PermissionsProxy = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _createContext = (0, _react.createContext)(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var self = null;
var permissionsCache = null;

var PermissionsProxy =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PermissionsProxy, _React$Component);

  function PermissionsProxy(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PermissionsProxy);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PermissionsProxy).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      permList: {}
    });
    self = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this));

    if (permissionsCache) {
      setPerm(permissionsCache);
    }

    return _this;
  }

  (0, _createClass2.default)(PermissionsProxy, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return PermissionsProxy;
}(_react.default.Component);

exports.PermissionsProxy = PermissionsProxy;

var Permissions = function Permissions(_ref) {
  var permKey = _ref.permKey,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["permKey", "children"]);
  return _react.default.createElement(Consumer, null, function (context) {
    if (context.permList[permKey]) {
      return _react.default.cloneElement(children, props);
    }

    return null;
  });
};

exports.Permissions = Permissions;

function getPerm() {
  if (self && self.state.permList) {
    return self.state.permList;
  }

  return {};
}

function setPerm(args) {
  if (self) {
    if (!(args instanceof Array)) {
      args = [args];
    }

    var temp = {};
    args.forEach(function (key) {
      temp[key] = true;
    });
    self.setState({
      permList: (0, _objectSpread2.default)({}, getPerm(), temp)
    });
  } else {
    console.warn('调用之前，需要先使用 <PermissionsProxy></PermissionsProxy> 包裹整个应用的入口');
    permissionsCache = args;
  }
}

function clearPerm() {
  if (self) {
    self.setState({
      permList: {}
    });
    return true;
  }

  return false;
}

function createPerm() {
  return {
    getPerm: getPerm,
    setPerm: setPerm,
    clearPerm: clearPerm
  };
}