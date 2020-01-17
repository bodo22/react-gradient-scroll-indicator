import React, { Component } from 'react';
import PropTypes from 'prop-types';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var styleIt = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(React);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibAdler = __webpack_require__(1);

	var _reactLibAdler2 = _interopRequireDefault(_reactLibAdler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016-present, Joshua Robinson
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the MIT license.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Style = function (_Component) {
	  _inherits(Style, _Component);

	  function Style(props) {
	    _classCallCheck(this, Style);

	    var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, props));

	    _this.getStyleString = function () {
	      if (_this.props.children instanceof Array) {
	        var styleString = _this.props.children.filter(function (child) {
	          return !(0, _react.isValidElement)(child) && typeof child === 'string';
	        });

	        if (styleString.length > 1) {
	          throw new Error('Multiple style objects as direct descedents of a ' + 'Style component are not supported (' + styleString.length + ' style objects detected): \n\n' + styleString[0]);
	        }

	        return styleString[0];
	      } else if (typeof _this.props.children === 'string' && !(0, _react.isValidElement)(_this.props.children)) {
	        return _this.props.children;
	      } else {
	        return null;
	      }
	    };

	    _this.getRootElement = function () {
	      if (_this.props.children instanceof Array) {
	        var rootElement = _this.props.children.filter(function (child) {
	          return (0, _react.isValidElement)(child);
	        });

	        return rootElement[0];
	      } else if ((0, _react.isValidElement)(_this.props.children)) {
	        return _this.props.children;
	      } else {
	        return null;
	      }
	    };

	    _this.getRootSelectors = function (rootElement) {
	      var rootSelectors = [];

	      // Handle id
	      if (rootElement.props.id) {
	        rootSelectors.push('#' + rootElement.props.id);
	      }

	      // Handle classes
	      if (rootElement.props.className) {
	        rootElement.props.className.trim().split(/\s+/g).forEach(function (className) {
	          return rootSelectors.push(className);
	        });
	      }

	      // Handle no root selector by using type
	      if (!rootSelectors.length && typeof rootElement.type !== 'function') {
	        rootSelectors.push(rootElement.type);
	      }

	      return rootSelectors;
	    };

	    _this.processCSSText = function (styleString, scopeClassName, rootSelectors) {
	      // TODO: Look into using memoizeStringOnly from fbjs/lib for escaped strings;
	      // can avoid much of the computation as long as scoped doesn't come into play
	      // which would be unique

	      // TODO: If dev lint and provide feedback
	      // if linting fails we need to error out because
	      // the style string will not be parsed correctly

	      return styleString.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g, '') // Strip javascript style comments
	      .replace(/\s\s+/g, ' ') // Convert multiple to single whitespace
	      .split('}') // Start breaking down statements
	      .map(function (fragment) {
	        var isDeclarationBodyPattern = /.*:.*;/g;
	        var isAtRulePattern = /\s*@/g;
	        var isKeyframeOffsetPattern = /\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;

	        // Split fragment into selector and declarationBody; escape declaration body
	        return fragment.split('{').map(function (statement) {
	          // Avoid processing whitespace
	          if (!statement.trim().length) {
	            return '';
	          }

	          // Skip escaping selectors statements since that would break them;
	          // note in docs that selector statements are not escaped and should
	          // not be generated from user provided strings
	          if (statement.match(isDeclarationBodyPattern)) {
	            return _this.escapeTextContentForBrowser(statement);
	          } else {
	            // Statement is a selector
	            var selector = statement;

	            if (scopeClassName && !/:target/gi.test(selector)) {
	              // Prefix the scope to the selector if it is not an at-rule
	              if (!selector.match(isAtRulePattern) && !selector.match(isKeyframeOffsetPattern)) {
	                return _this.scopeSelector(scopeClassName, selector, rootSelectors);
	              } else {
	                // Is at-rule or keyframe offset and should not be scoped
	                return selector;
	              }
	            } else {
	              // No scope; do nothing to the selector
	              return selector;
	            }
	          }

	          // Pretty print in dev
	        }).join('{\n');
	      }).join('}\n');
	    };

	    _this.escaper = function (match) {
	      var ESCAPE_LOOKUP = {
	        '>': '&gt;',
	        '<': '&lt;'
	      };

	      return ESCAPE_LOOKUP[match];
	    };

	    _this.escapeTextContentForBrowser = function (text) {
	      var ESCAPE_REGEX = /[><]/g;
	      return ('' + text).replace(ESCAPE_REGEX, _this.escaper);
	    };

	    _this.scopeSelector = function (scopeClassName, selector, rootSelectors) {
	      var scopedSelector = [];

	      // Matches comma-delimiters in multi-selectors (".fooClass, .barClass {...}" => "," );
	      // ignores commas-delimiters inside of brackets and parenthesis ([attr=value], :not()..)
	      var groupOfSelectorsPattern = /,(?![^(|[]*\)|\])/g;

	      var selectors = selector.split(groupOfSelectorsPattern);

	      for (var i = 0; i < selectors.length; i++) {
	        var containsSelector = void 0; // [data-scoped="54321"] .someClass
	        var unionSelector = void 0; // [data-scoped="54321"].someClass (account for root)

	        if (rootSelectors.length && rootSelectors.some(function (rootSelector) {
	          return selector.match(rootSelector);
	        })) {
	          unionSelector = selectors[i];

	          // Can't just add them together because of selector combinator complexity
	          // like '.rootClassName.someClass.otherClass > *' or :not('.rootClassName'),
	          // replace must be used

	          // Escape valid CSS special characters that are also RegExp special characters
	          var escapedRootSelectors = rootSelectors.map(function (rootSelector) {
	            return rootSelector.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
	          });

	          unionSelector = unionSelector.replace(new RegExp('(' + // Start capture group
	          escapedRootSelectors.join('|') + // Match any one root selector
	          ')' // End capture group
	          ), '$1' + scopeClassName // Replace any one root selector match with a union
	          ); // of the root selector and scoping class (e.g., .rootSelector._scoped-1). Order matters here because of type-class union support like div._scoped-1

	          // Do both union and contains selectors because of case <div><div></div></div>
	          // or <div className="foo"><div className="foo"></div></div>
	          containsSelector = scopeClassName + ' ' + selectors[i];
	          scopedSelector.push(unionSelector, containsSelector);
	        } else {
	          containsSelector = scopeClassName + ' ' + selectors[i];
	          scopedSelector.push(containsSelector);
	        }
	      }

	      return scopedSelector.join(', ');
	    };

	    _this.getScopeClassName = function (styleString, rootElement) {
	      var hash = styleString;

	      if (rootElement) {
	        _this.pepper = '';
	        _this.traverseObjectToGeneratePepper(rootElement);
	        hash += _this.pepper;
	      }

	      return ('s') + (0, _reactLibAdler2.default)(hash);
	    };

	    _this.traverseObjectToGeneratePepper = function (obj) {
	      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      // Max depth is equal to max depth of JSON.stringify
	      // Max length of 10,000 is arbitrary
	      if (depth > 32 || _this.pepper.length > 10000) return;

	      for (var prop in obj) {
	        // Avoid internal props that are unreliable
	        var isPropReactInternal = /^[_$]|type|ref|^value$/.test(prop);
	        if (!!obj[prop] && _typeof(obj[prop]) === 'object' && !isPropReactInternal) {
	          _this.traverseObjectToGeneratePepper(obj[prop], depth + 1);
	        } else if (!!obj[prop] && !isPropReactInternal && typeof obj[prop] !== 'function') {
	          _this.pepper += obj[prop];
	        }
	      }
	    };

	    _this.isVoidElement = function (type) {
	      return ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'].some(function (voidType) {
	        return type === voidType;
	      });
	    };

	    _this.addCSSTextToHead = function (cssText) {
	      if (!cssText.length) {
	        return;
	      } else {
	        var cssTextHash = (0, _reactLibAdler2.default)(cssText);

	        if (!window._reactiveStyle.cssTextHashesAddedToHead.some(function (hash) {
	          return hash === cssTextHash;
	        })) {
	          window._reactiveStyle.el.innerHTML += cssText;
	          window._reactiveStyle.cssTextHashesAddedToHead.push(cssTextHash);
	        }
	      }
	    };

	    _this.createStyleElement = function (cssText, scopeClassName) {
	      return _react2.default.createElement('style', { type: 'text/css', key: scopeClassName, ref: function ref(c) {
	          return _this._style = c;
	        },
	        dangerouslySetInnerHTML: {
	          __html: cssText || ''
	        } });
	    };

	    _this.getNewChildrenForCloneElement = function (cssText, rootElement, scopeClassName) {
	      return [_this.createStyleElement(cssText, scopeClassName)].concat(rootElement.props.children);
	    };

	    _this.scopeClassNameCache = {};
	    _this.scopedCSSTextCache = {};
	    return _this;
	  }

	  _createClass(Style, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return this.createStyleElement();
	      }

	      var styleString = this.getStyleString();
	      var rootElement = this.getRootElement();

	      if (!styleString && rootElement) {
	        // Passthrough; no style actions
	        return rootElement.props.children;
	      } else if (styleString && !rootElement) {
	        // Global styling with no scoping
	        return this.createStyleElement(this.processCSSText(styleString), this.getScopeClassName(styleString, rootElement));
	      } else {
	        // Style tree of elements
	        var rootElementClassNames = rootElement.props.className ? rootElement.props.className + ' ' : '';
	        var rootElementId = rootElement.props.id ? rootElement.props.id : '';

	        // If styleString has already been calculated before and CSS text is unchanged;
	        // use the cached version. No need to recalculate.
	        var scopeClassName = void 0;
	        var scopedCSSText = void 0;
	        // Include rootElementClassName and rootElementId as part of cache address
	        // to ensure upon state/prop change resulting in new id/class on root element
	        // will properly generate a union selector.
	        // WARNING: May be a preoptimization; cost of adding union selector to all selectors
	        // could be so low that its worth doing so to avoid surface space for bugs
	        var scopeClassNameAddress = rootElementClassNames + rootElementId + styleString;
	        if (this.scopeClassNameCache[scopeClassNameAddress]) {
	          // Use cached scope and scoped CSS Text
	          scopeClassName = this.scopeClassNameCache[scopeClassNameAddress];
	          scopedCSSText = this.scopedCSSTextCache[scopeClassName];
	        } else {
	          // Calculate scope and scoped CSS Text
	          scopeClassName = this.getScopeClassName(styleString, rootElement);
	          scopedCSSText = this.processCSSText(styleString, '.' + scopeClassName, this.getRootSelectors(rootElement));

	          // Cache for future use
	          this.scopeClassNameCache[scopeClassNameAddress] = scopeClassName;
	          this.scopedCSSTextCache[scopeClassName] = scopedCSSText;
	        }

	        return (0, _react.cloneElement)(rootElement, _extends({}, rootElement.props, {
	          className: '' + rootElementClassNames + scopeClassName
	        }), this.getNewChildrenForCloneElement(scopedCSSText, rootElement, scopeClassName));
	      }
	    }

	    /**
	     * Filters out the style string from this.props.children
	     *
	     *    > getStyleString()
	     *    ".foo { color: red; }"
	     *
	     * @return {?string} string Style string
	     */


	    /**
	    * Filters out the root element from this.props.children
	    *
	    *    > getRootElement()
	    *    "<MyRootElement />"
	    *
	    * @return {?ReactDOMComponent} component Root element component
	    */


	    /**
	    * Creates an array of selectors which target the root element
	    *
	    *    > getRootSelectors( <div id="foo" className="bar" /> )
	    *    "['#foo', '.bar']"
	    *
	    * @param {ReactDOMComponent} component
	    * @return {!array} array Array of selectors that target the root element
	    */


	    /**
	    * Scopes CSS statement with a given scoping class name as a union or contains selector;
	    * also escapes CSS declaration bodies
	    *
	    *    > proccessStyleString( '.foo { color: red; } .bar { color: green; }', '_scoped-1234, ['.root', '.foo']  )
	    *    ".scoped-1234.foo { color: red; } .scoped-1234 .bar { color: green; }"
	    *
	    * @param {string} styleString String of style rules
	    * @param {string} scopeClassName Class name used to create a unique scope
	    * @param {array} rootSelectors Array of selectors on the root element; ids and classNames
	    * @return {!string} Scoped style rule string
	    */


	    /**
	     * Escaper used in escapeTextContentForBrowser
	     *
	     */


	    /**
	     * Escapes text to prevent scripting attacks.
	     *
	     * @param {*} text Text value to escape.
	     * @return {string} An escaped string.
	     */


	    /**
	     * Scopes a selector with a given scoping className as a union or contains selector
	     *
	     *    > scopeSelector( '_scoped-1827481', '.root', ['.root', '.foo']  )
	     *    ".scoped-1827481.root"
	     *
	     * @param {string} scopeClassName Class name used to scope selectors
	     * @param {string} selector Selector to scope
	     * @param {array} rootSelectors Array of selectors on the root element; ids and classNames
	     * @return {!string} Union or contains selector scoped with the scoping className
	     */


	    /**
	     * Creates a className used as a CSS scope by generating a checksum from a styleString
	     *
	     *    > scoped( 'footer { color: red; }' )
	     *    "_scoped-182938591"
	     *
	     * @param {string} String of style rules
	     * @return {!string} A scoping class name
	     */


	    /**
	     * Traverses an object tree looking for anything that is not internal or a circular
	     * reference. Accumulates values on this.pepper
	     *
	     *    > traverseObjectToGeneratePepper(obj)
	     *    void
	     * @param {object} object Object to traverse
	     */


	    /**
	     * Checks if a tag type is a self-closing void element
	     *
	     *    > isVoidElement( "img" )
	     *    "true"
	     *
	     * @param {*} string Element type to check
	     * @return {!bool} bool True or false
	     */


	    /**
	     * Add CSS text to the style element in the head of document unless it has
	     * already been added.
	     *
	     *    > addCSSTextToHead( ".foo { color: red; }" )
	     *
	     * @param {string} string CSS text to add to head
	     */


	    /**
	    * Creates the style element used for server side rendering
	    *    > createStyleElement( ".foo._scoped-1 { color: red; }" )
	    *
	    *
	    * @param {string} string CSS string
	    * @return {ReactDOMComponent} component
	    */


	    /**
	    * Returns new children for a root element being cloned. If mounted the CSS text
	    * is added to the style element in head, otherwise we are doing server side rendering
	    * and to avoid flash of unstyled content (FOUC) a style element is added to children
	    * to avoid FOUC on first render.
	    *
	    *    > getNewChildrenForCloneElement( ".foo._scoped-1 { color: red; }" )
	    *     "<NewChildren />"
	    *
	    * @param {string} string CSS string
	    * @return {ReactDOMComponent} component
	    */


	    /**
	    * Syntactic sugar for functional usage of Reactive Style
	    *
	    *    > Style.it( ".foo { color: red; }", <div /> )
	    *     "<div class="_scoped-1">
	    *        <style type="text/css">
	    *          .foo._scoped-1 { color: red; }
	    *        </style>
	    *      </div>"
	    *
	    * @param {string} string CSS string
	    * @param {ReactDOMComponent} component
	    */

	  }]);

	  return Style;
	}(_react.Component);

	Style.it = function (cssText, rootElement) {
	  return _react2.default.createElement(
	    Style,
	    null,
	    cssText,
	    rootElement
	  );
	};

	exports.default = Style;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var MOD = 65521;

	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    var n = Math.min(i + 4096, m);
	    for (; i < n; i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}

	module.exports = adler32;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
});

var Style = unwrapExports(styleIt);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_container__1H7C6 {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.styles_scrollable__2OLnl {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n  overflow-y: auto; }\n\n.styles_content__CxPmi {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  top: 0px; }\n\n.styles_overlay__3BKsU {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: -webkit-sticky;\n  position: -moz-sticky;\n  position: -ms-sticky;\n  position: -o-sticky;\n  position: sticky;\n  z-index: 1;\n  top: 0px;\n  pointer-events: none; }\n  .styles_overlay__3BKsU:before, .styles_overlay__3BKsU:after {\n    content: \"\";\n    width: 100%;\n    height: 40px;\n    background: transparent;\n    position: absolute; }\n  .styles_overlay__3BKsU:before {\n    top: 0px;\n    background: linear-gradient(white, transparent); }\n  .styles_overlay__3BKsU:after {\n    bottom: 0px;\n    background: linear-gradient(transparent, white); }\n  .styles_overlay__3BKsU.styles_top__19WTJ:before {\n    display: none; }\n  .styles_overlay__3BKsU.styles_bottom___9TRe:after {\n    display: none; }\n";
var styles = { "container": "styles_container__1H7C6", "scrollable": "styles_scrollable__2OLnl", "content": "styles_content__CxPmi", "overlay": "styles_overlay__3BKsU", "top": "styles_top__19WTJ", "bottom": "styles_bottom___9TRe" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var GradientScroll = function (_Component) {
  inherits(GradientScroll, _Component);

  function GradientScroll() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, GradientScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = GradientScroll.__proto__ || Object.getPrototypeOf(GradientScroll)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      overlayClasses: []
    }, _this.handleScroll = function () {
      var scrollableScrollTop = _this.scrollableElement.scrollTop;
      var contentHeight = _this.contentElement.clientHeight;
      var atBottom = _this.scrollableElement.scrollHeight === contentHeight + scrollableScrollTop;
      var overlayClasses = [];
      if (scrollableScrollTop === 0) {
        overlayClasses.push("top");
      }
      if (atBottom) {
        overlayClasses.push("bottom");
      }
      _this.setState({ overlayClasses: overlayClasses });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(GradientScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleScroll();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.handleScroll();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          fadeColor = _props.fadeColor,
          primaryColor = _props.primaryColor,
          fadeHeight = _props.fadeHeight;
      var overlayClasses = this.state.overlayClasses;

      return React.createElement(
        Style,
        null,
        '\n        .' + styles.overlay + ':before {\n          background: linear-gradient(' + primaryColor + ', ' + fadeColor + ');\n          height: ' + fadeHeight + ';\n        }\n        .' + styles.overlay + ':after {\n          background: linear-gradient(' + fadeColor + ', ' + primaryColor + ');\n          height: ' + fadeHeight + ';\n        }\n     ',
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement(
            'div',
            { className: styles.scrollable, onScroll: this.handleScroll, ref: function ref(r) {
                return _this2.scrollableElement = r;
              } },
            React.createElement('div', { className: styles.overlay + ' ' + overlayClasses.map(function (s) {
                return styles[s];
              }).join(' ') }),
            React.createElement(
              'div',
              { className: styles.content, ref: function ref(r) {
                  return _this2.contentElement = r;
                } },
              children
            )
          )
        )
      );
    }
  }]);
  return GradientScroll;
}(Component);

GradientScroll.propTypes = {
  primaryColor: PropTypes.string,
  fadeColor: PropTypes.string,
  fadeHeight: PropTypes.string
};


GradientScroll.defaultProps = {
  primaryColor: "#ffffff",
  fadeColor: "transparent",
  fadeHeight: "20px"
};

export default GradientScroll;
//# sourceMappingURL=index.es.js.map