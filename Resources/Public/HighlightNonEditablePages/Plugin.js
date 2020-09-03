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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }

        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducer = exports.actions = exports.actionTypes = undefined;

var _handleActions;

var _reduxActions = __webpack_require__(16);

var _plowJs = __webpack_require__(2);

var _utilsRedux = __webpack_require__(17);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OPEN_DIALOG = '@PunktDe.EditConflictPrevention/OPEN_DIALOG';
var CLOSE_DIALOG = '@PunktDe.EditConflictPrevention/CLOSE_DIALOG';

var actionTypes = exports.actionTypes = {
    OPEN_DIALOG: OPEN_DIALOG,
    CLOSE_DIALOG: CLOSE_DIALOG
};

var openDialog = (0, _reduxActions.createAction)(OPEN_DIALOG);
var closeDialog = (0, _reduxActions.createAction)(CLOSE_DIALOG);

var actions = exports.actions = {
    openDialog: openDialog,
    closeDialog: closeDialog
};

var reducer = exports.reducer = (0, _utilsRedux.handleActions)((_handleActions = {}, _defineProperty(_handleActions, OPEN_DIALOG, function () {
    return (0, _plowJs.$set)('ui.pageEditsOverviewModal.isOpen', true);
}), _defineProperty(_handleActions, CLOSE_DIALOG, function () {
    return (0, _plowJs.$set)('ui.pageEditsOverviewModal.isOpen', false);
}), _handleActions));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;


var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--3-2!../node_modules/postcss-loader/lib/index.js??ref--3-3!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--3-2!../node_modules/postcss-loader/lib/index.js??ref--3-3!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(11);

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _PageHasEditsButton = __webpack_require__(15);

var _PageEditsOverviewModal = __webpack_require__(18);

var _redux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('PunktDe.EditConflictPrevention:HighlightNonEditablePage', {}, function (globalRegistry) {
    var reducersRegistry = globalRegistry.get('reducers');
    reducersRegistry.set('punktde/editconflictprevention', { reducer: _redux.reducer });

    console.log(globalRegistry.get('i18n'));
    var containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('SecondaryToolbar/Right/NonEditableContent', (0, _PageHasEditsButton.PageHasEditsButton)());
    containerRegistry.set('Modals/PageHasEditsModal', (0, _PageEditsOverviewModal.PageEditsOverviewModal)());
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(12);

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _package = __webpack_require__(13);

var _manifest = __webpack_require__(14);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};

function createConsumerApi(manifests, exposureMap) {
    var api = {};

    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });

    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));

    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"_from":"@neos-project/neos-ui-extensibility@~1.0.14","_id":"@neos-project/neos-ui-extensibility@1.0.14","_inBundle":false,"_integrity":"sha512-G1C+ZkYjTGST3E1vfgolygcBqKn7XphMoLZTcz5ddh/Phabo23N+54zwi1mLYjAtefuIY/go0t1NQeDyIexmRg==","_location":"/@neos-project/neos-ui-extensibility","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@neos-project/neos-ui-extensibility@~1.0.14","name":"@neos-project/neos-ui-extensibility","escapedName":"@neos-project%2fneos-ui-extensibility","scope":"@neos-project","rawSpec":"~1.0.14","saveSpec":null,"fetchSpec":"~1.0.14"},"_requiredBy":["#DEV:/"],"_resolved":"https://registry.npmjs.org/@neos-project/neos-ui-extensibility/-/neos-ui-extensibility-1.0.14.tgz","_shasum":"3b65432e8c8ceef014861061e0213a1b75a05ba0","_spec":"@neos-project/neos-ui-extensibility@~1.0.14","_where":"/Users/ry81/Workspace/Projects/cgm-app/DistributionPackages/PunktDe.EditConflictPrevention/Resources/Private/JavaScript/HighlightNonEditablePages","bin":{"neos-react-scripts":"bin/neos-react-scripts.js"},"bundleDependencies":false,"dependencies":{"@neos-project/build-essentials":"1.0.14","@neos-project/positional-array-sorter":"1.0.14","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^7.1.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.28.4","file-loader":"^1.1.5","json-loader":"^0.5.4","postcss-loader":"^2.0.10","react-dev-utils":"^0.5.0","style-loader":"^0.19.0"},"deprecated":false,"description":"Extensibility mechanisms for the Neos CMS UI","devDependencies":{"@neos-project/babel-preset-neos-ui":"1.0.14","@neos-project/jest-preset-neos-ui":"1.0.14"},"jest":{"preset":"@neos-project/jest-preset-neos-ui"},"main":"./src/index.js","name":"@neos-project/neos-ui-extensibility","scripts":{"build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","jest":"NODE_ENV=test jest","lint":"eslint src","prebuild":"check-dependencies && yarn clean","test":"yarn jest -- -w 2 --coverage","test:watch":"yarn jest -- --watch"},"version":"1.0.14"}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function manifest(identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageHasEditsButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _plowJs = __webpack_require__(2);

var _neosUiBackendConnector = __webpack_require__(5);

var _reactUiComponents = __webpack_require__(6);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(3);

var _neosUiI18n = __webpack_require__(24);

var _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageHasEditsButton = exports.PageHasEditsButton = function PageHasEditsButton() {
    var _dec, _class, _class2, _temp;

    return _dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({
        documentNodePath: (0, _plowJs.$get)('cr.nodes'), // Only works with Neos UI 2+
        isOpen: (0, _plowJs.$get)('ui.pageEditsOverviewModal.isOpen')
    }), { open: _redux.actions.openDialog }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
        _inherits(PageHasEditsButton, _PureComponent);

        function PageHasEditsButton(props) {
            _classCallCheck(this, PageHasEditsButton);

            var _this = _possibleConstructorReturn(this, (PageHasEditsButton.__proto__ || Object.getPrototypeOf(PageHasEditsButton)).call(this, props));

            _this.state = {
                hasNonEditableContent: false
            };
            return _this;
        }

        _createClass(PageHasEditsButton, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props,
                    open = _props.open,
                    documentNodePath = _props.documentNodePath;


                _neosUiBackendConnector.fetchWithErrorHandling.withCsrfToken(function (csrfToken) {
                    return {
                        url: '/editconflictprevention/api/nodehaschanges?nodePath=' + documentNodePath.documentNode,
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'X-Flow-Csrftoken': csrfToken,
                            'Content-Type': 'text/html'
                        }
                    };
                }).then(function (result) {
                    return result.json();
                }).then(function (json) {
                    _this2.setState({ hasNonEditableContent: json });
                });

                return this.state.hasNonEditableContent ? _react2.default.createElement(
                    _reactUiComponents.Button,
                    {
                        style: 'error',
                        hoverStyle: 'error',
                        onClick: function onClick() {
                            return open();
                        }
                    },
                    _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:button.label' }),
                    _react2.default.createElement(_reactUiComponents.Icon, {
                        icon: 'warning' })
                ) : '';
            }
        }]);

        return PageHasEditsButton;
    }(_react.PureComponent), _class2.propTypes = {
        isOpen: _propTypes2.default.bool
    }, _temp)) || _class;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reduxActions;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().UtilsRedux;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageEditsOverviewModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUiComponents = __webpack_require__(6);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _plowJs = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(3);

var _neosUiBackendConnector = __webpack_require__(5);

var _style = __webpack_require__(8);

var _style2 = _interopRequireDefault(_style);

var _ChangeTableRow = __webpack_require__(23);

var _neosUiI18n = __webpack_require__(24);

var _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageEditsOverviewModal = exports.PageEditsOverviewModal = function PageEditsOverviewModal() {
    var _dec, _class, _class2, _temp;

    return _dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({
        isOpen: (0, _plowJs.$get)('ui.pageEditsOverviewModal.isOpen'),
        documentNodePath: (0, _plowJs.$get)('cr.nodes') // Only works with Neos UI 2+
    }), { close: _redux.actions.closeDialog }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
        _inherits(PageEditsOverviewModal, _PureComponent);

        function PageEditsOverviewModal(props) {
            _classCallCheck(this, PageEditsOverviewModal);

            var _this = _possibleConstructorReturn(this, (PageEditsOverviewModal.__proto__ || Object.getPrototypeOf(PageEditsOverviewModal)).call(this, props));

            _this.state = {
                changedNodes: []
            };
            return _this;
        }

        _createClass(PageEditsOverviewModal, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                var documentNodePath = this.props.documentNodePath;

                _neosUiBackendConnector.fetchWithErrorHandling.withCsrfToken(function (csrfToken) {
                    return {
                        url: '/editconflictprevention/api/getchangednodes?nodePath=' + documentNodePath.documentNode,
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'X-Flow-Csrftoken': csrfToken,
                            'Content-Type': 'application/json'
                        }
                    };
                }).then(function (result) {
                    return result.json();
                }).then(function (json) {
                    _this2.setState({ changedNodes: JSON.parse(json) });
                });
            }
        }, {
            key: 'renderCloseAction',
            value: function renderCloseAction() {
                var _this3 = this;

                return _react2.default.createElement(
                    _reactUiComponents.Button,
                    {
                        id: 'neos-KeyboardShortcutModal-Close',
                        key: 'close',
                        style: 'lighter',
                        hoverStyle: 'brand',
                        onClick: function onClick() {
                            return _this3.props.close();
                        }
                    },
                    _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.button.close.caption' })
                );
            }
        }, {
            key: 'renderConflictsHint',
            value: function renderConflictsHint() {
                var isOpen = this.props.isOpen;


                return isOpen ? _react2.default.createElement(
                    'div',
                    { className: _style2.default.editconflictHint },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.hint' })
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: _style2.default.editconflictTable },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.date' })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.type' })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.node' })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.thead.workspace' })
                            )
                        ),
                        this.state.changedNodes.map(function (node) {
                            return _react2.default.createElement(_ChangeTableRow.ChangeTableRow, {
                                changeType: node.changeType,
                                changeDate: node.changeDate,
                                workspaceName: node.workspaceName,
                                nodeLabel: node.nodeLabel
                            });
                        })
                    )
                ) : '';
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    close = _props.close,
                    isOpen = _props.isOpen;

                return _react2.default.createElement(_reactUiComponents.Dialog, {
                    actions: [this.renderCloseAction()],
                    title: _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:modal.title' }),
                        '\xA0',
                        _react2.default.createElement(_reactUiComponents.Icon, { icon: 'warning' })
                    ),
                    isOpen: isOpen,
                    type: 'error',
                    style: 'wide',
                    onRequestClose: function onRequestClose() {
                        return close();
                    },
                    children: this.renderConflictsHint()
                });
            }
        }]);

        return PageEditsOverviewModal;
    }(_react.PureComponent), _class2.propTypes = {
        isOpen: _propTypes2.default.bool.isRequired,
        close: _propTypes2.default.func.isRequired
    }, _temp)) || _class;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".style__editconflictTable___oyacK {\n    width: 100%;\n    padding-top: 1rem;\n}\n\n.style__editconflictHint___29cwl {\n    padding: 0 1rem;\n}\n\n.style__editconflictTable___oyacK th, td {\n    padding: .5rem 1rem;\n    text-align: left;\n    vertical-align: top;\n    border-bottom: 1px solid #222;\n}\n\n.style__editconflictTable___oyacK td {\n    background: #323232;\n}\n\n.style__editconflictCreated___1hR2F,\n.style__editconflictChanged___2hrQH,\n.style__editconflictRemoved___2rPuI {\n    padding: .15rem .25rem;\n    border-radius: 12px;\n    color: #323232;;\n}\n\n.style__editconflictCreated___1hR2F {\n    background-color: #00a338;\n}\n\n.style__editconflictChanged___2hrQH {\n    background-color: #00ADEE;\n}\n\n.style__editconflictRemoved___2rPuI {\n    background-color: #ff460d;\n}\n", ""]);

// exports
exports.locals = {
	"editconflictTable": "style__editconflictTable___oyacK",
	"editconflictHint": "style__editconflictHint___29cwl",
	"editconflictCreated": "style__editconflictCreated___1hR2F",
	"editconflictChanged": "style__editconflictChanged___2hrQH",
	"editconflictRemoved": "style__editconflictRemoved___2rPuI"
};

/***/ }),
/* 20 */
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
/* 21 */
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

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChangeTableRow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(8);

var _style2 = _interopRequireDefault(_style);

var _neosUiI18n = __webpack_require__(24);

var _neosUiI18n2 = _interopRequireDefault(_neosUiI18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeTableRow = exports.ChangeTableRow = function (_PureComponent) {
    _inherits(ChangeTableRow, _PureComponent);

    function ChangeTableRow() {
        _classCallCheck(this, ChangeTableRow);

        return _possibleConstructorReturn(this, (ChangeTableRow.__proto__ || Object.getPrototypeOf(ChangeTableRow)).apply(this, arguments));
    }

    _createClass(ChangeTableRow, [{
        key: 'getReadableTimeDifference',
        value: function getReadableTimeDifference(timestamp) {
            var currentTimestamp = Math.floor(Date.now() / 1000);
            var diff = currentTimestamp - timestamp;
            if (diff < 60) {
                return _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:timespan.recent' });
            }

            var timePeriods = [[60 * 100, 60, 'minutes'], [3600 * 24, 3600, 'hours'], [3600 * 24 * 7, 3600 * 24, 'days'], [3600 * 24 * 30, 3600 * 24 * 7, 'weeks'], [3600 * 24 * 30 * 12, 3600 * 24 * 30, 'months'], [Infinity, 3600 * 24 * 365, 'years']];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = timePeriods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var timePeriod = _step.value;

                    if (diff > timePeriod[0]) {
                        continue;
                    }

                    var elapsedPeriods = Math.floor(diff / timePeriod[1]);
                    return _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:timespan.' + timePeriod[2] + '.' + (diff > 1 ? 1 : 0), params: { count: elapsedPeriods } });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'getClassNameForChangeType',
        value: function getClassNameForChangeType() {
            switch (this.props.changeType) {
                case 'created':
                    return _style2.default.editconflictCreated;
                case 'changed':
                    return _style2.default.editconflictChanged;
                case 'removed':
                    return _style2.default.editconflictRemoved;
                default:
                    return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    this.getReadableTimeDifference(this.props.changeDate)
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: this.getClassNameForChangeType() },
                        _react2.default.createElement(_neosUiI18n2.default, { id: 'PunktDe.EditConflictPrevention:Main:changeType.' + this.props.changeType })
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.nodeLabel
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.workspaceName
                )
            );
        }
    }]);

    return ChangeTableRow;
}(_react.PureComponent);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiI18n;

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map