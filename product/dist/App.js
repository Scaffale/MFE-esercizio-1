"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _faker = require("@faker-js/faker");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _faker.faker.image.cats()
  }), /*#__PURE__*/_react.default.createElement("p", null, "Nome prodotto: ", _faker.faker.commerce.product(), " ", _faker.faker.commerce.productAdjective(), "."), /*#__PURE__*/_react.default.createElement("p", null, "Descrizione: ", _faker.faker.commerce.productDescription(), "."));
}
var _default = App;
exports.default = _default;