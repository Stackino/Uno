(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("inversify"), require("@uirouter/react"), require("@uirouter/core"), require("classnames"), require("topbar"), require("react"), require("inversify-react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["inversify", "@uirouter/react", "@uirouter/core", "classnames", "topbar", "react", "inversify-react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["StackinoUno"] = factory(require("inversify"), require("@uirouter/react"), require("@uirouter/core"), require("classnames"), require("topbar"), require("react"), require("inversify-react"), require("moment"));
	else
		root["StackinoUno"] = factory(root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_34__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "container", function() { return __WEBPACK_IMPORTED_MODULE_0__container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "router", function() { return __WEBPACK_IMPORTED_MODULE_1__router__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_error_plugin__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayErrorPlugin", function() { return __WEBPACK_IMPORTED_MODULE_0__display_error_plugin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_progress_plugin__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayProgressPlugin", function() { return __WEBPACK_IMPORTED_MODULE_1__display_progress_plugin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(26);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "state", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["a"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bsod", function() { return Bsod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);

var styles = __webpack_require__(19);
var container;
var Bsod = (function () {
    function Bsod() {
    }
    Bsod.show = function (title, error, options) {
        Bsod.hide();
        // container
        var containerElement = container = document.createElement('div');
        if (options && options.id) {
            containerElement.id = options.id;
        }
        containerElement.className = __WEBPACK_IMPORTED_MODULE_0_classnames__(styles.container, 'bsod', options && options.className);
        // title
        var titleElement = document.createElement('h2');
        titleElement.className = __WEBPACK_IMPORTED_MODULE_0_classnames__(styles.title, 'bsod-title');
        titleElement.innerText = title;
        containerElement.appendChild(titleElement);
        // details
        if (error) {
            // message
            if (typeof error === 'string') {
                var messageElement = document.createElement('p');
                messageElement.className = __WEBPACK_IMPORTED_MODULE_0_classnames__(styles.message, 'bsod-message');
                messageElement.innerText = error;
                containerElement.appendChild(messageElement);
            }
            else if (typeof error === 'object') {
                /*
                if (error.message) {
                    const messageElement = document.createElement('p');
                    messageElement.className = classnames(styles.message, 'bsod-message');
                    messageElement.innerText = (error.name ? error.name + ': ' : '') + error.message;
                    containerElement.appendChild(messageElement);
                }
                */
                if (error.stack) {
                    var stackPreElement = document.createElement('pre');
                    stackPreElement.className = __WEBPACK_IMPORTED_MODULE_0_classnames__(styles.stack, 'bsod-stack');
                    var stackCodeElement = document.createElement('code');
                    stackCodeElement.innerText = error.stack;
                    stackPreElement.appendChild(stackCodeElement);
                    containerElement.appendChild(stackPreElement);
                }
            }
        }
        // show
        document.body.appendChild(containerElement);
    };
    Bsod.hide = function () {
        if (!container) {
            return;
        }
        container.remove();
    };
    return Bsod;
}());

/* harmony default export */ __webpack_exports__["default"] = (Bsod);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return TopBar; });
var topbarImpl = __webpack_require__(25);
var depth = 0;
// topbar
var TopBar = (function () {
    function TopBar() {
    }
    TopBar.hideInternal = function () {
        if (depth > 0) {
            return;
        }
        topbarImpl.hide();
    };
    TopBar.show = function () {
        depth++;
        if (depth === 1) {
            topbarImpl.show();
        }
        return this.hide;
    };
    TopBar.hide = function () {
        if (depth <= 0) {
            return;
        }
        depth--;
        if (depth === 0) {
            // delay hide for a bit in case we would just immediately show again
            setTimeout(this.hideInternal, 100);
        }
    };
    return TopBar;
}());
/* harmony default export */ __webpack_exports__["default"] = (TopBar);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_uid__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return __WEBPACK_IMPORTED_MODULE_0__get_uid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_random_string__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return __WEBPACK_IMPORTED_MODULE_1__get_random_string__["a"]; });




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationLevel; });
var ValidationLevel;
(function (ValidationLevel) {
    ValidationLevel[ValidationLevel["warning"] = 100] = "warning";
    ValidationLevel[ValidationLevel["error"] = 200] = "error";
})(ValidationLevel || (ValidationLevel = {}));
/* unused harmony default export */ var _unused_webpack_default_export = (ValidationLevel);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validation__ = __webpack_require__(37);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return __WEBPACK_IMPORTED_MODULE_0__core__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return __WEBPACK_IMPORTED_MODULE_2__globals__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "net", function() { return __WEBPACK_IMPORTED_MODULE_3__net__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "router", function() { return __WEBPACK_IMPORTED_MODULE_4__router__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return __WEBPACK_IMPORTED_MODULE_5__tools__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return __WEBPACK_IMPORTED_MODULE_6__ui__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return __WEBPACK_IMPORTED_MODULE_7__validation__; });











/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_0__page__["a"]; });



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Page = (function (_super) {
    __extends(Page, _super);
    function Page(data, number, count) {
        var _this = _super.call(this) || this;
        _this.number = number;
        _this.count = count;
        _this.push.apply(_this, data);
        return _this;
    }
    return Page;
}(Array));
/* unused harmony default export */ var _unused_webpack_default_export = (Page);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_scrollbar_width__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return __WEBPACK_IMPORTED_MODULE_0__get_scrollbar_width__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inject_css_rule__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "injectCssRule", function() { return __WEBPACK_IMPORTED_MODULE_1__inject_css_rule__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollbarWidth; });
var scrollbarWidth = null;
function detectScrollbarWidth() {
    var testElement = document.createElement('div');
    testElement.style.cssText = "\n\t\twidth: 50px !important;\n\t\theight: 50px !important;\n\t\toverflow: scroll !important;\n\t\tposition: absolute !important;\n\t\ttop: 9999px !important;\n\t\tleft: 9999px !important;\n\t";
    document.body.appendChild(testElement);
    var vertical = testElement.offsetWidth - testElement.clientWidth;
    var horizontal = testElement.offsetHeight - testElement.clientHeight;
    document.body.removeChild(testElement);
    return {
        vertical: vertical,
        horizontal: horizontal,
    };
}
function getScrollbarWidth() {
    if (scrollbarWidth === null) {
        scrollbarWidth = detectScrollbarWidth();
    }
    return scrollbarWidth;
}
/* unused harmony default export */ var _unused_webpack_default_export = (getScrollbarWidth);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectCssRule; });
var styleElement = null;
var styleSheet = null;
function createStyleElement() {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style;
}
function injectCssRule(rule) {
    if (styleElement === null || styleSheet === null) {
        styleElement = createStyleElement();
        styleSheet = styleElement.sheet;
    }
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}
/* unused harmony default export */ var _unused_webpack_default_export = (injectCssRule);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);

var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uirouter_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(3);


var router = new __WEBPACK_IMPORTED_MODULE_0__uirouter_react__["UIRouterReact"]();
router.plugin(__WEBPACK_IMPORTED_MODULE_0__uirouter_react__["servicesPlugin"]);
router.plugin(__WEBPACK_IMPORTED_MODULE_0__uirouter_react__["pushStateLocationPlugin"]);
router.plugin(__WEBPACK_IMPORTED_MODULE_1__router__["DisplayProgressPlugin"]);
router.plugin(__WEBPACK_IMPORTED_MODULE_1__router__["DisplayErrorPlugin"]);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayErrorPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_bsod__ = __webpack_require__(4);


var DisplayErrorPlugin = (function () {
    function DisplayErrorPlugin(router, options) {
        this.name = 'DisplayErrorPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var handler = (options && options.handler) || __WEBPACK_IMPORTED_MODULE_1__ui_bsod__["Bsod"];
        router.stateService.defaultErrorHandler(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__uirouter_core__["Rejection"]) {
                if (error.type === __WEBPACK_IMPORTED_MODULE_0__uirouter_core__["RejectType"].IGNORED || error.type === __WEBPACK_IMPORTED_MODULE_0__uirouter_core__["RejectType"].SUPERSEDED) {
                    return;
                }
                handler.show('Transition error', error.detail);
            }
            else {
                handler.show('Transition error', error);
            }
        });
        /*
        this.disposers.push(transitionService.onSuccess({}, (transition: Transition) => {
            console.log('success');
            handler.hide();
        }));
        */
    }
    DisplayErrorPlugin.prototype.dispose = function (router) {
        if (this.disposers) {
            for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
                var disposer = _a[_i];
                disposer();
            }
            this.disposers.length = 0;
        }
    };
    return DisplayErrorPlugin;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (DisplayErrorPlugin);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(undefined);
// imports


// module
exports.push([module.i, "._3vNpDypsj4OL0SuMct945O {\n  position: fixed;\n  background-color: #0000AA;\n  color: white;\n  padding: 5em;\n  top: 0;\n  left: 0;\n  font-family: monospace;\n  width: 100%;\n  height: 100vh;\n  text-align: left;\n  overflow: auto;\n  z-index: 999999; }\n\n.dErPYa_KYxe0jAEskv3mw {\n  font-family: monospace;\n  color: white; }\n\n.W6YCLhdWk_1DiBUmTnAvT, ._2XcTcIXv29iUj3ga8MBMQ6 {\n  color: white;\n  text-align: left; }\n  .W6YCLhdWk_1DiBUmTnAvT::-webkit-scrollbar, ._2XcTcIXv29iUj3ga8MBMQ6::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; }\n", ""]);

// exports
exports.locals = {
	"container": "_3vNpDypsj4OL0SuMct945O",
	"title": "dErPYa_KYxe0jAEskv3mw",
	"data": "W6YCLhdWk_1DiBUmTnAvT",
	"stack": "_2XcTcIXv29iUj3ga8MBMQ6"
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayProgressPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_topbar__ = __webpack_require__(5);

var DisplayProgressPlugin = (function () {
    function DisplayProgressPlugin(router, options) {
        this.name = 'DisplayProgressPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var transitionService = router.transitionService;
        var handler = (options && options.handler) || __WEBPACK_IMPORTED_MODULE_0__ui_topbar__["TopBar"];
        this.disposers.push(transitionService.onStart({}, function (transition) {
            handler.show();
        }));
        this.disposers.push(transitionService.onError({}, function (transition) {
            handler.hide();
        }));
        this.disposers.push(transitionService.onSuccess({}, function (transition) {
            handler.hide();
        }));
    }
    DisplayProgressPlugin.prototype.dispose = function (router) {
        if (this.disposers) {
            for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
                var disposer = _a[_i];
                disposer();
            }
            this.disposers.length = 0;
        }
    };
    return DisplayProgressPlugin;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (DisplayProgressPlugin);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = state;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__uirouter_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inversify_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var defaultOptions = {
    abstract: false,
};
function state(name, url, options) {
    var _this = this;
    var _a = options || defaultOptions, store = _a.store, data = _a.data, abstract = _a.abstract;
    return function (target) {
        var Component = target;
        var declaration = {
            name: name,
            url: url,
            component: (_a = (function (_super) {
                    __extends(Page, _super);
                    function Page() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Page.prototype.render = function () {
                        var component = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, null);
                        var container = this.props.resolves[name + ":container"];
                        if (!container) {
                            return component;
                        }
                        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_inversify_react__["Provider"], { container: container, standalone: true }, component));
                    };
                    return Page;
                }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])),
                _a.displayName = "Page(" + name + ")",
                _a),
            resolve: [],
        };
        if (abstract) {
            declaration.abstract = abstract;
        }
        if (data) {
            declaration.data = data;
        }
        if (store) {
            declaration.resolve = [
                {
                    token: name + ":container",
                    // tslint:disable-next-line space-before-function-paren
                    resolveFn: function (transition) { return __awaiter(_this, void 0, void 0, function () {
                        var selfStateGetter, path, self, i, parentContainerResolvable, parent_1, _i, _a, resolvable, parentContainer, currentContainer;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    selfStateGetter = transition.to().$$state;
                                    if (!selfStateGetter)
                                        throw new Error('Cannot get internal state object');
                                    path = selfStateGetter().path;
                                    self = null;
                                    for (i = 0; i < path.length; i++) {
                                        if (path[i].name !== name) {
                                            continue;
                                        }
                                        self = path[i];
                                        break;
                                    }
                                    if (!self) {
                                        throw new Error('Cannot find self state');
                                    }
                                    parentContainerResolvable = null;
                                    for (parent_1 = self.parent; parent_1; parent_1 = parent_1.parent) {
                                        for (_i = 0, _a = parent_1.resolvables; _i < _a.length; _i++) {
                                            resolvable = _a[_i];
                                            if (resolvable.token !== parent_1.name + ":container") {
                                                continue;
                                            }
                                            parentContainerResolvable = resolvable;
                                            break;
                                        }
                                    }
                                    if (!parentContainerResolvable) return [3 /*break*/, 2];
                                    return [4 /*yield*/, transition.injector().getAsync(parentContainerResolvable.token)];
                                case 1:
                                    parentContainer = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    parentContainer = __WEBPACK_IMPORTED_MODULE_2__globals__["container"];
                                    _b.label = 3;
                                case 3:
                                    currentContainer = new __WEBPACK_IMPORTED_MODULE_3_inversify__["Container"]();
                                    currentContainer.parent = parentContainer;
                                    currentContainer.bind(store).toSelf().inSingletonScope();
                                    return [2 /*return*/, currentContainer];
                            }
                        });
                    }); },
                    deps: [__WEBPACK_IMPORTED_MODULE_1__uirouter_react__["Transition"]]
                },
                {
                    token: name + ":store-enter",
                    resolveFn: function (container) {
                        var storeInstance = container.get(store);
                        return storeInstance.enter();
                    },
                    deps: [name + ":container"]
                }
            ];
        }
        __WEBPACK_IMPORTED_MODULE_2__globals__["router"].stateRegistry.register(declaration);
        return target;
        var _a;
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = (state);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonrpc__ = __webpack_require__(30);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "jsonrpc", function() { return __WEBPACK_IMPORTED_MODULE_0__jsonrpc__; });




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonRpcClient", function() { return JsonRpcClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_rpc_error__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JsonRpcError", function() { return __WEBPACK_IMPORTED_MODULE_2__json_rpc_error__["a"]; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function attachFiles(formData, key, data) {
    var type = typeof data;
    if (type === 'undefined' || data === null) {
        return null;
    }
    switch (type) {
        case 'boolean':
        case 'string':
        case 'number':
            if (!key) {
                throw new Error('Key must be defined for primitive values');
            }
            return data;
        case 'object':
            if (Array.isArray(data) || (FileList && data instanceof FileList)) {
                if (!key) {
                    throw new Error('Key must be defined for array values');
                }
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    var nextKey = key + "[" + i + "]";
                    var item = attachFiles(formData, nextKey, data[i]);
                    result.push(item);
                }
                return result;
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_moment__["isMoment"](data)) {
                return data.format();
            }
            else if (File && data instanceof File) {
                if (!key) {
                    throw new Error('Key must be defined for file values');
                }
                formData.append(key, data);
                return key;
            }
            else {
                var result = {};
                for (var k in data) {
                    if (!data.hasOwnProperty(k)) {
                        continue;
                    }
                    var nextKey = key ? key + "." + k : k;
                    var item = attachFiles(formData, nextKey, data[k]);
                    result[k] = item;
                }
                return result;
            }
        default:
            throw new Error("Undefined behavior for data type '" + type + "' and key '" + key + "'");
    }
}
function buildHttpRequestBody(request) {
    var formData = new FormData();
    var result = attachFiles(formData, null, request);
    formData.append('', JSON.stringify(result));
    return formData;
}
var JsonRpcClient = (function () {
    function JsonRpcClient(endpoint) {
        this.useJsonRpcConstant = false;
        this.requestFilters = [];
        this.responseFilters = [];
        this.endpoint = endpoint;
    }
    JsonRpcClient.prototype.processRequestAsync = function (rpcRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, httpRequestBody, httpResponse, rpcResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {};
                        if (this.authorization) {
                            headers.Authorization = this.authorization;
                        }
                        httpRequestBody = buildHttpRequestBody(rpcRequest);
                        return [4 /*yield*/, fetch(this.endpoint, { method: 'POST', headers: headers, body: httpRequestBody })];
                    case 1:
                        httpResponse = _a.sent();
                        if (!httpResponse.ok) {
                            throw new Error("RPC call failed - " + httpResponse.status + ": " + httpResponse.statusText);
                        }
                        return [4 /*yield*/, httpResponse.json()];
                    case 2:
                        rpcResponse = _a.sent();
                        if (typeof rpcResponse !== 'object' || rpcResponse === null) {
                            throw new Error('Malformed RPC response');
                        }
                        return [2 /*return*/, rpcResponse];
                }
            });
        });
    };
    JsonRpcClient.prototype.callAsync = function (method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, _i, _a, filter, rpcResponse, _b, _c, filter;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        rpcRequest = {
                            id: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["getUid"])(),
                            method: method,
                            params: params,
                        };
                        _i = 0, _a = this.requestFilters;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        filter = _a[_i];
                        return [4 /*yield*/, filter(this, rpcRequest)];
                    case 2:
                        rpcRequest = _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (this.useJsonRpcConstant) {
                            rpcRequest.jsonrpc = '2.0';
                        }
                        return [4 /*yield*/, this.processRequestAsync(rpcRequest)];
                    case 5:
                        rpcResponse = _d.sent();
                        _b = 0, _c = this.responseFilters;
                        _d.label = 6;
                    case 6:
                        if (!(_b < _c.length)) return [3 /*break*/, 9];
                        filter = _c[_b];
                        return [4 /*yield*/, filter(this, rpcRequest, rpcResponse)];
                    case 7:
                        rpcResponse = _d.sent();
                        _d.label = 8;
                    case 8:
                        _b++;
                        return [3 /*break*/, 6];
                    case 9:
                        if (rpcResponse.error) {
                            throw new __WEBPACK_IMPORTED_MODULE_2__json_rpc_error__["a" /* JsonRpcError */](rpcResponse.error.code, rpcResponse.error.message, rpcResponse.error.data);
                        }
                        return [2 /*return*/, rpcResponse.result];
                }
            });
        });
    };
    return JsonRpcClient;
}());


/* harmony default export */ __webpack_exports__["default"] = (JsonRpcClient);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUid; });
var _counter = 0x1000;
function getUid() {
    return _counter++;
}
/* unused harmony default export */ var _unused_webpack_default_export = (getUid);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomString; });
function getRandomString(length, characters) {
    if (length === void 0) { length = 64; }
    if (characters === void 0) { characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'; }
    var result = '';
    var array;
    if ('Uint8Array' in global && 'crypto' in global) {
        array = new Uint8Array(length);
        crypto.getRandomValues(array);
    }
    else {
        array = new Array(length);
        for (var i = 0; i < length; i++) {
            array[i] = Math.floor(Math.random() * characters.length);
        }
    }
    for (var i = 0; i < length; i++) {
        result += characters.charAt(array[i] % characters.length);
    }
    return result;
}
/* unused harmony default export */ var _unused_webpack_default_export = (getRandomString);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonRpcError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JsonRpcError = (function (_super) {
    __extends(JsonRpcError, _super);
    function JsonRpcError(code, message, data) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, JsonRpcError.prototype);
        _this.code = code;
        _this.message = message;
        _this.data = data;
        return _this;
    }
    /// <summary>
    /// Invalid JSON was received by the server.
    /// An error occurred on the server while parsing the JSON text.
    /// </summary>
    JsonRpcError.PARSE_ERROR = -32700;
    /// <summary>
    /// The JSON sent is not a valid Request object.
    /// </summary>
    JsonRpcError.INVALID_REQUEST = -32600;
    /// <summary>
    /// The method does not exist / is not available.
    /// </summary>
    JsonRpcError.METHOD_NOT_FOUND = -32601;
    /// <summary>
    /// Invalid method parameter(s).
    /// </summary>
    JsonRpcError.INVALID_PARAMS = -32602;
    /// <summary>
    /// Internal JSON-RPC error.
    /// </summary>
    JsonRpcError.INTERNAL_ERROR = -32603;
    // -32000 to -32099	Server error reserved for implementation-defined server-errors.
    /// <summary>
    /// The server method doesn't return any value and is expected to be only called as notification.
    /// </summary>
    JsonRpcError.NOTIFICATION_EXPECTED = -32000;
    /// <summary>
    /// Client is not authorized to call given method (authenticate and try again).
    /// </summary>
    JsonRpcError.UNAUTHORIZED = -32001;
    /// <summary>
    /// Client is not allowd to call given method (display error).
    /// </summary>
    JsonRpcError.FORBIDDEN = -32002;
    return JsonRpcError;
}(Error));
/* unused harmony default export */ var _unused_webpack_default_export = (JsonRpcError);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsod__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topbar__ = __webpack_require__(5);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "bsod", function() { return __WEBPACK_IMPORTED_MODULE_0__bsod__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "topbar", function() { return __WEBPACK_IMPORTED_MODULE_1__topbar__; });





/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_level__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationLevel", function() { return __WEBPACK_IMPORTED_MODULE_0__validation_level__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation_state__ = __webpack_require__(38);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return __WEBPACK_IMPORTED_MODULE_1__validation_state__["a"]; });




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_level__ = __webpack_require__(7);

var ValidationState = (function () {
    function ValidationState(state) {
        if (!state) {
            state = {};
        }
        this.state = state;
    }
    ValidationState.prototype.getMessage = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        return messages[0];
    };
    ValidationState.prototype.getWarning = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            if (message.level !== __WEBPACK_IMPORTED_MODULE_0__validation_level__["a" /* ValidationLevel */].warning) {
                continue;
            }
            return message.message;
        }
        return null;
    };
    ValidationState.prototype.getError = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        for (var _i = 0, messages_2 = messages; _i < messages_2.length; _i++) {
            var message = messages_2[_i];
            if (message.level !== __WEBPACK_IMPORTED_MODULE_0__validation_level__["a" /* ValidationLevel */].error) {
                continue;
            }
            return message.message;
        }
        return null;
    };
    ValidationState.create = function (source) {
        if (typeof source !== 'object' || source === null) {
            return null;
        }
        return new ValidationState(source);
    };
    return ValidationState;
}());

/* unused harmony default export */ var _unused_webpack_default_export = (ValidationState);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map