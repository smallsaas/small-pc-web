"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _standardTable = _interopRequireDefault(require("./components/standard-table"));

var _editabledTable = _interopRequireDefault(require("./components/editabled-table"));

var _basicForms = _interopRequireDefault(require("./components/basic-forms"));

var _whiteSpace = _interopRequireDefault(require("./components/white-space"));

var _footerToolbar = _interopRequireDefault(require("./components/footer-toolbar"));

var _avatarList = _interopRequireDefault(require("./components/avatar-list"));

var _imageAdaptive = _interopRequireDefault(require("./components/image-adaptive"));

var _imageView = _interopRequireDefault(require("./components/image-view"));

var _textEllipsis = _interopRequireDefault(require("./components/text-ellipsis"));

var _Comment = _interopRequireDefault(require("./components/Comment"));

var _harmonyTips = _interopRequireDefault(require("./components/harmony-tips"));

var Permissions = _interopRequireWildcard(require("./components/Permissions"));

module.exports = {
  StandardTable: _standardTable.default,
  EditabledTable: _editabledTable.default,
  BasicForm: _basicForms.default,
  WhiteSpace: _whiteSpace.default,
  FooterToolbar: _footerToolbar.default,
  AvatarList: _avatarList.default,
  ImageAdaptive: _imageAdaptive.default,
  ImageView: _imageView.default,
  TextEllipsis: _textEllipsis.default,
  Comment: _Comment.default,
  HarmonyTips: _harmonyTips.default,
  Permissions: Permissions
};