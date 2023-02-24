"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _modalModule = _interopRequireDefault(require("./modal.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Modal = _ref => {
  let {
    show,
    onClose,
    title,
    children,
    around
  } = _ref;
  const closeOnEscapeKeyDown = e => {
    if ((e.key || e.code) === "Escape") onClose();
  };
  (0, _react.useEffect)(() => {
    window.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => window.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, []);
  return show && /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modal,
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_modalModule.default.modal__content, " ").concat(around && _modalModule.default.modal__around),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modal__header
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: _modalModule.default.modal__title
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_modalModule.default.modal__button, " ").concat(_modalModule.default.modal__close),
    onClick: onClose
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modal__body
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modal__footer
  })));
};
var _default = Modal;
exports.default = _default;