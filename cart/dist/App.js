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
  return /*#__PURE__*/_react.default.createElement("p", null, "Hai ", _faker.faker.datatype.number(), " prodotti nel tuo carrello.");
}
var _default = App;
exports.default = _default;