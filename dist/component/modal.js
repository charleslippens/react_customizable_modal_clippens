"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styling/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(element) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Background"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Message"
  }, /*#__PURE__*/_react.default.createElement("p", null, element.text), /*#__PURE__*/_react.default.createElement("button", {
    className: "Button",
    onClick: element.close
  }, "X")));
}

var _default = Modal;
exports.default = _default;