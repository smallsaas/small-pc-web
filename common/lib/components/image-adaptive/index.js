"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

/**
 * @author LLH
 * @editor 
 * @updated 2018年8月21日
 * @desc 展示一张预期大小的图片。若图片过大，那么则会裁剪展示中间部分
 * @eg
      <ImageAdaptive
        data={{
            width: '80px',
            height: '80px',
            url: 'http://www.a.com/img.jpg',
            alt: '商品图片',
            margin: '0.5rem'
        }}
      />
 */
var _default = function _default(props) {
  var data = props.data;
  var _data$width = data.width,
      width = _data$width === void 0 ? '80px' : _data$width,
      _data$height = data.height,
      height = _data$height === void 0 ? '80px' : _data$height,
      _data$margin = data.margin,
      margin = _data$margin === void 0 ? '0 auto' : _data$margin;
  var style = {
    width: width,
    height: height,
    backgroundImage: "url(".concat(data.url, ")"),
    margin: margin
  };
  return _react.default.createElement("div", {
    className: "kc-image-adaptive",
    style: style
  });
};

exports.default = _default;