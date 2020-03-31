webpackHotUpdate(1,{

/***/ "./src/containers/WorldMap/CountryInfoModal.tsx":
/*!******************************************************!*\
  !*** ./src/containers/WorldMap/CountryInfoModal.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/containers/WorldMap/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/roman/Desktop/projects/corona/src/containers/WorldMap/CountryInfoModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CountryInfoModal = function CountryInfoModal(props) {
  var coutryStatistic = props.coutryStatistic,
      isOpen = props.isOpen,
      coordinates = props.coordinates;

  if (!isOpen) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  console.log(coordinates);
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoModal,
    style: {
      position: 'fixed',
      top: coordinates.y,
      left: coordinates.x
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "ModalOpen");
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CountryInfoModal));

/***/ })

})
//# sourceMappingURL=1.93d4f01e53aaffd8c42d.hot-update.js.map