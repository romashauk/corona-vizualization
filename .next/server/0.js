exports.ids = [0];
exports.modules = {

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.the2019ncov.com/api/';
const codevizApi = 'https://cors-anywhere.herokuapp.com/https://www.covidvisualizer.com/api';
const getAllCases = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(async (resolve, reject) => {
    const link = `${apiUrl}/cases`;
    fetch(link).then(res => res.json()).catch(err => reject({
      code: 401,
      message: err.message
    })).then(res => resolve(res));
  });
};
const getTimeLineNews = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    const link = `${apiUrl}/timeline`;
    fetch(link).then(res => res.json()).catch(err => reject({
      code: 401,
      message: err.message
    })).then(res => resolve(res));
  });
};
const getCountry = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    fetch('http://ip-api.com/json').then(res => res.json()).catch(err => reject({
      code: 401,
      message: err.message
    })).then(res => resolve({
      status: res.status,
      country: res.country
    }));
  });
};
const getDataForMap = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    fetch(codevizApi).then(res => res.json()).catch(err => reject({
      code: 401,
      message: err.message
    })).then(res => resolve(res));
  });
};
const getD3Data = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    fetch('https://vasturiano.github.io/globe.gl/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(res => resolve(res.features)).catch(err => reject({
      code: 401,
      message: err.message
    }));
  });
};

/***/ }),

/***/ "./src/components/Loader/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Loader/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Loader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/roman/Desktop/projects/corona/src/components/Loader/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = () => {
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loaderWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    style: {
      width: '3rem',
      height: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Loader/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Loader/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loaderWrapper": "loaderWrapper___YQPKA"
};

/***/ }),

/***/ "./src/containers/WorldMap/CountryInfoModal.tsx":
/*!******************************************************!*\
  !*** ./src/containers/WorldMap/CountryInfoModal.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/containers/WorldMap/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/roman/Desktop/projects/corona/src/containers/WorldMap/CountryInfoModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountryInfoModal = props => {
  const {
    coutryStatistic,
    isOpen
  } = props;

  if (!isOpen) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.infoModal,
    style: {
      position: 'fixed',
      top: 0,
      left: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    src: coutryStatistic.flag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, coutryStatistic.name)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, coutryStatistic.cases, " total cases")), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.detailedInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, coutryStatistic.reports, " active"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, coutryStatistic.deaths, " deadths"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, coutryStatistic.recovered, " recovered")));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CountryInfoModal));

/***/ }),

/***/ "./src/containers/WorldMap/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/WorldMap/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/containers/WorldMap/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var react_globe_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-globe.gl */ "react-globe.gl");
/* harmony import */ var react_globe_gl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_globe_gl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CountryInfoModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CountryInfoModal */ "./src/containers/WorldMap/CountryInfoModal.tsx");


var _jsxFileName = "/Users/roman/Desktop/projects/corona/src/containers/WorldMap/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const WorldMap = () => {
  const globeEl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const {
    0: isLoaded,
    1: handleLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: data,
    1: handleData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: error,
    1: handleError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined);
  const {
    0: countries,
    1: setCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: hoverD,
    1: setHoverD
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: isModalOpen,
    1: setModalState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();

  const fetchData = async () => {
    try {
      const featureData = await Object(_api__WEBPACK_IMPORTED_MODULE_4__["getD3Data"])();
      setCountries(featureData);
    } catch (e) {
      handleError(e);
    }
  };

  const fetchDataForMap = async () => {
    try {
      const data = await Object(_api__WEBPACK_IMPORTED_MODULE_4__["getDataForMap"])();
      handleData(data);
    } catch (e) {
      handleError(e);
    }
  };

  const handleGlobeClick = () => {
    if (hoverD) {
      setSelectedCountry(hoverD);
      setModalState(true);
    } else {
      setModalState(false);
      setSelectedCountry(undefined);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetchData();
    fetchDataForMap();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // aim at continental Ukraine centroid
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: 49,
        lng: 32,
        altitude: 0.8
      });
    }
  }, [_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(globeEl.current)]);
  const scaleSequentialSqrt = d3__WEBPACK_IMPORTED_MODULE_7__["scaleSequentialSqrt"];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (data && countries) {
      countries.forEach(country => {
        const dataCountriesValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data.countries);

        for (let i = 0; i < dataCountriesValues.length; i++) {
          if (dataCountriesValues[i].name === country.properties.NAME_LONG || dataCountriesValues[i].name === country.properties.SOVEREIGNT || dataCountriesValues[i].name === country.properties.FORMAL_EN) {
            return country.statistic = dataCountriesValues[i];
          }
        }
      });
    }
  }, [data, countries]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (countries) {
      handleLoaded(true);
    }
  }, [countries]);
  const maxCases = 2000000;
  const colorScale = scaleSequentialSqrt(d3__WEBPACK_IMPORTED_MODULE_7__["interpolateYlOrRd"]);

  const getVal = feat => {
    if (feat.statistic) {
      return feat.statistic.cases / Math.max(1e5, maxCases);
    } else {
      return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    }
  };

  const maxVal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => countries && Math.max(...countries.map(getVal)), [countries]);
  colorScale.domain([0, maxVal]);

  const getLabelString = properties => {
    if (!hoverD) {
      setHoverD(properties);
    }

    if (properties.statistic) return `<div> ${properties.statistic.name}</div>
    `;else return `
      <div>${properties.properties.NAME_SORT}</div>
    `;
  };

  const onPolygonClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(feature => {
    setModalState(true);

    if (feature) {
      setSelectedCountry(feature);
    } else {
      setSelectedCountry(undefined);
      setModalState(false);
    }
  }, [selectedCountry]);

  if (error) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, "Something went wrong ");
  }

  if (!isLoaded) {
    return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    });
  }

  const isMobile = window.innerWidth < 700;
  return __jsx("div", {
    ref: globeEl,
    onClick: handleGlobeClick,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.worldMapContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx(react_globe_gl__WEBPACK_IMPORTED_MODULE_6___default.a //@ts-ignore
  , {
    ref: globeEl,
    globeImageUrl: "//unpkg.com/three-globe/example/img/earth-dark.jpg",
    backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
    polygonsData: countries,
    polygonAltitude: d => d === hoverD ? 0.12 : 0.06,
    polygonCapColor: d => d === hoverD ? 'steelblue' : colorScale(getVal(d)),
    polygonStrokeColor: () => '#111',
    polygonLabel: !isMobile ? item => getLabelString(item) : '',
    onPolygonHover: setHoverD,
    onPolygonClick: r => onPolygonClick(r),
    polygonsTransitionDuration: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), selectedCountry && selectedCountry.statistic && __jsx(_CountryInfoModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: isModalOpen,
    coutryStatistic: selectedCountry.statistic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ }),

/***/ "./src/containers/WorldMap/styles.module.scss":
/*!****************************************************!*\
  !*** ./src/containers/WorldMap/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"worldMapContainer": "worldMapContainer___6XYFA",
	"infoModal": "infoModal___2-IPc",
	"titleContainer": "titleContainer___2EldA",
	"detailedInfo": "detailedInfo___1hjeN"
};

/***/ })

};;
//# sourceMappingURL=0.js.map