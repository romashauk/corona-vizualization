webpackHotUpdate(1,{

/***/ "./src/containers/WorldMap/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/WorldMap/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/containers/WorldMap/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var react_globe_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-globe.gl */ "./node_modules/react-globe.gl/dist/react-globe.gl.module.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var _jsxFileName = "/Users/roman/Desktop/projects/corona/src/containers/WorldMap/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var WorldMap = function WorldMap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoaded = _useState[0],
      handleLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      data = _useState2[0],
      handleData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      error = _useState3[0],
      handleError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      countries = _useState4[0],
      setCountries = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      hoverD = _useState5[0],
      setHoverD = _useState5[1];

  var fetchData = function fetchData() {
    var _data, featureData;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_5__["getDataForMap"])());

          case 3:
            _data = _context.sent;
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_5__["getD3Data"])());

          case 6:
            featureData = _context.sent;
            handleData(_data);
            setCountries(featureData);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            handleError(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData();
  }, []);
  var scaleSequentialSqrt = d3__WEBPACK_IMPORTED_MODULE_8__["scaleSequentialSqrt"];
  console.log(scaleSequentialSqrt);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (data && countries) {
      countries.forEach(function (country) {
        var dataCountriesValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(data.countries);

        for (var i = 0; i < dataCountriesValues.length; i++) {
          if (dataCountriesValues[i].name === country.properties.SOVEREIGNT) {
            return country.statistic = dataCountriesValues[i];
          }
        }
      });
      handleLoaded(true);
    }
  }, [data, countries]);
  var colorScale = scaleSequentialSqrt(d3__WEBPACK_IMPORTED_MODULE_8__["interpolateYlOrRd"]);
  var maxVal = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return countries && Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(countries.map(getVal)));
  }, [countries]);

  var getVal = function getVal(feat) {
    return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
  };

  colorScale.domain([0, maxVal]);

  var getColor = function getColor(feature) {
    if (feature.statistic) {
      var maxCases = 200000;
      var multipier = feature.statistic.cases / maxCases;
      return "rgba(".concat(multipier * 250, ", 0, 0, 1)");
    } else {
      return "rgba(200, 0, 0, 0)";
    }
  };

  var getLabelString = function getLabelString(properties) {
    if (properties.statistic) return "<div> ".concat(properties.statistic.name, "</div>\n    ");else return "\n      <div>".concat(properties.properties.NAME_SORT, "</div>\n    ");
  };

  if (error) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Something went wrong ");
  }

  if (!isLoaded) {
    return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.worldMapContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_globe_gl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    globeImageUrl: "//unpkg.com/three-globe/example/img/earth-dark.jpg",
    backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
    polygonsData: countries,
    polygonAltitude: function polygonAltitude(d) {
      return d === hoverD ? 0.12 : 0.06;
    } // polygonCapColor={(d) => getColor(d)}
    // polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
    ,
    polygonCapColor: function polygonCapColor(d) {
      return d === hoverD ? 'steelblue' : colorScale(getVal(d));
    },
    polygonStrokeColor: function polygonStrokeColor() {
      return '#111';
    },
    polygonLabel: function polygonLabel(item) {
      return getLabelString(item);
    },
    onPolygonHover: setHoverD,
    onPolygonClick: function onPolygonClick(r) {
      return console.log(r);
    },
    polygonsTransitionDuration: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ })

})
//# sourceMappingURL=1.09dd60169ccffad32e0a.hot-update.js.map