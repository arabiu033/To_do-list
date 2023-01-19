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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #f1f2f5;\n  font-family: \"Roboto Slab\", serif;\n  min-width: 100vw;\n  min-height: 90vh;\n}\n\nbody,\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nmain,\n.list-title,\n#clear {\n  width: 40%;\n}\n\nmain {\n  background-color: #fff;\n  height: 100%;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\nmain > * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  width: 100%;\n}\n\n.list-title {\n  padding: 1.7% 1.2%;\n  height: 55px;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  color: gray;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\n.list-title h5 {\n  font-weight: 100;\n  font-size: 1.2rem;\n  letter-spacing: 0;\n  color: gray;\n}\n\n#to-do-list {\n  max-height: 35vh;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.todo {\n  letter-spacing: 10px;\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n\n.list-title .refresh {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.desc {\n  text-align: left;\n  width: 85%;\n  line-height: 23px;\n  color: gray;\n}\n\nli {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 3% 4%;\n  height: 62px;\n}\n\nli img {\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.form,\n.list-title,\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  font-weight: 100;\n  opacity: 0.6;\n}\n\ninput {\n  border: none;\n  padding: 4%;\n  height: 50px;\n}\n\n.to-do {\n  width: 90%;\n  font-size: 1rem;\n  color: gray;\n  font-style: italic;\n  letter-spacing: 1px;\n}\n\n.arrow {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 15px;\n  height: 15px;\n  margin-right: 5%;\n  cursor: pointer;\n}\n\n.to-do:focus {\n  outline: none;\n}\n\n.add-item {\n  width: 100%;\n  height: 55px;\n}\n\n#clear {\n  border: none;\n  background-color: #d4d4d4;\n  opacity: 0.5;\n  padding: 1.5% 0;\n  text-align: center;\n  font-size: 1rem;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-top: 0.4rem;\n  box-shadow: 0 0.5px 3px #000;\n}\n\n.hide {\n  display: none;\n}\n\n.edit {\n  background-color: #ffffbc;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n@media screen and (max-width: 800px) {\n  main,\n  .list-title,\n  #clear {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .todo {\n    font-size: 1.2rem;\n  }\n\n  .list-title h5 {\n    font-size: 0.7rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,yDAAsD;EACtD,4BAA4B;EAC5B,qBAAqB;EACrB,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;EAGE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,4CAA4C;EAC5C,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,qBAAqB;EACrB,WAAW;EACX,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;;;EAGE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,eAAe;EACf,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE;;;IAGE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url('./images/bg-desktop-light.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-color: #f1f2f5;\n  font-family: \"Roboto Slab\", serif;\n  min-width: 100vw;\n  min-height: 90vh;\n}\n\nbody,\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nmain,\n.list-title,\n#clear {\n  width: 40%;\n}\n\nmain {\n  background-color: #fff;\n  height: 100%;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\nmain > * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  width: 100%;\n}\n\n.list-title {\n  padding: 1.7% 1.2%;\n  height: 55px;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  color: gray;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 18%);\n}\n\n.list-title h5 {\n  font-weight: 100;\n  font-size: 1.2rem;\n  letter-spacing: 0;\n  color: gray;\n}\n\n#to-do-list {\n  max-height: 35vh;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.todo {\n  letter-spacing: 10px;\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n\n.list-title .refresh {\n  background-image: url('./images/refresh.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.desc {\n  text-align: left;\n  width: 85%;\n  line-height: 23px;\n  color: gray;\n}\n\nli {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-weight: 300;\n  padding: 3% 4%;\n  height: 62px;\n}\n\nli img {\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n\n.form,\n.list-title,\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  font-weight: 100;\n  opacity: 0.6;\n}\n\ninput {\n  border: none;\n  padding: 4%;\n  height: 50px;\n}\n\n.to-do {\n  width: 90%;\n  font-size: 1rem;\n  color: gray;\n  font-style: italic;\n  letter-spacing: 1px;\n}\n\n.arrow {\n  background-image: url('./images/enter.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 15px;\n  height: 15px;\n  margin-right: 5%;\n  cursor: pointer;\n}\n\n.to-do:focus {\n  outline: none;\n}\n\n.add-item {\n  width: 100%;\n  height: 55px;\n}\n\n#clear {\n  border: none;\n  background-color: #d4d4d4;\n  opacity: 0.5;\n  padding: 1.5% 0;\n  text-align: center;\n  font-size: 1rem;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-top: 0.4rem;\n  box-shadow: 0 0.5px 3px #000;\n}\n\n.hide {\n  display: none;\n}\n\n.edit {\n  background-color: #ffffbc;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n@media screen and (max-width: 800px) {\n  main,\n  .list-title,\n  #clear {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .todo {\n    font-size: 1.2rem;\n  }\n\n  .list-title h5 {\n    font-size: 0.7rem;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/status.js */ "./src/modules/status.js");




let tasks;
if (localStorage.getItem('listOfTasks')) {
  tasks = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__["default"](JSON.parse(localStorage.getItem('listOfTasks') || '[]'));
  (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__.updateCheck)(tasks);
} else {
  tasks = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__["default"]([]);
}

// eventlistener for arrow-enter
const add = document.querySelector('.arrow');
add.addEventListener('click', () => {
  tasks.add(add.previousSibling.previousSibling);
  (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__.updateCheck)(tasks);
});

// clear all completed eventlistener
const clear = document.getElementById('clear');
clear.addEventListener('click', () => (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__.clearTasks)(tasks));

// eventlistener for Enter key to add new to-do
const input = document.getElementById('new-priority');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tasks.add(add.previousSibling.previousSibling);
    (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_2__.updateCheck)(tasks);
  }
});


/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks),
/* harmony export */   "updateCheck": () => (/* binding */ updateCheck)
/* harmony export */ });
/* harmony import */ var _images_unchecked_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/unchecked.png */ "./src/images/unchecked.png");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/check.png */ "./src/images/check.png");
// This module contains functions related to status of the task



// tasks container
const ul = document.getElementById('to-do-list');

// Status of a todo
// Display unchecked box or marked
const select = (ele, task) => {
  ele.nextElementSibling.classList.toggle('strike');
  ele.src = ele.src === _images_check_png__WEBPACK_IMPORTED_MODULE_1__ ? _images_unchecked_png__WEBPACK_IMPORTED_MODULE_0__ : _images_check_png__WEBPACK_IMPORTED_MODULE_1__;
  const hold = task.tasks[+ele.parentElement.id - 1].completed;
  task.tasks[+ele.parentElement.id - 1].completed = !hold;
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
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
  task.tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
  ul.innerHTML = '';
  task.populate();
  updateCheck(task);
};



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskHandling),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/unchecked.png */ "./src/images/unchecked.png");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/check.png */ "./src/images/check.png");
/* harmony import */ var _images_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/bin.png */ "./src/images/bin.png");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status.js */ "./src/modules/status.js");
// This a class containing all the necessary operations






const ul = document.getElementById('to-do-list');
class TaskHandling {
  // Initialize the class properties
  constructor(tasks) {
    // use to make sure Focusout Event call 'remove method' only once
    this.signal = false;

    this.tasks = tasks;
    this.taskCount = tasks.length;
    ul.innerHTML = '';
    this.populate();
  }

  // class method to handle adding of to-do
  add(ele) {
    if (ele.value.trim() === '') {
      return;
    }

    this.taskCount += 1;
    this.tasks.push({ index: this.taskCount, desc: ele.value.trim(), completed: false });
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
      // serialize the tasks arrays after filtering the remove task
      this.tasks.forEach((ele, i) => { ele.index = i + 1; });

      localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
      ul.innerHTML = '';
      this.populate();
      (0,_status_js__WEBPACK_IMPORTED_MODULE_4__.updateCheck)(this);
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

      // Delay the focusout event incase user
      // wants to click the delete button
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
          <img class="check" src="${ele.completed ? _images_check_png__WEBPACK_IMPORTED_MODULE_2__ : _images_unchecked_png__WEBPACK_IMPORTED_MODULE_1__}" />
          <p class="desc ${ele.completed ? 'strike' : ''}">${ele.desc}</p>
          <input type="text" id="added-task" value="${ele.desc}" class="to-do hide edit">
          <img class="dots" src="${_images_menu_png__WEBPACK_IMPORTED_MODULE_0__}" style="cursor:move">
          <img class="dots hide bin" src="${_images_bin_png__WEBPACK_IMPORTED_MODULE_3__}" style="cursor:pointer">
        </li>
      `;
      ul.insertAdjacentHTML('beforeend', html);
    });

    // Add eventlisteners to the newly created tasks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUMsb0JBQW9COztBQUUzRDtBQUNBO0FBQ0EsdUNBQXVDLG9CQUFvQjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDLG9DQUFvQyxnQkFBZ0IsOENBQUksR0FBRyxrREFBUyxDQUFDO0FBQ3JFLDJCQUEyQiw4QkFBOEIsSUFBSSxTQUFTO0FBQ3RFLHNEQUFzRCxTQUFTO0FBQy9ELG1DQUFtQyw2Q0FBSSxDQUFDO0FBQ3hDLDRDQUE0Qyw0Q0FBTyxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RhdHVzLmpzIiwid2VicGFjazovL3RvX2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZy1kZXNrdG9wLWxpZ2h0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3JlZnJlc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZW50ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuYm9keSxcXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluLFxcbi5saXN0LXRpdGxlLFxcbiNjbGVhciB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTglKTtcXG59XFxuXFxubWFpbiA+ICoge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgcGFkZGluZzogMS43JSAxLjIlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE4JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbiN0by1kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDM1dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saXN0LXRpdGxlIC5yZWZyZXNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzYyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDg1JTtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbmxpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMyUgNCU7XFxuICBoZWlnaHQ6IDYycHg7XFxufVxcblxcbmxpIGltZyB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0sXFxuLmxpc3QtdGl0bGUsXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA0JTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5hcnJvdyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50by1kbzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbiNjbGVhciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcGFkZGluZzogMS41JSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjRyZW07XFxuICBib3gtc2hhZG93OiAwIDAuNXB4IDNweCAjMDAwO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmJjO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgbWFpbixcXG4gIC5saXN0LXRpdGxlLFxcbiAgI2NsZWFyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC50b2RvIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAubGlzdC10aXRsZSBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5REFBMkM7RUFDM0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFOzs7SUFHRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iZy1kZXNrdG9wLWxpZ2h0LmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG59XFxuXFxuYm9keSxcXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluLFxcbi5saXN0LXRpdGxlLFxcbiNjbGVhciB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTglKTtcXG59XFxuXFxubWFpbiA+ICoge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgcGFkZGluZzogMS43JSAxLjIlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE4JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbiN0by1kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDM1dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5saXN0LXRpdGxlIC5yZWZyZXNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvcmVmcmVzaC5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogODUlO1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxubGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiAzJSA0JTtcXG4gIGhlaWdodDogNjJweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybSxcXG4ubGlzdC10aXRsZSxcXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udG8tZG8ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvZW50ZXIucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuI2NsZWFyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAxLjUlIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC41cHggM3B4ICMwMDA7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYmM7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBtYWluLFxcbiAgLmxpc3QtdGl0bGUsXFxuICAjY2xlYXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgLnRvZG8ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5saXN0LXRpdGxlIGg1IHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrSGFuZGxpbmcgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IHtcbiAgdXBkYXRlQ2hlY2ssIGNsZWFyVGFza3MsXG59IGZyb20gJy4vbW9kdWxlcy9zdGF0dXMuanMnO1xuXG5sZXQgdGFza3M7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RPZlRhc2tzJykpIHtcbiAgdGFza3MgPSBuZXcgVGFza0hhbmRsaW5nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RPZlRhc2tzJykgfHwgJ1tdJykpO1xuICB1cGRhdGVDaGVjayh0YXNrcyk7XG59IGVsc2Uge1xuICB0YXNrcyA9IG5ldyBUYXNrSGFuZGxpbmcoW10pO1xufVxuXG4vLyBldmVudGxpc3RlbmVyIGZvciBhcnJvdy1lbnRlclxuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tzLmFkZChhZGQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZyk7XG4gIHVwZGF0ZUNoZWNrKHRhc2tzKTtcbn0pO1xuXG4vLyBjbGVhciBhbGwgY29tcGxldGVkIGV2ZW50bGlzdGVuZXJcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG5jbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsZWFyVGFza3ModGFza3MpKTtcblxuLy8gZXZlbnRsaXN0ZW5lciBmb3IgRW50ZXIga2V5IHRvIGFkZCBuZXcgdG8tZG9cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcmlvcml0eScpO1xuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICB0YXNrcy5hZGQoYWRkLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcpO1xuICAgIHVwZGF0ZUNoZWNrKHRhc2tzKTtcbiAgfVxufSk7XG4iLCIvLyBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgcmVsYXRlZCB0byBzdGF0dXMgb2YgdGhlIHRhc2tcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSAnLi4vaW1hZ2VzL3VuY2hlY2tlZC5wbmcnO1xuaW1wb3J0IG1hcmsgZnJvbSAnLi4vaW1hZ2VzL2NoZWNrLnBuZyc7XG5cbi8vIHRhc2tzIGNvbnRhaW5lclxuY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tbGlzdCcpO1xuXG4vLyBTdGF0dXMgb2YgYSB0b2RvXG4vLyBEaXNwbGF5IHVuY2hlY2tlZCBib3ggb3IgbWFya2VkXG5jb25zdCBzZWxlY3QgPSAoZWxlLCB0YXNrKSA9PiB7XG4gIGVsZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnc3RyaWtlJyk7XG4gIGVsZS5zcmMgPSBlbGUuc3JjID09PSBtYXJrID8gdW5jaGVja2VkIDogbWFyaztcbiAgY29uc3QgaG9sZCA9IHRhc2sudGFza3NbK2VsZS5wYXJlbnRFbGVtZW50LmlkIC0gMV0uY29tcGxldGVkO1xuICB0YXNrLnRhc2tzWytlbGUucGFyZW50RWxlbWVudC5pZCAtIDFdLmNvbXBsZXRlZCA9ICFob2xkO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrLnRhc2tzKSk7XG59O1xuXG4vLyBVcGRhdGUgYWxsIG1hcmsgdG9kb3Mgc3RhdHVzXG5jb25zdCB1cGRhdGVDaGVjayA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xuICBjaGVja3MuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZWxlY3QoZSwgdGFzaykpO1xuICB9KTtcbn07XG5cbi8vIEhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvZiByZW1vdmluZ1xuLy8gYWxsIG1hcmtlZCB0b2Rvc1xuY29uc3QgY2xlYXJUYXNrcyA9ICh0YXNrKSA9PiB7XG4gIHRhc2sudGFza3MgPSB0YXNrLnRhc2tzLmZpbHRlcigoZSkgPT4gZS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgdGFzay50YXNrcy5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgZS5pbmRleCA9IGkgKyAxO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RPZlRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFzay50YXNrcykpO1xuICB1bC5pbm5lckhUTUwgPSAnJztcbiAgdGFzay5wb3B1bGF0ZSgpO1xuICB1cGRhdGVDaGVjayh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZUNoZWNrLCBjbGVhclRhc2tzIH07IiwiLy8gVGhpcyBhIGNsYXNzIGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3Nhcnkgb3BlcmF0aW9uc1xuaW1wb3J0IGRvdHMgZnJvbSAnLi4vaW1hZ2VzL21lbnUucG5nJztcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSAnLi4vaW1hZ2VzL3VuY2hlY2tlZC5wbmcnO1xuaW1wb3J0IG1hcmsgZnJvbSAnLi4vaW1hZ2VzL2NoZWNrLnBuZyc7XG5pbXBvcnQgcmVjeWNsZSBmcm9tICcuLi9pbWFnZXMvYmluLnBuZyc7XG5pbXBvcnQgeyB1cGRhdGVDaGVjayB9IGZyb20gJy4vc3RhdHVzLmpzJztcblxuZXhwb3J0IGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWxpc3QnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tIYW5kbGluZyB7XG4gIC8vIEluaXRpYWxpemUgdGhlIGNsYXNzIHByb3BlcnRpZXNcbiAgY29uc3RydWN0b3IodGFza3MpIHtcbiAgICAvLyB1c2UgdG8gbWFrZSBzdXJlIEZvY3Vzb3V0IEV2ZW50IGNhbGwgJ3JlbW92ZSBtZXRob2QnIG9ubHkgb25jZVxuICAgIHRoaXMuc2lnbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgdGhpcy50YXNrQ291bnQgPSB0YXNrcy5sZW5ndGg7XG4gICAgdWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5wb3B1bGF0ZSgpO1xuICB9XG5cbiAgLy8gY2xhc3MgbWV0aG9kIHRvIGhhbmRsZSBhZGRpbmcgb2YgdG8tZG9cbiAgYWRkKGVsZSkge1xuICAgIGlmIChlbGUudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFza0NvdW50ICs9IDE7XG4gICAgdGhpcy50YXNrcy5wdXNoKHsgaW5kZXg6IHRoaXMudGFza0NvdW50LCBkZXNjOiBlbGUudmFsdWUudHJpbSgpLCBjb21wbGV0ZWQ6IGZhbHNlIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0T2ZUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgICB1bC5pbm5lckhUTUwgPSAnJztcbiAgICBlbGUudmFsdWUgPSAnJztcbiAgICB0aGlzLnBvcHVsYXRlKCk7XG4gIH1cblxuICAvLyBjbGFzcyBtZXRob2QgdG8gaGFuZGxlIHJlbW92aW5nIHRvLWRvXG4gIHJlbW92ZShlbGUpIHtcbiAgICBpZiAodGhpcy5zaWduYWwpIHtcbiAgICAgIC8vIHNlcmlhbGl6ZSB0aGUgdGFza3MgYXJyYXkgaW5jYXNlIG9mIGNoYW5nZXMgbWFkZSBieSBlZGl0aW5nXG4gICAgICB0aGlzLnRhc2tzLmZvckVhY2goKGVsZSwgaSkgPT4geyBlbGUuaW5kZXggPSBpICsgMTsgfSk7XG5cbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigoZSkgPT4gZS5pbmRleCAhPT0gK2VsZS5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgIC8vIHNlcmlhbGl6ZSB0aGUgdGFza3MgYXJyYXlzIGFmdGVyIGZpbHRlcmluZyB0aGUgcmVtb3ZlIHRhc2tcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgoZWxlLCBpKSA9PiB7IGVsZS5pbmRleCA9IGkgKyAxOyB9KTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RPZlRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICAgICAgdWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnBvcHVsYXRlKCk7XG4gICAgICB1cGRhdGVDaGVjayh0aGlzKTtcbiAgICAgIHRoaXMuc2lnbmFsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xhc3MgbWV0aG9kIHRvIGhhbmRsZSBlZGl0aW5nIG9mIHRvZG9cbiAgZWRpdChlbGUpIHtcbiAgICAvLyBjYXB0dXJlIHRoZSBzaWJsaW5ncyBlbGVtZW50IGluIHRoZSB0b2RvIGNhcmRcbiAgICBlbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGNvbnN0IGxpID0gZWxlLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dEFyZWEgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IG1lbnUgPSB0ZXh0QXJlYS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgYmluID0gbWVudS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAvLyBlZmZlY3QgdGhlIGVkaXRpbmcgbW9kZVxuICAgIHRleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBiaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcblxuICAgIC8vIGFkZCBldmVudGxpc3RlbmVyc1xuICAgIGJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlKGJpbikpO1xuXG4gICAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cChlbGUsIHRleHRBcmVhLCBtZW51LCBsaSwgYmluKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2lnbmFsID0gdHJ1ZTtcbiAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIGlmICh0ZXh0QXJlYS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUodGV4dEFyZWEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGF5IHRoZSBmb2N1c291dCBldmVudCBpbmNhc2UgdXNlclxuICAgICAgLy8gd2FudHMgdG8gY2xpY2sgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGVhbnVwKGVsZSwgdGV4dEFyZWEsIG1lbnUsIGxpLCBiaW4pLCAzMDApO1xuICAgIH0pO1xuXG4gICAgLy8gbW92ZSBjdXJzb3IgdG8gZW5kIG9mIGlucHV0IGZpZWxkXG4gICAgdGV4dEFyZWEuZm9jdXMoKTtcbiAgICBjb25zdCB2YWwgPSB0ZXh0QXJlYS52YWx1ZTtcbiAgICB0ZXh0QXJlYS52YWx1ZSA9ICcnO1xuICAgIHRleHRBcmVhLnZhbHVlID0gdmFsO1xuICB9XG5cbiAgLy8gSGlkZSBhbmQgc2hvd3MgZWxlbWVudHNcbiAgLy8gYmFzZWQgb24gdXNlciBhY3Rpb25cbiAgY2xlYW51cChlbGUsIHRleHRBcmVhLCBtZW51LCBsaSwgYmluKSB7XG4gICAgZWxlLnRleHRDb250ZW50ID0gdGV4dEFyZWEudmFsdWU7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgYmluLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0Jyk7XG5cbiAgICBpZiAodGhpcy5zaWduYWwpIHtcbiAgICAgIHRoaXMudGFza3NbbGkuaWQgLSAxXS5kZXNjID0gZWxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdE9mVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gIH1cblxuICAvLyBQb3B1bGF0ZSB0aGUgdG9kb3Mgb2YgdXNlclxuICBwb3B1bGF0ZSgpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKGVsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGxpIGNsYXNzPVwicHJpb3JpdGllc1wiIGlkPVwiJHtpICsgMX1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiY2hlY2tcIiBzcmM9XCIke2VsZS5jb21wbGV0ZWQgPyBtYXJrIDogdW5jaGVja2VkfVwiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXNjICR7ZWxlLmNvbXBsZXRlZCA/ICdzdHJpa2UnIDogJyd9XCI+JHtlbGUuZGVzY308L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRlZC10YXNrXCIgdmFsdWU9XCIke2VsZS5kZXNjfVwiIGNsYXNzPVwidG8tZG8gaGlkZSBlZGl0XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImRvdHNcIiBzcmM9XCIke2RvdHN9XCIgc3R5bGU9XCJjdXJzb3I6bW92ZVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJkb3RzIGhpZGUgYmluXCIgc3JjPVwiJHtyZWN5Y2xlfVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIj5cbiAgICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB1bC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGV2ZW50bGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIHRhc2tzXG4gICAgY29uc3QgZGVzY3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzYycpO1xuICAgIGRlc2NwLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmVkaXQoZSkpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=