"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-desktop-light.jpg */ "./src/images/bg-desktop-light.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/refresh.png */ "./src/images/refresh.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/enter.png */ "./src/images/enter.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,700&family=Montserrat:wght@500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #f1f2f5;\n  font-family: 'Fraunces', serif;\n  font-family: 'Montserrat', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 100%;\n  min-height: 85vh;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 35%;\n  height: 100%;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\nmain > * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  width: 100%;\n}\n\n.list-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.7% 1.2%;\n  height: 55px;\n  width: 35vw;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  color: gray;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\n.list-title h5 {\n  font-weight: 100;\n  font-size: 1.2rem;\n  letter-spacing: 0;\n  color: gray;\n}\n\n.todo {\n  letter-spacing: 10px;\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n\n.list-title .refresh {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.desc {\n  text-align: left;\n  width: 85%;\n  line-height: 23px;\n  color: gray;\n}\n\nli {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 3% 4%;\n  height: 62px;\n}\n\nli img {\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.form,\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  font-weight: 100;\n  opacity: 0.6;\n}\n\ninput {\n  border: none;\n  padding: 4%;\n  height: 50px;\n}\n\n.to-do {\n  width: 90%;\n  font-size: 1rem;\n  color: gray;\n  font-style: italic;\n  letter-spacing: 1px;\n}\n\n.arrow {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 15px;\n  height: 15px;\n  margin-right: 5%;\n  cursor: pointer;\n}\n\n.to-do:focus {\n  outline: none;\n}\n\n.add-item {\n  width: 100%;\n  height: 55px;\n}\n\n#clear {\n  border: none;\n  background-color: #d4d4d4;\n  opacity: 0.5;\n  padding: 1.5% 0;\n  text-align: center;\n  font-size: 1rem;\n  text-decoration: underline;\n  cursor: pointer;\n  width: 35vw;\n  margin-top: 0.3rem;\n  box-shadow: 0 0.5px 3px #000;\n}\n\n.hide {\n  display: none;\n}\n\n.edit {\n  background-color: #ffffbc;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,yDAAsD;EACtD,4BAA4B;EAC5B,qBAAqB;EACrB,yBAAyB;EACzB,8BAA8B;EAC9B,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,WAAW;EACX,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,700&family=Montserrat:wght@500;700&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url('./images/bg-desktop-light.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #f1f2f5;\n  font-family: 'Fraunces', serif;\n  font-family: 'Montserrat', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 100%;\n  min-height: 85vh;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 35%;\n  height: 100%;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\nmain > * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  width: 100%;\n}\n\n.list-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.7% 1.2%;\n  height: 55px;\n  width: 35vw;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  color: gray;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\n.list-title h5 {\n  font-weight: 100;\n  font-size: 1.2rem;\n  letter-spacing: 0;\n  color: gray;\n}\n\n.todo {\n  letter-spacing: 10px;\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n\n.list-title .refresh {\n  background-image: url('./images/refresh.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.desc {\n  text-align: left;\n  width: 85%;\n  line-height: 23px;\n  color: gray;\n}\n\nli {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 3% 4%;\n  height: 62px;\n}\n\nli img {\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.form,\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  font-weight: 100;\n  opacity: 0.6;\n}\n\ninput {\n  border: none;\n  padding: 4%;\n  height: 50px;\n}\n\n.to-do {\n  width: 90%;\n  font-size: 1rem;\n  color: gray;\n  font-style: italic;\n  letter-spacing: 1px;\n}\n\n.arrow {\n  background-image: url('./images/enter.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 15px;\n  height: 15px;\n  margin-right: 5%;\n  cursor: pointer;\n}\n\n.to-do:focus {\n  outline: none;\n}\n\n.add-item {\n  width: 100%;\n  height: 55px;\n}\n\n#clear {\n  border: none;\n  background-color: #d4d4d4;\n  opacity: 0.5;\n  padding: 1.5% 0;\n  text-align: center;\n  font-size: 1rem;\n  text-decoration: underline;\n  cursor: pointer;\n  width: 35vw;\n  margin-top: 0.3rem;\n  box-shadow: 0 0.5px 3px #000;\n}\n\n.hide {\n  display: none;\n}\n\n.edit {\n  background-color: #ffffbc;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ "./src/status.js");




let tasks;
if (localStorage.getItem('listOfTasks')) {
  tasks = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](JSON.parse(localStorage.getItem('listOfTasks') || '[]'));
  // updateCheck(tasks);
} else {
  tasks = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]([]);
}

// eventlisteners for arrow-enter
const add = document.querySelector('.arrow');
add.addEventListener('click', () => {
  tasks.add(add.previousSibling.previousSibling);
  (0,_status_js__WEBPACK_IMPORTED_MODULE_2__.updateCheck)(tasks);
});

// clear all completed eventlisteners
const clear = document.getElementById('clear');
clear.addEventListener('click', () => (0,_status_js__WEBPACK_IMPORTED_MODULE_2__.clearTasks)(tasks));

// event listeners for Enter key to add new to-do
const input = document.getElementById('new-priority');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tasks.add(add.previousSibling.previousSibling);
    (0,_status_js__WEBPACK_IMPORTED_MODULE_2__.updateCheck)(tasks);
  }
});


/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks),
/* harmony export */   "updateCheck": () => (/* binding */ updateCheck)
/* harmony export */ });
/* harmony import */ var _images_unchecked_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/unchecked.png */ "./src/images/unchecked.png");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/check.png */ "./src/images/check.png");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
// Functions related to status of the task




// Status of a todo
// Display unchecked box or marked
const select = (ele, task) => {
  ele.nextElementSibling.classList.toggle('strike');
  ele.src = ele.src === _images_check_png__WEBPACK_IMPORTED_MODULE_1__ ? _images_unchecked_png__WEBPACK_IMPORTED_MODULE_0__ : _images_check_png__WEBPACK_IMPORTED_MODULE_1__;
  const hold = task.tasks[+ele.parentElement.id - 1].completed;

  if (hold) {
    task.tasks[+ele.parentElement.id - 1].completed = false;
  } else {
    task.tasks[+ele.parentElement.id - 1].completed = true;
  }
};

// Update all mark todos status
const updateCheck = (task) => {
  const checks = document.querySelectorAll('.check');
  checks.forEach((e) => {
    e.addEventListener('click', () => select(e, task));
  });
};

// Handle the functionality of removing
// all marked todos
const clearTasks = (task) => {
  task.tasks = task.tasks.filter((e) => e.completed === false);
  for (let i = 0; i < task.tasks.length; i += 1) {
    task.tasks[i].index = i + 1;
  }
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
  _task_js__WEBPACK_IMPORTED_MODULE_2__.ul.innerHTML = '';
  task.populate();
  updateCheck(task);
};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskHandling),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/unchecked.png */ "./src/images/unchecked.png");
/* harmony import */ var _images_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bin.png */ "./src/images/bin.png");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./src/status.js");
// This a class containing all the necessary operations





const ul = document.getElementById('to-do-list');
class TaskHandling {
  // Initialize the class properties
  constructor(tasks) {
    // use to make focusout event call remove method once.
    this.signal = false;

    this.tasks = tasks;
    this.taskCount = tasks.length;
    ul.innerHTML = '';
    this.populate();
  }

  // class method to handle adding of to-do
  add(ele) {
    if (ele.value === '') {
      return;
    }

    this.taskCount += 1;
    this.tasks.push({ index: this.taskCount, desc: ele.value, completed: false });
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
    ul.innerHTML = '';
    ele.value = '';
    this.populate();
  }

  // class method to handle removing to-do
  remove(ele) {
    if (this.signal) {
      // serialize the tasks array incase of changes made by editing
      this.tasks.forEach((ele, i) => { ele.index = i + 1; });

      this.tasks = this.tasks.filter((e) => e.index !== +ele.parentElement.id);
      // serialize the tasks arrays after filtering the renove task
      this.tasks.forEach((ele, i) => { ele.index = i + 1; });

      localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
      ul.innerHTML = '';
      this.populate();
      this.signal = false;
    }
  }

  // class method to handle editing of todo
  edit(ele) {
    // capture the siblings element in the todo card
    ele.classList.add('hide');
    const li = ele.parentElement;
    const textArea = ele.nextElementSibling;
    const menu = textArea.nextElementSibling;
    const bin = menu.nextElementSibling;

    // effect the editing mode
    textArea.classList.remove('hide');
    menu.classList.add('hide');
    bin.classList.remove('hide');
    li.classList.add('edit');

    // add eventlisteners
    bin.addEventListener('click', () => this.remove(bin));

    textArea.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.cleanup(ele, textArea, menu, li, bin);
      }
    });

    this.signal = true;
    textArea.addEventListener('focusout', () => {
      if (textArea.value === '') {
        this.remove(textArea);
        return;
      }
      setTimeout(() => this.cleanup(ele, textArea, menu, li, bin), 300);
    });

    // move cursor to end of input field
    textArea.focus();
    const val = textArea.value;
    textArea.value = '';
    textArea.value = val;
  }

  // Hide and shows elements
  // based on user action
  cleanup(ele, textArea, menu, li, bin) {
    ele.textContent = textArea.value;
    menu.classList.remove('hide');
    bin.classList.add('hide');
    textArea.classList.add('hide');
    ele.classList.remove('hide');
    li.classList.remove('edit');

    if (this.signal) {
      this.tasks[li.id - 1].desc = ele.textContent;
    }
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
  }

  // Populate the todos of user
  populate() {
    this.tasks.forEach((ele, i) => {
      const html = `
        <li class="priorities" id="${i + 1}">
          <img class="check" src="${_images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__}" />
          <p class="desc">${ele.desc}</p>
          <input type="text" id="added-task" value="${ele.desc}" class="to-do hide edit">
          <img class="dots" src="${_images_menu_png__WEBPACK_IMPORTED_MODULE_0__}" style="cursor:move">
          <img class="dots hide bin" src="${_images_bin_png__WEBPACK_IMPORTED_MODULE_2__}" style="cursor:pointer">
        </li>
      `;
      ul.insertAdjacentHTML('beforeend', html);
    });

    const descp = document.querySelectorAll('.desc');
    descp.forEach((e) => {
      e.addEventListener('click', () => this.edit(e));
    });
  }
}


/***/ }),

/***/ "./src/images/bg-desktop-light.jpg":
/*!*****************************************!*\
  !*** ./src/images/bg-desktop-light.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3508d620efd5a52bb4ce.jpg";

/***/ }),

/***/ "./src/images/bin.png":
/*!****************************!*\
  !*** ./src/images/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb1d20e6c2cc7df29fc.png";

/***/ }),

/***/ "./src/images/check.png":
/*!******************************!*\
  !*** ./src/images/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b489111f22bc662183e.png";

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e77853220e43ed0c4fde.png";

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9d3034b08238dc41948.png";

/***/ }),

/***/ "./src/images/refresh.png":
/*!********************************!*\
  !*** ./src/images/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f6e713fa2a5720b36d6.png";

/***/ }),

/***/ "./src/images/unchecked.png":
/*!**********************************!*\
  !*** ./src/images/unchecked.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fa367e8dc81aaafc3dd.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQyxvQ0FBb0Msa0RBQVMsQ0FBQztBQUM5Qyw0QkFBNEIsU0FBUztBQUNyQyxzREFBc0QsU0FBUztBQUMvRCxtQ0FBbUMsNkNBQUksQ0FBQztBQUN4Qyw0Q0FBNEMsNENBQU8sQ0FBQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9zcmMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmctZGVza3RvcC1saWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yZWZyZXNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VudGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJhdW5jZXM6aXRhbCxvcHN6LHdnaHRAMSw5Li4xNDQsNzAwJmZhbWlseT1Nb250c2VycmF0OndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgc2VyaWY7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTglKTtcXG59XFxuXFxubWFpbiA+ICoge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxLjclIDEuMiU7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICB3aWR0aDogMzV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxuICBjb2xvcjogZ3JheTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxOCUpO1xcbn1cXG5cXG4ubGlzdC10aXRsZSBoNSB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kbyB7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmxpc3QtdGl0bGUgLnJlZnJlc2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogODUlO1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxubGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiAzJSA0JTtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybSxcXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuI2NsZWFyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAxLjUlIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjVweCAzcHggIzAwMDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiYztcXG59XFxuXFxuLnN0cmlrZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmF1bmNlczppdGFsLG9wc3osd2dodEAxLDkuLjE0NCw3MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYmctZGVza3RvcC1saWdodC5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY1O1xcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIHNlcmlmO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODV2aDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMzUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE4JSk7XFxufVxcblxcbm1haW4gPiAqIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMS43JSAxLjIlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDM1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xcbiAgY29sb3I6IGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTglKTtcXG59XFxuXFxuLmxpc3QtdGl0bGUgaDUge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saXN0LXRpdGxlIC5yZWZyZXNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvcmVmcmVzaC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogODUlO1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxubGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiAzJSA0JTtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybSxcXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvZW50ZXIucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuI2NsZWFyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAxLjUlIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjVweCAzcHggIzAwMDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiYztcXG59XFxuXFxuLnN0cmlrZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2tIYW5kbGluZyBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHtcbiAgdXBkYXRlQ2hlY2ssIGNsZWFyVGFza3MsXG59IGZyb20gJy4vc3RhdHVzLmpzJztcblxubGV0IHRhc2tzO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0T2ZUYXNrcycpKSB7XG4gIHRhc2tzID0gbmV3IFRhc2tIYW5kbGluZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0T2ZUYXNrcycpIHx8ICdbXScpKTtcbiAgLy8gdXBkYXRlQ2hlY2sodGFza3MpO1xufSBlbHNlIHtcbiAgdGFza3MgPSBuZXcgVGFza0hhbmRsaW5nKFtdKTtcbn1cblxuLy8gZXZlbnRsaXN0ZW5lcnMgZm9yIGFycm93LWVudGVyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza3MuYWRkKGFkZC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nKTtcbiAgdXBkYXRlQ2hlY2sodGFza3MpO1xufSk7XG5cbi8vIGNsZWFyIGFsbCBjb21wbGV0ZWQgZXZlbnRsaXN0ZW5lcnNcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG5jbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsZWFyVGFza3ModGFza3MpKTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBFbnRlciBrZXkgdG8gYWRkIG5ldyB0by1kb1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByaW9yaXR5Jyk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIHRhc2tzLmFkZChhZGQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZyk7XG4gICAgdXBkYXRlQ2hlY2sodGFza3MpO1xuICB9XG59KTtcbiIsIi8vIEZ1bmN0aW9ucyByZWxhdGVkIHRvIHN0YXR1cyBvZiB0aGUgdGFza1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQucG5nJztcbmltcG9ydCBtYXJrIGZyb20gJy4vaW1hZ2VzL2NoZWNrLnBuZyc7XG5pbXBvcnQgeyB1bCB9IGZyb20gJy4vdGFzay5qcyc7XG5cbi8vIFN0YXR1cyBvZiBhIHRvZG9cbi8vIERpc3BsYXkgdW5jaGVja2VkIGJveCBvciBtYXJrZWRcbmNvbnN0IHNlbGVjdCA9IChlbGUsIHRhc2spID0+IHtcbiAgZWxlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdzdHJpa2UnKTtcbiAgZWxlLnNyYyA9IGVsZS5zcmMgPT09IG1hcmsgPyB1bmNoZWNrZWQgOiBtYXJrO1xuICBjb25zdCBob2xkID0gdGFzay50YXNrc1srZWxlLnBhcmVudEVsZW1lbnQuaWQgLSAxXS5jb21wbGV0ZWQ7XG5cbiAgaWYgKGhvbGQpIHtcbiAgICB0YXNrLnRhc2tzWytlbGUucGFyZW50RWxlbWVudC5pZCAtIDFdLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRhc2sudGFza3NbK2VsZS5wYXJlbnRFbGVtZW50LmlkIC0gMV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuLy8gVXBkYXRlIGFsbCBtYXJrIHRvZG9zIHN0YXR1c1xuY29uc3QgdXBkYXRlQ2hlY2sgPSAodGFzaykgPT4ge1xuICBjb25zdCBjaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcbiAgY2hlY2tzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VsZWN0KGUsIHRhc2spKTtcbiAgfSk7XG59O1xuXG4vLyBIYW5kbGUgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgcmVtb3Zpbmdcbi8vIGFsbCBtYXJrZWQgdG9kb3NcbmNvbnN0IGNsZWFyVGFza3MgPSAodGFzaykgPT4ge1xuICB0YXNrLnRhc2tzID0gdGFzay50YXNrcy5maWx0ZXIoKGUpID0+IGUuY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay50YXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRhc2sudGFza3NbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrLnRhc2tzKSk7XG4gIHVsLmlubmVySFRNTCA9ICcnO1xuICB0YXNrLnBvcHVsYXRlKCk7XG4gIHVwZGF0ZUNoZWNrKHRhc2spO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlQ2hlY2ssIGNsZWFyVGFza3MgfTsiLCIvLyBUaGlzIGEgY2xhc3MgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcGVyYXRpb25zXG5pbXBvcnQgZG90cyBmcm9tICcuL2ltYWdlcy9tZW51LnBuZyc7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5wbmcnO1xuaW1wb3J0IHJlY3ljbGUgZnJvbSAnLi9pbWFnZXMvYmluLnBuZyc7XG5pbXBvcnQgeyB1cGRhdGVDaGVjayB9IGZyb20gJy4vc3RhdHVzJztcblxuZXhwb3J0IGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWxpc3QnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tIYW5kbGluZyB7XG4gIC8vIEluaXRpYWxpemUgdGhlIGNsYXNzIHByb3BlcnRpZXNcbiAgY29uc3RydWN0b3IodGFza3MpIHtcbiAgICAvLyB1c2UgdG8gbWFrZSBmb2N1c291dCBldmVudCBjYWxsIHJlbW92ZSBtZXRob2Qgb25jZS5cbiAgICB0aGlzLnNpZ25hbCA9IGZhbHNlO1xuXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIHRoaXMudGFza0NvdW50ID0gdGFza3MubGVuZ3RoO1xuICAgIHVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucG9wdWxhdGUoKTtcbiAgfVxuXG4gIC8vIGNsYXNzIG1ldGhvZCB0byBoYW5kbGUgYWRkaW5nIG9mIHRvLWRvXG4gIGFkZChlbGUpIHtcbiAgICBpZiAoZWxlLnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFza0NvdW50ICs9IDE7XG4gICAgdGhpcy50YXNrcy5wdXNoKHsgaW5kZXg6IHRoaXMudGFza0NvdW50LCBkZXNjOiBlbGUudmFsdWUsIGNvbXBsZXRlZDogZmFsc2UgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RPZlRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICAgIHVsLmlubmVySFRNTCA9ICcnO1xuICAgIGVsZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMucG9wdWxhdGUoKTtcbiAgfVxuXG4gIC8vIGNsYXNzIG1ldGhvZCB0byBoYW5kbGUgcmVtb3ZpbmcgdG8tZG9cbiAgcmVtb3ZlKGVsZSkge1xuICAgIGlmICh0aGlzLnNpZ25hbCkge1xuICAgICAgLy8gc2VyaWFsaXplIHRoZSB0YXNrcyBhcnJheSBpbmNhc2Ugb2YgY2hhbmdlcyBtYWRlIGJ5IGVkaXRpbmdcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgoZWxlLCBpKSA9PiB7IGVsZS5pbmRleCA9IGkgKyAxOyB9KTtcblxuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKChlKSA9PiBlLmluZGV4ICE9PSArZWxlLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgLy8gc2VyaWFsaXplIHRoZSB0YXNrcyBhcnJheXMgYWZ0ZXIgZmlsdGVyaW5nIHRoZSByZW5vdmUgdGFza1xuICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKChlbGUsIGkpID0+IHsgZWxlLmluZGV4ID0gaSArIDE7IH0pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gICAgICB1bC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMucG9wdWxhdGUoKTtcbiAgICAgIHRoaXMuc2lnbmFsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xhc3MgbWV0aG9kIHRvIGhhbmRsZSBlZGl0aW5nIG9mIHRvZG9cbiAgZWRpdChlbGUpIHtcbiAgICAvLyBjYXB0dXJlIHRoZSBzaWJsaW5ncyBlbGVtZW50IGluIHRoZSB0b2RvIGNhcmRcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNvbnN0IGxpID0gZWxlLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEFyZWEgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IG1lbnUgPSB0ZXh0QXJlYS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgYmluID0gbWVudS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAvLyBlZmZlY3QgdGhlIGVkaXRpbmcgbW9kZVxuICAgIHRleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBiaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcblxuICAgIC8vIGFkZCBldmVudGxpc3RlbmVyc1xuICAgIGJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlKGJpbikpO1xuXG4gICAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cChlbGUsIHRleHRBcmVhLCBtZW51LCBsaSwgYmluKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2lnbmFsID0gdHJ1ZTtcbiAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIGlmICh0ZXh0QXJlYS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUodGV4dEFyZWEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xlYW51cChlbGUsIHRleHRBcmVhLCBtZW51LCBsaSwgYmluKSwgMzAwKTtcbiAgICB9KTtcblxuICAgIC8vIG1vdmUgY3Vyc29yIHRvIGVuZCBvZiBpbnB1dCBmaWVsZFxuICAgIHRleHRBcmVhLmZvY3VzKCk7XG4gICAgY29uc3QgdmFsID0gdGV4dEFyZWEudmFsdWU7XG4gICAgdGV4dEFyZWEudmFsdWUgPSAnJztcbiAgICB0ZXh0QXJlYS52YWx1ZSA9IHZhbDtcbiAgfVxuXG4gIC8vIEhpZGUgYW5kIHNob3dzIGVsZW1lbnRzXG4gIC8vIGJhc2VkIG9uIHVzZXIgYWN0aW9uXG4gIGNsZWFudXAoZWxlLCB0ZXh0QXJlYSwgbWVudSwgbGksIGJpbikge1xuICAgIGVsZS50ZXh0Q29udGVudCA9IHRleHRBcmVhLnZhbHVlO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGJpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdCcpO1xuXG4gICAgaWYgKHRoaXMuc2lnbmFsKSB7XG4gICAgICB0aGlzLnRhc2tzW2xpLmlkIC0gMV0uZGVzYyA9IGVsZS50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RPZlRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgLy8gUG9wdWxhdGUgdGhlIHRvZG9zIG9mIHVzZXJcbiAgcG9wdWxhdGUoKSB7XG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKChlbGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cInByaW9yaXRpZXNcIiBpZD1cIiR7aSArIDF9XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImNoZWNrXCIgc3JjPVwiJHt1bmNoZWNrZWR9XCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NcIj4ke2VsZS5kZXNjfTwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZGVkLXRhc2tcIiB2YWx1ZT1cIiR7ZWxlLmRlc2N9XCIgY2xhc3M9XCJ0by1kbyBoaWRlIGVkaXRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZG90c1wiIHNyYz1cIiR7ZG90c31cIiBzdHlsZT1cImN1cnNvcjptb3ZlXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImRvdHMgaGlkZSBiaW5cIiBzcmM9XCIke3JlY3ljbGV9XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjJyk7XG4gICAgZGVzY3AuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZWRpdChlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==