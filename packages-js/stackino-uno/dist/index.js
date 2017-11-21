(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("@uirouter/react"), require("inversify"), require("react"), require("@uirouter/core"), require("classnames"), require("topbar"), require("inversify-react"), require("moment"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "@uirouter/react", "inversify", "react", "@uirouter/core", "classnames", "topbar", "inversify-react", "moment", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["StackinoUno"] = factory(require("tslib"), require("@uirouter/react"), require("inversify"), require("react"), require("@uirouter/core"), require("classnames"), require("topbar"), require("inversify-react"), require("moment"), require("prop-types"));
	else
		root["StackinoUno"] = factory(root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_40__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "container", function() { return __WEBPACK_IMPORTED_MODULE_0__container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "router", function() { return __WEBPACK_IMPORTED_MODULE_1__router__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_error_plugin__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayErrorPlugin", function() { return __WEBPACK_IMPORTED_MODULE_0__display_error_plugin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_progress_plugin__ = __webpack_require__(29);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayProgressPlugin", function() { return __WEBPACK_IMPORTED_MODULE_1__display_progress_plugin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "state", function() { return __WEBPACK_IMPORTED_MODULE_2__state__["a"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_uid__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return __WEBPACK_IMPORTED_MODULE_0__get_uid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_random_string__ = __webpack_require__(35);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return __WEBPACK_IMPORTED_MODULE_1__get_random_string__["a"]; });




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_0__page__["a"]; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_scrollbar_width__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return __WEBPACK_IMPORTED_MODULE_0__get_scrollbar_width__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inject_css_rule__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "injectCssRule", function() { return __WEBPACK_IMPORTED_MODULE_1__inject_css_rule__["a"]; });




/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bsod; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);

var styles = __webpack_require__(24);
var container;
var Bsod = /** @class */ (function () {
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

/* unused harmony default export */ var _unused_webpack_default_export = (Bsod);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBar; });
var topbarImpl = __webpack_require__(30);
var depth = 0;
// topbar
var TopBar = /** @class */ (function () {
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

/* unused harmony default export */ var _unused_webpack_default_export = (TopBar);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonrpc__ = __webpack_require__(33);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRpcClient", function() { return __WEBPACK_IMPORTED_MODULE_0__jsonrpc__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRpcError", function() { return __WEBPACK_IMPORTED_MODULE_0__jsonrpc__["b"]; });



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsod__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Bsod", function() { return __WEBPACK_IMPORTED_MODULE_0__bsod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topbar__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return __WEBPACK_IMPORTED_MODULE_1__topbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link__ = __webpack_require__(39);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__link__["a"]; });





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_level__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationLevel", function() { return __WEBPACK_IMPORTED_MODULE_0__validation_level__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation_state__ = __webpack_require__(41);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return __WEBPACK_IMPORTED_MODULE_1__validation_state__["a"]; });




/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validation__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["Page"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["getScrollbarWidth"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "injectCssRule", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__["injectCssRule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "container", function() { return __WEBPACK_IMPORTED_MODULE_2__globals__["container"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRpcClient", function() { return __WEBPACK_IMPORTED_MODULE_3__net__["JsonRpcClient"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRpcError", function() { return __WEBPACK_IMPORTED_MODULE_3__net__["JsonRpcError"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayErrorPlugin", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["DisplayErrorPlugin"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DisplayProgressPlugin", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["DisplayProgressPlugin"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "state", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["state"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return __WEBPACK_IMPORTED_MODULE_5__tools__["getUid"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return __WEBPACK_IMPORTED_MODULE_5__tools__["getRandomString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Bsod", function() { return __WEBPACK_IMPORTED_MODULE_6__ui__["Bsod"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return __WEBPACK_IMPORTED_MODULE_6__ui__["TopBar"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_6__ui__["Link"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationLevel", function() { return __WEBPACK_IMPORTED_MODULE_7__validation__["ValidationLevel"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return __WEBPACK_IMPORTED_MODULE_7__validation__["ValidationState"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "core", function() { return __WEBPACK_IMPORTED_MODULE_0__core__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return __WEBPACK_IMPORTED_MODULE_1__dom__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return __WEBPACK_IMPORTED_MODULE_2__globals__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "net", function() { return __WEBPACK_IMPORTED_MODULE_3__net__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "router", function() { return __WEBPACK_IMPORTED_MODULE_4__router__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return __WEBPACK_IMPORTED_MODULE_5__tools__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return __WEBPACK_IMPORTED_MODULE_6__ui__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return __WEBPACK_IMPORTED_MODULE_7__validation__; });
















// todo: remove



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);

var Page = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Page, _super);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScrollbarWidth;
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = injectCssRule;
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);

var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
/* unused harmony default export */ var _unused_webpack_default_export = (container);


/***/ }),
/* 20 */
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
/* unused harmony default export */ var _unused_webpack_default_export = (router);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayErrorPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_bsod__ = __webpack_require__(8);


var DisplayErrorPlugin = /** @class */ (function () {
    function DisplayErrorPlugin(router, options) {
        this.name = 'DisplayErrorPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var handler = (options && options.handler) || __WEBPACK_IMPORTED_MODULE_1__ui_bsod__["a" /* Bsod */];
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
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
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
/* 26 */
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
/* 27 */
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
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(28);

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayProgressPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_topbar__ = __webpack_require__(9);

var DisplayProgressPlugin = /** @class */ (function () {
    function DisplayProgressPlugin(router, options) {
        this.name = 'DisplayProgressPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var transitionService = router.transitionService;
        var handler = (options && options.handler) || __WEBPACK_IMPORTED_MODULE_0__ui_topbar__["a" /* TopBar */];
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
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = state;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__uirouter_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_inversify_react__);






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
            component: (_a = /** @class */ (function (_super) {
                    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Page, _super);
                    function Page() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Page.prototype.render = function () {
                        var component = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Component, null);
                        var container = this.props.resolves[name + ":container"];
                        if (!container) {
                            return component;
                        }
                        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_inversify_react__["Provider"], { container: container, standalone: true }, component));
                    };
                    return Page;
                }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])),
                _a.displayName = "Page(" + name + ")",
                _a),
        };
        declaration.resolve = [];
        if (abstract) {
            declaration.abstract = abstract;
        }
        if (data) {
            declaration.data = data;
        }
        declaration.resolve.push({
            token: name + ":container",
            // tslint:disable-next-line space-before-function-paren
            resolveFn: function (transition) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, function () {
                var selfStateGetter, path, self, i, parentContainerResolvable, parent_1, _i, _a, resolvable, parentContainer, currentContainer;
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_b) {
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
                            parentContainer = __WEBPACK_IMPORTED_MODULE_3__globals__["container"];
                            _b.label = 3;
                        case 3:
                            currentContainer = new __WEBPACK_IMPORTED_MODULE_4_inversify__["Container"]();
                            currentContainer.parent = parentContainer;
                            currentContainer.bind(__WEBPACK_IMPORTED_MODULE_2__uirouter_react__["Transition"]).toConstantValue(transition);
                            if (store) {
                                currentContainer.bind(store).toSelf().inSingletonScope();
                            }
                            return [2 /*return*/, currentContainer];
                    }
                });
            }); },
            deps: [__WEBPACK_IMPORTED_MODULE_2__uirouter_react__["Transition"]]
        });
        if (store) {
            declaration.resolve.push({
                token: name + ":store-enter",
                resolveFn: function (container) {
                    var storeInstance = container.get(store);
                    return storeInstance.enter();
                },
                deps: [name + ":container"]
            });
        }
        __WEBPACK_IMPORTED_MODULE_3__globals__["router"].stateRegistry.register(declaration);
        return target;
        var _a;
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = (state);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonRpcClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_rpc_error__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__json_rpc_error__["a"]; });




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
            else if (Object(__WEBPACK_IMPORTED_MODULE_2_moment__["isMoment"])(data)) {
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
var JsonRpcClient = /** @class */ (function () {
    function JsonRpcClient(endpoint) {
        this.useJsonRpcConstant = false;
        this.requestFilters = [];
        this.responseFilters = [];
        this.endpoint = endpoint;
    }
    JsonRpcClient.prototype.processRequestAsync = function (rpcRequest) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var headers, httpRequestBody, httpResponse, rpcResponse;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new Headers();
                        if (this.authorization) {
                            headers.append("Authorization", this.authorization);
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
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var rpcRequest, _i, _a, filter, rpcResponse, _b, _c, filter;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        rpcRequest = {
                            id: Object(__WEBPACK_IMPORTED_MODULE_1__tools__["getUid"])(),
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
                            throw new __WEBPACK_IMPORTED_MODULE_3__json_rpc_error__["a" /* JsonRpcError */](rpcResponse.error.code, rpcResponse.error.message, rpcResponse.error.data);
                        }
                        return [2 /*return*/, rpcResponse.result];
                }
            });
        });
    };
    return JsonRpcClient;
}());


/* unused harmony default export */ var _unused_webpack_default_export = (JsonRpcClient);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUid;
var _counter = 0x1000;
function getUid() {
    return _counter++;
}
/* unused harmony default export */ var _unused_webpack_default_export = (getUid);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomString;
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)))

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonRpcError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);

var JsonRpcError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](JsonRpcError, _super);
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uirouter_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uirouter_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__uirouter_react__);




var DefaultLinkComponent = function (_a) {
    var href = _a.href, id = _a.id, className = _a.className, style = _a.style, onClick = _a.onClick, children = _a.children;
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { id: id, className: className, style: style, href: href, onClick: onClick }, children);
};
var Link = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var _a = this.props, component = _a.component, to = _a.to, params = _a.params, options = _a.options, activeClassName = _a.activeClassName, exact = _a.exact, id = _a.id, className = _a.className, style = _a.style, children = _a.children, isListItem = _a.isListItem, listItemClassName = _a.listItemClassName;
        var href = this.context.router.stateService.href(to, params || {}, options);
        var Component = component || DefaultLinkComponent;
        var link = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__uirouter_react__["UISref"], { to: to, params: params, options: options }, isListItem ?
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("li", { className: listItemClassName },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](DefaultLinkComponent, { href: href, id: id, className: className, style: style }, children))
            :
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Component, { href: href, id: id, className: className, style: style }, children)));
        if (activeClassName) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__uirouter_react__["UISrefActive"], { class: activeClassName, exact: exact }, link));
        }
        return link;
    };
    Link.propTypes = {
        component: __WEBPACK_IMPORTED_MODULE_2_prop_types__["any"],
        to: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"].isRequired,
        params: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
        options: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
        activeClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
        exact: __WEBPACK_IMPORTED_MODULE_2_prop_types__["bool"],
        id: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
        className: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
        style: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
        isListItem: __WEBPACK_IMPORTED_MODULE_2_prop_types__["bool"],
        listItemClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
    };
    Link.contextTypes = {
        router: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
    };
    return Link;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_level__ = __webpack_require__(14);

var ValidationState = /** @class */ (function () {
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