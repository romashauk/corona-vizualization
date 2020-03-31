exports.ids = [7];
exports.modules = {

/***/ "09Fr":
/***/ (function(module, exports) {

module.exports = {
	"worldMapContainer": "worldMapContainer___6XYFA",
	"infoModal": "infoModal___2-IPc",
	"titleContainer": "titleContainer___2EldA",
	"detailedInfo": "detailedInfo___1hjeN"
};

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "EuBe":
/***/ (function(module, exports) {

module.exports = {
	"loaderWrapper": "loaderWrapper___YQPKA"
};

/***/ }),

/***/ "QSKe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/containers/WorldMap/styles.module.scss
var styles_module = __webpack_require__("09Fr");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__("efbE");

// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var Loader = __webpack_require__("tXfa");

// EXTERNAL MODULE: external "react-globe.gl"
var external_react_globe_gl_ = __webpack_require__("uCv6");
var external_react_globe_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_globe_gl_);

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__("0i/h");

// CONCATENATED MODULE: ./src/containers/WorldMap/CountryInfoModal.tsx
var __jsx = external_react_default.a.createElement;



const CountryInfoModal = props => {
  const {
    coutryStatistic,
    isOpen
  } = props;

  if (!isOpen) {
    return __jsx(external_react_default.a.Fragment, null);
  }

  return __jsx("div", {
    className: styles_module_default.a.infoModal,
    style: {
      position: 'fixed',
      top: 0,
      left: 0
    }
  }, __jsx("img", {
    src: coutryStatistic.flag
  }), __jsx("div", {
    className: styles_module_default.a.titleContainer
  }, __jsx("span", null, __jsx("em", null, coutryStatistic.name)), __jsx("span", null, coutryStatistic.cases, " total cases")), __jsx("div", {
    className: styles_module_default.a.detailedInfo
  }, __jsx("span", null, coutryStatistic.reports, " active"), __jsx("span", null, coutryStatistic.deaths, " deadths"), __jsx("span", null, coutryStatistic.recovered, " recovered")));
};

/* harmony default export */ var WorldMap_CountryInfoModal = (external_react_default.a.memo(CountryInfoModal));
// CONCATENATED MODULE: ./src/containers/WorldMap/index.tsx


var WorldMap_jsx = external_react_default.a.createElement;








const WorldMap = () => {
  const globeEl = Object(external_react_["useRef"])(null);
  const {
    0: isLoaded,
    1: handleLoaded
  } = Object(external_react_["useState"])(false);
  const {
    0: data,
    1: handleData
  } = Object(external_react_["useState"])();
  const {
    0: error,
    1: handleError
  } = Object(external_react_["useState"])(undefined);
  const {
    0: countries,
    1: setCountries
  } = Object(external_react_["useState"])();
  const {
    0: hoverD,
    1: setHoverD
  } = Object(external_react_["useState"])();
  const {
    0: isModalOpen,
    1: setModalState
  } = Object(external_react_["useState"])(false);
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(external_react_["useState"])();

  const fetchData = async () => {
    try {
      const featureData = await Object(api["a" /* getD3Data */])();
      setCountries(featureData);
    } catch (e) {
      handleError(e);
    }
  };

  const fetchDataForMap = async () => {
    try {
      const data = await Object(api["b" /* getDataForMap */])();
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

  Object(external_react_["useEffect"])(() => {
    fetchData();
    fetchDataForMap();
  }, []);
  Object(external_react_["useEffect"])(() => {
    // aim at continental Ukraine centroid
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: 49,
        lng: 32,
        altitude: 0.6
      });
    }
  }, [stringify_default()(globeEl)]);
  const scaleSequentialSqrt = external_d3_["scaleSequentialSqrt"];
  Object(external_react_["useEffect"])(() => {
    if (data && countries) {
      countries.forEach(country => {
        const dataCountriesValues = values_default()(data.countries);

        for (let i = 0; i < dataCountriesValues.length; i++) {
          if (dataCountriesValues[i].name === country.properties.NAME_LONG || dataCountriesValues[i].name === country.properties.SOVEREIGNT || dataCountriesValues[i].name === country.properties.FORMAL_EN) {
            return country.statistic = dataCountriesValues[i];
          }
        }
      });
    }
  }, [data, countries]);
  Object(external_react_["useEffect"])(() => {
    if (countries) {
      handleLoaded(true);
    }
  }, [countries]);
  const maxCases = 2000000;
  const colorScale = scaleSequentialSqrt(external_d3_["interpolateYlOrRd"]);

  const getVal = feat => {
    if (feat.statistic) {
      return feat.statistic.cases / Math.max(1e5, maxCases);
    } else {
      return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    }
  };

  const maxVal = Object(external_react_["useMemo"])(() => countries && Math.max(...countries.map(getVal)), [countries]);
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

  const onPolygonClick = Object(external_react_["useCallback"])(feature => {
    setModalState(true);

    if (feature) {
      setSelectedCountry(feature);
    } else {
      setSelectedCountry(undefined);
      setModalState(false);
    }
  }, [selectedCountry]);

  if (error) {
    return WorldMap_jsx("div", null, "Something went wrong ");
  }

  if (!isLoaded) {
    return WorldMap_jsx(Loader["a" /* default */], null);
  }

  const isMobile = window.innerWidth < 700;
  return WorldMap_jsx("div", {
    onClick: handleGlobeClick,
    className: styles_module_default.a.worldMapContainer
  }, WorldMap_jsx(external_react_globe_gl_default.a, {
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
    polygonsTransitionDuration: 300
  }), selectedCountry && selectedCountry.statistic && WorldMap_jsx(WorldMap_CountryInfoModal, {
    isOpen: isModalOpen,
    coutryStatistic: selectedCountry.statistic
  }));
};

/* harmony default export */ var containers_WorldMap = __webpack_exports__["default"] = (WorldMap);

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "efbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiUrl */
/* unused harmony export codevizApi */
/* unused harmony export getAllCases */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTimeLineNews; });
/* unused harmony export getCountry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDataForMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getD3Data; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
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

/***/ "tXfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuBe");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = () => {
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loaderWrapper
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    style: {
      width: '3rem',
      height: '3rem'
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ })

};;