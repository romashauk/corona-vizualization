webpackHotUpdate(1,{

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: apiUrl, codevizApi, getAllCases, getTimeLineNews, getCountry, getDataForMap, getD3Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codevizApi", function() { return codevizApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCases", function() { return getAllCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeLineNews", function() { return getTimeLineNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountry", function() { return getCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataForMap", function() { return getDataForMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getD3Data", function() { return getD3Data; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);


var apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.the2019ncov.com/api/';
var codevizApi = 'https://cors-anywhere.herokuapp.com/https://www.covidvisualizer.com/api';
var getAllCases = function getAllCases() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function _callee(resolve, reject) {
    var link;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            link = "".concat(apiUrl, "/cases");
            fetch(link).then(function (res) {
              return res.json();
            })["catch"](function (err) {
              return reject({
                code: 401,
                message: err.message
              });
            }).then(function (res) {
              return resolve(res);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};
var getTimeLineNews = function getTimeLineNews() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
    var link = "".concat(apiUrl, "/timeline");
    fetch(link).then(function (res) {
      return res.json();
    })["catch"](function (err) {
      return reject({
        code: 401,
        message: err.message
      });
    }).then(function (res) {
      return resolve(res);
    });
  });
};
var getCountry = function getCountry() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
    fetch('http://ip-api.com/json').then(function (res) {
      return res.json();
    })["catch"](function (err) {
      return reject({
        code: 401,
        message: err.message
      });
    }).then(function (res) {
      return resolve({
        status: res.status,
        country: res.country
      });
    });
  });
};
var getDataForMap = function getDataForMap() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
    fetch(codevizApi).then(function (res) {
      return res.json();
    })["catch"](function (err) {
      return reject({
        code: 401,
        message: err.message
      });
    }).then(function (res) {
      return resolve(res);
    });
  });
};
var getD3Data = function getD3Data() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
    fetch('https://vasturiano.github.io/globe.gl/example/datasets/ne_110m_admin_0_countries.geojson').then(function (res) {
      return res.json();
    }).then(function (res) {
      return resolve(res.features);
    })["catch"](function (err) {
      return reject({
        code: 401,
        message: err.message
      });
    });
  });
};

/***/ })

})
//# sourceMappingURL=1.89a34f98f1392833c3c4.hot-update.js.map