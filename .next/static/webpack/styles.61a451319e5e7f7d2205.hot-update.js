webpackHotUpdate("styles",{

/***/ "./src/containers/WorldMap/styles.module.scss":
/*!****************************************************!*\
  !*** ./src/containers/WorldMap/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"worldMapContainer":"worldMapContainer___6XYFA","infoModal":"infoModal___2-IPc","titleContainer":"titleContainer___2EldA","detailedInfo":"detailedInfo___1hjeN"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1585484607437");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.61a451319e5e7f7d2205.hot-update.js.map