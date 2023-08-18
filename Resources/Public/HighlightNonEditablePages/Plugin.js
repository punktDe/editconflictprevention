/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = createConsumerApi;\n\nvar _manifest = __webpack_require__(/*! ./manifest */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createReadOnlyValue = function createReadOnlyValue(value) {\n    return {\n        value: value,\n        writable: false,\n        enumerable: false,\n        configurable: true\n    };\n};\nfunction createConsumerApi(manifests, exposureMap) {\n    var api = {};\n    Object.keys(exposureMap).forEach(function (key) {\n        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));\n    });\n    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));\n    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));\n}\n//# sourceMappingURL=createConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = exports.readFromConsumerApi = exports.createConsumerApi = undefined;\n\nvar _createConsumerApi = __webpack_require__(/*! ./createConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js\");\n\nvar _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);\n\nvar _readFromConsumerApi = __webpack_require__(/*! ./readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nvar _index = __webpack_require__(/*! ./registry/index */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _readFromConsumerApi2.default)('manifest');\nexports.createConsumerApi = _createConsumerApi2.default;\nexports.readFromConsumerApi = _readFromConsumerApi2.default;\nexports.SynchronousRegistry = _index.SynchronousRegistry;\nexports.SynchronousMetaRegistry = _index.SynchronousMetaRegistry;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nexports.default = function (manifests) {\n    return function (identifier, options, bootstrap) {\n        manifests.push(_defineProperty({}, identifier, {\n            options: options,\n            bootstrap: bootstrap\n        }));\n    };\n};\n//# sourceMappingURL=manifest.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = readFromConsumerApi;\nfunction readFromConsumerApi(key) {\n    return function () {\n        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {\n            var _window$NeosHostPlu;\n\n            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);\n        }\n        throw new Error('You are trying to read from a consumer api that hasn\\'t been initialized yet!');\n    };\n}\n//# sourceMappingURL=readFromConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar AbstractRegistry = class AbstractRegistry {\n    constructor(description) {\n        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';\n        this.description = description;\n    }\n};\n//# sourceMappingURL=AbstractRegistry.js.map\n\nexports.default = AbstractRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousMetaRegistry = class SynchronousMetaRegistry extends _SynchronousRegistry2.default {\n    set(key, value) {\n        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {\n            throw new Error('You can only add registries to a meta registry');\n        }\n        return super.set(key, value);\n    }\n};\n//# sourceMappingURL=SynchronousMetaRegistry.js.map\n\nexports.default = SynchronousMetaRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _AbstractRegistry = __webpack_require__(/*! ./AbstractRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js\");\n\nvar _AbstractRegistry2 = _interopRequireDefault(_AbstractRegistry);\n\nvar _positionalArraySorter = __webpack_require__(/*! @neos-project/positional-array-sorter */ \"./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js\");\n\nvar _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousRegistry = class SynchronousRegistry extends _AbstractRegistry2.default {\n    constructor(description) {\n        super(description);\n        this._registry = [];\n    }\n    set(key, value) {\n        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (typeof key !== 'string') {\n            throw new Error('Key must be a string');\n        }\n        if (typeof position !== 'string' && typeof position !== 'number') {\n            throw new Error('Position must be a string or a number');\n        }\n        var entry = { key: key, value: value };\n        if (position) {\n            entry.position = position;\n        }\n        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {\n            return item.key === key;\n        });\n        if (indexOfItemWithTheSameKey === -1) {\n            this._registry.push(entry);\n        } else {\n            this._registry[indexOfItemWithTheSameKey] = entry;\n        }\n        return value;\n    }\n    get(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return null;\n        }\n        var result = this._registry.find(function (item) {\n            return item.key === key;\n        });\n        return result ? result.value : null;\n    }\n    _getChildrenWrapped(searchKey) {\n        var unsortedChildren = this._registry.filter(function (item) {\n            return item.key.indexOf(searchKey + '/') === 0;\n        });\n        return (0, _positionalArraySorter2.default)(unsortedChildren);\n    }\n    getChildrenAsObject(searchKey) {\n        var result = {};\n        this._getChildrenWrapped(searchKey).forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getChildren(searchKey) {\n        return this._getChildrenWrapped(searchKey).map(function (item) {\n            return item.value;\n        });\n    }\n    has(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return false;\n        }\n        return Boolean(this._registry.find(function (item) {\n            return item.key === key;\n        }));\n    }\n    _getAllWrapped() {\n        return (0, _positionalArraySorter2.default)(this._registry);\n    }\n    getAllAsObject() {\n        var result = {};\n        this._getAllWrapped().forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getAllAsList() {\n        return this._getAllWrapped().map(function (item) {\n            return Object.assign({ id: item.key }, item.value);\n        });\n    }\n};\n//# sourceMappingURL=SynchronousRegistry.js.map\n\nexports.default = SynchronousRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nvar _SynchronousMetaRegistry = __webpack_require__(/*! ./SynchronousMetaRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js\");\n\nvar _SynchronousMetaRegistry2 = _interopRequireDefault(_SynchronousMetaRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.SynchronousRegistry = _SynchronousRegistry2.default;\nexports.SynchronousMetaRegistry = _SynchronousMetaRegistry2.default;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchWithErrorHandling = undefined;\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;\nvar fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;\nexports.fetchWithErrorHandling = fetchWithErrorHandling;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiI18n;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/utils-redux/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/utils-redux/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().UtilsRedux;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/utils-redux/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().React;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-actions/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-actions/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reduxActions;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-actions/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reduxSagaEffects;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar positionalArraySorter = function positionalArraySorter(subject) {\n    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';\n    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';\n\n    var positionAccessor = typeof position === 'string' ? function (value) {\n        return value[position];\n    } : position;\n    var indexMapping = {};\n    var middleKeys = {};\n    var startKeys = {};\n    var endKeys = {};\n    var beforeKeys = {};\n    var afterKeys = {};\n    subject.forEach(function (item, index) {\n        var key = item[idKey] ? item[idKey] : String(index);\n        indexMapping[key] = index;\n        var positionValue = positionAccessor(item);\n        var position = String(positionValue ? positionValue : index);\n        var invalid = false;\n        if (position.startsWith('start')) {\n            var weightMatch = position.match(/start\\s+(\\d+)/);\n            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;\n            if (!startKeys[weight]) {\n                startKeys[weight] = [];\n            }\n            startKeys[weight].push(key);\n        } else if (position.startsWith('end')) {\n            var _weightMatch = position.match(/end\\s+(\\d+)/);\n            var _weight = _weightMatch && _weightMatch[1] ? Number(_weightMatch[1]) : 0;\n            if (!endKeys[_weight]) {\n                endKeys[_weight] = [];\n            }\n            endKeys[_weight].push(key);\n        } else if (position.startsWith('before')) {\n            var match = position.match(/before\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!match) {\n                invalid = true;\n            } else {\n                var reference = match[1];\n                var _weight2 = match[3] ? Number(match[3]) : 0;\n                if (!beforeKeys[reference]) {\n                    beforeKeys[reference] = {};\n                }\n                if (!beforeKeys[reference][_weight2]) {\n                    beforeKeys[reference][_weight2] = [];\n                }\n                beforeKeys[reference][_weight2].push(key);\n            }\n        } else if (position.startsWith('after')) {\n            var _match = position.match(/after\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!_match) {\n                invalid = true;\n            } else {\n                var _reference = _match[1];\n                var _weight3 = _match[3] ? Number(_match[3]) : 0;\n                if (!afterKeys[_reference]) {\n                    afterKeys[_reference] = {};\n                }\n                if (!afterKeys[_reference][_weight3]) {\n                    afterKeys[_reference][_weight3] = [];\n                }\n                afterKeys[_reference][_weight3].push(key);\n            }\n        } else {\n            invalid = true;\n        }\n        if (invalid) {\n            var numberPosition = parseFloat(position);\n            if (isNaN(numberPosition) || !isFinite(numberPosition)) {\n                numberPosition = index;\n            }\n            if (!middleKeys[numberPosition]) {\n                middleKeys[numberPosition] = [];\n            }\n            middleKeys[numberPosition].push(key);\n        }\n    });\n    var resultStart = [];\n    var resultMiddle = [];\n    var resultEnd = [];\n    var processedKeys = [];\n    var sortedWeights = function sortedWeights(dict, asc) {\n        var weights = Object.keys(dict).map(function (x) {\n            return Number(x);\n        }).sort(function (a, b) {\n            return a - b;\n        });\n        return asc ? weights : weights.reverse();\n    };\n    var addToResults = function addToResults(keys, result) {\n        keys.forEach(function (key) {\n            if (processedKeys.indexOf(key) >= 0) {\n                return;\n            }\n            processedKeys.push(key);\n            if (beforeKeys[key]) {\n                var beforeWeights = sortedWeights(beforeKeys[key], true);\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = beforeWeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var i = _step.value;\n\n                        addToResults(beforeKeys[key][i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n            result.push(key);\n            if (afterKeys[key]) {\n                var afterWeights = sortedWeights(afterKeys[key], false);\n                var _iteratorNormalCompletion2 = true;\n                var _didIteratorError2 = false;\n                var _iteratorError2 = undefined;\n\n                try {\n                    for (var _iterator2 = afterWeights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                        var _i = _step2.value;\n\n                        addToResults(afterKeys[key][_i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError2 = true;\n                    _iteratorError2 = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                            _iterator2.return();\n                        }\n                    } finally {\n                        if (_didIteratorError2) {\n                            throw _iteratorError2;\n                        }\n                    }\n                }\n            }\n        });\n    };\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n        for (var _iterator3 = sortedWeights(startKeys, false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var i = _step3.value;\n\n            addToResults(startKeys[i], resultStart);\n        }\n    } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                _iterator3.return();\n            }\n        } finally {\n            if (_didIteratorError3) {\n                throw _iteratorError3;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n        for (var _iterator4 = sortedWeights(middleKeys, true)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var _i2 = _step4.value;\n\n            addToResults(middleKeys[_i2], resultMiddle);\n        }\n    } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion4 && _iterator4.return) {\n                _iterator4.return();\n            }\n        } finally {\n            if (_didIteratorError4) {\n                throw _iteratorError4;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n        for (var _iterator5 = sortedWeights(endKeys, true)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n            var _i3 = _step5.value;\n\n            addToResults(endKeys[_i3], resultEnd);\n        }\n    } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion5 && _iterator5.return) {\n                _iterator5.return();\n            }\n        } finally {\n            if (_didIteratorError5) {\n                throw _iteratorError5;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n        for (var _iterator6 = Object.keys(beforeKeys)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n            var key = _step6.value;\n\n            if (processedKeys.indexOf(key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion8 = true;\n            var _didIteratorError8 = false;\n            var _iteratorError8 = undefined;\n\n            try {\n                for (var _iterator8 = sortedWeights(beforeKeys[key], false)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {\n                    var _i4 = _step8.value;\n\n                    addToResults(beforeKeys[key][_i4], resultStart);\n                }\n            } catch (err) {\n                _didIteratorError8 = true;\n                _iteratorError8 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion8 && _iterator8.return) {\n                        _iterator8.return();\n                    }\n                } finally {\n                    if (_didIteratorError8) {\n                        throw _iteratorError8;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError6 = true;\n        _iteratorError6 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion6 && _iterator6.return) {\n                _iterator6.return();\n            }\n        } finally {\n            if (_didIteratorError6) {\n                throw _iteratorError6;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion7 = true;\n    var _didIteratorError7 = false;\n    var _iteratorError7 = undefined;\n\n    try {\n        for (var _iterator7 = Object.keys(afterKeys)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {\n            var _key = _step7.value;\n\n            if (processedKeys.indexOf(_key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion9 = true;\n            var _didIteratorError9 = false;\n            var _iteratorError9 = undefined;\n\n            try {\n                for (var _iterator9 = sortedWeights(afterKeys[_key], false)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {\n                    var _i5 = _step9.value;\n\n                    addToResults(afterKeys[_key][_i5], resultMiddle);\n                }\n            } catch (err) {\n                _didIteratorError9 = true;\n                _iteratorError9 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion9 && _iterator9.return) {\n                        _iterator9.return();\n                    }\n                } finally {\n                    if (_didIteratorError9) {\n                        throw _iteratorError9;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError7 = true;\n        _iteratorError7 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion7 && _iterator7.return) {\n                _iterator7.return();\n            }\n        } finally {\n            if (_didIteratorError7) {\n                throw _iteratorError7;\n            }\n        }\n    }\n\n    var sortedKeys = [].concat(resultStart, resultMiddle, resultEnd);\n    return sortedKeys.map(function (key) {\n        return indexMapping[key];\n    }).map(function (i) {\n        return subject[i];\n    });\n};\nexports.default = positionalArraySorter;\n//# sourceMappingURL=positionalArraySorter.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js?");

/***/ }),

/***/ "./src/Components/ChangeTableRow.js":
/*!******************************************!*\
  !*** ./src/Components/ChangeTableRow.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ChangeTableRow = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _style = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _neosUiI18n = __webpack_require__(/*! @neos-project/neos-ui-i18n */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js\");\n\nvar _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ChangeTableRow = exports.ChangeTableRow = class ChangeTableRow extends _react.PureComponent {\n\n    getReadableTimeDifference(timestamp) {\n        var currentTimestamp = Math.floor(Date.now() / 1000);\n        var diff = currentTimestamp - timestamp;\n        if (diff < 60) {\n            return _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:timespan.recent' });\n        }\n\n        var timePeriods = [[60 * 100, 60, 'minutes'], [3600 * 24, 3600, 'hours'], [3600 * 24 * 7, 3600 * 24, 'days'], [3600 * 24 * 30, 3600 * 24 * 7, 'weeks'], [3600 * 24 * 30 * 12, 3600 * 24 * 30, 'months'], [Infinity, 3600 * 24 * 365, 'years']];\n\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = timePeriods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var timePeriod = _step.value;\n\n                if (diff > timePeriod[0]) {\n                    continue;\n                }\n\n                var elapsedPeriods = Math.floor(diff / timePeriod[1]);\n                return _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:timespan.' + timePeriod[2] + '.' + (diff > 1 ? 1 : 0), params: { count: elapsedPeriods } });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }\n\n    getClassNameForChangeType() {\n        switch (this.props.changeType) {\n            case 'created':\n                return _style2.default.editconflictCreated;\n            case 'changed':\n                return _style2.default.editconflictChanged;\n            case 'removed':\n                return _style2.default.editconflictRemoved;\n            default:\n                return '';\n        }\n    }\n\n    render() {\n        return _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n                'td',\n                null,\n                this.getReadableTimeDifference(this.props.changeDate)\n            ),\n            _react2.default.createElement(\n                'td',\n                null,\n                _react2.default.createElement(\n                    'span',\n                    { className: this.getClassNameForChangeType() },\n                    _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:changeType.' + this.props.changeType })\n                )\n            ),\n            _react2.default.createElement(\n                'td',\n                null,\n                this.props.nodeLabel\n            ),\n            _react2.default.createElement(\n                'td',\n                null,\n                this.props.workspaceName\n            )\n        );\n    }\n};\n\n//# sourceURL=webpack:///./src/Components/ChangeTableRow.js?");

/***/ }),

/***/ "./src/Components/PageEditsOverviewModal.js":
/*!**************************************************!*\
  !*** ./src/Components/PageEditsOverviewModal.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.PageEditsOverviewModal = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _redux = __webpack_require__(/*! ../redux */ \"./src/redux.js\");\n\nvar _style = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _ChangeTableRow = __webpack_require__(/*! ./ChangeTableRow */ \"./src/Components/ChangeTableRow.js\");\n\nvar _neosUiI18n = __webpack_require__(/*! @neos-project/neos-ui-i18n */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js\");\n\nvar _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PageEditsOverviewModal = exports.PageEditsOverviewModal = function PageEditsOverviewModal() {\n    var _dec, _class, _class2, _temp;\n\n    return _dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n        isOpen: (0, _plowJs.$get)('plugins.pageEditsOverviewModal.isOpen'),\n        changes: (0, _plowJs.$get)('plugins.pageEditsOverviewModal.changes')\n    }), { close: _redux.actions.closeDialog }), _dec(_class = (_temp = _class2 = class PageEditsOverviewModal extends _react.PureComponent {\n\n        renderCloseAction() {\n            var _this = this;\n\n            return _react2.default.createElement(\n                _reactUiComponents.Button,\n                {\n                    id: 'neos-KeyboardShortcutModal-Close',\n                    key: 'close',\n                    style: 'lighter',\n                    hoverStyle: 'brand',\n                    onClick: function onClick() {\n                        return _this.props.close();\n                    }\n                },\n                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.button.close.caption' })\n            );\n        }\n\n        renderConflictsHint() {\n            var _props = this.props,\n                isOpen = _props.isOpen,\n                changes = _props.changes;\n\n            return isOpen && changes !== undefined && changes.length > 0 ? _react2.default.createElement(\n                'div',\n                { className: _style2.default.editconflictHint },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.hint' })\n                ),\n                _react2.default.createElement(\n                    'table',\n                    { className: _style2.default.editconflictTable },\n                    _react2.default.createElement(\n                        'thead',\n                        null,\n                        _react2.default.createElement(\n                            'th',\n                            null,\n                            _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.date' })\n                        ),\n                        _react2.default.createElement(\n                            'th',\n                            null,\n                            _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.type' })\n                        ),\n                        _react2.default.createElement(\n                            'th',\n                            null,\n                            _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.node' })\n                        ),\n                        _react2.default.createElement(\n                            'th',\n                            null,\n                            _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.workspace' })\n                        )\n                    ),\n                    changes.map(function (node) {\n                        return _react2.default.createElement(_ChangeTableRow.ChangeTableRow, {\n                            changeType: node.changeType,\n                            changeDate: node.changeDate,\n                            workspaceName: node.workspaceName,\n                            nodeLabel: node.nodeLabel\n                        });\n                    })\n                )\n            ) : '';\n        }\n\n        render() {\n            var _props2 = this.props,\n                close = _props2.close,\n                isOpen = _props2.isOpen;\n\n            return _react2.default.createElement(_reactUiComponents.Dialog, {\n                actions: [this.renderCloseAction()],\n                title: _react2.default.createElement(\n                    'h2',\n                    null,\n                    _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.title' }),\n                    '\\xA0',\n                    _react2.default.createElement(_reactUiComponents.Icon, { icon: 'warning' })\n                ),\n                isOpen: isOpen,\n                type: 'error',\n                style: 'wide',\n                onRequestClose: function onRequestClose() {\n                    return close();\n                },\n                children: this.renderConflictsHint()\n            });\n        }\n    }, _class2.propTypes = {\n        isOpen: _propTypes2.default.bool.isRequired,\n        close: _propTypes2.default.func.isRequired,\n        changes: _propTypes2.default.array\n    }, _temp)) || _class;\n};\n\n//# sourceURL=webpack:///./src/Components/PageEditsOverviewModal.js?");

/***/ }),

/***/ "./src/Components/PageHasEditsButton.js":
/*!**********************************************!*\
  !*** ./src/Components/PageHasEditsButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.PageHasEditsButton = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! ../redux */ \"./src/redux.js\");\n\nvar _neosUiI18n = __webpack_require__(/*! @neos-project/neos-ui-i18n */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js\");\n\nvar _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PageHasEditsButton = exports.PageHasEditsButton = function PageHasEditsButton() {\n    var _dec, _class, _class2, _temp;\n\n    return _dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n        changes: (0, _plowJs.$get)('plugins.pageEditsOverviewModal.changes')\n    }), { open: _redux.actions.openDialog }), _dec(_class = (_temp = _class2 = class PageHasEditsButton extends _react.PureComponent {\n\n        render() {\n            var _props = this.props,\n                open = _props.open,\n                changes = _props.changes;\n\n            return changes !== undefined && changes.length > 0 ? _react2.default.createElement(\n                _reactUiComponents.Button,\n                {\n                    style: 'error',\n                    hoverStyle: 'error',\n                    onClick: function onClick() {\n                        return open();\n                    }\n                },\n                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:button.label' }),\n                _react2.default.createElement(_reactUiComponents.Icon, {\n                    icon: 'warning' })\n            ) : '';\n        }\n    }, _class2.propTypes = {\n        changes: _propTypes2.default.array.isRequired\n    }, _temp)) || _class;\n};\n\n//# sourceURL=webpack:///./src/Components/PageHasEditsButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./manifest.js */ \"./src/manifest.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/index.js\");\n\nvar _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);\n\nvar _PageHasEditsButton = __webpack_require__(/*! ./Components/PageHasEditsButton */ \"./src/Components/PageHasEditsButton.js\");\n\nvar _PageEditsOverviewModal = __webpack_require__(/*! ./Components/PageEditsOverviewModal */ \"./src/Components/PageEditsOverviewModal.js\");\n\nvar _redux = __webpack_require__(/*! ./redux */ \"./src/redux.js\");\n\nvar _sagas = __webpack_require__(/*! ./sagas */ \"./src/sagas.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _neosUiExtensibility2.default)('PunktDe.EditConflictPrevention:HighlightNonEditablePage', {}, function (globalRegistry) {\n    var sagasRegistry = globalRegistry.get('sagas');\n    sagasRegistry.set('punktde/editconflictprevention/nodeHasChanges', {\n        saga: _sagas.watchGetNodeChanges\n    });\n\n    var reducersRegistry = globalRegistry.get('reducers');\n    reducersRegistry.set('punktde/editconflictprevention', { reducer: _redux.reducer });\n\n    var containerRegistry = globalRegistry.get('containers');\n    containerRegistry.set('SecondaryToolbar/Right/NonEditableContent', (0, _PageHasEditsButton.PageHasEditsButton)());\n    containerRegistry.set('Modals/PageHasEditsModal', (0, _PageEditsOverviewModal.PageEditsOverviewModal)());\n});\n\n//# sourceURL=webpack:///./src/manifest.js?");

/***/ }),

/***/ "./src/redux.js":
/*!**********************!*\
  !*** ./src/redux.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.reducer = exports.actions = exports.actionTypes = undefined;\n\nvar _handleActions;\n\nvar _reduxActions = __webpack_require__(/*! redux-actions */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-actions/index.js\");\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _utilsRedux = __webpack_require__(/*! @neos-project/utils-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/utils-redux/index.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar OPEN_DIALOG = '@PunktDe.EditConflictPrevention/OPEN_DIALOG';\nvar CLOSE_DIALOG = '@PunktDe.EditConflictPrevention/CLOSE_DIALOG';\nvar SET_CHANGES = '@PunktDe.EditConflictPrevention/SET_CHANGES';\n\nvar actionTypes = exports.actionTypes = {\n    OPEN_DIALOG: OPEN_DIALOG,\n    CLOSE_DIALOG: CLOSE_DIALOG,\n    SET_CHANGES: SET_CHANGES\n};\n\nvar openDialog = (0, _reduxActions.createAction)(OPEN_DIALOG);\nvar closeDialog = (0, _reduxActions.createAction)(CLOSE_DIALOG);\nvar setChanges = (0, _reduxActions.createAction)(SET_CHANGES);\n\nvar actions = exports.actions = {\n    openDialog: openDialog,\n    closeDialog: closeDialog,\n    setChanges: setChanges\n};\n\nvar reducer = exports.reducer = (0, _utilsRedux.handleActions)((_handleActions = {}, _defineProperty(_handleActions, OPEN_DIALOG, function () {\n    return (0, _plowJs.$set)('plugins.pageEditsOverviewModal.isOpen', true);\n}), _defineProperty(_handleActions, CLOSE_DIALOG, function () {\n    return (0, _plowJs.$set)('plugins.pageEditsOverviewModal.isOpen', false);\n}), _defineProperty(_handleActions, SET_CHANGES, function (changes) {\n    return (0, _plowJs.$set)('plugins.pageEditsOverviewModal.changes', changes);\n}), _handleActions));\n\n//# sourceURL=webpack:///./src/redux.js?");

/***/ }),

/***/ "./src/sagas.js":
/*!**********************!*\
  !*** ./src/sagas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getNodeChanges = getNodeChanges;\nexports.watchGetNodeChanges = watchGetNodeChanges;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/redux-saga-effects/index.js\");\n\nvar _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js\");\n\nvar _neosUiBackendConnector = __webpack_require__(/*! @neos-project/neos-ui-backend-connector */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js\");\n\nvar _redux = __webpack_require__(/*! ./redux */ \"./src/redux.js\");\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(getNodeChanges),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchGetNodeChanges);\n\nfunction getNodeChanges() {\n    var documentNode, changes, response;\n    return regeneratorRuntime.wrap(function getNodeChanges$(_context) {\n        while (1) {\n            switch (_context.prev = _context.next) {\n                case 0:\n                    _context.next = 2;\n                    return (0, _effects.select)(_neosUiReduxStore.selectors.CR.Nodes.documentNodeSelector);\n\n                case 2:\n                    documentNode = _context.sent;\n                    changes = [];\n                    _context.prev = 4;\n                    _context.next = 7;\n                    return _neosUiBackendConnector.fetchWithErrorHandling.withCsrfToken(function (csrfToken) {\n                        return {\n                            url: '/editconflictprevention/api/getchangednodes',\n                            method: 'POST',\n                            credentials: 'include',\n                            headers: {\n                                'X-Flow-Csrftoken': csrfToken,\n                                'Content-Type': 'application/json'\n                            },\n                            body: JSON.stringify({\n                                nodePath: documentNode.contextPath\n                            })\n                        };\n                    });\n\n                case 7:\n                    response = _context.sent;\n                    _context.next = 10;\n                    return response.json().then(function (json) {\n                        return JSON.parse(json);\n                    });\n\n                case 10:\n                    changes = _context.sent;\n                    _context.next = 16;\n                    break;\n\n                case 13:\n                    _context.prev = 13;\n                    _context.t0 = _context['catch'](4);\n\n                    console.log(_context.t0);\n\n                case 16:\n                    if (!(changes.length > 0)) {\n                        _context.next = 21;\n                        break;\n                    }\n\n                    _context.next = 19;\n                    return (0, _effects.put)(_redux.actions.setChanges(changes));\n\n                case 19:\n                    _context.next = 23;\n                    break;\n\n                case 21:\n                    _context.next = 23;\n                    return (0, _effects.put)(_redux.actions.setChanges([]));\n\n                case 23:\n                case 'end':\n                    return _context.stop();\n            }\n        }\n    }, _marked, this, [[4, 13]]);\n}\n\nfunction watchGetNodeChanges() {\n    return regeneratorRuntime.wrap(function watchGetNodeChanges$(_context2) {\n        while (1) {\n            switch (_context2.prev = _context2.next) {\n                case 0:\n                    _context2.next = 2;\n                    return (0, _effects.takeEvery)(_neosUiReduxStore.actionTypes.CR.Nodes.SET_DOCUMENT_NODE, getNodeChanges);\n\n                case 2:\n                case 'end':\n                    return _context2.stop();\n            }\n        }\n    }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./src/sagas.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"editconflictTable\":\"style__editconflictTable___oyacK\",\"editconflictHint\":\"style__editconflictHint___29cwl\",\"editconflictCreated\":\"style__editconflictCreated___1hR2F\",\"editconflictChanged\":\"style__editconflictChanged___2hrQH\",\"editconflictRemoved\":\"style__editconflictRemoved___2rPuI\"};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });