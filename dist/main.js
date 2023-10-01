/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 16px;
  --bodyBG: white;
  --bodyColor: black;

  --startPageBG: rgb(94, 98, 94);
  --startPageColor: black;

  --gameHeadingFont: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  --gameHeadingColor: black;

  --startBtnBg: rgb(0, 56, 0);
  --startBtnColor: white;

  --endPageBg: rgba(94, 98, 94, 0.3);
  --endPageColor: black;
  --endPageDivBG: blue;
  --endPageDivColor: white;
  --quitBtnBg: wheat;
  --quitBtnColor: black;
  --playAgainBtnBg: white;
  --playAgainBtnColor: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bodyBG);
  color: var(--bodyColor);
  width: 100vw;
  height: 100vh;
}

/*start page styling*/
.startPageDiv {
  background-color: var(--startPageBG);
  color: var(--startPageColor);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.gameHeading {
  font-size: 4rem;
  font-weight: 900;
  font-family: var(--gameHeadingFont);
  letter-spacing: 2px;
  color: var(--gameHeadingColor);
  margin-bottom: 10px;
}
.startForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.userName {
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: none;
  outline: 1px solid black;
  border-radius: 5px;
  transition: all 0.4s;
}
.userName:hover {
  outline: 3px solid blue;
}
.userName:active {
  outline: 2px solid green;
}
.userName:invalid {
  outline: 2px solid rgb(189, 0, 0);
}

.startGameBtn {
  width: fit-content;
  margin: 0 auto;
  padding: 5px;
  font-size: 3rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: 900;
  font-family: var(--gameHeadingFont);
  background-color: var(--startBtnBg);
  color: var(--startBtnColor);
  -webkit-box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);
  box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);
  transition: all 0.4s;
  cursor: pointer;
}
.startGameBtn:hover {
  transform: scale(1.1);
}
.startGameBtn:active {
  transform: scale(1);
  -webkit-box-shadow: 0;
  -moz-box-shadow: 0;
  box-shadow: none;
}

/*End page styles*/
.endPageBody {
  position: fixed;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--endPageBg);
  color: var(--endPageColor);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}
.endPageDiv {
  -webkit-box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  background-color: var(--endPageDivBG);
  color: var(--endPageDivColor);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  padding: 2rem;
}
.winnerText {
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 1.5rem;
  font-weight: 600;
}
.endPageBtn {
  padding: 5px;
  font-size: 1.5rem;
  font-weight: 900;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 5px;
}
.endPageBtn:hover {
  transform: scale(1.1);
}
.endPageBtn:active {
  transform: scale(0.8);
}

.quitBtn {
  background-color: var(--quitBtnBg);
  color: var(--quitBtnColor);
}
.playAgainBtn {
  background-color: var(--playAgainBtnBg);
  color: var(--playAgainBtnColor);
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;;EAElB,8BAA8B;EAC9B,uBAAuB;;EAEvB;cACY;EACZ,yBAAyB;;EAEzB,2BAA2B;EAC3B,sBAAsB;;EAEtB,kCAAkC;EAClC,qBAAqB;EACrB,oBAAoB;EACpB,wBAAwB;EACxB,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;EACvB,0BAA0B;AAC5B;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA,qBAAqB;AACrB;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mCAAmC;EACnC,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mCAAmC;EACnC,mCAAmC;EACnC,2BAA2B;EAC3B,0DAA0D;EAC1D,uDAAuD;EACvD,kDAAkD;EAClD,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,MAAM;EACN,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;EAClC,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0BAA0B;AAC5B;AACA;EACE,2DAA2D;EAC3D,wDAAwD;EACxD,mDAAmD;EACnD,mBAAmB;EACnB,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,gCAAgC;EAChC,SAAS;EACT,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\r\n  font-size: 16px;\r\n  --bodyBG: white;\r\n  --bodyColor: black;\r\n\r\n  --startPageBG: rgb(94, 98, 94);\r\n  --startPageColor: black;\r\n\r\n  --gameHeadingFont: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n    sans-serif;\r\n  --gameHeadingColor: black;\r\n\r\n  --startBtnBg: rgb(0, 56, 0);\r\n  --startBtnColor: white;\r\n\r\n  --endPageBg: rgba(94, 98, 94, 0.3);\r\n  --endPageColor: black;\r\n  --endPageDivBG: blue;\r\n  --endPageDivColor: white;\r\n  --quitBtnBg: wheat;\r\n  --quitBtnColor: black;\r\n  --playAgainBtnBg: white;\r\n  --playAgainBtnColor: black;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bodyBG);\r\n  color: var(--bodyColor);\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n/*start page styling*/\r\n.startPageDiv {\r\n  background-color: var(--startPageBG);\r\n  color: var(--startPageColor);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n.gameHeading {\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n  font-family: var(--gameHeadingFont);\r\n  letter-spacing: 2px;\r\n  color: var(--gameHeadingColor);\r\n  margin-bottom: 10px;\r\n}\r\n.startForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.userName {\r\n  width: 100%;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border: none;\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n  transition: all 0.4s;\r\n}\r\n.userName:hover {\r\n  outline: 3px solid blue;\r\n}\r\n.userName:active {\r\n  outline: 2px solid green;\r\n}\r\n.userName:invalid {\r\n  outline: 2px solid rgb(189, 0, 0);\r\n}\r\n\r\n.startGameBtn {\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n  padding: 5px;\r\n  font-size: 3rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 900;\r\n  font-family: var(--gameHeadingFont);\r\n  background-color: var(--startBtnBg);\r\n  color: var(--startBtnColor);\r\n  -webkit-box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);\r\n  box-shadow: -8px 10px 13px 6px rgba(0, 0, 0, 0.75);\r\n  transition: all 0.4s;\r\n  cursor: pointer;\r\n}\r\n.startGameBtn:hover {\r\n  transform: scale(1.1);\r\n}\r\n.startGameBtn:active {\r\n  transform: scale(1);\r\n  -webkit-box-shadow: 0;\r\n  -moz-box-shadow: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n/*End page styles*/\r\n.endPageBody {\r\n  position: fixed;\r\n  top: 0;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  background-color: var(--endPageBg);\r\n  color: var(--endPageColor);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  backdrop-filter: blur(5px);\r\n}\r\n.endPageDiv {\r\n  -webkit-box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 14px 13px 23px -7px rgba(0, 0, 0, 0.75);\r\n  border-radius: 10px;\r\n  background-color: var(--endPageDivBG);\r\n  color: var(--endPageDivColor);\r\n  text-align: center;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  gap: 1rem;\r\n  padding: 2rem;\r\n}\r\n.winnerText {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n.endPageBtn {\r\n  padding: 5px;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n  border-radius: 5px;\r\n}\r\n.endPageBtn:hover {\r\n  transform: scale(1.1);\r\n}\r\n.endPageBtn:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.quitBtn {\r\n  background-color: var(--quitBtnBg);\r\n  color: var(--quitBtnColor);\r\n}\r\n.playAgainBtn {\r\n  background-color: var(--playAgainBtnBg);\r\n  color: var(--playAgainBtnColor);\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/friendlyBoard.js":
/*!******************************!*\
  !*** ./src/friendlyBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (friendlyBoard);
function friendlyBoard() {
  const friendlyBoardDiv = document.createElement("div");
  friendlyBoardDiv.classList.add("friendlyBoard");

  const gameHeading = document.createElement("h1");
  gameHeading.textContent = "BATTLESHIP";
  gameHeading.classList.add("gameHeading");

  const instructionText = document.createElement("p");
  instructionText.setAttribute("id", "instructionText");
  instructionText.classList.add("instructionText");
  instructionText.textContent = "Place your ship";

  const orientationBtn = document.createElement("button");
  orientationBtn.setAttribute("id", "orientationBtn");
  orientationBtn.classList.add("orientationBtn");
  orientationBtn.textContent = "X Axis";

  const boardParentDiv = document.createElement("div");
  boardParentDiv.setAttribute("id", "boardParentDiv");
  boardParentDiv.classList.add("boardParentDiv");

  //cells

  friendlyBoardDiv.appendChild(gameHeading);
  friendlyBoardDiv.appendChild(instructionText);
  friendlyBoardDiv.appendChild(orientationBtn);
  return friendlyBoardDiv;
}


/***/ }),

/***/ "./src/ui/endPage.js":
/*!***************************!*\
  !*** ./src/ui/endPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endPage);
function endPage() {
  const endPageBody = document.createElement("div");
  endPageBody.classList.add("endPageBody");
  const endPageDiv = document.createElement("div");
  endPageDiv.classList.add("endPageDiv");
  endPageDiv.setAttribute("id", "endPageDiv");

  /* const winner = some function */

  const winnerText = document.createElement("p");
  winnerText.setAttribute("id", "winnerText");
  winnerText.textContent = "WINNER IS SOMEONE";
  winnerText.classList.add("winnerText");

  const quitButton = document.createElement("button");
  quitButton.textContent = "QUIT";
  quitButton.classList.add("endPageBtn");
  quitButton.classList.add("quitBtn");
  quitButton.setAttribute("id", "quitBtn");

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "PLAY AGAIN";
  playAgainButton.classList.add("endPageBtn");
  playAgainButton.classList.add("playAgainBtn");
  playAgainButton.setAttribute("id", "playAgainBtn");

  endPageDiv.appendChild(winnerText);
  endPageDiv.appendChild(quitButton);
  endPageDiv.appendChild(playAgainButton);

  endPageBody.appendChild(endPageDiv);
  return endPageBody;
}


/***/ }),

/***/ "./src/ui/startPage.js":
/*!*****************************!*\
  !*** ./src/ui/startPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startPage);
function startPage() {
  const startPageDiv = document.createElement("div");
  startPageDiv.classList.add("startPageDiv");
  startPageDiv.id = "startPageDiv";
  /* startPageDiv.classList.add("hide"); */

  //Game heading
  const gameHeading = document.createElement("h1");
  gameHeading.textContent = "BATTLESHIP";
  gameHeading.id = "gameHeading";
  gameHeading.classList.add("gameHeading");

  //Start form element
  const startForm = document.createElement("form");
  startForm.setAttribute("id", "startForm");
  startForm.classList.add("startForm");
  //Name input element
  const userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("id", "userName");
  userName.setAttribute("placeholder", "Enter Name");
  userName.setAttribute("required", "");
  userName.classList.add("userName");
  //Submit button
  const startGameBtn = document.createElement("button");
  startGameBtn.textContent = "START GAME";
  startGameBtn.setAttribute("type", "submit");
  startGameBtn.classList.add("startGameBtn");
  startGameBtn.setAttribute("id", "startGameBtn");
  startForm.appendChild(userName);
  startForm.appendChild(startGameBtn);

  startPageDiv.appendChild(gameHeading);
  startPageDiv.appendChild(startForm);
  return startPageDiv;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui_startPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/startPage */ "./src/ui/startPage.js");
/* harmony import */ var _ui_endPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/endPage */ "./src/ui/endPage.js");
/* harmony import */ var _friendlyBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friendlyBoard */ "./src/friendlyBoard.js");





const body = document.querySelector("body");
body.appendChild((0,_friendlyBoard__WEBPACK_IMPORTED_MODULE_3__["default"])());
/* body.appendChild(startPage()); */
/* body.appendChild(endPage()); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLGlFQUFlLFNBQVMsRUFBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCO0FBQ0o7QUFDUztBQUM1QztBQUNBO0FBQ0EsaUJBQWlCLDBEQUFhO0FBQzlCLGtDQUFrQztBQUNsQyxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mcmllbmRseUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3VpL2VuZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvdWkvc3RhcnRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC0tYm9keUJHOiB3aGl0ZTtcclxuICAtLWJvZHlDb2xvcjogYmxhY2s7XHJcblxyXG4gIC0tc3RhcnRQYWdlQkc6IHJnYig5NCwgOTgsIDk0KTtcclxuICAtLXN0YXJ0UGFnZUNvbG9yOiBibGFjaztcclxuXHJcbiAgLS1nYW1lSGVhZGluZ0ZvbnQ6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gIC0tZ2FtZUhlYWRpbmdDb2xvcjogYmxhY2s7XHJcblxyXG4gIC0tc3RhcnRCdG5CZzogcmdiKDAsIDU2LCAwKTtcclxuICAtLXN0YXJ0QnRuQ29sb3I6IHdoaXRlO1xyXG5cclxuICAtLWVuZFBhZ2VCZzogcmdiYSg5NCwgOTgsIDk0LCAwLjMpO1xyXG4gIC0tZW5kUGFnZUNvbG9yOiBibGFjaztcclxuICAtLWVuZFBhZ2VEaXZCRzogYmx1ZTtcclxuICAtLWVuZFBhZ2VEaXZDb2xvcjogd2hpdGU7XHJcbiAgLS1xdWl0QnRuQmc6IHdoZWF0O1xyXG4gIC0tcXVpdEJ0bkNvbG9yOiBibGFjaztcclxuICAtLXBsYXlBZ2FpbkJ0bkJnOiB3aGl0ZTtcclxuICAtLXBsYXlBZ2FpbkJ0bkNvbG9yOiBibGFjaztcclxufVxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5QkcpO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKnN0YXJ0IHBhZ2Ugc3R5bGluZyovXHJcbi5zdGFydFBhZ2VEaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXJ0UGFnZUJHKTtcclxuICBjb2xvcjogdmFyKC0tc3RhcnRQYWdlQ29sb3IpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLmdhbWVIZWFkaW5nIHtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZ2FtZUhlYWRpbmdGb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1nYW1lSGVhZGluZ0NvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdGFydEZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLnVzZXJOYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcbi51c2VyTmFtZTpob3ZlciB7XHJcbiAgb3V0bGluZTogM3B4IHNvbGlkIGJsdWU7XHJcbn1cclxuLnVzZXJOYW1lOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xyXG59XHJcbi51c2VyTmFtZTppbnZhbGlkIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDE4OSwgMCwgMCk7XHJcbn1cclxuXHJcbi5zdGFydEdhbWVCdG4ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1nYW1lSGVhZGluZ0ZvbnQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXJ0QnRuQmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1zdGFydEJ0bkNvbG9yKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC04cHggMTBweCAxM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogLThweCAxMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogLThweCAxMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zdGFydEdhbWVCdG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uc3RhcnRHYW1lQnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDA7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi8qRW5kIHBhZ2Ugc3R5bGVzKi9cclxuLmVuZFBhZ2VCb2R5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZW5kUGFnZUJnKTtcclxuICBjb2xvcjogdmFyKC0tZW5kUGFnZUNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuLmVuZFBhZ2VEaXYge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTRweCAxM3B4IDIzcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMTRweCAxM3B4IDIzcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDE0cHggMTNweCAyM3B4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVuZFBhZ2VEaXZCRyk7XHJcbiAgY29sb3I6IHZhcigtLWVuZFBhZ2VEaXZDb2xvcik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuLndpbm5lclRleHQge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5lbmRQYWdlQnRuIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5lbmRQYWdlQnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLmVuZFBhZ2VCdG46YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5xdWl0QnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWl0QnRuQmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1xdWl0QnRuQ29sb3IpO1xyXG59XHJcbi5wbGF5QWdhaW5CdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXlBZ2FpbkJ0bkJnKTtcclxuICBjb2xvcjogdmFyKC0tcGxheUFnYWluQnRuQ29sb3IpO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjs7RUFFbEIsOEJBQThCO0VBQzlCLHVCQUF1Qjs7RUFFdkI7Y0FDWTtFQUNaLHlCQUF5Qjs7RUFFekIsMkJBQTJCO0VBQzNCLHNCQUFzQjs7RUFFdEIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQiwwREFBMEQ7RUFDMUQsdURBQXVEO0VBQ3ZELGtEQUFrRDtFQUNsRCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwyREFBMkQ7RUFDM0Qsd0RBQXdEO0VBQ3hELG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIC0tYm9keUJHOiB3aGl0ZTtcXHJcXG4gIC0tYm9keUNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4gIC0tc3RhcnRQYWdlQkc6IHJnYig5NCwgOTgsIDk0KTtcXHJcXG4gIC0tc3RhcnRQYWdlQ29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgLS1nYW1lSGVhZGluZ0ZvbnQ6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICAtLWdhbWVIZWFkaW5nQ29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgLS1zdGFydEJ0bkJnOiByZ2IoMCwgNTYsIDApO1xcclxcbiAgLS1zdGFydEJ0bkNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIC0tZW5kUGFnZUJnOiByZ2JhKDk0LCA5OCwgOTQsIDAuMyk7XFxyXFxuICAtLWVuZFBhZ2VDb2xvcjogYmxhY2s7XFxyXFxuICAtLWVuZFBhZ2VEaXZCRzogYmx1ZTtcXHJcXG4gIC0tZW5kUGFnZURpdkNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tcXVpdEJ0bkJnOiB3aGVhdDtcXHJcXG4gIC0tcXVpdEJ0bkNvbG9yOiBibGFjaztcXHJcXG4gIC0tcGxheUFnYWluQnRuQmc6IHdoaXRlO1xcclxcbiAgLS1wbGF5QWdhaW5CdG5Db2xvcjogYmxhY2s7XFxyXFxufVxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keUJHKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib2R5Q29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLypzdGFydCBwYWdlIHN0eWxpbmcqL1xcclxcbi5zdGFydFBhZ2VEaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhcnRQYWdlQkcpO1xcclxcbiAgY29sb3I6IHZhcigtLXN0YXJ0UGFnZUNvbG9yKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5nYW1lSGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWdhbWVIZWFkaW5nRm9udCk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLWdhbWVIZWFkaW5nQ29sb3IpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLnN0YXJ0Rm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLnVzZXJOYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcbi51c2VyTmFtZTpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgYmx1ZTtcXHJcXG59XFxyXFxuLnVzZXJOYW1lOmFjdGl2ZSB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcbi51c2VyTmFtZTppbnZhbGlkIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTg5LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0R2FtZUJ0biB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWdhbWVIZWFkaW5nRm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGFydEJ0bkJnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zdGFydEJ0bkNvbG9yKTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLThweCAxMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IC04cHggMTBweCAxM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgYm94LXNoYWRvdzogLThweCAxMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnN0YXJ0R2FtZUJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcbi5zdGFydEdhbWVCdG46YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDA7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDA7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBwYWdlIHN0eWxlcyovXFxyXFxuLmVuZFBhZ2VCb2R5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVuZFBhZ2VCZyk7XFxyXFxuICBjb2xvcjogdmFyKC0tZW5kUGFnZUNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuLmVuZFBhZ2VEaXYge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNHB4IDEzcHggMjNweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDE0cHggMTNweCAyM3B4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDE0cHggMTNweCAyM3B4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbmRQYWdlRGl2QkcpO1xcclxcbiAgY29sb3I6IHZhcigtLWVuZFBhZ2VEaXZDb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG4ud2lubmVyVGV4dCB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLmVuZFBhZ2VCdG4ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmVuZFBhZ2VCdG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4uZW5kUGFnZUJ0bjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpdEJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWl0QnRuQmcpO1xcclxcbiAgY29sb3I6IHZhcigtLXF1aXRCdG5Db2xvcik7XFxyXFxufVxcclxcbi5wbGF5QWdhaW5CdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheUFnYWluQnRuQmcpO1xcclxcbiAgY29sb3I6IHZhcigtLXBsYXlBZ2FpbkJ0bkNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZyaWVuZGx5Qm9hcmQ7XHJcbmZ1bmN0aW9uIGZyaWVuZGx5Qm9hcmQoKSB7XHJcbiAgY29uc3QgZnJpZW5kbHlCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZnJpZW5kbHlCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiKTtcclxuXHJcbiAgY29uc3QgZ2FtZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgZ2FtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcclxuICBnYW1lSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZUhlYWRpbmdcIik7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluc3RydWN0aW9uVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluc3RydWN0aW9uVGV4dFwiKTtcclxuICBpbnN0cnVjdGlvblRleHQuY2xhc3NMaXN0LmFkZChcImluc3RydWN0aW9uVGV4dFwiKTtcclxuICBpbnN0cnVjdGlvblRleHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcFwiO1xyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvcmllbnRhdGlvbkJ0blwiKTtcclxuICBvcmllbnRhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwib3JpZW50YXRpb25CdG5cIik7XHJcbiAgb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSBcIlggQXhpc1wiO1xyXG5cclxuICBjb25zdCBib2FyZFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9hcmRQYXJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib2FyZFBhcmVudERpdlwiKTtcclxuICBib2FyZFBhcmVudERpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmRQYXJlbnREaXZcIik7XHJcblxyXG4gIC8vY2VsbHNcclxuXHJcbiAgZnJpZW5kbHlCb2FyZERpdi5hcHBlbmRDaGlsZChnYW1lSGVhZGluZyk7XHJcbiAgZnJpZW5kbHlCb2FyZERpdi5hcHBlbmRDaGlsZChpbnN0cnVjdGlvblRleHQpO1xyXG4gIGZyaWVuZGx5Qm9hcmREaXYuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25CdG4pO1xyXG4gIHJldHVybiBmcmllbmRseUJvYXJkRGl2O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGVuZFBhZ2U7XHJcbmZ1bmN0aW9uIGVuZFBhZ2UoKSB7XHJcbiAgY29uc3QgZW5kUGFnZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVuZFBhZ2VCb2R5LmNsYXNzTGlzdC5hZGQoXCJlbmRQYWdlQm9keVwiKTtcclxuICBjb25zdCBlbmRQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBlbmRQYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJlbmRQYWdlRGl2XCIpO1xyXG4gIGVuZFBhZ2VEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbmRQYWdlRGl2XCIpO1xyXG5cclxuICAvKiBjb25zdCB3aW5uZXIgPSBzb21lIGZ1bmN0aW9uICovXHJcblxyXG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB3aW5uZXJUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2lubmVyVGV4dFwiKTtcclxuICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gXCJXSU5ORVIgSVMgU09NRU9ORVwiO1xyXG4gIHdpbm5lclRleHQuY2xhc3NMaXN0LmFkZChcIndpbm5lclRleHRcIik7XHJcblxyXG4gIGNvbnN0IHF1aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHF1aXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlFVSVRcIjtcclxuICBxdWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlbmRQYWdlQnRuXCIpO1xyXG4gIHF1aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInF1aXRCdG5cIik7XHJcbiAgcXVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1aXRCdG5cIik7XHJcblxyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQTEFZIEFHQUlOXCI7XHJcbiAgcGxheUFnYWluQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlbmRQYWdlQnRuXCIpO1xyXG4gIHBsYXlBZ2FpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGxheUFnYWluQnRuXCIpO1xyXG4gIHBsYXlBZ2FpbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXlBZ2FpbkJ0blwiKTtcclxuXHJcbiAgZW5kUGFnZURpdi5hcHBlbmRDaGlsZCh3aW5uZXJUZXh0KTtcclxuICBlbmRQYWdlRGl2LmFwcGVuZENoaWxkKHF1aXRCdXR0b24pO1xyXG4gIGVuZFBhZ2VEaXYuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKTtcclxuXHJcbiAgZW5kUGFnZUJvZHkuYXBwZW5kQ2hpbGQoZW5kUGFnZURpdik7XHJcbiAgcmV0dXJuIGVuZFBhZ2VCb2R5O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHN0YXJ0UGFnZTtcclxuZnVuY3Rpb24gc3RhcnRQYWdlKCkge1xyXG4gIGNvbnN0IHN0YXJ0UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc3RhcnRQYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJzdGFydFBhZ2VEaXZcIik7XHJcbiAgc3RhcnRQYWdlRGl2LmlkID0gXCJzdGFydFBhZ2VEaXZcIjtcclxuICAvKiBzdGFydFBhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7ICovXHJcblxyXG4gIC8vR2FtZSBoZWFkaW5nXHJcbiAgY29uc3QgZ2FtZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgZ2FtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcclxuICBnYW1lSGVhZGluZy5pZCA9IFwiZ2FtZUhlYWRpbmdcIjtcclxuICBnYW1lSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZUhlYWRpbmdcIik7XHJcblxyXG4gIC8vU3RhcnQgZm9ybSBlbGVtZW50XHJcbiAgY29uc3Qgc3RhcnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgc3RhcnRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRGb3JtXCIpO1xyXG4gIHN0YXJ0Rm9ybS5jbGFzc0xpc3QuYWRkKFwic3RhcnRGb3JtXCIpO1xyXG4gIC8vTmFtZSBpbnB1dCBlbGVtZW50XHJcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdXNlck5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgdXNlck5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1c2VyTmFtZVwiKTtcclxuICB1c2VyTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIE5hbWVcIik7XHJcbiAgdXNlck5hbWUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XHJcbiAgdXNlck5hbWUuY2xhc3NMaXN0LmFkZChcInVzZXJOYW1lXCIpO1xyXG4gIC8vU3VibWl0IGJ1dHRvblxyXG4gIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3RhcnRHYW1lQnRuLnRleHRDb250ZW50ID0gXCJTVEFSVCBHQU1FXCI7XHJcbiAgc3RhcnRHYW1lQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgc3RhcnRHYW1lQnRuLmNsYXNzTGlzdC5hZGQoXCJzdGFydEdhbWVCdG5cIik7XHJcbiAgc3RhcnRHYW1lQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRHYW1lQnRuXCIpO1xyXG4gIHN0YXJ0Rm9ybS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XHJcbiAgc3RhcnRGb3JtLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XHJcblxyXG4gIHN0YXJ0UGFnZURpdi5hcHBlbmRDaGlsZChnYW1lSGVhZGluZyk7XHJcbiAgc3RhcnRQYWdlRGl2LmFwcGVuZENoaWxkKHN0YXJ0Rm9ybSk7XHJcbiAgcmV0dXJuIHN0YXJ0UGFnZURpdjtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgc3RhcnRQYWdlIGZyb20gXCIuL3VpL3N0YXJ0UGFnZVwiO1xyXG5pbXBvcnQgZW5kUGFnZSBmcm9tIFwiLi91aS9lbmRQYWdlXCI7XHJcbmltcG9ydCBmcmllbmRseUJvYXJkIGZyb20gXCIuL2ZyaWVuZGx5Qm9hcmRcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuYm9keS5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkKCkpO1xyXG4vKiBib2R5LmFwcGVuZENoaWxkKHN0YXJ0UGFnZSgpKTsgKi9cclxuLyogYm9keS5hcHBlbmRDaGlsZChlbmRQYWdlKCkpOyAqL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=