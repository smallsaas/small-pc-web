"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HarmonyTips;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _utils = _interopRequireDefault(require("./utils"));

require("./index.css");

/**
 * @author LLH
 * @editor 
 * @updated 2018年9月5日
 * @desc 检测低版本的浏览器，并提供友好的提示。
 * @eg
      HarmonyTips({
        'IE8': false, // IE 8 不弹出提示
        'IE9': true, // IE 9 弹出提示
      });
 */
function HarmonyTips() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var browserType = (0, _utils.default)();
  var browserTypeMap = (0, _objectSpread2.default)({
    'IE': true,
    //IE 版本过低
    'IE6': true,
    'IE7': true,
    'IE8': true,
    'IE9': true,
    'IE10': true,
    'IE11': true,
    'FF': false,
    'Opera': false,
    'Safari': false,
    'Chrome': false,
    'Edge': false
  }, options);

  if (browserTypeMap[browserType] || false) {
    renderAlert();
  }
}

function renderAlert() {
  var div = document.createElement("div");
  var root = document.getElementById("root");
  div.id = "AlertBox";
  div.setAttribute('class', 'alertBox');
  div.innerHTML = ['<div>', '<div class="title">', '您正在使用过旧的浏览器访问我们的网站', '</div>', '<div class="close" id="closeAlertBox">', '关闭', '</div>', '<div class="content">', '为了能给您提供更优质的服务，请升级您的浏览器。', '<div>以下是我们推荐使用的浏览器：</div>', '</div>', '<a href="https://www.google.com/chrome/" title="谷歌浏览器官网" target="_blank">', '<div class="item">', '<span class="icon chrome"></span>', '<span class="itemText">谷歌浏览器</span>', '</div>', '</a>', '<a href="https://browser.qq.com/" title="QQ浏览器官网" target="_blank">', '<div class="item">', '<span class="icon qq"></span>', '<span class="itemText">QQ浏览器</span>', '</div>', '</a>', '<a href="https://browser.360.cn/se/" title="360浏览器官网" target="_blank">', '<div class="item">', '<span class="icon qihu"></span>', '<span class="itemText">360浏览器</span>', '</div>', '</a>', '</div>'].join('');
  document.body.insertBefore(div, root);
  setTimeout(function () {
    var closeAlertBox = document.getElementById('closeAlertBox');
    closeAlertBox.addEventListener("click", function () {
      document.body.removeChild(document.getElementById('AlertBox'));
    });
  }, 500);
}

;