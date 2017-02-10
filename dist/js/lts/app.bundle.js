/*! build timestamp:"2016-12-9 10:39:8.521" */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! D:\wuhao\front-end\bs3-1.0.0\app\LTS\js\3rd\handlebars.runtime-v4.0.5.js */43);
	module.exports = __webpack_require__(/*! D:\wuhao\front-end\bs3-1.0.0\app\LTS\dev\index.js */44);


/***/ },
/* 1 */,
/* 2 */
/*!*************************************************************************************************************************************************************************!*\
  !*** external {"var":"Handlebars","this":"handlebars","root":"Handlebars","amd":"handlebars.runtime","commonjs2":"handlebars/runtime","commonjs":"handlebars/runtime"} ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = Handlebars;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/*!**********************************************!*\
  !*** ../js/3rd/handlebars.runtime-v4.0.5.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/*!
	
	 handlebars v4.0.5
	
	Copyright (C) 2011-2015 by Yehuda Katz
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	@license
	*/
	(function webpackUniversalModuleDefinition(root, factory) {
		window["Handlebars"] = factory();
	})(this, function() {
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
	
		'use strict';
	
		var _interopRequireWildcard = __webpack_require__(1)['default'];
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
	
		var _handlebarsBase = __webpack_require__(3);
	
		var base = _interopRequireWildcard(_handlebarsBase);
	
		// Each of these augment the Handlebars object. No need to setup here.
		// (This is done to easily share code between commonjs and browse envs)
	
		var _handlebarsSafeString = __webpack_require__(17);
	
		var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
	
		var _handlebarsException = __webpack_require__(5);
	
		var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
	
		var _handlebarsUtils = __webpack_require__(4);
	
		var Utils = _interopRequireWildcard(_handlebarsUtils);
	
		var _handlebarsRuntime = __webpack_require__(18);
	
		var runtime = _interopRequireWildcard(_handlebarsRuntime);
	
		var _handlebarsNoConflict = __webpack_require__(19);
	
		var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
	
		// For compatibility and usage outside of module systems, make the Handlebars object a namespace
		function create() {
		  var hb = new base.HandlebarsEnvironment();
	
		  Utils.extend(hb, base);
		  hb.SafeString = _handlebarsSafeString2['default'];
		  hb.Exception = _handlebarsException2['default'];
		  hb.Utils = Utils;
		  hb.escapeExpression = Utils.escapeExpression;
	
		  hb.VM = runtime;
		  hb.template = function (spec) {
		    return runtime.template(spec, hb);
		  };
	
		  return hb;
		}
	
		var inst = create();
		inst.create = create;
	
		_handlebarsNoConflict2['default'](inst);
	
		inst['default'] = inst;
	
		exports['default'] = inst;
		module.exports = exports['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		"use strict";
	
		exports["default"] = function (obj) {
		  if (obj && obj.__esModule) {
		    return obj;
		  } else {
		    var newObj = {};
	
		    if (obj != null) {
		      for (var key in obj) {
		        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
		      }
		    }
	
		    newObj["default"] = obj;
		    return newObj;
		  }
		};
	
		exports.__esModule = true;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		"use strict";
	
		exports["default"] = function (obj) {
		  return obj && obj.__esModule ? obj : {
		    "default": obj
		  };
		};
	
		exports.__esModule = true;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
		exports.HandlebarsEnvironment = HandlebarsEnvironment;
	
		var _utils = __webpack_require__(4);
	
		var _exception = __webpack_require__(5);
	
		var _exception2 = _interopRequireDefault(_exception);
	
		var _helpers = __webpack_require__(6);
	
		var _decorators = __webpack_require__(14);
	
		var _logger = __webpack_require__(16);
	
		var _logger2 = _interopRequireDefault(_logger);
	
		var VERSION = '4.0.5';
		exports.VERSION = VERSION;
		var COMPILER_REVISION = 7;
	
		exports.COMPILER_REVISION = COMPILER_REVISION;
		var REVISION_CHANGES = {
		  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
		  2: '== 1.0.0-rc.3',
		  3: '== 1.0.0-rc.4',
		  4: '== 1.x.x',
		  5: '== 2.0.0-alpha.x',
		  6: '>= 2.0.0-beta.1',
		  7: '>= 4.0.0'
		};
	
		exports.REVISION_CHANGES = REVISION_CHANGES;
		var objectType = '[object Object]';
	
		function HandlebarsEnvironment(helpers, partials, decorators) {
		  this.helpers = helpers || {};
		  this.partials = partials || {};
		  this.decorators = decorators || {};
	
		  _helpers.registerDefaultHelpers(this);
		  _decorators.registerDefaultDecorators(this);
		}
	
		HandlebarsEnvironment.prototype = {
		  constructor: HandlebarsEnvironment,
	
		  logger: _logger2['default'],
		  log: _logger2['default'].log,
	
		  registerHelper: function registerHelper(name, fn) {
		    if (_utils.toString.call(name) === objectType) {
		      if (fn) {
		        throw new _exception2['default']('Arg not supported with multiple helpers');
		      }
		      _utils.extend(this.helpers, name);
		    } else {
		      this.helpers[name] = fn;
		    }
		  },
		  unregisterHelper: function unregisterHelper(name) {
		    delete this.helpers[name];
		  },
	
		  registerPartial: function registerPartial(name, partial) {
		    if (_utils.toString.call(name) === objectType) {
		      _utils.extend(this.partials, name);
		    } else {
		      if (typeof partial === 'undefined') {
		        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
		      }
		      this.partials[name] = partial;
		    }
		  },
		  unregisterPartial: function unregisterPartial(name) {
		    delete this.partials[name];
		  },
	
		  registerDecorator: function registerDecorator(name, fn) {
		    if (_utils.toString.call(name) === objectType) {
		      if (fn) {
		        throw new _exception2['default']('Arg not supported with multiple decorators');
		      }
		      _utils.extend(this.decorators, name);
		    } else {
		      this.decorators[name] = fn;
		    }
		  },
		  unregisterDecorator: function unregisterDecorator(name) {
		    delete this.decorators[name];
		  }
		};
	
		var log = _logger2['default'].log;
	
		exports.log = log;
		exports.createFrame = _utils.createFrame;
		exports.logger = _logger2['default'];
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.extend = extend;
		exports.indexOf = indexOf;
		exports.escapeExpression = escapeExpression;
		exports.isEmpty = isEmpty;
		exports.createFrame = createFrame;
		exports.blockParams = blockParams;
		exports.appendContextPath = appendContextPath;
		var escape = {
		  '&': '&amp;',
		  '<': '&lt;',
		  '>': '&gt;',
		  '"': '&quot;',
		  "'": '&#x27;',
		  '`': '&#x60;',
		  '=': '&#x3D;'
		};
	
		var badChars = /[&<>"'`=]/g,
		    possible = /[&<>"'`=]/;
	
		function escapeChar(chr) {
		  return escape[chr];
		}
	
		function extend(obj /* , ...source */) {
		  for (var i = 1; i < arguments.length; i++) {
		    for (var key in arguments[i]) {
		      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
		        obj[key] = arguments[i][key];
		      }
		    }
		  }
	
		  return obj;
		}
	
		var toString = Object.prototype.toString;
	
		exports.toString = toString;
		// Sourced from lodash
		// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
		/* eslint-disable func-style */
		var isFunction = function isFunction(value) {
		  return typeof value === 'function';
		};
		// fallback for older versions of Chrome and Safari
		/* istanbul ignore next */
		if (isFunction(/x/)) {
		  exports.isFunction = isFunction = function (value) {
		    return typeof value === 'function' && toString.call(value) === '[object Function]';
		  };
		}
		exports.isFunction = isFunction;
	
		/* eslint-enable func-style */
	
		/* istanbul ignore next */
		var isArray = Array.isArray || function (value) {
		  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
		};
	
		exports.isArray = isArray;
		// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	
		function indexOf(array, value) {
		  for (var i = 0, len = array.length; i < len; i++) {
		    if (array[i] === value) {
		      return i;
		    }
		  }
		  return -1;
		}
	
		function escapeExpression(string) {
		  if (typeof string !== 'string') {
		    // don't escape SafeStrings, since they're already safe
		    if (string && string.toHTML) {
		      return string.toHTML();
		    } else if (string == null) {
		      return '';
		    } else if (!string) {
		      return string + '';
		    }
	
		    // Force a string conversion as this will be done by the append regardless and
		    // the regex test will do this transparently behind the scenes, causing issues if
		    // an object's to string has escaped characters in it.
		    string = '' + string;
		  }
	
		  if (!possible.test(string)) {
		    return string;
		  }
		  return string.replace(badChars, escapeChar);
		}
	
		function isEmpty(value) {
		  if (!value && value !== 0) {
		    return true;
		  } else if (isArray(value) && value.length === 0) {
		    return true;
		  } else {
		    return false;
		  }
		}
	
		function createFrame(object) {
		  var frame = extend({}, object);
		  frame._parent = object;
		  return frame;
		}
	
		function blockParams(params, ids) {
		  params.path = ids;
		  return params;
		}
	
		function appendContextPath(contextPath, id) {
		  return (contextPath ? contextPath + '.' : '') + id;
		}
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
		function Exception(message, node) {
		  var loc = node && node.loc,
		      line = undefined,
		      column = undefined;
		  if (loc) {
		    line = loc.start.line;
		    column = loc.start.column;
	
		    message += ' - ' + line + ':' + column;
		  }
	
		  var tmp = Error.prototype.constructor.call(this, message);
	
		  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
		  for (var idx = 0; idx < errorProps.length; idx++) {
		    this[errorProps[idx]] = tmp[errorProps[idx]];
		  }
	
		  /* istanbul ignore else */
		  if (Error.captureStackTrace) {
		    Error.captureStackTrace(this, Exception);
		  }
	
		  if (loc) {
		    this.lineNumber = line;
		    this.column = column;
		  }
		}
	
		Exception.prototype = new Error();
	
		exports['default'] = Exception;
		module.exports = exports['default'];
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
		exports.registerDefaultHelpers = registerDefaultHelpers;
	
		var _helpersBlockHelperMissing = __webpack_require__(7);
	
		var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
	
		var _helpersEach = __webpack_require__(8);
	
		var _helpersEach2 = _interopRequireDefault(_helpersEach);
	
		var _helpersHelperMissing = __webpack_require__(9);
	
		var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
	
		var _helpersIf = __webpack_require__(10);
	
		var _helpersIf2 = _interopRequireDefault(_helpersIf);
	
		var _helpersLog = __webpack_require__(11);
	
		var _helpersLog2 = _interopRequireDefault(_helpersLog);
	
		var _helpersLookup = __webpack_require__(12);
	
		var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
	
		var _helpersWith = __webpack_require__(13);
	
		var _helpersWith2 = _interopRequireDefault(_helpersWith);
	
		function registerDefaultHelpers(instance) {
		  _helpersBlockHelperMissing2['default'](instance);
		  _helpersEach2['default'](instance);
		  _helpersHelperMissing2['default'](instance);
		  _helpersIf2['default'](instance);
		  _helpersLog2['default'](instance);
		  _helpersLookup2['default'](instance);
		  _helpersWith2['default'](instance);
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		exports['default'] = function (instance) {
		  instance.registerHelper('blockHelperMissing', function (context, options) {
		    var inverse = options.inverse,
		        fn = options.fn;
	
		    if (context === true) {
		      return fn(this);
		    } else if (context === false || context == null) {
		      return inverse(this);
		    } else if (_utils.isArray(context)) {
		      if (context.length > 0) {
		        if (options.ids) {
		          options.ids = [options.name];
		        }
	
		        return instance.helpers.each(context, options);
		      } else {
		        return inverse(this);
		      }
		    } else {
		      if (options.data && options.ids) {
		        var data = _utils.createFrame(options.data);
		        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
		        options = { data: data };
		      }
	
		      return fn(context, options);
		    }
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		var _exception = __webpack_require__(5);
	
		var _exception2 = _interopRequireDefault(_exception);
	
		exports['default'] = function (instance) {
		  instance.registerHelper('each', function (context, options) {
		    if (!options) {
		      throw new _exception2['default']('Must pass iterator to #each');
		    }
	
		    var fn = options.fn,
		        inverse = options.inverse,
		        i = 0,
		        ret = '',
		        data = undefined,
		        contextPath = undefined;
	
		    if (options.data && options.ids) {
		      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
		    }
	
		    if (_utils.isFunction(context)) {
		      context = context.call(this);
		    }
	
		    if (options.data) {
		      data = _utils.createFrame(options.data);
		    }
	
		    function execIteration(field, index, last) {
		      if (data) {
		        data.key = field;
		        data.index = index;
		        data.first = index === 0;
		        data.last = !!last;
	
		        if (contextPath) {
		          data.contextPath = contextPath + field;
		        }
		      }
	
		      ret = ret + fn(context[field], {
		        data: data,
		        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
		      });
		    }
	
		    if (context && typeof context === 'object') {
		      if (_utils.isArray(context)) {
		        for (var j = context.length; i < j; i++) {
		          if (i in context) {
		            execIteration(i, i, i === context.length - 1);
		          }
		        }
		      } else {
		        var priorKey = undefined;
	
		        for (var key in context) {
		          if (context.hasOwnProperty(key)) {
		            // We're running the iterations one step out of sync so we can detect
		            // the last iteration without have to scan the object twice and create
		            // an itermediate keys array.
		            if (priorKey !== undefined) {
		              execIteration(priorKey, i - 1);
		            }
		            priorKey = key;
		            i++;
		          }
		        }
		        if (priorKey !== undefined) {
		          execIteration(priorKey, i - 1, true);
		        }
		      }
		    }
	
		    if (i === 0) {
		      ret = inverse(this);
		    }
	
		    return ret;
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
	
		var _exception = __webpack_require__(5);
	
		var _exception2 = _interopRequireDefault(_exception);
	
		exports['default'] = function (instance) {
		  instance.registerHelper('helperMissing', function () /* [args, ]options */{
		    if (arguments.length === 1) {
		      // A missing field in a {{foo}} construct.
		      return undefined;
		    } else {
		      // Someone is actually trying to call something, blow up.
		      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
		    }
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		exports['default'] = function (instance) {
		  instance.registerHelper('if', function (conditional, options) {
		    if (_utils.isFunction(conditional)) {
		      conditional = conditional.call(this);
		    }
	
		    // Default behavior is to render the positive path if the value is truthy and not empty.
		    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
		    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
		    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
		      return options.inverse(this);
		    } else {
		      return options.fn(this);
		    }
		  });
	
		  instance.registerHelper('unless', function (conditional, options) {
		    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
	
		exports['default'] = function (instance) {
		  instance.registerHelper('log', function () /* message, options */{
		    var args = [undefined],
		        options = arguments[arguments.length - 1];
		    for (var i = 0; i < arguments.length - 1; i++) {
		      args.push(arguments[i]);
		    }
	
		    var level = 1;
		    if (options.hash.level != null) {
		      level = options.hash.level;
		    } else if (options.data && options.data.level != null) {
		      level = options.data.level;
		    }
		    args[0] = level;
	
		    instance.log.apply(instance, args);
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
	
		exports['default'] = function (instance) {
		  instance.registerHelper('lookup', function (obj, field) {
		    return obj && obj[field];
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		exports['default'] = function (instance) {
		  instance.registerHelper('with', function (context, options) {
		    if (_utils.isFunction(context)) {
		      context = context.call(this);
		    }
	
		    var fn = options.fn;
	
		    if (!_utils.isEmpty(context)) {
		      var data = options.data;
		      if (options.data && options.ids) {
		        data = _utils.createFrame(options.data);
		        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
		      }
	
		      return fn(context, {
		        data: data,
		        blockParams: _utils.blockParams([context], [data && data.contextPath])
		      });
		    } else {
		      return options.inverse(this);
		    }
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
		exports.registerDefaultDecorators = registerDefaultDecorators;
	
		var _decoratorsInline = __webpack_require__(15);
	
		var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
	
		function registerDefaultDecorators(instance) {
		  _decoratorsInline2['default'](instance);
		}
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		exports['default'] = function (instance) {
		  instance.registerDecorator('inline', function (fn, props, container, options) {
		    var ret = fn;
		    if (!props.partials) {
		      props.partials = {};
		      ret = function (context, options) {
		        // Create a new partials stack frame prior to exec.
		        var original = container.partials;
		        container.partials = _utils.extend({}, original, props.partials);
		        var ret = fn(context, options);
		        container.partials = original;
		        return ret;
		      };
		    }
	
		    props.partials[options.args[0]] = options.fn;
	
		    return ret;
		  });
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _utils = __webpack_require__(4);
	
		var logger = {
		  methodMap: ['debug', 'info', 'warn', 'error'],
		  level: 'info',
	
		  // Maps a given level value to the `methodMap` indexes above.
		  lookupLevel: function lookupLevel(level) {
		    if (typeof level === 'string') {
		      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
		      if (levelMap >= 0) {
		        level = levelMap;
		      } else {
		        level = parseInt(level, 10);
		      }
		    }
	
		    return level;
		  },
	
		  // Can be overridden in the host environment
		  log: function log(level) {
		    level = logger.lookupLevel(level);
	
		    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
		      var method = logger.methodMap[level];
		      if (!console[method]) {
		        // eslint-disable-line no-console
		        method = 'log';
		      }
	
		      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        message[_key - 1] = arguments[_key];
		      }
	
		      console[method].apply(console, message); // eslint-disable-line no-console
		    }
		  }
		};
	
		exports['default'] = logger;
		module.exports = exports['default'];
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		// Build out our basic SafeString type
		'use strict';
	
		exports.__esModule = true;
		function SafeString(string) {
		  this.string = string;
		}
	
		SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
		  return '' + this.string;
		};
	
		exports['default'] = SafeString;
		module.exports = exports['default'];
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _interopRequireWildcard = __webpack_require__(1)['default'];
	
		var _interopRequireDefault = __webpack_require__(2)['default'];
	
		exports.__esModule = true;
		exports.checkRevision = checkRevision;
		exports.template = template;
		exports.wrapProgram = wrapProgram;
		exports.resolvePartial = resolvePartial;
		exports.invokePartial = invokePartial;
		exports.noop = noop;
	
		var _utils = __webpack_require__(4);
	
		var Utils = _interopRequireWildcard(_utils);
	
		var _exception = __webpack_require__(5);
	
		var _exception2 = _interopRequireDefault(_exception);
	
		var _base = __webpack_require__(3);
	
		function checkRevision(compilerInfo) {
		  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
		      currentRevision = _base.COMPILER_REVISION;
	
		  if (compilerRevision !== currentRevision) {
		    if (compilerRevision < currentRevision) {
		      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
		          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
		      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
		    } else {
		      // Use the embedded version info since the runtime doesn't know about this revision yet
		      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
		    }
		  }
		}
	
		function template(templateSpec, env) {
		  /* istanbul ignore next */
		  if (!env) {
		    throw new _exception2['default']('No environment passed to template');
		  }
		  if (!templateSpec || !templateSpec.main) {
		    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
		  }
	
		  templateSpec.main.decorator = templateSpec.main_d;
	
		  // Note: Using env.VM references rather than local var references throughout this section to allow
		  // for external users to override these as psuedo-supported APIs.
		  env.VM.checkRevision(templateSpec.compiler);
	
		  function invokePartialWrapper(partial, context, options) {
		    if (options.hash) {
		      context = Utils.extend({}, context, options.hash);
		      if (options.ids) {
		        options.ids[0] = true;
		      }
		    }
	
		    partial = env.VM.resolvePartial.call(this, partial, context, options);
		    var result = env.VM.invokePartial.call(this, partial, context, options);
	
		    if (result == null && env.compile) {
		      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
		      result = options.partials[options.name](context, options);
		    }
		    if (result != null) {
		      if (options.indent) {
		        var lines = result.split('\n');
		        for (var i = 0, l = lines.length; i < l; i++) {
		          if (!lines[i] && i + 1 === l) {
		            break;
		          }
	
		          lines[i] = options.indent + lines[i];
		        }
		        result = lines.join('\n');
		      }
		      return result;
		    } else {
		      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
		    }
		  }
	
		  // Just add water
		  var container = {
		    strict: function strict(obj, name) {
		      if (!(name in obj)) {
		        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
		      }
		      return obj[name];
		    },
		    lookup: function lookup(depths, name) {
		      var len = depths.length;
		      for (var i = 0; i < len; i++) {
		        if (depths[i] && depths[i][name] != null) {
		          return depths[i][name];
		        }
		      }
		    },
		    lambda: function lambda(current, context) {
		      return typeof current === 'function' ? current.call(context) : current;
		    },
	
		    escapeExpression: Utils.escapeExpression,
		    invokePartial: invokePartialWrapper,
	
		    fn: function fn(i) {
		      var ret = templateSpec[i];
		      ret.decorator = templateSpec[i + '_d'];
		      return ret;
		    },
	
		    programs: [],
		    program: function program(i, data, declaredBlockParams, blockParams, depths) {
		      var programWrapper = this.programs[i],
		          fn = this.fn(i);
		      if (data || depths || blockParams || declaredBlockParams) {
		        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
		      } else if (!programWrapper) {
		        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
		      }
		      return programWrapper;
		    },
	
		    data: function data(value, depth) {
		      while (value && depth--) {
		        value = value._parent;
		      }
		      return value;
		    },
		    merge: function merge(param, common) {
		      var obj = param || common;
	
		      if (param && common && param !== common) {
		        obj = Utils.extend({}, common, param);
		      }
	
		      return obj;
		    },
	
		    noop: env.VM.noop,
		    compilerInfo: templateSpec.compiler
		  };
	
		  function ret(context) {
		    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		    var data = options.data;
	
		    ret._setup(options);
		    if (!options.partial && templateSpec.useData) {
		      data = initData(context, data);
		    }
		    var depths = undefined,
		        blockParams = templateSpec.useBlockParams ? [] : undefined;
		    if (templateSpec.useDepths) {
		      if (options.depths) {
		        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
		      } else {
		        depths = [context];
		      }
		    }
	
		    function main(context /*, options*/) {
		      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
		    }
		    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
		    return main(context, options);
		  }
		  ret.isTop = true;
	
		  ret._setup = function (options) {
		    if (!options.partial) {
		      container.helpers = container.merge(options.helpers, env.helpers);
	
		      if (templateSpec.usePartial) {
		        container.partials = container.merge(options.partials, env.partials);
		      }
		      if (templateSpec.usePartial || templateSpec.useDecorators) {
		        container.decorators = container.merge(options.decorators, env.decorators);
		      }
		    } else {
		      container.helpers = options.helpers;
		      container.partials = options.partials;
		      container.decorators = options.decorators;
		    }
		  };
	
		  ret._child = function (i, data, blockParams, depths) {
		    if (templateSpec.useBlockParams && !blockParams) {
		      throw new _exception2['default']('must pass block params');
		    }
		    if (templateSpec.useDepths && !depths) {
		      throw new _exception2['default']('must pass parent depths');
		    }
	
		    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
		  };
		  return ret;
		}
	
		function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
		  function prog(context) {
		    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		    var currentDepths = depths;
		    if (depths && context !== depths[0]) {
		      currentDepths = [context].concat(depths);
		    }
	
		    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
		  }
	
		  prog = executeDecorators(fn, prog, container, depths, data, blockParams);
	
		  prog.program = i;
		  prog.depth = depths ? depths.length : 0;
		  prog.blockParams = declaredBlockParams || 0;
		  return prog;
		}
	
		function resolvePartial(partial, context, options) {
		  if (!partial) {
		    if (options.name === '@partial-block') {
		      partial = options.data['partial-block'];
		    } else {
		      partial = options.partials[options.name];
		    }
		  } else if (!partial.call && !options.name) {
		    // This is a dynamic partial that returned a string
		    options.name = partial;
		    partial = options.partials[partial];
		  }
		  return partial;
		}
	
		function invokePartial(partial, context, options) {
		  options.partial = true;
		  if (options.ids) {
		    options.data.contextPath = options.ids[0] || options.data.contextPath;
		  }
	
		  var partialBlock = undefined;
		  if (options.fn && options.fn !== noop) {
		    options.data = _base.createFrame(options.data);
		    partialBlock = options.data['partial-block'] = options.fn;
	
		    if (partialBlock.partials) {
		      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
		    }
		  }
	
		  if (partial === undefined && partialBlock) {
		    partial = partialBlock;
		  }
	
		  if (partial === undefined) {
		    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
		  } else if (partial instanceof Function) {
		    return partial(context, options);
		  }
		}
	
		function noop() {
		  return '';
		}
	
		function initData(context, data) {
		  if (!data || !('root' in data)) {
		    data = data ? _base.createFrame(data) : {};
		    data.root = context;
		  }
		  return data;
		}
	
		function executeDecorators(fn, prog, container, depths, data, blockParams) {
		  if (fn.decorator) {
		    var props = {};
		    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
		    Utils.extend(prog, props);
		  }
		  return prog;
		}
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {/* global window */
		'use strict';
	
		exports.__esModule = true;
	
		exports['default'] = function (Handlebars) {
		  /* istanbul ignore next */
		  var root = typeof global !== 'undefined' ? global : window,
		      $Handlebars = root.Handlebars;
		  /* istanbul ignore next */
		  Handlebars.noConflict = function () {
		    if (root.Handlebars === Handlebars) {
		      root.Handlebars = $Handlebars;
		    }
		    return Handlebars;
		  };
		};
	
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 44 */
/*!***********************!*\
  !*** ../dev/index.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! css/edit.css */ 45),
		__webpack_require__(/*! js/3rd/dragsortable.dist */ 49),
	    __webpack_require__(/*! js/index */ 50)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/*!***********************!*\
  !*** ../css/edit.css ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/.0.21.0@css-loader!./edit.css */ 46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/.0.13.1@style-loader/addStyles.js */ 48)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.21.0@css-loader/index.js!./edit.css", function() {
				var newContent = require("!!./../node_modules/.0.21.0@css-loader/index.js!./edit.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/*!***********************************************!*\
  !*** ../~/.0.21.0@css-loader!../css/edit.css ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/.0.21.0@css-loader/lib/css-base.js */ 47)();
	// imports
	
	
	// module
	exports.push([module.id, ".module-box .flex-center {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-justify-content: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    -webkit-align-items: center;\r\n    align-items: center;\r\n} \r\n \r\n .panel-body {\r\n     max-width: 450px;\r\n     margin: 0 auto;\r\n }\r\n \r\n .edit-mask {\r\n     display: none;\r\n     background: rgba(55, 55, 55, 0.5);\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     left: 0;\r\n     right: 300px;\r\n     z-index: 1039;\r\n }\r\n \r\n .drag-helper {\r\n     padding: 50px;\r\n     width: 100px;\r\n     height: 100px;\r\n     opacity: 0.7;\r\n     background-color: #9CCEE4;\r\n }\r\n /*ui-sortable-placeholder panel*/\r\n \r\n .tab-pane .ui-sortable-placeholder.panel {\r\n     outline: 2px dashed #FF9800;\r\n     height: 41px;\r\n     outline-offset: -2px;\r\n }\r\n /*\r\n    .tab-pane.sortable .ui-sortable-helper.panel {\r\n        height: 41px !important;\r\n        overflow: hidden;\r\n    }\r\n    .tab-pane.sortable .ui-sortable-placeholder{\r\n        height: 41px !important;\r\n        overflow: hidden;\r\n    }\r\n*/\r\n \r\n .tab-pane.sortable .panel-body {\r\n     display: none;\r\n }\r\n \r\n .tab-pane .panel.active {\r\n     outline: 2px solid #03A9F4;\r\n }\r\n.b-l .form-horizontal .image-size{\r\n    color: #BBB;\r\n}", ""]);
	
	// exports


/***/ },
/* 47 */
/*!***********************************************!*\
  !*** ../~/.0.21.0@css-loader/lib/css-base.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 48 */
/*!**********************************************!*\
  !*** ../~/.0.13.1@style-loader/addStyles.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 49 */
/*!**************************************!*\
  !*** ../js/3rd/dragsortable.dist.js ***!
  \**************************************/
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/*!*****************************!*\
	  !*** ./demo/js/sortable.js ***!
	  \*****************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../../../jquery-ui-1.12.0-rc.2/themes/base/draggable.css */ 1),
		__webpack_require__(/*! ../../../jquery-ui-1.12.0-rc.2/themes/base/sortable.css */ 5),
		__webpack_require__(/*! ../../../jquery-ui-1.12.0-rc.2/ui/widgets/droppable */ 7),
		__webpack_require__(/*! ../../../jquery-ui-1.12.0-rc.2/ui/widgets/sortable */ 19)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
		
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	/***/ },
	/* 1 */
	/*!**********************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/themes/base/draggable.css ***!
	  \**********************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(/*! !./../../../webpack/~/.npminstall/css-loader/0.21.0/css-loader!./draggable.css */ 2);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(/*! ./../../../webpack/~/.npminstall/style-loader/0.13.1/style-loader/addStyles.js */ 4)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../webpack/node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./draggable.css", function() {
					var newContent = require("!!./../../../webpack/node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./draggable.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 2 */
	/*!*******************************************************************************************************!*\
	  !*** ./~/.npminstall/css-loader/0.21.0/css-loader!../jquery-ui-1.12.0-rc.2/themes/base/draggable.css ***!
	  \*******************************************************************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(/*! ./../../../webpack/~/.npminstall/css-loader/0.21.0/css-loader/lib/css-base.js */ 3)();
		// imports
		
		
		// module
		exports.push([module.id, "/*!\n * jQuery UI Draggable 1.12.0-rc.2\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-draggable-handle {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n", ""]);
		
		// exports
	
	
	/***/ },
	/* 3 */
	/*!********************************************************************!*\
	  !*** ./~/.npminstall/css-loader/0.21.0/css-loader/lib/css-base.js ***!
	  \********************************************************************/
	/***/ function(module, exports) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];
		
			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
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
	
	
	/***/ },
	/* 4 */
	/*!*********************************************************************!*\
	  !*** ./~/.npminstall/style-loader/0.13.1/style-loader/addStyles.js ***!
	  \*********************************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];
		
		module.exports = function(list, options) {
			if(true) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}
		
			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();
		
			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
		
			var styles = listToStyles(list);
			addStylesToDom(styles, options);
		
			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}
		
		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
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
		
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
		
		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}
		
		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}
		
		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}
		
		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}
		
		function addStyle(obj, options) {
			var styleElement, update, remove;
		
			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}
		
			update(obj);
		
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
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
		
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
		
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
		
		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
		
			if(media) {
				styleElement.setAttribute("media", media)
			}
		
			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}
		
		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;
		
			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}
		
			var blob = new Blob([css], { type: "text/css" });
		
			var oldSrc = linkElement.href;
		
			linkElement.href = URL.createObjectURL(blob);
		
			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}
	
	
	/***/ },
	/* 5 */
	/*!*********************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/themes/base/sortable.css ***!
	  \*********************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(/*! !./../../../webpack/~/.npminstall/css-loader/0.21.0/css-loader!./sortable.css */ 6);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(/*! ./../../../webpack/~/.npminstall/style-loader/0.13.1/style-loader/addStyles.js */ 4)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../webpack/node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./sortable.css", function() {
					var newContent = require("!!./../../../webpack/node_modules/.npminstall/css-loader/0.21.0/css-loader/index.js!./sortable.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 6 */
	/*!******************************************************************************************************!*\
	  !*** ./~/.npminstall/css-loader/0.21.0/css-loader!../jquery-ui-1.12.0-rc.2/themes/base/sortable.css ***!
	  \******************************************************************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(/*! ./../../../webpack/~/.npminstall/css-loader/0.21.0/css-loader/lib/css-base.js */ 3)();
		// imports
		
		
		// module
		exports.push([module.id, "/*!\n * jQuery UI Sortable 1.12.0-rc.2\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-sortable-handle {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n", ""]);
		
		// exports
	
	
	/***/ },
	/* 7 */
	/*!********************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/widgets/droppable.js ***!
	  \********************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Droppable 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: Droppable
		//>>group: Interactions
		//>>description: Enables drop targets for draggable elements.
		//>>docs: http://api.jqueryui.com/droppable/
		//>>demos: http://jqueryui.com/droppable/
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
					__webpack_require__(/*! jquery */ 8),
					__webpack_require__(/*! ./draggable */ 9),
					__webpack_require__(/*! ./mouse */ 10),
					__webpack_require__(/*! ../version */ 12),
					__webpack_require__(/*! ../widget */ 13)
				], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		}( function( $ ) {
		
		$.widget( "ui.droppable", {
			version: "1.12.0-rc.2",
			widgetEventPrefix: "drop",
			options: {
				accept: "*",
				addClasses: true,
				greedy: false,
				scope: "default",
				tolerance: "intersect",
		
				// Callbacks
				activate: null,
				deactivate: null,
				drop: null,
				out: null,
				over: null
			},
			_create: function() {
		
				var proportions,
					o = this.options,
					accept = o.accept;
		
				this.isover = false;
				this.isout = true;
		
				this.accept = $.isFunction( accept ) ? accept : function( d ) {
					return d.is( accept );
				};
		
				this.proportions = function( /* valueToWrite */ ) {
					if ( arguments.length ) {
		
						// Store the droppable's proportions
						proportions = arguments[ 0 ];
					} else {
		
						// Retrieve or derive the droppable's proportions
						return proportions ?
							proportions :
							proportions = {
								width: this.element[ 0 ].offsetWidth,
								height: this.element[ 0 ].offsetHeight
							};
					}
				};
		
				this._addToManager( o.scope );
		
				o.addClasses && this._addClass( "ui-droppable" );
		
			},
		
			_addToManager: function( scope ) {
		
				// Add the reference and positions to the manager
				$.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
				$.ui.ddmanager.droppables[ scope ].push( this );
			},
		
			_splice: function( drop ) {
				var i = 0;
				for ( ; i < drop.length; i++ ) {
					if ( drop[ i ] === this ) {
						drop.splice( i, 1 );
					}
				}
			},
		
			_destroy: function() {
				var drop = $.ui.ddmanager.droppables[ this.options.scope ];
		
				this._splice( drop );
			},
		
			_setOption: function( key, value ) {
		
				if ( key === "accept" ) {
					this.accept = $.isFunction( value ) ? value : function( d ) {
						return d.is( value );
					};
				} else if ( key === "scope" ) {
					var drop = $.ui.ddmanager.droppables[ this.options.scope ];
		
					this._splice( drop );
					this._addToManager( value );
				}
		
				this._super( key, value );
			},
		
			_activate: function( event ) {
				var draggable = $.ui.ddmanager.current;
		
				this._addActiveClass();
				if ( draggable ) {
					this._trigger( "activate", event, this.ui( draggable ) );
				}
			},
		
			_deactivate: function( event ) {
				var draggable = $.ui.ddmanager.current;
		
				this._removeActiveClass();
				if ( draggable ) {
					this._trigger( "deactivate", event, this.ui( draggable ) );
				}
			},
		
			_over: function( event ) {
		
				var draggable = $.ui.ddmanager.current;
		
				// Bail if draggable and droppable are same element
				if ( !draggable || ( draggable.currentItem ||
						draggable.element )[ 0 ] === this.element[ 0 ] ) {
					return;
				}
		
				if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
						draggable.element ) ) ) {
					this._addHoverClass();
					this._trigger( "over", event, this.ui( draggable ) );
				}
		
			},
		
			_out: function( event ) {
		
				var draggable = $.ui.ddmanager.current;
		
				// Bail if draggable and droppable are same element
				if ( !draggable || ( draggable.currentItem ||
						draggable.element )[ 0 ] === this.element[ 0 ] ) {
					return;
				}
		
				if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
						draggable.element ) ) ) {
					this._removeHoverClass();
					this._trigger( "out", event, this.ui( draggable ) );
				}
		
			},
		
			_drop: function( event, custom ) {
		
				var draggable = custom || $.ui.ddmanager.current,
					childrenIntersection = false;
		
				// Bail if draggable and droppable are same element
				if ( !draggable || ( draggable.currentItem ||
						draggable.element )[ 0 ] === this.element[ 0 ] ) {
					return false;
				}
		
				this.element
					.find( ":data(ui-droppable)" )
					.not( ".ui-draggable-dragging" )
					.each( function() {
						var inst = $( this ).droppable( "instance" );
						if (
							inst.options.greedy &&
							!inst.options.disabled &&
							inst.options.scope === draggable.options.scope &&
							inst.accept.call(
								inst.element[ 0 ], ( draggable.currentItem || draggable.element )
							) &&
							intersect(
								draggable,
								$.extend( inst, { offset: inst.element.offset() } ),
								inst.options.tolerance, event
							)
						) {
							childrenIntersection = true;
							return false; }
					} );
				if ( childrenIntersection ) {
					return false;
				}
		
				if ( this.accept.call( this.element[ 0 ],
						( draggable.currentItem || draggable.element ) ) ) {
					this._removeActiveClass();
					this._removeHoverClass();
		
					this._trigger( "drop", event, this.ui( draggable ) );
					return this.element;
				}
		
				return false;
		
			},
		
			ui: function( c ) {
				return {
					draggable: ( c.currentItem || c.element ),
					helper: c.helper,
					position: c.position,
					offset: c.positionAbs
				};
			},
		
			// Extension points just to make backcompat sane and avoid duplicating logic
			// TODO: Remove in 1.13 along with call to it below
			_addHoverClass: function() {
				this._addClass( "ui-droppable-hover" );
			},
		
			_removeHoverClass: function() {
				this._removeClass( "ui-droppable-hover" );
			},
		
			_addActiveClass: function() {
				this._addClass( "ui-droppable-active" );
			},
		
			_removeActiveClass: function() {
				this._removeClass( "ui-droppable-active" );
			}
		} );
		
		var intersect = ( function() {
			function isOverAxis( x, reference, size ) {
				return ( x >= reference ) && ( x < ( reference + size ) );
			}
		
			return function( draggable, droppable, toleranceMode, event ) {
		
				if ( !droppable.offset ) {
					return false;
				}
		
				var x1 = ( draggable.positionAbs ||
						draggable.position.absolute ).left + draggable.margins.left,
					y1 = ( draggable.positionAbs ||
						draggable.position.absolute ).top + draggable.margins.top,
					x2 = x1 + draggable.helperProportions.width,
					y2 = y1 + draggable.helperProportions.height,
					l = droppable.offset.left,
					t = droppable.offset.top,
					r = l + droppable.proportions().width,
					b = t + droppable.proportions().height;
		
				switch ( toleranceMode ) {
				case "fit":
					return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
				case "intersect":
					return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
						x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
						t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
						y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
				case "pointer":
					return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
						isOverAxis( event.pageX, l, droppable.proportions().width );
				case "touch":
					return (
						( y1 >= t && y1 <= b ) || // Top edge touching
						( y2 >= t && y2 <= b ) || // Bottom edge touching
						( y1 < t && y2 > b ) // Surrounded vertically
					) && (
						( x1 >= l && x1 <= r ) || // Left edge touching
						( x2 >= l && x2 <= r ) || // Right edge touching
						( x1 < l && x2 > r ) // Surrounded horizontally
					);
				default:
					return false;
				}
			};
		} )();
		
		/*
			This manager tracks offsets of draggables and droppables
		*/
		$.ui.ddmanager = {
			current: null,
			droppables: { "default": [] },
			prepareOffsets: function( t, event ) {
		
				var i, j,
					m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
					type = event ? event.type : null, // workaround for #2317
					list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();
		
				droppablesLoop: for ( i = 0; i < m.length; i++ ) {
		
					// No disabled and non-accepted
					if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ],
							( t.currentItem || t.element ) ) ) ) {
						continue;
					}
		
					// Filter out elements in the current dragged item
					for ( j = 0; j < list.length; j++ ) {
						if ( list[ j ] === m[ i ].element[ 0 ] ) {
							m[ i ].proportions().height = 0;
							continue droppablesLoop;
						}
					}
		
					m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
					if ( !m[ i ].visible ) {
						continue;
					}
		
					// Activate the droppable if used directly from draggables
					if ( type === "mousedown" ) {
						m[ i ]._activate.call( m[ i ], event );
					}
		
					m[ i ].offset = m[ i ].element.offset();
					m[ i ].proportions( {
						width: m[ i ].element[ 0 ].offsetWidth,
						height: m[ i ].element[ 0 ].offsetHeight
					} );
		
				}
		
			},
			drop: function( draggable, event ) {
		
				var dropped = false;
		
				// Create a copy of the droppables in case the list changes during the drop (#9116)
				$.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {
		
					if ( !this.options ) {
						return;
					}
					if ( !this.options.disabled && this.visible &&
							intersect( draggable, this, this.options.tolerance, event ) ) {
						dropped = this._drop.call( this, event ) || dropped;
					}
		
					if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ],
							( draggable.currentItem || draggable.element ) ) ) {
						this.isout = true;
						this.isover = false;
						this._deactivate.call( this, event );
					}
		
				} );
				return dropped;
		
			},
			dragStart: function( draggable, event ) {
		
				// Listen for scrolling so that if the dragging causes scrolling the position of the
				// droppables can be recalculated (see #5003)
				draggable.element.parentsUntil( "body" ).on( "scroll.droppable", function() {
					if ( !draggable.options.refreshPositions ) {
						$.ui.ddmanager.prepareOffsets( draggable, event );
					}
				} );
			},
			drag: function( draggable, event ) {
		
				// If you have a highly dynamic page, you might try this option. It renders positions
				// every time you move the mouse.
				if ( draggable.options.refreshPositions ) {
					$.ui.ddmanager.prepareOffsets( draggable, event );
				}
		
				// Run through all droppables and check their positions based on specific tolerance options
				$.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {
		
					if ( this.options.disabled || this.greedyChild || !this.visible ) {
						return;
					}
		
					var parentInstance, scope, parent,
						intersects = intersect( draggable, this, this.options.tolerance, event ),
						c = !intersects && this.isover ?
							"isout" :
							( intersects && !this.isover ? "isover" : null );
					if ( !c ) {
						return;
					}
		
					if ( this.options.greedy ) {
		
						// find droppable parents with same scope
						scope = this.options.scope;
						parent = this.element.parents( ":data(ui-droppable)" ).filter( function() {
							return $( this ).droppable( "instance" ).options.scope === scope;
						} );
		
						if ( parent.length ) {
							parentInstance = $( parent[ 0 ] ).droppable( "instance" );
							parentInstance.greedyChild = ( c === "isover" );
						}
					}
		
					// We just moved into a greedy child
					if ( parentInstance && c === "isover" ) {
						parentInstance.isover = false;
						parentInstance.isout = true;
						parentInstance._out.call( parentInstance, event );
					}
		
					this[ c ] = true;
					this[ c === "isout" ? "isover" : "isout" ] = false;
					this[ c === "isover" ? "_over" : "_out" ].call( this, event );
		
					// We just moved out of a greedy child
					if ( parentInstance && c === "isout" ) {
						parentInstance.isout = false;
						parentInstance.isover = true;
						parentInstance._over.call( parentInstance, event );
					}
				} );
		
			},
			dragStop: function( draggable, event ) {
				draggable.element.parentsUntil( "body" ).off( "scroll.droppable" );
		
				// Call prepareOffsets one final time since IE does not fire return scroll events when
				// overflow was caused by drag (see #5003)
				if ( !draggable.options.refreshPositions ) {
					$.ui.ddmanager.prepareOffsets( draggable, event );
				}
			}
		};
		
		// DEPRECATED
		// TODO: switch return back to widget declaration at top of file when this is removed
		if ( $.uiBackCompat !== false ) {
		
			// Backcompat for activeClass and hoverClass options
			$.widget( "ui.droppable", $.ui.droppable, {
				options: {
					hoverClass: false,
					activeClass: false
				},
				_addActiveClass: function() {
					this._super();
					if ( this.options.activeClass ) {
						this.element.addClass( this.options.activeClass );
					}
				},
				_removeActiveClass: function() {
					this._super();
					if ( this.options.activeClass ) {
						this.element.removeClass( this.options.activeClass );
					}
				},
				_addHoverClass: function() {
					this._super();
					if ( this.options.hoverClass ) {
						this.element.addClass( this.options.hoverClass );
					}
				},
				_removeHoverClass: function() {
					this._super();
					if ( this.options.hoverClass ) {
						this.element.removeClass( this.options.hoverClass );
					}
				}
			} );
		}
		
		return $.ui.droppable;
		
		} ) );
	
	
	/***/ },
	/* 8 */
	/*!*************************************************************************************************************************!*\
	  !*** external {"var":"jQuery","this":"jquery","root":"jQuery","amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
	  \*************************************************************************************************************************/
	/***/ function(module, exports) {
	
		module.exports = jQuery;
	
	/***/ },
	/* 9 */
	/*!********************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/widgets/draggable.js ***!
	  \********************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Draggable 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: Draggable
		//>>group: Interactions
		//>>description: Enables dragging functionality for any element.
		//>>docs: http://api.jqueryui.com/draggable/
		//>>demos: http://jqueryui.com/draggable/
		//>>css.structure: ../../themes/base/draggable.css
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
					__webpack_require__(/*! jquery */ 8),
					__webpack_require__(/*! ./mouse */ 10),
					__webpack_require__(/*! ../data */ 14),
					__webpack_require__(/*! ../plugin */ 15),
					__webpack_require__(/*! ../safe-active-element */ 18),
					__webpack_require__(/*! ../safe-blur */ 16),
					__webpack_require__(/*! ../scroll-parent */ 17),
					__webpack_require__(/*! ../version */ 12),
					__webpack_require__(/*! ../widget */ 13)
				], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		}( function( $ ) {
		
		$.widget( "ui.draggable", $.ui.mouse, {
			version: "1.12.0-rc.2",
			widgetEventPrefix: "drag",
			options: {
				addClasses: true,
				appendTo: "parent",
				axis: false,
				connectToSortable: false,
				containment: false,
				cursor: "auto",
				cursorAt: false,
				grid: false,
				handle: false,
				helper: "original",
				iframeFix: false,
				opacity: false,
				refreshPositions: false,
				revert: false,
				revertDuration: 500,
				scope: "default",
				scroll: true,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				snap: false,
				snapMode: "both",
				snapTolerance: 20,
				stack: false,
				zIndex: false,
		
				// Callbacks
				drag: null,
				start: null,
				stop: null
			},
			_create: function() {
		
				if ( this.options.helper === "original" ) {
					this._setPositionRelative();
				}
				if ( this.options.addClasses ) {
					this._addClass( "ui-draggable" );
				}
				this._setHandleClassName();
		
				this._mouseInit();
			},
		
			_setOption: function( key, value ) {
				this._super( key, value );
				if ( key === "handle" ) {
					this._removeHandleClassName();
					this._setHandleClassName();
				}
			},
		
			_destroy: function() {
				if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
					this.destroyOnClear = true;
					return;
				}
				this._removeHandleClassName();
				this._mouseDestroy();
			},
		
			_mouseCapture: function( event ) {
				var o = this.options;
		
				this._blurActiveElement( event );
		
				// Among others, prevent a drag on a resizable-handle
				if ( this.helper || o.disabled ||
						$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
					return false;
				}
		
				//Quit if we're not on a valid handle
				this.handle = this._getHandle( event );
				if ( !this.handle ) {
					return false;
				}
		
				this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );
		
				return true;
		
			},
		
			_blockFrames: function( selector ) {
				this.iframeBlocks = this.document.find( selector ).map( function() {
					var iframe = $( this );
		
					return $( "<div>" )
						.css( "position", "absolute" )
						.appendTo( iframe.parent() )
						.outerWidth( iframe.outerWidth() )
						.outerHeight( iframe.outerHeight() )
						.offset( iframe.offset() )[ 0 ];
				} );
			},
		
			_unblockFrames: function() {
				if ( this.iframeBlocks ) {
					this.iframeBlocks.remove();
					delete this.iframeBlocks;
				}
			},
		
			_blurActiveElement: function( event ) {
				var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
					target = $( event.target );
		
				// Only blur if the event occurred on an element that is:
				// 1) within the draggable handle
				// 2) but not within the currently focused element
				// See #10527, #12472
				if ( this._getHandle( event ) && target.closest( activeElement ).length ) {
					return;
				}
		
				// Blur any element that currently has focus, see #4261
				$.ui.safeBlur( activeElement );
			},
		
			_mouseStart: function( event ) {
		
				var o = this.options;
		
				//Create and append the visible helper
				this.helper = this._createHelper( event );
		
				this._addClass( this.helper, "ui-draggable-dragging" );
		
				//Cache the helper size
				this._cacheHelperProportions();
		
				//If ddmanager is used for droppables, set the global draggable
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.current = this;
				}
		
				/*
				 * - Position generation -
				 * This block generates everything position related - it's the core of draggables.
				 */
		
				//Cache the margins of the original element
				this._cacheMargins();
		
				//Store the helper's css position
				this.cssPosition = this.helper.css( "position" );
				this.scrollParent = this.helper.scrollParent( true );
				this.offsetParent = this.helper.offsetParent();
				this.hasFixedAncestor = this.helper.parents().filter( function() {
						return $( this ).css( "position" ) === "fixed";
					} ).length > 0;
		
				//The element's absolute position on the page minus margins
				this.positionAbs = this.element.offset();
				this._refreshOffsets( event );
		
				//Generate the original position
				this.originalPosition = this.position = this._generatePosition( event, false );
				this.originalPageX = event.pageX;
				this.originalPageY = event.pageY;
		
				//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
				( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );
		
				//Set a containment if given in the options
				this._setContainment();
		
				//Trigger event + callbacks
				if ( this._trigger( "start", event ) === false ) {
					this._clear();
					return false;
				}
		
				//Recache the helper size
				this._cacheHelperProportions();
		
				//Prepare the droppable offsets
				if ( $.ui.ddmanager && !o.dropBehaviour ) {
					$.ui.ddmanager.prepareOffsets( this, event );
				}
		
				// Execute the drag once - this causes the helper not to be visible before getting its
				// correct position
				this._mouseDrag( event, true );
		
				// If the ddmanager is used for droppables, inform the manager that dragging has started
				// (see #5003)
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.dragStart( this, event );
				}
		
				return true;
			},
		
			_refreshOffsets: function( event ) {
				this.offset = {
					top: this.positionAbs.top - this.margins.top,
					left: this.positionAbs.left - this.margins.left,
					scroll: false,
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				};
		
				this.offset.click = {
					left: event.pageX - this.offset.left,
					top: event.pageY - this.offset.top
				};
			},
		
			_mouseDrag: function( event, noPropagation ) {
		
				// reset any necessary cached properties (see #5009)
				if ( this.hasFixedAncestor ) {
					this.offset.parent = this._getParentOffset();
				}
		
				//Compute the helpers position
				this.position = this._generatePosition( event, true );
				this.positionAbs = this._convertPositionTo( "absolute" );
		
				//Call plugins and callbacks and use the resulting position if something is returned
				if ( !noPropagation ) {
					var ui = this._uiHash();
					if ( this._trigger( "drag", event, ui ) === false ) {
						this._mouseUp( new $.Event( "mouseup", event ) );
						return false;
					}
					this.position = ui.position;
				}
		
				this.helper[ 0 ].style.left = this.position.left + "px";
				this.helper[ 0 ].style.top = this.position.top + "px";
		
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.drag( this, event );
				}
		
				return false;
			},
		
			_mouseStop: function( event ) {
		
				//If we are using droppables, inform the manager about the drop
				var that = this,
					dropped = false;
				if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
					dropped = $.ui.ddmanager.drop( this, event );
				}
		
				//if a drop comes from outside (a sortable)
				if ( this.dropped ) {
					dropped = this.dropped;
					this.dropped = false;
				}
		
				if ( ( this.options.revert === "invalid" && !dropped ) ||
						( this.options.revert === "valid" && dropped ) ||
						this.options.revert === true || ( $.isFunction( this.options.revert ) &&
						this.options.revert.call( this.element, dropped ) )
				) {
					$( this.helper ).animate(
						this.originalPosition,
						parseInt( this.options.revertDuration, 10 ),
						function() {
							if ( that._trigger( "stop", event ) !== false ) {
								that._clear();
							}
						}
					);
				} else {
					if ( this._trigger( "stop", event ) !== false ) {
						this._clear();
					}
				}
		
				return false;
			},
		
			_mouseUp: function( event ) {
				this._unblockFrames();
		
				// If the ddmanager is used for droppables, inform the manager that dragging has stopped
				// (see #5003)
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.dragStop( this, event );
				}
		
				// Only need to focus if the event occurred on the draggable itself, see #10527
				if ( this.handleElement.is( event.target ) ) {
		
					// The interaction is over; whether or not the click resulted in a drag,
					// focus the element
					this.element.trigger( "focus" );
				}
		
				return $.ui.mouse.prototype._mouseUp.call( this, event );
			},
		
			cancel: function() {
		
				if ( this.helper.is( ".ui-draggable-dragging" ) ) {
					this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
				} else {
					this._clear();
				}
		
				return this;
		
			},
		
			_getHandle: function( event ) {
				return this.options.handle ?
					!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
					true;
			},
		
			_setHandleClassName: function() {
				this.handleElement = this.options.handle ?
					this.element.find( this.options.handle ) : this.element;
				this._addClass( this.handleElement, "ui-draggable-handle" );
			},
		
			_removeHandleClassName: function() {
				this._removeClass( this.handleElement, "ui-draggable-handle" );
			},
		
			_createHelper: function( event ) {
		
				var o = this.options,
					helperIsFunction = $.isFunction( o.helper ),
					helper = helperIsFunction ?
						$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
						( o.helper === "clone" ?
							this.element.clone().removeAttr( "id" ) :
							this.element );
		
				if ( !helper.parents( "body" ).length ) {
					helper.appendTo( ( o.appendTo === "parent" ?
						this.element[ 0 ].parentNode :
						o.appendTo ) );
				}
		
				// Http://bugs.jqueryui.com/ticket/9446
				// a helper function can return the original element
				// which wouldn't have been set to relative in _create
				if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
					this._setPositionRelative();
				}
		
				if ( helper[ 0 ] !== this.element[ 0 ] &&
						!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
					helper.css( "position", "absolute" );
				}
		
				return helper;
		
			},
		
			_setPositionRelative: function() {
				if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
					this.element[ 0 ].style.position = "relative";
				}
			},
		
			_adjustOffsetFromHelper: function( obj ) {
				if ( typeof obj === "string" ) {
					obj = obj.split( " " );
				}
				if ( $.isArray( obj ) ) {
					obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
				}
				if ( "left" in obj ) {
					this.offset.click.left = obj.left + this.margins.left;
				}
				if ( "right" in obj ) {
					this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
				}
				if ( "top" in obj ) {
					this.offset.click.top = obj.top + this.margins.top;
				}
				if ( "bottom" in obj ) {
					this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
				}
			},
		
			_isRootNode: function( element ) {
				return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
			},
		
			_getParentOffset: function() {
		
				//Get the offsetParent and cache its position
				var po = this.offsetParent.offset(),
					document = this.document[ 0 ];
		
				// This is a special case where we need to modify a offset calculated on start, since the
				// following happened:
				// 1. The position of the helper is absolute, so it's position is calculated based on the
				// next positioned parent
				// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
				// the document, which means that the scroll is included in the initial calculation of the
				// offset of the parent, and never recalculated upon drag
				if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
						$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
					po.left += this.scrollParent.scrollLeft();
					po.top += this.scrollParent.scrollTop();
				}
		
				if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
					po = { top: 0, left: 0 };
				}
		
				return {
					top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
					left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
				};
		
			},
		
			_getRelativeOffset: function() {
				if ( this.cssPosition !== "relative" ) {
					return { top: 0, left: 0 };
				}
		
				var p = this.element.position(),
					scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );
		
				return {
					top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
						( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
					left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
						( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
				};
		
			},
		
			_cacheMargins: function() {
				this.margins = {
					left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
					top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
					right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
					bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
				};
			},
		
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				};
			},
		
			_setContainment: function() {
		
				var isUserScrollable, c, ce,
					o = this.options,
					document = this.document[ 0 ];
		
				this.relativeContainer = null;
		
				if ( !o.containment ) {
					this.containment = null;
					return;
				}
		
				if ( o.containment === "window" ) {
					this.containment = [
						$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
						$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
						$( window ).scrollLeft() + $( window ).width() -
							this.helperProportions.width - this.margins.left,
						$( window ).scrollTop() +
							( $( window ).height() || document.body.parentNode.scrollHeight ) -
							this.helperProportions.height - this.margins.top
					];
					return;
				}
		
				if ( o.containment === "document" ) {
					this.containment = [
						0,
						0,
						$( document ).width() - this.helperProportions.width - this.margins.left,
						( $( document ).height() || document.body.parentNode.scrollHeight ) -
							this.helperProportions.height - this.margins.top
					];
					return;
				}
		
				if ( o.containment.constructor === Array ) {
					this.containment = o.containment;
					return;
				}
		
				if ( o.containment === "parent" ) {
					o.containment = this.helper[ 0 ].parentNode;
				}
		
				c = $( o.containment );
				ce = c[ 0 ];
		
				if ( !ce ) {
					return;
				}
		
				isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );
		
				this.containment = [
					( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
						( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
					( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
						( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
					( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
						( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
						( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
						this.helperProportions.width -
						this.margins.left -
						this.margins.right,
					( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
						( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
						( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
						this.helperProportions.height -
						this.margins.top -
						this.margins.bottom
				];
				this.relativeContainer = c;
			},
		
			_convertPositionTo: function( d, pos ) {
		
				if ( !pos ) {
					pos = this.position;
				}
		
				var mod = d === "absolute" ? 1 : -1,
					scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );
		
				return {
					top: (
		
						// The absolute mouse position
						pos.top	+
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.top * mod +
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.top * mod -
						( ( this.cssPosition === "fixed" ?
							-this.offset.scroll.top :
							( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
					),
					left: (
		
						// The absolute mouse position
						pos.left +
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.left * mod +
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.left * mod	-
						( ( this.cssPosition === "fixed" ?
							-this.offset.scroll.left :
							( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
					)
				};
		
			},
		
			_generatePosition: function( event, constrainPosition ) {
		
				var containment, co, top, left,
					o = this.options,
					scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
					pageX = event.pageX,
					pageY = event.pageY;
		
				// Cache the scroll
				if ( !scrollIsRootNode || !this.offset.scroll ) {
					this.offset.scroll = {
						top: this.scrollParent.scrollTop(),
						left: this.scrollParent.scrollLeft()
					};
				}
		
				/*
				 * - Position constraining -
				 * Constrain the position to a mix of grid, containment.
				 */
		
				// If we are not dragging yet, we won't check for options
				if ( constrainPosition ) {
					if ( this.containment ) {
						if ( this.relativeContainer ) {
							co = this.relativeContainer.offset();
							containment = [
								this.containment[ 0 ] + co.left,
								this.containment[ 1 ] + co.top,
								this.containment[ 2 ] + co.left,
								this.containment[ 3 ] + co.top
							];
						} else {
							containment = this.containment;
						}
		
						if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
							pageX = containment[ 0 ] + this.offset.click.left;
						}
						if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
							pageY = containment[ 1 ] + this.offset.click.top;
						}
						if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
							pageX = containment[ 2 ] + this.offset.click.left;
						}
						if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
							pageY = containment[ 3 ] + this.offset.click.top;
						}
					}
		
					if ( o.grid ) {
		
						//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
						// argument errors in IE (see ticket #6950)
						top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
							this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
						pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
							top - this.offset.click.top > containment[ 3 ] ) ?
								top :
								( ( top - this.offset.click.top >= containment[ 1 ] ) ?
									top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;
		
						left = o.grid[ 0 ] ? this.originalPageX +
							Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
							this.originalPageX;
						pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
							left - this.offset.click.left > containment[ 2 ] ) ?
								left :
								( ( left - this.offset.click.left >= containment[ 0 ] ) ?
									left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
					}
		
					if ( o.axis === "y" ) {
						pageX = this.originalPageX;
					}
		
					if ( o.axis === "x" ) {
						pageY = this.originalPageY;
					}
				}
		
				return {
					top: (
		
						// The absolute mouse position
						pageY -
		
						// Click offset (relative to the element)
						this.offset.click.top -
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.top -
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.top +
						( this.cssPosition === "fixed" ?
							-this.offset.scroll.top :
							( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
					),
					left: (
		
						// The absolute mouse position
						pageX -
		
						// Click offset (relative to the element)
						this.offset.click.left -
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.left -
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.left +
						( this.cssPosition === "fixed" ?
							-this.offset.scroll.left :
							( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
					)
				};
		
			},
		
			_clear: function() {
				this._removeClass( this.helper, "ui-draggable-dragging" );
				if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
					this.helper.remove();
				}
				this.helper = null;
				this.cancelHelperRemoval = false;
				if ( this.destroyOnClear ) {
					this.destroy();
				}
			},
		
			// From now on bulk stuff - mainly helpers
		
			_trigger: function( type, event, ui ) {
				ui = ui || this._uiHash();
				$.ui.plugin.call( this, type, [ event, ui, this ], true );
		
				// Absolute position and offset (see #6884 ) have to be recalculated after plugins
				if ( /^(drag|start|stop)/.test( type ) ) {
					this.positionAbs = this._convertPositionTo( "absolute" );
					ui.offset = this.positionAbs;
				}
				return $.Widget.prototype._trigger.call( this, type, event, ui );
			},
		
			plugins: {},
		
			_uiHash: function() {
				return {
					helper: this.helper,
					position: this.position,
					originalPosition: this.originalPosition,
					offset: this.positionAbs
				};
			}
		
		} );
		
		$.ui.plugin.add( "draggable", "connectToSortable", {
			start: function( event, ui, draggable ) {
				var uiSortable = $.extend( {}, ui, {
					item: draggable.element
				} );
		
				draggable.sortables = [];
				$( draggable.options.connectToSortable ).each( function() {
					var sortable = $( this ).sortable( "instance" );
		
					if ( sortable && !sortable.options.disabled ) {
						draggable.sortables.push( sortable );
		
						// RefreshPositions is called at drag start to refresh the containerCache
						// which is used in drag. This ensures it's initialized and synchronized
						// with any changes that might have happened on the page since initialization.
						sortable.refreshPositions();
						sortable._trigger( "activate", event, uiSortable );
					}
				} );
			},
			stop: function( event, ui, draggable ) {
				var uiSortable = $.extend( {}, ui, {
					item: draggable.element
				} );
		
				draggable.cancelHelperRemoval = false;
		
				$.each( draggable.sortables, function() {
					var sortable = this;
		
					if ( sortable.isOver ) {
						sortable.isOver = 0;
		
						// Allow this sortable to handle removing the helper
						draggable.cancelHelperRemoval = true;
						sortable.cancelHelperRemoval = false;
		
						// Use _storedCSS To restore properties in the sortable,
						// as this also handles revert (#9675) since the draggable
						// may have modified them in unexpected ways (#8809)
						sortable._storedCSS = {
							position: sortable.placeholder.css( "position" ),
							top: sortable.placeholder.css( "top" ),
							left: sortable.placeholder.css( "left" )
						};
		
						sortable._mouseStop( event );
		
						// Once drag has ended, the sortable should return to using
						// its original helper, not the shared helper from draggable
						sortable.options.helper = sortable.options._helper;
					} else {
		
						// Prevent this Sortable from removing the helper.
						// However, don't set the draggable to remove the helper
						// either as another connected Sortable may yet handle the removal.
						sortable.cancelHelperRemoval = true;
		
						sortable._trigger( "deactivate", event, uiSortable );
					}
				} );
			},
			drag: function( event, ui, draggable ) {
				$.each( draggable.sortables, function() {
					var innermostIntersecting = false,
						sortable = this;
		
					// Copy over variables that sortable's _intersectsWith uses
					sortable.positionAbs = draggable.positionAbs;
					sortable.helperProportions = draggable.helperProportions;
					sortable.offset.click = draggable.offset.click;
		
					if ( sortable._intersectsWith( sortable.containerCache ) ) {
						innermostIntersecting = true;
		
						$.each( draggable.sortables, function() {
		
							// Copy over variables that sortable's _intersectsWith uses
							this.positionAbs = draggable.positionAbs;
							this.helperProportions = draggable.helperProportions;
							this.offset.click = draggable.offset.click;
		
							if ( this !== sortable &&
									this._intersectsWith( this.containerCache ) &&
									$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
								innermostIntersecting = false;
							}
		
							return innermostIntersecting;
						} );
					}
		
					if ( innermostIntersecting ) {
		
						// If it intersects, we use a little isOver variable and set it once,
						// so that the move-in stuff gets fired only once.
						if ( !sortable.isOver ) {
							sortable.isOver = 1;
		
							// Store draggable's parent in case we need to reappend to it later.
							draggable._parent = ui.helper.parent();
		
							sortable.currentItem = ui.helper
								.appendTo( sortable.element )
								.data( "ui-sortable-item", true );
		
							// Store helper option to later restore it
							sortable.options._helper = sortable.options.helper;
		
							sortable.options.helper = function() {
								return ui.helper[ 0 ];
							};
		
							// Fire the start events of the sortable with our passed browser event,
							// and our own helper (so it doesn't create a new one)
							event.target = sortable.currentItem[ 0 ];
							sortable._mouseCapture( event, true );
							sortable._mouseStart( event, true, true );
		
							// Because the browser event is way off the new appended portlet,
							// modify necessary variables to reflect the changes
							sortable.offset.click.top = draggable.offset.click.top;
							sortable.offset.click.left = draggable.offset.click.left;
							sortable.offset.parent.left -= draggable.offset.parent.left -
								sortable.offset.parent.left;
							sortable.offset.parent.top -= draggable.offset.parent.top -
								sortable.offset.parent.top;
		
							draggable._trigger( "toSortable", event );
		
							// Inform draggable that the helper is in a valid drop zone,
							// used solely in the revert option to handle "valid/invalid".
							draggable.dropped = sortable.element;
		
							// Need to refreshPositions of all sortables in the case that
							// adding to one sortable changes the location of the other sortables (#9675)
							$.each( draggable.sortables, function() {
								this.refreshPositions();
							} );
		
							// Hack so receive/update callbacks work (mostly)
							draggable.currentItem = draggable.element;
							sortable.fromOutside = draggable;
						}
		
						if ( sortable.currentItem ) {
							sortable._mouseDrag( event );
		
							// Copy the sortable's position because the draggable's can potentially reflect
							// a relative position, while sortable is always absolute, which the dragged
							// element has now become. (#8809)
							ui.position = sortable.position;
						}
					} else {
		
						// If it doesn't intersect with the sortable, and it intersected before,
						// we fake the drag stop of the sortable, but make sure it doesn't remove
						// the helper by using cancelHelperRemoval.
						if ( sortable.isOver ) {
		
							sortable.isOver = 0;
							sortable.cancelHelperRemoval = true;
		
							// Calling sortable's mouseStop would trigger a revert,
							// so revert must be temporarily false until after mouseStop is called.
							sortable.options._revert = sortable.options.revert;
							sortable.options.revert = false;
		
							sortable._trigger( "out", event, sortable._uiHash( sortable ) );
							sortable._mouseStop( event, true );
		
							// Restore sortable behaviors that were modfied
							// when the draggable entered the sortable area (#9481)
							sortable.options.revert = sortable.options._revert;
							sortable.options.helper = sortable.options._helper;
		
							if ( sortable.placeholder ) {
								sortable.placeholder.remove();
							}
		
							// Restore and recalculate the draggable's offset considering the sortable
							// may have modified them in unexpected ways. (#8809, #10669)
							ui.helper.appendTo( draggable._parent );
							draggable._refreshOffsets( event );
							ui.position = draggable._generatePosition( event, true );
		
							draggable._trigger( "fromSortable", event );
		
							// Inform draggable that the helper is no longer in a valid drop zone
							draggable.dropped = false;
		
							// Need to refreshPositions of all sortables just in case removing
							// from one sortable changes the location of other sortables (#9675)
							$.each( draggable.sortables, function() {
								this.refreshPositions();
							} );
						}
					}
				} );
			}
		} );
		
		$.ui.plugin.add( "draggable", "cursor", {
			start: function( event, ui, instance ) {
				var t = $( "body" ),
					o = instance.options;
		
				if ( t.css( "cursor" ) ) {
					o._cursor = t.css( "cursor" );
				}
				t.css( "cursor", o.cursor );
			},
			stop: function( event, ui, instance ) {
				var o = instance.options;
				if ( o._cursor ) {
					$( "body" ).css( "cursor", o._cursor );
				}
			}
		} );
		
		$.ui.plugin.add( "draggable", "opacity", {
			start: function( event, ui, instance ) {
				var t = $( ui.helper ),
					o = instance.options;
				if ( t.css( "opacity" ) ) {
					o._opacity = t.css( "opacity" );
				}
				t.css( "opacity", o.opacity );
			},
			stop: function( event, ui, instance ) {
				var o = instance.options;
				if ( o._opacity ) {
					$( ui.helper ).css( "opacity", o._opacity );
				}
			}
		} );
		
		$.ui.plugin.add( "draggable", "scroll", {
			start: function( event, ui, i ) {
				if ( !i.scrollParentNotHidden ) {
					i.scrollParentNotHidden = i.helper.scrollParent( false );
				}
		
				if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
						i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
					i.overflowOffset = i.scrollParentNotHidden.offset();
				}
			},
			drag: function( event, ui, i  ) {
		
				var o = i.options,
					scrolled = false,
					scrollParent = i.scrollParentNotHidden[ 0 ],
					document = i.document[ 0 ];
		
				if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
					if ( !o.axis || o.axis !== "x" ) {
						if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
								o.scrollSensitivity ) {
							scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
						} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
							scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
						}
					}
		
					if ( !o.axis || o.axis !== "y" ) {
						if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
								o.scrollSensitivity ) {
							scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
						} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
							scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
						}
					}
		
				} else {
		
					if ( !o.axis || o.axis !== "x" ) {
						if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
							scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
						} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
								o.scrollSensitivity ) {
							scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
						}
					}
		
					if ( !o.axis || o.axis !== "y" ) {
						if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
							scrolled = $( document ).scrollLeft(
								$( document ).scrollLeft() - o.scrollSpeed
							);
						} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
								o.scrollSensitivity ) {
							scrolled = $( document ).scrollLeft(
								$( document ).scrollLeft() + o.scrollSpeed
							);
						}
					}
		
				}
		
				if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
					$.ui.ddmanager.prepareOffsets( i, event );
				}
		
			}
		} );
		
		$.ui.plugin.add( "draggable", "snap", {
			start: function( event, ui, i ) {
		
				var o = i.options;
		
				i.snapElements = [];
		
				$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
					.each( function() {
						var $t = $( this ),
							$o = $t.offset();
						if ( this !== i.element[ 0 ] ) {
							i.snapElements.push( {
								item: this,
								width: $t.outerWidth(), height: $t.outerHeight(),
								top: $o.top, left: $o.left
							} );
						}
					} );
		
			},
			drag: function( event, ui, inst ) {
		
				var ts, bs, ls, rs, l, r, t, b, i, first,
					o = inst.options,
					d = o.snapTolerance,
					x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
					y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
		
				for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {
		
					l = inst.snapElements[ i ].left - inst.margins.left;
					r = l + inst.snapElements[ i ].width;
					t = inst.snapElements[ i ].top - inst.margins.top;
					b = t + inst.snapElements[ i ].height;
		
					if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
							!$.contains( inst.snapElements[ i ].item.ownerDocument,
							inst.snapElements[ i ].item ) ) {
						if ( inst.snapElements[ i ].snapping ) {
							( inst.options.snap.release &&
								inst.options.snap.release.call(
									inst.element,
									event,
									$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
								) );
						}
						inst.snapElements[ i ].snapping = false;
						continue;
					}
		
					if ( o.snapMode !== "inner" ) {
						ts = Math.abs( t - y2 ) <= d;
						bs = Math.abs( b - y1 ) <= d;
						ls = Math.abs( l - x2 ) <= d;
						rs = Math.abs( r - x1 ) <= d;
						if ( ts ) {
							ui.position.top = inst._convertPositionTo( "relative", {
								top: t - inst.helperProportions.height,
								left: 0
							} ).top;
						}
						if ( bs ) {
							ui.position.top = inst._convertPositionTo( "relative", {
								top: b,
								left: 0
							} ).top;
						}
						if ( ls ) {
							ui.position.left = inst._convertPositionTo( "relative", {
								top: 0,
								left: l - inst.helperProportions.width
							} ).left;
						}
						if ( rs ) {
							ui.position.left = inst._convertPositionTo( "relative", {
								top: 0,
								left: r
							} ).left;
						}
					}
		
					first = ( ts || bs || ls || rs );
		
					if ( o.snapMode !== "outer" ) {
						ts = Math.abs( t - y1 ) <= d;
						bs = Math.abs( b - y2 ) <= d;
						ls = Math.abs( l - x1 ) <= d;
						rs = Math.abs( r - x2 ) <= d;
						if ( ts ) {
							ui.position.top = inst._convertPositionTo( "relative", {
								top: t,
								left: 0
							} ).top;
						}
						if ( bs ) {
							ui.position.top = inst._convertPositionTo( "relative", {
								top: b - inst.helperProportions.height,
								left: 0
							} ).top;
						}
						if ( ls ) {
							ui.position.left = inst._convertPositionTo( "relative", {
								top: 0,
								left: l
							} ).left;
						}
						if ( rs ) {
							ui.position.left = inst._convertPositionTo( "relative", {
								top: 0,
								left: r - inst.helperProportions.width
							} ).left;
						}
					}
		
					if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
						( inst.options.snap.snap &&
							inst.options.snap.snap.call(
								inst.element,
								event,
								$.extend( inst._uiHash(), {
									snapItem: inst.snapElements[ i ].item
								} ) ) );
					}
					inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );
		
				}
		
			}
		} );
		
		$.ui.plugin.add( "draggable", "stack", {
			start: function( event, ui, instance ) {
				var min,
					o = instance.options,
					group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
						return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
							( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
					} );
		
				if ( !group.length ) { return; }
		
				min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
				$( group ).each( function( i ) {
					$( this ).css( "zIndex", min + i );
				} );
				this.css( "zIndex", ( min + group.length ) );
			}
		} );
		
		$.ui.plugin.add( "draggable", "zIndex", {
			start: function( event, ui, instance ) {
				var t = $( ui.helper ),
					o = instance.options;
		
				if ( t.css( "zIndex" ) ) {
					o._zIndex = t.css( "zIndex" );
				}
				t.css( "zIndex", o.zIndex );
			},
			stop: function( event, ui, instance ) {
				var o = instance.options;
		
				if ( o._zIndex ) {
					$( ui.helper ).css( "zIndex", o._zIndex );
				}
			}
		} );
		
		return $.ui.draggable;
		
		} ) );
	
	
	/***/ },
	/* 10 */
	/*!****************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/widgets/mouse.js ***!
	  \****************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Mouse 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: Mouse
		//>>group: Widgets
		//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
		//>>docs: http://api.jqueryui.com/mouse/
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
					__webpack_require__(/*! jquery */ 8),
					__webpack_require__(/*! ../ie */ 11),
					__webpack_require__(/*! ../version */ 12),
					__webpack_require__(/*! ../widget */ 13)
				], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		}( function( $ ) {
		
		var mouseHandled = false;
		$( document ).on( "mouseup", function() {
			mouseHandled = false;
		} );
		
		return $.widget( "ui.mouse", {
			version: "1.12.0-rc.2",
			options: {
				cancel: "input, textarea, button, select, option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var that = this;
		
				this.element
					.on( "mousedown." + this.widgetName, function( event ) {
						return that._mouseDown( event );
					} )
					.on( "click." + this.widgetName, function( event ) {
						if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
							$.removeData( event.target, that.widgetName + ".preventClickEvent" );
							event.stopImmediatePropagation();
							return false;
						}
					} );
		
				this.started = false;
			},
		
			// TODO: make sure destroying one instance of mouse doesn't mess with
			// other instances of mouse
			_mouseDestroy: function() {
				this.element.off( "." + this.widgetName );
				if ( this._mouseMoveDelegate ) {
					this.document
						.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
						.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
				}
			},
		
			_mouseDown: function( event ) {
		
				// don't let more than one widget handle mouseStart
				if ( mouseHandled ) {
					return;
				}
		
				this._mouseMoved = false;
		
				// We may have missed mouseup (out of window)
				( this._mouseStarted && this._mouseUp( event ) );
		
				this._mouseDownEvent = event;
		
				var that = this,
					btnIsLeft = ( event.which === 1 ),
		
					// event.target.nodeName works around a bug in IE 8 with
					// disabled inputs (#7620)
					elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
						$( event.target ).closest( this.options.cancel ).length : false );
				if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
					return true;
				}
		
				this.mouseDelayMet = !this.options.delay;
				if ( !this.mouseDelayMet ) {
					this._mouseDelayTimer = setTimeout( function() {
						that.mouseDelayMet = true;
					}, this.options.delay );
				}
		
				if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
					this._mouseStarted = ( this._mouseStart( event ) !== false );
					if ( !this._mouseStarted ) {
						event.preventDefault();
						return true;
					}
				}
		
				// Click event may never have fired (Gecko & Opera)
				if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, this.widgetName + ".preventClickEvent" );
				}
		
				// These delegates are required to keep context
				this._mouseMoveDelegate = function( event ) {
					return that._mouseMove( event );
				};
				this._mouseUpDelegate = function( event ) {
					return that._mouseUp( event );
				};
		
				this.document
					.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
					.on( "mouseup." + this.widgetName, this._mouseUpDelegate );
		
				event.preventDefault();
		
				mouseHandled = true;
				return true;
			},
		
			_mouseMove: function( event ) {
		
				// Only check for mouseups outside the document if you've moved inside the document
				// at least once. This prevents the firing of mouseup in the case of IE<9, which will
				// fire a mousemove event if content is placed under the cursor. See #7778
				// Support: IE <9
				if ( this._mouseMoved ) {
		
					// IE mouseup check - mouseup happened when mouse was out of window
					if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
							!event.button ) {
						return this._mouseUp( event );
		
					// Iframe mouseup check - mouseup occurred in another document
					} else if ( !event.which ) {
		
						// Support: Safari <=8 - 9
						// Safari sets which to 0 if you press any of the following keys
						// during a drag (#14461)
						if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
								event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
							this.ignoreMissingWhich = true;
						} else if ( !this.ignoreMissingWhich ) {
							return this._mouseUp( event );
						}
					}
				}
		
				if ( event.which || event.button ) {
					this._mouseMoved = true;
				}
		
				if ( this._mouseStarted ) {
					this._mouseDrag( event );
					return event.preventDefault();
				}
		
				if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
					this._mouseStarted =
						( this._mouseStart( this._mouseDownEvent, event ) !== false );
					( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
				}
		
				return !this._mouseStarted;
			},
		
			_mouseUp: function( event ) {
				this.document
					.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
					.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		
				if ( this._mouseStarted ) {
					this._mouseStarted = false;
		
					if ( event.target === this._mouseDownEvent.target ) {
						$.data( event.target, this.widgetName + ".preventClickEvent", true );
					}
		
					this._mouseStop( event );
				}
		
				if ( this._mouseDelayTimer ) {
					clearTimeout( this._mouseDelayTimer );
					delete this._mouseDelayTimer;
				}
		
				this.ignoreMissingWhich = false;
				mouseHandled = false;
				event.preventDefault();
			},
		
			_mouseDistanceMet: function( event ) {
				return ( Math.max(
						Math.abs( this._mouseDownEvent.pageX - event.pageX ),
						Math.abs( this._mouseDownEvent.pageY - event.pageY )
					) >= this.options.distance
				);
			},
		
			_mouseDelayMet: function( /* event */ ) {
				return this.mouseDelayMet;
			},
		
			// These are placeholder methods, to be overriden by extending plugin
			_mouseStart: function( /* event */ ) {},
			_mouseDrag: function( /* event */ ) {},
			_mouseStop: function( /* event */ ) {},
			_mouseCapture: function( /* event */ ) { return true; }
		} );
		
		} ) );
	
	
	/***/ },
	/* 11 */
	/*!*****************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/ie.js ***!
	  \*****************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		
		// This file is deprecated
		return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
		} ) );
	
	
	/***/ },
	/* 12 */
	/*!**********************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/version.js ***!
	  \**********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		
		$.ui = $.ui || {};
		
		return $.ui.version = "1.12.0-rc.2";
		
		} ) );
	
	
	/***/ },
	/* 13 */
	/*!*********************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/widget.js ***!
	  \*********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Widget 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: Widget
		//>>group: Core
		//>>description: Provides a factory for creating stateful widgets with a common API.
		//>>docs: http://api.jqueryui.com/jQuery.widget/
		//>>demos: http://jqueryui.com/widget/
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		}( function( $ ) {
		
		var widgetUuid = 0;
		var widgetSlice = Array.prototype.slice;
		
		$.cleanData = ( function( orig ) {
			return function( elems ) {
				var events, elem, i;
				for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
					try {
		
						// Only trigger remove when necessary to save time
						events = $._data( elem, "events" );
						if ( events && events.remove ) {
							$( elem ).triggerHandler( "remove" );
						}
		
					// Http://bugs.jquery.com/ticket/8235
					} catch ( e ) {}
				}
				orig( elems );
			};
		} )( $.cleanData );
		
		$.widget = function( name, base, prototype ) {
			var existingConstructor, constructor, basePrototype;
		
			// ProxiedPrototype allows the provided prototype to remain unmodified
			// so that it can be used as a mixin for multiple widgets (#8876)
			var proxiedPrototype = {};
		
			var namespace = name.split( "." )[ 0 ];
			name = name.split( "." )[ 1 ];
			var fullName = namespace + "-" + name;
		
			if ( !prototype ) {
				prototype = base;
				base = $.Widget;
			}
		
			if ( $.isArray( prototype ) ) {
				prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
			}
		
			// Create selector for plugin
			$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
				return !!$.data( elem, fullName );
			};
		
			$[ namespace ] = $[ namespace ] || {};
			existingConstructor = $[ namespace ][ name ];
			constructor = $[ namespace ][ name ] = function( options, element ) {
		
				// Allow instantiation without "new" keyword
				if ( !this._createWidget ) {
					return new constructor( options, element );
				}
		
				// Allow instantiation without initializing for simple inheritance
				// must use "new" keyword (the code above always passes args)
				if ( arguments.length ) {
					this._createWidget( options, element );
				}
			};
		
			// Extend with the existing constructor to carry over any static properties
			$.extend( constructor, existingConstructor, {
				version: prototype.version,
		
				// Copy the object used to create the prototype in case we need to
				// redefine the widget later
				_proto: $.extend( {}, prototype ),
		
				// Track widgets that inherit from this widget in case this widget is
				// redefined after a widget inherits from it
				_childConstructors: []
			} );
		
			basePrototype = new base();
		
			// We need to make the options hash a property directly on the new instance
			// otherwise we'll modify the options hash on the prototype that we're
			// inheriting from
			basePrototype.options = $.widget.extend( {}, basePrototype.options );
			$.each( prototype, function( prop, value ) {
				if ( !$.isFunction( value ) ) {
					proxiedPrototype[ prop ] = value;
					return;
				}
				proxiedPrototype[ prop ] = ( function() {
					function _super() {
						return base.prototype[ prop ].apply( this, arguments );
					}
		
					function _superApply( args ) {
						return base.prototype[ prop ].apply( this, args );
					}
		
					return function() {
						var __super = this._super;
						var __superApply = this._superApply;
						var returnValue;
		
						this._super = _super;
						this._superApply = _superApply;
		
						returnValue = value.apply( this, arguments );
		
						this._super = __super;
						this._superApply = __superApply;
		
						return returnValue;
					};
				} )();
			} );
			constructor.prototype = $.widget.extend( basePrototype, {
		
				// TODO: remove support for widgetEventPrefix
				// always use the name + a colon as the prefix, e.g., draggable:start
				// don't prefix for widgets that aren't DOM-based
				widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
			}, proxiedPrototype, {
				constructor: constructor,
				namespace: namespace,
				widgetName: name,
				widgetFullName: fullName
			} );
		
			// If this widget is being redefined then we need to find all widgets that
			// are inheriting from it and redefine all of them so that they inherit from
			// the new version of this widget. We're essentially trying to replace one
			// level in the prototype chain.
			if ( existingConstructor ) {
				$.each( existingConstructor._childConstructors, function( i, child ) {
					var childPrototype = child.prototype;
		
					// Redefine the child widget using the same prototype that was
					// originally used, but inherit from the new version of the base
					$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
						child._proto );
				} );
		
				// Remove the list of existing child constructors from the old constructor
				// so the old child constructors can be garbage collected
				delete existingConstructor._childConstructors;
			} else {
				base._childConstructors.push( constructor );
			}
		
			$.widget.bridge( name, constructor );
		
			return constructor;
		};
		
		$.widget.extend = function( target ) {
			var input = widgetSlice.call( arguments, 1 );
			var inputIndex = 0;
			var inputLength = input.length;
			var key;
			var value;
		
			for ( ; inputIndex < inputLength; inputIndex++ ) {
				for ( key in input[ inputIndex ] ) {
					value = input[ inputIndex ][ key ];
					if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
		
						// Clone objects
						if ( $.isPlainObject( value ) ) {
							target[ key ] = $.isPlainObject( target[ key ] ) ?
								$.widget.extend( {}, target[ key ], value ) :
		
								// Don't extend strings, arrays, etc. with objects
								$.widget.extend( {}, value );
		
						// Copy everything else by reference
						} else {
							target[ key ] = value;
						}
					}
				}
			}
			return target;
		};
		
		$.widget.bridge = function( name, object ) {
			var fullName = object.prototype.widgetFullName || name;
			$.fn[ name ] = function( options ) {
				var isMethodCall = typeof options === "string";
				var args = widgetSlice.call( arguments, 1 );
				var returnValue = this;
		
				if ( isMethodCall ) {
					this.each( function() {
						var methodValue;
						var instance = $.data( this, fullName );
		
						if ( options === "instance" ) {
							returnValue = instance;
							return false;
						}
		
						if ( !instance ) {
							return $.error( "cannot call methods on " + name +
								" prior to initialization; " +
								"attempted to call method '" + options + "'" );
						}
		
						if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
							return $.error( "no such method '" + options + "' for " + name +
								" widget instance" );
						}
		
						methodValue = instance[ options ].apply( instance, args );
		
						if ( methodValue !== instance && methodValue !== undefined ) {
							returnValue = methodValue && methodValue.jquery ?
								returnValue.pushStack( methodValue.get() ) :
								methodValue;
							return false;
						}
					} );
				} else {
		
					// Allow multiple hashes to be passed on init
					if ( args.length ) {
						options = $.widget.extend.apply( null, [ options ].concat( args ) );
					}
		
					this.each( function() {
						var instance = $.data( this, fullName );
						if ( instance ) {
							instance.option( options || {} );
							if ( instance._init ) {
								instance._init();
							}
						} else {
							$.data( this, fullName, new object( options, this ) );
						}
					} );
				}
		
				return returnValue;
			};
		};
		
		$.Widget = function( /* options, element */ ) {};
		$.Widget._childConstructors = [];
		
		$.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
		
			options: {
				classes: {},
				disabled: false,
		
				// Callbacks
				create: null
			},
		
			_createWidget: function( options, element ) {
				element = $( element || this.defaultElement || this )[ 0 ];
				this.element = $( element );
				this.uuid = widgetUuid++;
				this.eventNamespace = "." + this.widgetName + this.uuid;
		
				this.bindings = $();
				this.hoverable = $();
				this.focusable = $();
				this.classesElementLookup = {};
		
				if ( element !== this ) {
					$.data( element, this.widgetFullName, this );
					this._on( true, this.element, {
						remove: function( event ) {
							if ( event.target === element ) {
								this.destroy();
							}
						}
					} );
					this.document = $( element.style ?
		
						// Element within the document
						element.ownerDocument :
		
						// Element is window or document
						element.document || element );
					this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
				}
		
				this.options = $.widget.extend( {},
					this.options,
					this._getCreateOptions(),
					options );
		
				this._create();
		
				if ( this.options.disabled ) {
					this._setOptionDisabled( this.options.disabled );
				}
		
				this._trigger( "create", null, this._getCreateEventData() );
				this._init();
			},
		
			_getCreateOptions: function() {
				return {};
			},
		
			_getCreateEventData: $.noop,
		
			_create: $.noop,
		
			_init: $.noop,
		
			destroy: function() {
				var that = this;
		
				this._destroy();
				$.each( this.classesElementLookup, function( key, value ) {
					that._removeClass( value, key );
				} );
		
				// We can probably remove the unbind calls in 2.0
				// all event bindings should go through this._on()
				this.element
					.off( this.eventNamespace )
					.removeData( this.widgetFullName );
				this.widget()
					.off( this.eventNamespace )
					.removeAttr( "aria-disabled" );
		
				// Clean up events and states
				this.bindings.off( this.eventNamespace );
			},
		
			_destroy: $.noop,
		
			widget: function() {
				return this.element;
			},
		
			option: function( key, value ) {
				var options = key;
				var parts;
				var curOption;
				var i;
		
				if ( arguments.length === 0 ) {
		
					// Don't return a reference to the internal hash
					return $.widget.extend( {}, this.options );
				}
		
				if ( typeof key === "string" ) {
		
					// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
					options = {};
					parts = key.split( "." );
					key = parts.shift();
					if ( parts.length ) {
						curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
						for ( i = 0; i < parts.length - 1; i++ ) {
							curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
							curOption = curOption[ parts[ i ] ];
						}
						key = parts.pop();
						if ( arguments.length === 1 ) {
							return curOption[ key ] === undefined ? null : curOption[ key ];
						}
						curOption[ key ] = value;
					} else {
						if ( arguments.length === 1 ) {
							return this.options[ key ] === undefined ? null : this.options[ key ];
						}
						options[ key ] = value;
					}
				}
		
				this._setOptions( options );
		
				return this;
			},
		
			_setOptions: function( options ) {
				var key;
		
				for ( key in options ) {
					this._setOption( key, options[ key ] );
				}
		
				return this;
			},
		
			_setOption: function( key, value ) {
				if ( key === "classes" ) {
					this._setOptionClasses( value );
				}
		
				this.options[ key ] = value;
		
				if ( key === "disabled" ) {
					this._setOptionDisabled( value );
				}
		
				return this;
			},
		
			_setOptionClasses: function( value ) {
				var classKey, elements, currentElements;
		
				for ( classKey in value ) {
					currentElements = this.classesElementLookup[ classKey ];
					if ( value[ classKey ] === this.options.classes[ classKey ] ||
							!currentElements ||
							!currentElements.length ) {
						continue;
					}
		
					// We are doing this to create a new jQuery object because the _removeClass() call
					// on the next line is going to destroy the reference to the current elements being
					// tracked. We need to save a copy of this collection so that we can add the new classes
					// below.
					elements = $( currentElements.get() );
					this._removeClass( currentElements, classKey );
		
					// We don't use _addClass() here, because that uses this.options.classes
					// for generating the string of classes. We want to use the value passed in from
					// _setOption(), this is the new value of the classes option which was passed to
					// _setOption(). We pass this value directly to _classes().
					elements.addClass( this._classes( {
						element: elements,
						keys: classKey,
						classes: value,
						add: true
					} ) );
				}
			},
		
			_setOptionDisabled: function( value ) {
				this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );
		
				// If the widget is becoming disabled, then nothing is interactive
				if ( value ) {
					this._removeClass( this.hoverable, null, "ui-state-hover" );
					this._removeClass( this.focusable, null, "ui-state-focus" );
				}
			},
		
			enable: function() {
				return this._setOptions( { disabled: false } );
			},
		
			disable: function() {
				return this._setOptions( { disabled: true } );
			},
		
			_classes: function( options ) {
				var full = [];
				var that = this;
		
				options = $.extend( {
					element: this.element,
					classes: this.options.classes || {}
				}, options );
		
				function processClassString( classes, checkOption ) {
					var current, i;
					for ( i = 0; i < classes.length; i++ ) {
						current = that.classesElementLookup[ classes[ i ] ] || $();
						if ( options.add ) {
							current = $( $.unique( current.get().concat( options.element.get() ) ) );
						} else {
							current = $( current.not( options.element ).get() );
						}
						that.classesElementLookup[ classes[ i ] ] = current;
						full.push( classes[ i ] );
						if ( checkOption && options.classes[ classes[ i ] ] ) {
							full.push( options.classes[ classes[ i ] ] );
						}
					}
				}
		
				if ( options.keys ) {
					processClassString( options.keys.match( /\S+/g ) || [], true );
				}
				if ( options.extra ) {
					processClassString( options.extra.match( /\S+/g ) || [] );
				}
		
				return full.join( " " );
			},
		
			_removeClass: function( element, keys, extra ) {
				return this._toggleClass( element, keys, extra, false );
			},
		
			_addClass: function( element, keys, extra ) {
				return this._toggleClass( element, keys, extra, true );
			},
		
			_toggleClass: function( element, keys, extra, add ) {
				add = ( typeof add === "boolean" ) ? add : extra;
				var shift = ( typeof element === "string" || element === null ),
					options = {
						extra: shift ? keys : extra,
						keys: shift ? element : keys,
						element: shift ? this.element : element,
						add: add
					};
				options.element.toggleClass( this._classes( options ), add );
				return this;
			},
		
			_on: function( suppressDisabledCheck, element, handlers ) {
				var delegateElement;
				var instance = this;
		
				// No suppressDisabledCheck flag, shuffle arguments
				if ( typeof suppressDisabledCheck !== "boolean" ) {
					handlers = element;
					element = suppressDisabledCheck;
					suppressDisabledCheck = false;
				}
		
				// No element argument, shuffle and use this.element
				if ( !handlers ) {
					handlers = element;
					element = this.element;
					delegateElement = this.widget();
				} else {
					element = delegateElement = $( element );
					this.bindings = this.bindings.add( element );
				}
		
				$.each( handlers, function( event, handler ) {
					function handlerProxy() {
		
						// Allow widgets to customize the disabled handling
						// - disabled as an array instead of boolean
						// - disabled class as method for disabling individual parts
						if ( !suppressDisabledCheck &&
								( instance.options.disabled === true ||
								$( this ).hasClass( "ui-state-disabled" ) ) ) {
							return;
						}
						return ( typeof handler === "string" ? instance[ handler ] : handler )
							.apply( instance, arguments );
					}
		
					// Copy the guid so direct unbinding works
					if ( typeof handler !== "string" ) {
						handlerProxy.guid = handler.guid =
							handler.guid || handlerProxy.guid || $.guid++;
					}
		
					var match = event.match( /^([\w:-]*)\s*(.*)$/ );
					var eventName = match[ 1 ] + instance.eventNamespace;
					var selector = match[ 2 ];
		
					if ( selector ) {
						delegateElement.on( eventName, selector, handlerProxy );
					} else {
						element.on( eventName, handlerProxy );
					}
				} );
			},
		
			_off: function( element, eventName ) {
				eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
					this.eventNamespace;
				element.off( eventName ).off( eventName );
		
				// Clear the stack to avoid memory leaks (#10056)
				this.bindings = $( this.bindings.not( element ).get() );
				this.focusable = $( this.focusable.not( element ).get() );
				this.hoverable = $( this.hoverable.not( element ).get() );
			},
		
			_delay: function( handler, delay ) {
				function handlerProxy() {
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}
				var instance = this;
				return setTimeout( handlerProxy, delay || 0 );
			},
		
			_hoverable: function( element ) {
				this.hoverable = this.hoverable.add( element );
				this._on( element, {
					mouseenter: function( event ) {
						this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
					},
					mouseleave: function( event ) {
						this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
					}
				} );
			},
		
			_focusable: function( element ) {
				this.focusable = this.focusable.add( element );
				this._on( element, {
					focusin: function( event ) {
						this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
					},
					focusout: function( event ) {
						this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
					}
				} );
			},
		
			_trigger: function( type, event, data ) {
				var prop, orig;
				var callback = this.options[ type ];
		
				data = data || {};
				event = $.Event( event );
				event.type = ( type === this.widgetEventPrefix ?
					type :
					this.widgetEventPrefix + type ).toLowerCase();
		
				// The original event may come from any element
				// so we need to reset the target on the new event
				event.target = this.element[ 0 ];
		
				// Copy original event properties over to the new event
				orig = event.originalEvent;
				if ( orig ) {
					for ( prop in orig ) {
						if ( !( prop in event ) ) {
							event[ prop ] = orig[ prop ];
						}
					}
				}
		
				this.element.trigger( event, data );
				return !( $.isFunction( callback ) &&
					callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
					event.isDefaultPrevented() );
			}
		};
		
		$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
			$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
				if ( typeof options === "string" ) {
					options = { effect: options };
				}
		
				var hasOptions;
				var effectName = !options ?
					method :
					options === true || typeof options === "number" ?
						defaultEffect :
						options.effect || defaultEffect;
		
				options = options || {};
				if ( typeof options === "number" ) {
					options = { duration: options };
				}
		
				hasOptions = !$.isEmptyObject( options );
				options.complete = callback;
		
				if ( options.delay ) {
					element.delay( options.delay );
				}
		
				if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
					element[ method ]( options );
				} else if ( effectName !== method && element[ effectName ] ) {
					element[ effectName ]( options.duration, options.easing, callback );
				} else {
					element.queue( function( next ) {
						$( this )[ method ]();
						if ( callback ) {
							callback.call( element[ 0 ] );
						}
						next();
					} );
				}
			};
		} );
		
		return $.widget;
		
		} ) );
	
	
	/***/ },
	/* 14 */
	/*!*******************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/data.js ***!
	  \*******************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI :data 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: :data Selector
		//>>group: Core
		//>>description: Selects elements which have data stored under the specified key.
		//>>docs: http://api.jqueryui.com/data-selector/
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		return $.extend( $.expr[ ":" ], {
			data: $.expr.createPseudo ?
				$.expr.createPseudo( function( dataName ) {
					return function( elem ) {
						return !!$.data( elem, dataName );
					};
				} ) :
		
				// Support: jQuery <1.8
				function( elem, i, match ) {
					return !!$.data( elem, match[ 3 ] );
				}
		} );
		} ) );
	
	
	/***/ },
	/* 15 */
	/*!*********************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/plugin.js ***!
	  \*********************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		
		// $.ui.plugin is deprecated. Use $.widget() extensions instead.
		return $.ui.plugin = {
			add: function( module, option, set ) {
				var i,
					proto = $.ui[ module ].prototype;
				for ( i in set ) {
					proto.plugins[ i ] = proto.plugins[ i ] || [];
					proto.plugins[ i ].push( [ option, set[ i ] ] );
				}
			},
			call: function( instance, name, args, allowDisconnected ) {
				var i,
					set = instance.plugins[ name ];
		
				if ( !set ) {
					return;
				}
		
				if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
						instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
					return;
				}
		
				for ( i = 0; i < set.length; i++ ) {
					if ( instance.options[ set[ i ][ 0 ] ] ) {
						set[ i ][ 1 ].apply( instance.element, args );
					}
				}
			}
		};
		
		} ) );
	
	
	/***/ },
	/* 16 */
	/*!************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/safe-blur.js ***!
	  \************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		return $.ui.safeBlur = function( element ) {
		
			// Support: IE9 - 10 only
			// If the <body> is blurred, IE will switch windows, see #9420
			if ( element && element.nodeName.toLowerCase() !== "body" ) {
				$( element ).trigger( "blur" );
			}
		};
		
		} ) );
	
	
	/***/ },
	/* 17 */
	/*!****************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/scroll-parent.js ***!
	  \****************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Scroll Parent 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: scrollParent
		//>>group: Core
		//>>description: Get the closest ancestor element that is scrollable.
		//>>docs: http://api.jqueryui.com/scrollParent/
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		
		return $.fn.scrollParent = function( includeHidden ) {
			var position = this.css( "position" ),
				excludeStaticParent = position === "absolute",
				overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				scrollParent = this.parents().filter( function() {
					var parent = $( this );
					if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
						return false;
					}
					return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
						parent.css( "overflow-x" ) );
				} ).eq( 0 );
		
			return position === "fixed" || !scrollParent.length ?
				$( this[ 0 ].ownerDocument || document ) :
				scrollParent;
		};
		
		} ) );
	
	
	/***/ },
	/* 18 */
	/*!**********************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/safe-active-element.js ***!
	  \**********************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 8), __webpack_require__(/*! ./version */ 12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		} ( function( $ ) {
		return $.ui.safeActiveElement = function( document ) {
			var activeElement;
		
			// Support: IE 9 only
			// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
			try {
				activeElement = document.activeElement;
			} catch ( error ) {
				activeElement = document.body;
			}
		
			// Support: IE 9 - 11 only
			// IE may return null instead of an element
			// Interestingly, this only seems to occur when NOT in an iframe
			if ( !activeElement ) {
				activeElement = document.body;
			}
		
			// Support: IE 11 only
			// IE11 returns a seemingly empty object in some cases when accessing
			// document.activeElement from an <iframe>
			if ( !activeElement.nodeName ) {
				activeElement = document.body;
			}
		
			return activeElement;
		};
		
		} ) );
	
	
	/***/ },
	/* 19 */
	/*!*******************************************************!*\
	  !*** ../jquery-ui-1.12.0-rc.2/ui/widgets/sortable.js ***!
	  \*******************************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * jQuery UI Sortable 1.12.0-rc.2
		 * http://jqueryui.com
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 */
		
		//>>label: Sortable
		//>>group: Interactions
		//>>description: Enables items in a list to be sorted using the mouse.
		//>>docs: http://api.jqueryui.com/sortable/
		//>>demos: http://jqueryui.com/sortable/
		//>>css.structure: ../../themes/base/sortable.css
		
		( function( factory ) {
			if ( true ) {
		
				// AMD. Register as an anonymous module.
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
					__webpack_require__(/*! jquery */ 8),
					__webpack_require__(/*! ./mouse */ 10),
					__webpack_require__(/*! ../data */ 14),
					__webpack_require__(/*! ../ie */ 11),
					__webpack_require__(/*! ../scroll-parent */ 17),
					__webpack_require__(/*! ../version */ 12),
					__webpack_require__(/*! ../widget */ 13)
				], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
		
				// Browser globals
				factory( jQuery );
			}
		}( function( $ ) {
		
		return $.widget( "ui.sortable", $.ui.mouse, {
			version: "1.12.0-rc.2",
			widgetEventPrefix: "sort",
			ready: false,
			options: {
				appendTo: "parent",
				axis: false,
				connectWith: false,
				containment: false,
				cursor: "auto",
				cursorAt: false,
				dropOnEmpty: true,
				forcePlaceholderSize: false,
				forceHelperSize: false,
				grid: false,
				handle: false,
				helper: "original",
				items: "> *",
				opacity: false,
				placeholder: false,
				revert: false,
				scroll: true,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1000,
		
				// Callbacks
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
		
			_isOverAxis: function( x, reference, size ) {
				return ( x >= reference ) && ( x < ( reference + size ) );
			},
		
			_isFloating: function( item ) {
				return ( /left|right/ ).test( item.css( "float" ) ) ||
					( /inline|table-cell/ ).test( item.css( "display" ) );
			},
		
			_create: function() {
				this.containerCache = {};
				this._addClass( "ui-sortable" );
		
				//Get the items
				this.refresh();
		
				//Let's determine the parent's offset
				this.offset = this.element.offset();
		
				//Initialize mouse events for interaction
				this._mouseInit();
		
				this._setHandleClassName();
		
				//We're ready to go
				this.ready = true;
		
			},
		
			_setOption: function( key, value ) {
				this._super( key, value );
		
				if ( key === "handle" ) {
					this._setHandleClassName();
				}
			},
		
			_setHandleClassName: function() {
				var that = this;
				this._removeClass( this.element.find( ".ui-sortable-handle" ), "ui-sortable-handle" );
				$.each( this.items, function() {
					that._addClass(
						this.instance.options.handle ?
							this.item.find( this.instance.options.handle ) :
							this.item,
						"ui-sortable-handle"
					);
				} );
			},
		
			_destroy: function() {
				this._mouseDestroy();
		
				for ( var i = this.items.length - 1; i >= 0; i-- ) {
					this.items[ i ].item.removeData( this.widgetName + "-item" );
				}
		
				return this;
			},
		
			_mouseCapture: function( event, overrideHandle ) {
				var currentItem = null,
					validHandle = false,
					that = this;
		
				if ( this.reverting ) {
					return false;
				}
		
				if ( this.options.disabled || this.options.type === "static" ) {
					return false;
				}
		
				//We have to refresh the items data once first
				this._refreshItems( event );
		
				//Find out if the clicked node (or one of its parents) is a actual item in this.items
				$( event.target ).parents().each( function() {
					if ( $.data( this, that.widgetName + "-item" ) === that ) {
						currentItem = $( this );
						return false;
					}
				} );
				if ( $.data( event.target, that.widgetName + "-item" ) === that ) {
					currentItem = $( event.target );
				}
		
				if ( !currentItem ) {
					return false;
				}
				if ( this.options.handle && !overrideHandle ) {
					$( this.options.handle, currentItem ).find( "*" ).addBack().each( function() {
						if ( this === event.target ) {
							validHandle = true;
						}
					} );
					if ( !validHandle ) {
						return false;
					}
				}
		
				this.currentItem = currentItem;
				this._removeCurrentsFromItems();
				return true;
		
			},
		
			_mouseStart: function( event, overrideHandle, noActivation ) {
		
				this._trigger( "mouseStart", event, this._uiHash() );
				
				var i, body,
					o = this.options;
		
				this.currentContainer = this;
		
				//We only need to call refreshPositions, because the refreshItems call has been moved to
				// mouseCapture
				this.refreshPositions();
		
				//Create and append the visible helper
				this.helper = this._createHelper( event );
		
				//Cache the helper size
				this._cacheHelperProportions();
		
				/*
				 * - Position generation -
				 * This block generates everything position related - it's the core of draggables.
				 */
		
				//Cache the margins of the original element
				this._cacheMargins();
		
				//Get the next scrolling parent
				this.scrollParent = this.helper.scrollParent();
		
				//The element's absolute position on the page minus margins
				this.offset = this.currentItem.offset();
				this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				};
		
				$.extend( this.offset, {
					click: { //Where the click happened, relative to the element
						left: event.pageX - this.offset.left,
						top: event.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
		
					// This is a relative to absolute position minus the actual position calculation -
					// only used for relative positioned helper
					relative: this._getRelativeOffset()
				} );
		
				// Only after we got the offset, we can change the helper's position to absolute
				// TODO: Still need to figure out a way to make relative sorting possible
				this.helper.css( "position", "absolute" );
				this.cssPosition = this.helper.css( "position" );
		
				//Generate the original position
				this.originalPosition = this._generatePosition( event );
				this.originalPageX = event.pageX;
				this.originalPageY = event.pageY;
		
				//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
				( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );
		
				//Cache the former DOM position
				this.domPosition = {
					prev: this.currentItem.prev()[ 0 ],
					parent: this.currentItem.parent()[ 0 ]
				};
		
				// If the helper is not the original, hide the original so it's not playing any role during
				// the drag, won't cause anything bad this way
				if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
					this.currentItem.hide();
				}
		
				//Create the placeholder
				this._createPlaceholder();
		
				//Set a containment if given in the options
				if ( o.containment ) {
					this._setContainment();
				}
		
				if ( o.cursor && o.cursor !== "auto" ) { // cursor option
					body = this.document.find( "body" );
		
					// Support: IE
					this.storedCursor = body.css( "cursor" );
					body.css( "cursor", o.cursor );
		
					this.storedStylesheet =
						$( "<style>*{ cursor: " + o.cursor + " !important; }</style>" ).appendTo( body );
				}
		
				if ( o.opacity ) { // opacity option
					if ( this.helper.css( "opacity" ) ) {
						this._storedOpacity = this.helper.css( "opacity" );
					}
					this.helper.css( "opacity", o.opacity );
				}
		
				if ( o.zIndex ) { // zIndex option
					if ( this.helper.css( "zIndex" ) ) {
						this._storedZIndex = this.helper.css( "zIndex" );
					}
					this.helper.css( "zIndex", o.zIndex );
				}
		
				//Prepare scrolling
				if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
						this.scrollParent[ 0 ].tagName !== "HTML" ) {
					this.overflowOffset = this.scrollParent.offset();
				}
		
				//Call callbacks
				this._trigger( "start", event, this._uiHash() );
		
				//Recache the helper size
				if ( !this._preserveHelperProportions ) {
					this._cacheHelperProportions();
				}
		
				//Post "activate" events to possible containers
				if ( !noActivation ) {
					for ( i = this.containers.length - 1; i >= 0; i-- ) {
						this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
					}
				}
		
				//Prepare possible droppables
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.current = this;
				}
		
				if ( $.ui.ddmanager && !o.dropBehaviour ) {
					$.ui.ddmanager.prepareOffsets( this, event );
				}
		
				this.dragging = true;
		
				this._addClass( this.helper, "ui-sortable-helper" );
		
				// Execute the drag once - this causes the helper not to be visiblebefore getting its
				// correct position
				this._mouseDrag( event );
				return true;
		
			},
		
			_mouseDrag: function( event ) {
				var i, item, itemElement, intersection,
					o = this.options,
					scrolled = false;
		
				//Compute the helpers position
				this.position = this._generatePosition( event );
				this.positionAbs = this._convertPositionTo( "absolute" );
		
				if ( !this.lastPositionAbs ) {
					this.lastPositionAbs = this.positionAbs;
				}
		
				//Do scrolling
				if ( this.options.scroll ) {
					if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
							this.scrollParent[ 0 ].tagName !== "HTML" ) {
		
						if ( ( this.overflowOffset.top + this.scrollParent[ 0 ].offsetHeight ) -
								event.pageY < o.scrollSensitivity ) {
							this.scrollParent[ 0 ].scrollTop =
								scrolled = this.scrollParent[ 0 ].scrollTop + o.scrollSpeed;
						} else if ( event.pageY - this.overflowOffset.top < o.scrollSensitivity ) {
							this.scrollParent[ 0 ].scrollTop =
								scrolled = this.scrollParent[ 0 ].scrollTop - o.scrollSpeed;
						}
		
						if ( ( this.overflowOffset.left + this.scrollParent[ 0 ].offsetWidth ) -
								event.pageX < o.scrollSensitivity ) {
							this.scrollParent[ 0 ].scrollLeft = scrolled =
								this.scrollParent[ 0 ].scrollLeft + o.scrollSpeed;
						} else if ( event.pageX - this.overflowOffset.left < o.scrollSensitivity ) {
							this.scrollParent[ 0 ].scrollLeft = scrolled =
								this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed;
						}
		
					} else {
		
						if ( event.pageY - this.document.scrollTop() < o.scrollSensitivity ) {
							scrolled = this.document.scrollTop( this.document.scrollTop() - o.scrollSpeed );
						} else if ( this.window.height() - ( event.pageY - this.document.scrollTop() ) <
								o.scrollSensitivity ) {
							scrolled = this.document.scrollTop( this.document.scrollTop() + o.scrollSpeed );
						}
		
						if ( event.pageX - this.document.scrollLeft() < o.scrollSensitivity ) {
							scrolled = this.document.scrollLeft(
								this.document.scrollLeft() - o.scrollSpeed
							);
						} else if ( this.window.width() - ( event.pageX - this.document.scrollLeft() ) <
								o.scrollSensitivity ) {
							scrolled = this.document.scrollLeft(
								this.document.scrollLeft() + o.scrollSpeed
							);
						}
		
					}
		
					if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
						$.ui.ddmanager.prepareOffsets( this, event );
					}
				}
		
				//Regenerate the absolute position used for position checks
				this.positionAbs = this._convertPositionTo( "absolute" );
		
				//Set the helper position
				if ( !this.options.axis || this.options.axis !== "y" ) {
					this.helper[ 0 ].style.left = this.position.left + "px";
				}
				if ( !this.options.axis || this.options.axis !== "x" ) {
					this.helper[ 0 ].style.top = this.position.top + "px";
				}
		
				//Rearrange
				for ( i = this.items.length - 1; i >= 0; i-- ) {
		
					//Cache variables and intersection, continue if no intersection
					item = this.items[ i ];
					itemElement = item.item[ 0 ];
					intersection = this._intersectsWithPointer( item );
					if ( !intersection ) {
						continue;
					}
		
					// Only put the placeholder inside the current Container, skip all
					// items from other containers. This works because when moving
					// an item from one container to another the
					// currentContainer is switched before the placeholder is moved.
					//
					// Without this, moving items in "sub-sortables" can cause
					// the placeholder to jitter between the outer and inner container.
					if ( item.instance !== this.currentContainer ) {
						continue;
					}
		
					// Cannot intersect with itself
					// no useless actions that have been done before
					// no action if the item moved is the parent of the item checked
					if ( itemElement !== this.currentItem[ 0 ] &&
						this.placeholder[ intersection === 1 ? "next" : "prev" ]()[ 0 ] !== itemElement &&
						!$.contains( this.placeholder[ 0 ], itemElement ) &&
						( this.options.type === "semi-dynamic" ?
							!$.contains( this.element[ 0 ], itemElement ) :
							true
						)
					) {
		
						this.direction = intersection === 1 ? "down" : "up";
		
						if ( this.options.tolerance === "pointer" || this._intersectsWithSides( item ) ) {
							this._rearrange( event, item );
						} else {
							break;
						}
		
						this._trigger( "change", event, this._uiHash() );
						break;
					}
				}
		
				//Post events to containers
				this._contactContainers( event );
		
				//Interconnect with droppables
				if ( $.ui.ddmanager ) {
					$.ui.ddmanager.drag( this, event );
				}
		
				//Call callbacks
				this._trigger( "sort", event, this._uiHash() );
		
				this.lastPositionAbs = this.positionAbs;
				return false;
		
			},
		
			_mouseStop: function( event, noPropagation ) {
		
				if ( !event ) {
					return;
				}
		
				//If we are using droppables, inform the manager about the drop
				if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
					$.ui.ddmanager.drop( this, event );
				}
		
				if ( this.options.revert ) {
					var that = this,
						cur = this.placeholder.offset(),
						axis = this.options.axis,
						animation = {};
		
					if ( !axis || axis === "x" ) {
						animation.left = cur.left - this.offset.parent.left - this.margins.left +
							( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
								0 :
								this.offsetParent[ 0 ].scrollLeft
							);
					}
					if ( !axis || axis === "y" ) {
						animation.top = cur.top - this.offset.parent.top - this.margins.top +
							( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
								0 :
								this.offsetParent[ 0 ].scrollTop
							);
					}
					this.reverting = true;
					$( this.helper ).animate(
						animation,
						parseInt( this.options.revert, 10 ) || 500,
						function() {
							if(that.options.noRemove){
								return;
							}
							that._clear( event );
						}
					);
				} else {
					this._clear( event, noPropagation );
				}
		
				return false;
		
			},
		
			cancel: function() {
		
				if ( this.dragging ) {
		
					this._mouseUp( { target: null } );
		
					if ( this.options.helper === "original" ) {
						this.currentItem.css( this._storedCSS );
						this._removeClass( this.currentItem, "ui-sortable-helper" );
					} else {
						this.currentItem.show();
					}
		
					//Post deactivating events to containers
					for ( var i = this.containers.length - 1; i >= 0; i-- ) {
						this.containers[ i ]._trigger( "deactivate", null, this._uiHash( this ) );
						if ( this.containers[ i ].containerCache.over ) {
							this.containers[ i ]._trigger( "out", null, this._uiHash( this ) );
							this.containers[ i ].containerCache.over = 0;
						}
					}
		
				}
		
				if ( this.placeholder ) {
		
					//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
					// it unbinds ALL events from the original node!
					if ( this.placeholder[ 0 ].parentNode ) {
						this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );
					}
					if ( this.options.helper !== "original" && this.helper &&
							this.helper[ 0 ].parentNode ) {
						this.helper.remove();
					}
		
					$.extend( this, {
						helper: null,
						dragging: false,
						reverting: false,
						_noFinalSort: null
					} );
		
					if ( this.domPosition.prev ) {
						$( this.domPosition.prev ).after( this.currentItem );
					} else {
						$( this.domPosition.parent ).prepend( this.currentItem );
					}
				}
		
				return this;
		
			},
		
			serialize: function( o ) {
		
				var items = this._getItemsAsjQuery( o && o.connected ),
					str = [];
				o = o || {};
		
				$( items ).each( function() {
					var res = ( $( o.item || this ).attr( o.attribute || "id" ) || "" )
						.match( o.expression || ( /(.+)[\-=_](.+)/ ) );
					if ( res ) {
						str.push(
							( o.key || res[ 1 ] + "[]" ) +
							"=" + ( o.key && o.expression ? res[ 1 ] : res[ 2 ] ) );
					}
				} );
		
				if ( !str.length && o.key ) {
					str.push( o.key + "=" );
				}
		
				return str.join( "&" );
		
			},
		
			toArray: function( o ) {
		
				var items = this._getItemsAsjQuery( o && o.connected ),
					ret = [];
		
				o = o || {};
		
				items.each( function() {
					ret.push( $( o.item || this ).attr( o.attribute || "id" ) || "" );
				} );
				return ret;
		
			},
		
			/* Be careful with the following core functions */
			_intersectsWith: function( item ) {
		
				var x1 = this.positionAbs.left,
					x2 = x1 + this.helperProportions.width,
					y1 = this.positionAbs.top,
					y2 = y1 + this.helperProportions.height,
					l = item.left,
					r = l + item.width,
					t = item.top,
					b = t + item.height,
					dyClick = this.offset.click.top,
					dxClick = this.offset.click.left,
					isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t &&
						( y1 + dyClick ) < b ),
					isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l &&
						( x1 + dxClick ) < r ),
					isOverElement = isOverElementHeight && isOverElementWidth;
		
				if ( this.options.tolerance === "pointer" ||
					this.options.forcePointerForContainers ||
					( this.options.tolerance !== "pointer" &&
						this.helperProportions[ this.floating ? "width" : "height" ] >
						item[ this.floating ? "width" : "height" ] )
				) {
					return isOverElement;
				} else {
		
					return ( l < x1 + ( this.helperProportions.width / 2 ) && // Right Half
						x2 - ( this.helperProportions.width / 2 ) < r && // Left Half
						t < y1 + ( this.helperProportions.height / 2 ) && // Bottom Half
						y2 - ( this.helperProportions.height / 2 ) < b ); // Top Half
		
				}
			},
		
			_intersectsWithPointer: function( item ) {
				var verticalDirection, horizontalDirection,
					isOverElementHeight = ( this.options.axis === "x" ) ||
						this._isOverAxis(
							this.positionAbs.top + this.offset.click.top, item.top, item.height ),
					isOverElementWidth = ( this.options.axis === "y" ) ||
						this._isOverAxis(
							this.positionAbs.left + this.offset.click.left, item.left, item.width ),
					isOverElement = isOverElementHeight && isOverElementWidth;
		
				if ( !isOverElement ) {
					return false;
				}
		
				verticalDirection = this._getDragVerticalDirection();
				horizontalDirection = this._getDragHorizontalDirection();
		
				return this.floating ?
					( ( horizontalDirection === "right" || verticalDirection === "down" ) ? 2 : 1 )
					: ( verticalDirection && ( verticalDirection === "down" ? 2 : 1 ) );
		
			},
		
			_intersectsWithSides: function( item ) {
		
				var isOverBottomHalf = this._isOverAxis( this.positionAbs.top +
						this.offset.click.top, item.top + ( item.height / 2 ), item.height ),
					isOverRightHalf = this._isOverAxis( this.positionAbs.left +
						this.offset.click.left, item.left + ( item.width / 2 ), item.width ),
					verticalDirection = this._getDragVerticalDirection(),
					horizontalDirection = this._getDragHorizontalDirection();
		
				if ( this.floating && horizontalDirection ) {
					return ( ( horizontalDirection === "right" && isOverRightHalf ) ||
						( horizontalDirection === "left" && !isOverRightHalf ) );
				} else {
					return verticalDirection && ( ( verticalDirection === "down" && isOverBottomHalf ) ||
						( verticalDirection === "up" && !isOverBottomHalf ) );
				}
		
			},
		
			_getDragVerticalDirection: function() {
				var delta = this.positionAbs.top - this.lastPositionAbs.top;
				return delta !== 0 && ( delta > 0 ? "down" : "up" );
			},
		
			_getDragHorizontalDirection: function() {
				var delta = this.positionAbs.left - this.lastPositionAbs.left;
				return delta !== 0 && ( delta > 0 ? "right" : "left" );
			},
		
			refresh: function( event ) {
				this._refreshItems( event );
				this._setHandleClassName();
				this.refreshPositions();
				return this;
			},
		
			_connectWith: function() {
				var options = this.options;
				return options.connectWith.constructor === String ?
					[ options.connectWith ] :
					options.connectWith;
			},
		
			_getItemsAsjQuery: function( connected ) {
		
				var i, j, cur, inst,
					items = [],
					queries = [],
					connectWith = this._connectWith();
		
				if ( connectWith && connected ) {
					for ( i = connectWith.length - 1; i >= 0; i-- ) {
						cur = $( connectWith[ i ], this.document[ 0 ] );
						for ( j = cur.length - 1; j >= 0; j-- ) {
							inst = $.data( cur[ j ], this.widgetFullName );
							if ( inst && inst !== this && !inst.options.disabled ) {
								queries.push( [ $.isFunction( inst.options.items ) ?
									inst.options.items.call( inst.element ) :
									$( inst.options.items, inst.element )
										.not( ".ui-sortable-helper" )
										.not( ".ui-sortable-placeholder" ), inst ] );
							}
						}
					}
				}
		
				queries.push( [ $.isFunction( this.options.items ) ?
					this.options.items
						.call( this.element, null, { options: this.options, item: this.currentItem } ) :
					$( this.options.items, this.element )
						.not( ".ui-sortable-helper" )
						.not( ".ui-sortable-placeholder" ), this ] );
		
				function addItems() {
					items.push( this );
				}
				for ( i = queries.length - 1; i >= 0; i-- ) {
					queries[ i ][ 0 ].each( addItems );
				}
		
				return $( items );
		
			},
		
			_removeCurrentsFromItems: function() {
		
				var list = this.currentItem.find( ":data(" + this.widgetName + "-item)" );
		
				this.items = $.grep( this.items, function( item ) {
					for ( var j = 0; j < list.length; j++ ) {
						if ( list[ j ] === item.item[ 0 ] ) {
							return false;
						}
					}
					return true;
				} );
		
			},
		
			_refreshItems: function( event ) {
		
				this.items = [];
				this.containers = [ this ];
		
				var i, j, cur, inst, targetData, _queries, item, queriesLength,
					items = this.items,
					queries = [ [ $.isFunction( this.options.items ) ?
						this.options.items.call( this.element[ 0 ], event, { item: this.currentItem } ) :
						$( this.options.items, this.element ), this ] ],
					connectWith = this._connectWith();
		
				//Shouldn't be run the first time through due to massive slow-down
				if ( connectWith && this.ready ) {
					for ( i = connectWith.length - 1; i >= 0; i-- ) {
						cur = $( connectWith[ i ], this.document[ 0 ] );
						for ( j = cur.length - 1; j >= 0; j-- ) {
							inst = $.data( cur[ j ], this.widgetFullName );
							if ( inst && inst !== this && !inst.options.disabled ) {
								queries.push( [ $.isFunction( inst.options.items ) ?
									inst.options.items
										.call( inst.element[ 0 ], event, { item: this.currentItem } ) :
									$( inst.options.items, inst.element ), inst ] );
								this.containers.push( inst );
							}
						}
					}
				}
		
				for ( i = queries.length - 1; i >= 0; i-- ) {
					targetData = queries[ i ][ 1 ];
					_queries = queries[ i ][ 0 ];
		
					for ( j = 0, queriesLength = _queries.length; j < queriesLength; j++ ) {
						item = $( _queries[ j ] );
		
						// Data for target checking (mouse manager)
						item.data( this.widgetName + "-item", targetData );
		
						items.push( {
							item: item,
							instance: targetData,
							width: 0, height: 0,
							left: 0, top: 0
						} );
					}
				}
		
			},
		
			refreshPositions: function( fast ) {
		
				// Determine whether items are being displayed horizontally
				this.floating = this.items.length ?
					this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
					false;
		
				//This has to be redone because due to the item being moved out/into the offsetParent,
				// the offsetParent's position will change
				if ( this.offsetParent && this.helper ) {
					this.offset.parent = this._getParentOffset();
				}
		
				var i, item, t, p;
		
				for ( i = this.items.length - 1; i >= 0; i-- ) {
					item = this.items[ i ];
		
					//We ignore calculating positions of all connected containers when we're not over them
					if ( item.instance !== this.currentContainer && this.currentContainer &&
							item.item[ 0 ] !== this.currentItem[ 0 ] ) {
						continue;
					}
		
					t = this.options.toleranceElement ?
						$( this.options.toleranceElement, item.item ) :
						item.item;
		
					if ( !fast ) {
						item.width = t.outerWidth();
						item.height = t.outerHeight();
					}
		
					p = t.offset();
					item.left = p.left;
					item.top = p.top;
				}
		
				if ( this.options.custom && this.options.custom.refreshContainers ) {
					this.options.custom.refreshContainers.call( this );
				} else {
					for ( i = this.containers.length - 1; i >= 0; i-- ) {
						p = this.containers[ i ].element.offset();
						this.containers[ i ].containerCache.left = p.left;
						this.containers[ i ].containerCache.top = p.top;
						this.containers[ i ].containerCache.width =
							this.containers[ i ].element.outerWidth();
						this.containers[ i ].containerCache.height =
							this.containers[ i ].element.outerHeight();
					}
				}
		
				return this;
			},
		
			_createPlaceholder: function( that ) {
				that = that || this;
				var className,
					o = that.options;
		
				if ( !o.placeholder || o.placeholder.constructor === String ) {
					className = o.placeholder;
					o.placeholder = {
						element: function() {
		
							var nodeName = that.currentItem[ 0 ].nodeName.toLowerCase(),
								element = $( "<" + nodeName + ">", that.document[ 0 ] );
		
								that._addClass( element, "ui-sortable-placeholder",
										className || that.currentItem[ 0 ].className )
									._removeClass( element, "ui-sortable-helper" );
		
							if ( nodeName === "tbody" ) {
								that._createTrPlaceholder(
									that.currentItem.find( "tr" ).eq( 0 ),
									$( "<tr>", that.document[ 0 ] ).appendTo( element )
								);
							} else if ( nodeName === "tr" ) {
								that._createTrPlaceholder( that.currentItem, element );
							} else if ( nodeName === "img" ) {
								element.attr( "src", that.currentItem.attr( "src" ) );
							}
		
							if ( !className ) {
								element.css( "visibility", "hidden" );
							}
		
							return element;
						},
						update: function( container, p ) {
		
							// 1. If a className is set as 'placeholder option, we don't force sizes -
							// the class is responsible for that
							// 2. The option 'forcePlaceholderSize can be enabled to force it even if a
							// class name is specified
							if ( className && !o.forcePlaceholderSize ) {
								return;
							}
		
							//If the element doesn't have a actual height by itself (without styles coming
							// from a stylesheet), it receives the inline height from the dragged item
							if ( !p.height() ) {
								p.height(
									that.currentItem.innerHeight() -
									parseInt( that.currentItem.css( "paddingTop" ) || 0, 10 ) -
									parseInt( that.currentItem.css( "paddingBottom" ) || 0, 10 ) );
							}
							if ( !p.width() ) {
								p.width(
									that.currentItem.innerWidth() -
									parseInt( that.currentItem.css( "paddingLeft" ) || 0, 10 ) -
									parseInt( that.currentItem.css( "paddingRight" ) || 0, 10 ) );
							}
						}
					};
				}
		
				//Create the placeholder
				that.placeholder = $( o.placeholder.element.call( that.element, that.currentItem ) );
		
				//Append it after the actual current item
				that.currentItem.after( that.placeholder );
		
				//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
				o.placeholder.update( that, that.placeholder );
		
			},
		
			_createTrPlaceholder: function( sourceTr, targetTr ) {
				var that = this;
		
				sourceTr.children().each( function() {
					$( "<td>&#160;</td>", that.document[ 0 ] )
						.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
						.appendTo( targetTr );
				} );
			},
		
			_contactContainers: function( event ) {
				var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
					floating, axis,
					innermostContainer = null,
					innermostIndex = null;
		
				// Get innermost container that intersects with item
				for ( i = this.containers.length - 1; i >= 0; i-- ) {
		
					// Never consider a container that's located within the item itself
					if ( $.contains( this.currentItem[ 0 ], this.containers[ i ].element[ 0 ] ) ) {
						continue;
					}
		
					if ( this._intersectsWith( this.containers[ i ].containerCache ) ) {
		
						// If we've already found a container and it's more "inner" than this, then continue
						if ( innermostContainer &&
								$.contains(
									this.containers[ i ].element[ 0 ],
									innermostContainer.element[ 0 ] ) ) {
							continue;
						}
		
						innermostContainer = this.containers[ i ];
						innermostIndex = i;
		
					} else {
		
						// container doesn't intersect. trigger "out" event if necessary
						if ( this.containers[ i ].containerCache.over ) {
							this.containers[ i ]._trigger( "out", event, this._uiHash( this ) );
							this.containers[ i ].containerCache.over = 0;
						}
					}
		
				}
		
				// If no intersecting containers found, return
				if ( !innermostContainer ) {
					return;
				}
		
				// Move the item into the container if it's not there already
				if ( this.containers.length === 1 ) {
					if ( !this.containers[ innermostIndex ].containerCache.over ) {
						this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
						this.containers[ innermostIndex ].containerCache.over = 1;
					}
				} else {
		
					// When entering a new container, we will find the item with the least distance and
					// append our item near it
					dist = 10000;
					itemWithLeastDistance = null;
					floating = innermostContainer.floating || this._isFloating( this.currentItem );
					posProperty = floating ? "left" : "top";
					sizeProperty = floating ? "width" : "height";
					axis = floating ? "pageX" : "pageY";
		
					for ( j = this.items.length - 1; j >= 0; j-- ) {
						if ( !$.contains(
								this.containers[ innermostIndex ].element[ 0 ], this.items[ j ].item[ 0 ] )
						) {
							continue;
						}
						if ( this.items[ j ].item[ 0 ] === this.currentItem[ 0 ] ) {
							continue;
						}
		
						cur = this.items[ j ].item.offset()[ posProperty ];
						nearBottom = false;
						if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
							nearBottom = true;
						}
		
						if ( Math.abs( event[ axis ] - cur ) < dist ) {
							dist = Math.abs( event[ axis ] - cur );
							itemWithLeastDistance = this.items[ j ];
							this.direction = nearBottom ? "up" : "down";
						}
					}
		
					//Check if dropOnEmpty is enabled
					if ( !itemWithLeastDistance && !this.options.dropOnEmpty ) {
						return;
					}
		
					if ( this.currentContainer === this.containers[ innermostIndex ] ) {
						if ( !this.currentContainer.containerCache.over ) {
							this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
							this.currentContainer.containerCache.over = 1;
						}
						return;
					}
		
					itemWithLeastDistance ?
						this._rearrange( event, itemWithLeastDistance, null, true ) :
						this._rearrange( event, null, this.containers[ innermostIndex ].element, true );
					this._trigger( "change", event, this._uiHash() );
					this.containers[ innermostIndex ]._trigger( "change", event, this._uiHash( this ) );
					this.currentContainer = this.containers[ innermostIndex ];
		
					//Update the placeholder
					this.options.placeholder.update( this.currentContainer, this.placeholder );
		
					this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
					this.containers[ innermostIndex ].containerCache.over = 1;
				}
		
			},
		
			_createHelper: function( event ) {
		
				var o = this.options,
					helper = $.isFunction( o.helper ) ?
						$( o.helper.apply( this.element[ 0 ], [ event, this.currentItem ] ) ) :
						( o.helper === "clone" ? this.currentItem.clone() : this.currentItem );
		
				//Add the helper to the DOM if that didn't happen already
				if ( !helper.parents( "body" ).length ) {
					$( o.appendTo !== "parent" ?
						o.appendTo :
						this.currentItem[ 0 ].parentNode )[ 0 ].appendChild( helper[ 0 ] );
				}
		
				if ( helper[ 0 ] === this.currentItem[ 0 ] ) {
					this._storedCSS = {
						width: this.currentItem[ 0 ].style.width,
						height: this.currentItem[ 0 ].style.height,
						position: this.currentItem.css( "position" ),
						top: this.currentItem.css( "top" ),
						left: this.currentItem.css( "left" )
					};
				}
		
				if ( !helper[ 0 ].style.width || o.forceHelperSize ) {
					helper.width( this.currentItem.width() );
				}
				if ( !helper[ 0 ].style.height || o.forceHelperSize ) {
					helper.height( this.currentItem.height() );
				}
		
				return helper;
		
			},
		
			_adjustOffsetFromHelper: function( obj ) {
				if ( typeof obj === "string" ) {
					obj = obj.split( " " );
				}
				if ( $.isArray( obj ) ) {
					obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
				}
				if ( "left" in obj ) {
					this.offset.click.left = obj.left + this.margins.left;
				}
				if ( "right" in obj ) {
					this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
				}
				if ( "top" in obj ) {
					this.offset.click.top = obj.top + this.margins.top;
				}
				if ( "bottom" in obj ) {
					this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
				}
			},
		
			_getParentOffset: function() {
		
				//Get the offsetParent and cache its position
				this.offsetParent = this.helper.offsetParent();
				var po = this.offsetParent.offset();
		
				// This is a special case where we need to modify a offset calculated on start, since the
				// following happened:
				// 1. The position of the helper is absolute, so it's position is calculated based on the
				// next positioned parent
				// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
				// the document, which means that the scroll is included in the initial calculation of the
				// offset of the parent, and never recalculated upon drag
				if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== this.document[ 0 ] &&
						$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
					po.left += this.scrollParent.scrollLeft();
					po.top += this.scrollParent.scrollTop();
				}
		
				// This needs to be actually done for all browsers, since pageX/pageY includes this
				// information with an ugly IE fix
				if ( this.offsetParent[ 0 ] === this.document[ 0 ].body ||
						( this.offsetParent[ 0 ].tagName &&
						this.offsetParent[ 0 ].tagName.toLowerCase() === "html" && $.ui.ie ) ) {
					po = { top: 0, left: 0 };
				}
		
				return {
					top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
					left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
				};
		
			},
		
			_getRelativeOffset: function() {
		
				if ( this.cssPosition === "relative" ) {
					var p = this.currentItem.position();
					return {
						top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
							this.scrollParent.scrollTop(),
						left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
							this.scrollParent.scrollLeft()
					};
				} else {
					return { top: 0, left: 0 };
				}
		
			},
		
			_cacheMargins: function() {
				this.margins = {
					left: ( parseInt( this.currentItem.css( "marginLeft" ), 10 ) || 0 ),
					top: ( parseInt( this.currentItem.css( "marginTop" ), 10 ) || 0 )
				};
			},
		
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				};
			},
		
			_setContainment: function() {
		
				var ce, co, over,
					o = this.options;
				if ( o.containment === "parent" ) {
					o.containment = this.helper[ 0 ].parentNode;
				}
				if ( o.containment === "document" || o.containment === "window" ) {
					this.containment = [
						0 - this.offset.relative.left - this.offset.parent.left,
						0 - this.offset.relative.top - this.offset.parent.top,
						o.containment === "document" ?
							this.document.width() :
							this.window.width() - this.helperProportions.width - this.margins.left,
						( o.containment === "document" ?
							( this.document.height() || document.body.parentNode.scrollHeight ) :
							this.window.height() || this.document[ 0 ].body.parentNode.scrollHeight
						) - this.helperProportions.height - this.margins.top
					];
				}
		
				if ( !( /^(document|window|parent)$/ ).test( o.containment ) ) {
					ce = $( o.containment )[ 0 ];
					co = $( o.containment ).offset();
					over = ( $( ce ).css( "overflow" ) !== "hidden" );
		
					this.containment = [
						co.left + ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) +
							( parseInt( $( ce ).css( "paddingLeft" ), 10 ) || 0 ) - this.margins.left,
						co.top + ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) +
							( parseInt( $( ce ).css( "paddingTop" ), 10 ) || 0 ) - this.margins.top,
						co.left + ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
							( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) -
							( parseInt( $( ce ).css( "paddingRight" ), 10 ) || 0 ) -
							this.helperProportions.width - this.margins.left,
						co.top + ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
							( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) -
							( parseInt( $( ce ).css( "paddingBottom" ), 10 ) || 0 ) -
							this.helperProportions.height - this.margins.top
					];
				}
		
			},
		
			_convertPositionTo: function( d, pos ) {
		
				if ( !pos ) {
					pos = this.position;
				}
				var mod = d === "absolute" ? 1 : -1,
					scroll = this.cssPosition === "absolute" &&
						!( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
						$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
							this.offsetParent :
							this.scrollParent,
					scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );
		
				return {
					top: (
		
						// The absolute mouse position
						pos.top	+
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.top * mod +
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.top * mod -
						( ( this.cssPosition === "fixed" ?
							-this.scrollParent.scrollTop() :
							( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod )
					),
					left: (
		
						// The absolute mouse position
						pos.left +
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.left * mod +
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.left * mod	-
						( ( this.cssPosition === "fixed" ?
							-this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
							scroll.scrollLeft() ) * mod )
					)
				};
		
			},
		
			_generatePosition: function( event ) {
		
				var top, left,
					o = this.options,
					pageX = event.pageX,
					pageY = event.pageY,
					scroll = this.cssPosition === "absolute" &&
						!( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
						$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
							this.offsetParent :
							this.scrollParent,
						scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );
		
				// This is another very weird special case that only happens for relative elements:
				// 1. If the css position is relative
				// 2. and the scroll parent is the document or similar to the offset parent
				// we have to refresh the relative offset during the scroll so there are no jumps
				if ( this.cssPosition === "relative" && !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
						this.scrollParent[ 0 ] !== this.offsetParent[ 0 ] ) ) {
					this.offset.relative = this._getRelativeOffset();
				}
		
				/*
				 * - Position constraining -
				 * Constrain the position to a mix of grid, containment.
				 */
		
				if ( this.originalPosition ) { //If we are not dragging yet, we won't check for options
		
					if ( this.containment ) {
						if ( event.pageX - this.offset.click.left < this.containment[ 0 ] ) {
							pageX = this.containment[ 0 ] + this.offset.click.left;
						}
						if ( event.pageY - this.offset.click.top < this.containment[ 1 ] ) {
							pageY = this.containment[ 1 ] + this.offset.click.top;
						}
						if ( event.pageX - this.offset.click.left > this.containment[ 2 ] ) {
							pageX = this.containment[ 2 ] + this.offset.click.left;
						}
						if ( event.pageY - this.offset.click.top > this.containment[ 3 ] ) {
							pageY = this.containment[ 3 ] + this.offset.click.top;
						}
					}
		
					if ( o.grid ) {
						top = this.originalPageY + Math.round( ( pageY - this.originalPageY ) /
							o.grid[ 1 ] ) * o.grid[ 1 ];
						pageY = this.containment ?
							( ( top - this.offset.click.top >= this.containment[ 1 ] &&
								top - this.offset.click.top <= this.containment[ 3 ] ) ?
									top :
									( ( top - this.offset.click.top >= this.containment[ 1 ] ) ?
										top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) :
										top;
		
						left = this.originalPageX + Math.round( ( pageX - this.originalPageX ) /
							o.grid[ 0 ] ) * o.grid[ 0 ];
						pageX = this.containment ?
							( ( left - this.offset.click.left >= this.containment[ 0 ] &&
								left - this.offset.click.left <= this.containment[ 2 ] ) ?
									left :
									( ( left - this.offset.click.left >= this.containment[ 0 ] ) ?
										left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) :
										left;
					}
		
				}
		
				return {
					top: (
		
						// The absolute mouse position
						pageY -
		
						// Click offset (relative to the element)
						this.offset.click.top -
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.top -
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.top +
						( ( this.cssPosition === "fixed" ?
							-this.scrollParent.scrollTop() :
							( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) )
					),
					left: (
		
						// The absolute mouse position
						pageX -
		
						// Click offset (relative to the element)
						this.offset.click.left -
		
						// Only for relative positioned nodes: Relative offset from element to offset parent
						this.offset.relative.left -
		
						// The offsetParent's offset without borders (offset + border)
						this.offset.parent.left +
						( ( this.cssPosition === "fixed" ?
							-this.scrollParent.scrollLeft() :
							scrollIsRootNode ? 0 : scroll.scrollLeft() ) )
					)
				};
		
			},
		
			_rearrange: function( event, i, a, hardRefresh ) {
		
				a ? a[ 0 ].appendChild( this.placeholder[ 0 ] ) :
					i.item[ 0 ].parentNode.insertBefore( this.placeholder[ 0 ],
						( this.direction === "down" ? i.item[ 0 ] : i.item[ 0 ].nextSibling ) );
		
				//Various things done here to improve the performance:
				// 1. we create a setTimeout, that calls refreshPositions
				// 2. on the instance, we have a counter variable, that get's higher after every append
				// 3. on the local scope, we copy the counter variable, and check in the timeout,
				// if it's still the same
				// 4. this lets only the last addition to the timeout stack through
				this.counter = this.counter ? ++this.counter : 1;
				var counter = this.counter;
		
				this._delay( function() {
					if ( counter === this.counter ) {
		
						//Precompute after each DOM insertion, NOT on mousemove
						this.refreshPositions( !hardRefresh );
					}
				} );
		
			},
		
			_clear: function( event, noPropagation ) {
		
				this.reverting = false;
		
				// We delay all events that have to be triggered to after the point where the placeholder
				// has been removed and everything else normalized again
				var i,
					delayedTriggers = [];
		
				// We first have to update the dom position of the actual currentItem
				// Note: don't do it if the current item is already removed (by a user), or it gets
				// reappended (see #4088)
				if ( !this._noFinalSort && this.currentItem.parent().length ) {
					this.placeholder.before( this.currentItem );
				}
				this._noFinalSort = null;
		
				if ( this.helper[ 0 ] === this.currentItem[ 0 ] ) {
					for ( i in this._storedCSS ) {
						if ( this._storedCSS[ i ] === "auto" || this._storedCSS[ i ] === "static" ) {
							this._storedCSS[ i ] = "";
						}
					}
					this.currentItem.css( this._storedCSS );
					this._removeClass( this.currentItem, "ui-sortable-helper" );
				} else {
					this.currentItem.show();
				}
		
				if ( this.fromOutside && !noPropagation ) {
					delayedTriggers.push( function( event ) {
						this._trigger( "receive", event, this._uiHash( this.fromOutside ) );
					} );
				}
				if ( ( this.fromOutside ||
						this.domPosition.prev !==
						this.currentItem.prev().not( ".ui-sortable-helper" )[ 0 ] ||
						this.domPosition.parent !== this.currentItem.parent()[ 0 ] ) && !noPropagation ) {
		
					// Trigger update callback if the DOM position has changed
					delayedTriggers.push( function( event ) {
						this._trigger( "update", event, this._uiHash() );
					} );
				}
		
				// Check if the items Container has Changed and trigger appropriate
				// events.
				if ( this !== this.currentContainer ) {
					if ( !noPropagation ) {
						delayedTriggers.push( function( event ) {
							this._trigger( "remove", event, this._uiHash() );
						} );
						delayedTriggers.push( ( function( c ) {
							return function( event ) {
								c._trigger( "receive", event, this._uiHash( this ) );
							};
						} ).call( this, this.currentContainer ) );
						delayedTriggers.push( ( function( c ) {
							return function( event ) {
								c._trigger( "update", event, this._uiHash( this ) );
							};
						} ).call( this, this.currentContainer ) );
					}
				}
		
				//Post events to containers
				function delayEvent( type, instance, container ) {
					return function( event ) {
						container._trigger( type, event, instance._uiHash( instance ) );
					};
				}
				for ( i = this.containers.length - 1; i >= 0; i-- ) {
					if ( !noPropagation ) {
						delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
					}
					if ( this.containers[ i ].containerCache.over ) {
						delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
						this.containers[ i ].containerCache.over = 0;
					}
				}
		
				//Do what was originally in plugins
				if ( this.storedCursor ) {
					this.document.find( "body" ).css( "cursor", this.storedCursor );
					this.storedStylesheet.remove();
				}
				if ( this._storedOpacity ) {
					this.helper.css( "opacity", this._storedOpacity );
				}
				if ( this._storedZIndex ) {
					this.helper.css( "zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex );
				}
		
				this.dragging = false;
		
				if ( !noPropagation ) {
					this._trigger( "beforeStop", event, this._uiHash() );
				}
		
				//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
				// it unbinds ALL events from the original node!
				this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );
		
				if ( !this.cancelHelperRemoval ) {
					if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
						this.helper.remove();
					}
					this.helper = null;
				}
		
				if ( !noPropagation ) {
					for ( i = 0; i < delayedTriggers.length; i++ ) {
		
						// Trigger all delayed events
						delayedTriggers[ i ].call( this, event );
					}
					this._trigger( "stop", event, this._uiHash() );
				}
		
				this.fromOutside = false;
				return !this.cancelHelperRemoval;
		
			},
		
			_trigger: function() {
				if ( $.Widget.prototype._trigger.apply( this, arguments ) === false ) {
					this.cancel();
				}
			},
		
			_uiHash: function( _inst ) {
				var inst = _inst || this;
				return {
					helper: inst.helper,
					placeholder: inst.placeholder || $( [] ),
					position: inst.position,
					originalPosition: inst.originalPosition,
					offset: inst.positionAbs,
					item: inst.currentItem,
					sender: _inst ? _inst.element : null
				};
			}
		
		} );
		
		} ) );
	
	
	/***/ }
	/******/ ]);
	//# sourceMappingURLxxxx=dragsortable.dist.js.map

/***/ },
/* 50 */
/*!**********************!*\
  !*** ../js/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ./App */ 51),
	  __webpack_require__(/*! ./tplsHelper */ 54),
	  __webpack_require__(/*! ./misc/TemplateHelper */ 55),
	  __webpack_require__(/*! ./ToolBarPanel */ 56),
	  __webpack_require__(/*! ./ViewPanel */ 58),
	  __webpack_require__(/*! ./PropertyPanel */ 62),
	  __webpack_require__(/*! ./plugins/index */ 63)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App, tplsHelper, helper) {
	  App.helper = helper;
	  tplsHelper(App);
	  App.getData = function () {
	    return App.ViewPanel.getViewProperty();
	  };
	
	  helper.register({
	    '::getMaxSlidesSize': function () {
	      return App.options.MAX_SLIDES_SIZE || 10;
	    },
	    '::getMaxNoticeSize': function () {
	      return App.options.MAX_NOTICE_SIZE || 5;
	    },
	    '::getNoticeHeight': function () {
	      return App.options.NOTICE_HEIGHT || 100;
	    },
	    '::getModule_l2_fixed': function () {
	      return App.options.MODULE_L2_FIXED_HEIGHT || 100;
	    },
	    '::getTagMaxLength': function () {
	      return App.options.TAG_MAX_LENGTH || 4;
	    },
	    '::isHeightFieldReadyOlny': function (options) {
	      var layout = (((options || {}).data || {}).root || {}).layout;
	      if (layout == "notice" || layout == "module_l2_fixed") {
	        return 'readonly';
	      }
	    },
	    '::isChecked':function(item,parent){
	      if(item.value === parent.value ){
	        return 'checked';
	        //item.isFirst "===" item.isLast
	      }
	    }
	  });
	
	  window.initApp && window.initApp(App);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/*!********************!*\
  !*** ../js/App.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! js/3rd/immutable-3.8.1 */ 52),
	  __webpack_require__(/*! js/3rd/classjs */ 53)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (Immutable) {
	  var classjs = window.classjs;
	  window.Immutable = Immutable;
	  Immutable.fromJSON = Immutable.fromJS;
	
	
	  classjs({
	    className: 'App',
	    extendEvent: true,
	    // singleton: true,
	    dom: {},
	    init: function () {
	      this.initEvent();
	      var dom = this.dom;
	      $(document.body).find('[data-role]').each(function (index, elem) {
	        var $elem = $(elem);
	        var key = $elem.attr('data-role');
	        dom[key] = $elem;
	      });
	      this.emit('init');
	    },
	    initEvent: function () {
	      this.emit('initEvent');
	    },
	    render: function (options) {
	      var helper = this.helper;
	      helper.isDesignMode = true;
	      helper.defaultImageSrc = options.defaultImageSrc;
	      helper.imageServer = options.imageServer;
	
	      this.options = options;
	
	      this.emit('ready');
	
	      if (options.data) {
	        this.ViewPanel.initView(options.data);
	      }
	    },
	    setOptions: function (key, value) {
	      this.options[key] = value;
	    },
	    reg: function (module) {
	      var className = this.className + '.' + module.className;
	      module.className = className;
	      classjs(module);
	      return classjs.getClass(className);
	    },
	    hashPrefix: 'app',
	    getHashId: (function () {
	      var hashCode = parseInt("1" + ("" + (+new Date())).substr(9));
	      return function () {
	        return this.hashPrefix + '.hash.' + (hashCode++);
	      }
	    })(),
	    get: function (id) {
	      return $(document.getElementById(id));
	    }
	  });
	  var App = new window.App();
	  window.App = App;
	
	  App.warning = window.alert;
	  App.error = window.alert;
	  App.notify = window.alert;
	  App.IMT = Immutable;
	  App.info = function (arg) {
	    console.info(arg);
	  };
	  /*
	      App.oldEmit = App.emit;
	      App.emit = function() {
	          console.info('App.emit:', arguments[0], arguments[1]);
	          this.oldEmit.apply(this, arguments);
	      };
	  */
	  return App;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/*!************************************!*\
  !*** ../js/3rd/immutable-3.8.1.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    keySeq: function() {
	      return Range(0, this.size);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },
/* 53 */
/*!****************************!*\
  !*** ../js/3rd/classjs.js ***!
  \****************************/
/***/ function(module, exports) {

	(function(){
		if (!Function.prototype.bind) {
	    Function.prototype.bind = function(oThis) {
	        if (typeof this !== 'function') {
	            // closest thing possible to the ECMAScript 5
	            // internal IsCallable function
	            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	        }
	
	        var aArgs = [].slice.call(arguments, 1),
	            fToBind = this,
	            fNOP = function() {},
	            fBound = function() {
	                return fToBind.apply(this instanceof fNOP ? this : oThis,
	                    aArgs.concat(Array.prototype.slice.call(arguments)));
	            };
	
	        if (this.prototype) {
	            // native functions don't have a prototype
	            fNOP.prototype = this.prototype;
	        }
	        fBound.prototype = new fNOP();
	        return fBound;
	    };
	}
	
	})();
	(function() {
		var globa=window;
	
	    var ArrayPrototype = Array.prototype,
	        ObjectPrototype = Object.prototype,
	        FunctionPrototype = Function.prototype,
	        ObjectHasOwnProperty = ObjectPrototype.hasOwnProperty,
	        toString = ObjectPrototype.toString,
	        ArraySlice = ArrayPrototype.slice,
	        emptyFunction = function() {},
	        util = globa.util ? globa.util : {};
	
	    function each(array, handle, scope) {
	        if (!array || !handle) {
	            return;
	        }
	        if (array.length >= 0) {
	            for (var i = 0, size = array.length; i < size; i++) {
	                if (scope == null) {
	                    scope = array[i];
	                }
	                if (handle.call(scope, i, array[i], size) === false) {
	                    return false;
	                }
	            }
	        }
	    };
	
	    function iterator(array, handle, scope) {
	        if (!array || !handle) {
	            return;
	        }
	        scope = scope || null;
	        for (var key in array) {
	            if (scope == null) {
	                scope = array[key];
	            }
	            if (ObjectHasOwnProperty.call(array, key) && handle.call(scope, key, array[key]) === false) {
	                return false;
	            }
	        }
	    };
	
	    function mergerAndApply(isApply, isDeep, target, list) {
	        each(list, function(index, copy) {
	            iterator(copy, function(key, copyItem) {
	                var targetItem = target[key];
	                if (isApply && targetItem) {
	
	                } else if (isDeep && isObject(copyItem) && targetItem) {
	                    if (!isObject(targetItem)) {
	                        targetItem = {};
	                    }
	                    target[key] = mergerAndApply(isApply, isDeep, targetItem, [copyItem]);
	                } else if (isApply == false || !target[key]) {
	                    target[key] = copyItem;
	                }
	            });
	        });
	        return target;
	    };
	
	    var clone = (function() {
	        if (JSON && JSON.parse && JSON.stringify) {
	            return function(data) {
	                return JSON.parse(JSON.stringify(data));
	            };
	        }
	
	        function getHandle(handle) {
	            return function(key, value) {
	                if (isObject(value) || isArray(value)) {
	                    value = clone(value);
	                }
	                handle(key, value);
	            };
	        };
	        return function(data) {
	            var result;
	            if (isArray(data)) {
	                result = [];
	                each(data, getHandle(function(key, value) {
	                    result.push(value);
	                }));
	            } else {
	                result = {};
	                iterator(data, getHandle(function(key, value) {
	                    result[key] = value;
	                }));
	            }
	            return result;
	        };
	    })();
	
	
	    function getArgs() {
	        var args = arguments,
	            target,
	            isDeep = false,
	            index;
	        if (args[0] === true || args[0] === false) {
	            isDeep = args[0];
	            target = args[1] || {};
	            index = 2;
	        } else {
	            target = args[0] || {};
	            index = 1;
	        }
	        return {
	            isDeep: isDeep,
	            target: target,
	            list: ArraySlice.call(args, index)
	        };
	    };
	
	    function merger(isDeep, target, config1, configN) {
	        var arg = getArgs.apply({}, arguments);
	        return mergerAndApply(false, arg.isDeep, arg.target, arg.list);
	    };
	
	    function apply(isDeep, target, config1, configN) {
	        var arg = getArgs.apply({}, arguments);
	        return mergerAndApply(true, arg.isDeep, arg.target, arg.list);
	    };
	
	    function isEmpty(value) {
	        return (value === null) || (value === undefined) || (value === '') ||  (isObject(value) && isEmptyObject(value)) || (isArray(value) && value.length === 0);
	    };
	
	    function isEmptyObject(obj) {
	        var key;
	        for (key in obj) {
	            return false;
	        }
	        return true;
	    };
	
	    function isArray(value) {
	        return toString.call(value) === '[object Array]';
	    };
	
	    function isDate(value) {
	        return toString.call(value) === '[object Date]';
	    };
	
	    function isObject(value) {
	        return toString.call(value) === '[object Object]';
	    };
	
	    function isFunction(value) {
	        return typeof value === 'function';
	    };
	
	    function isNumber(value) {
	        return typeof value === 'number' && isFinite(value);
	    };
	
	    function isString(value) {
	        return typeof value === 'string';
	    };
	
	    function isBoolean(value) {
	        return typeof value === 'boolean';
	    };
	
	    function isNumeric(value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	
	    function isElement(value) {
	        return value ? value.nodeType === 1 : false;
	    };
	
	    function isTextNode(value) {
	        return value ? value.nodeName === "#text" : false;
	    };
	
	
	
	    function getIntervalHandle(fn) {
	        return function(callback, timeout, scope, param) {
	            var handle = function() {
	                callback.apply(scope, param);
	            };
	            return fn(handle, timeout);
	        };
	    };
	
	
	    merger(util, {
	        /*  遍历数组
	         *  util.each('click blur change'.split(' '),function(index,item){
	         *      this.push(item);
	         *  },[]);
	         */
	        each: each,
	        /*  迭代对象
	         *  util.it({
	         *      name : 'wuhao',
	         *      age : 100
	         *  },function(key,value){
	         *      var config={};
	         *      config[key]=value;
	         *      this.push(config);
	         *  },[]);
	         */
	        it: iterator,
	        //迭代对象
	        iterator: iterator,
	        /*  对象合并
	         *  util.merger({
	         *      name : 'wuhao',
	         *      age : 100
	         *  },{
	         *      age : 30
	         *  },{
	         *      sex : '男'
	         *  });
	         *
	         *  @return  {
	         *      name : 'wuhao',
	         *      age : 30,
	         *      sex : '男'
	         *  }
	         */
	        merger: merger,
	        /*  对象应用
	         *  util.apply({
	         *      name : 'wuhao',
	         *      age : 100
	         *  },{
	         *      age : 30
	         *  },{
	         *      sex : '男'
	         *  },{
	         *      sex : '女'
	         *  });
	         *
	         *  @return  {
	         *      name : 'wuhao',
	         *      age : 100,
	         *      sex : '男'
	         *  }
	         */
	        apply: apply,
	        clone: clone,
	        emptyFN: emptyFunction,
	        /*
	         *  util.setInterval(function(name,age){
	         *      console.info(this,arguments);
	         *  },1000,this,['a',1]);
	         */
	        setInterval: getIntervalHandle(globa.setInterval),
	        setTimeout: getIntervalHandle(globa.setTimeout),
	        isArray: isArray,
	        isEmpty: isEmpty,
	        isDate: isDate,
	        isObject: isObject,
	        isFunction: isFunction,
	        isNumber: isNumber,
	        isNumeric: isNumeric,
	        isString: isString,
	        isBoolean: isBoolean,
	        isElement: isElement,
	        isTextNode: isTextNode
	    });
	
	    globa.util = util;
	
	    return util;
	
	})();
	
	(function(){
	
	    var event = function() {
	
	    };
	
	
	    util.merger(event.prototype, {
	        /**
	         *this.emit('createClassAfter',{});
	         *this.on('createClassAfter', function(event) {
	         *});
	         */
	        on: function(types, handle) {
	            var events = this.__events__ || {};
	            this.__events__ = events;
	
	            util.each(types.split(" "), function(i, type) {
	                if (type) {
	                    var array = events[type];
	                    if (!array) {
	                        events[type] = array = [];
	                    }
	                    array.push(handle);
	                }
	            }, this);
	            return this;
	        },
	        once: function(types, handle) {
	            handle.__is_once__ = 1;
	            this.on.apply(this, arguments);
	        },
	        off: function(types, handle) {
	            //移除所有事件
	            if (!types) {
	                delete this.__events__;
	                return;
	            }
	            var typeArray = types.split(" "),
	                l = 0,
	                m = 0,
	                array,
	                e,
	                events = this.__events__;
	            if (!events) {
	                return;
	            }
	
	            while (typeArray[l]) {
	                type = typeArray[l];
	                array = events[type];
	                m = 0;
	                if (array) {
	                    if (handle) {
	                        e = array[m];
	                        while (e) {
	                            if (e == handle) {
	                                array.splice(m, 1);
	                            } else {
	                                m++;
	                            }
	                        }
	                    }
	                    if (!handle || array.length == 0) {
	                        delete this.__events__[type];
	                        array = null;
	                    }
	                }
	                l++;
	            }
	        },
	        hasListener: function(type, handle) {
	            var events = this.__events__;
	            if (events && events[type]) {
	                var result = util.each(events[type], function(i, fn) {
	                    if (fn == handle) {
	                        return false;
	                    }
	                });
	                return result == false;
	            }
	            return false;
	        },
	        __createEvent__: function(type, data) {
	            return util.merger(data, {
	                __isEvent__: true,
	                returnValue: true,
	                __type__: type
	            });
	        },
	        emit: function(type, data) {
	            var _events = this.__events__,
	                e, array, i = 0;
	
	            e = this.__createEvent__(type, data);
	
	            if (!_events) {
	                return;
	            }
	
	            array = _events[type];
	
	
	            while (array && array[i]) {
	                var handle = array[i];
	                if (util.isFunction(handle)) {
	                    if (handle.__is_once__) {
	                        array.splice(i, 1);
	                    } else {
	                        i++;
	                    }
	                    if (handle.call(this, e) == false) {
	                        e.returnValue = false;
	                        return false;
	                    }
	                }
	            }
	        }
	    });
	
	
	    event.extend = function(obj) {
	        util.merger(obj, event.prototype);
	        return obj;
	    };
	
	    event.extend(event);
	    util.event = event;
	    return event;
	})();
	(function(){
		var globa=window,
			classjs;
	    var ObjectPrototype = Object.prototype,
	        FunctionPrototype = Function.prototype,
	        ObjectHasOwnProperty = ObjectPrototype.hasOwnProperty,
	        each = util.each,
	        it = util.it,
	        merger = util.merger,
	        apply = util.apply,
	        emptyFn = util.emptyFN,
	        isObject = util.isObject,
	        isString = util.isString,
	        isFunction = util.isFunction;
	
	    var removeOwnProperty = function() {
	        it(this, function(key, value) {
	            if (value && isFunction(value)) {
	                removeOwnProperty.call(value);
	            }
	            this[key] = null;
	            delete this[key];
	        }, this);
	        return this;
	    };
	
	    //默认构造函数
	    function getClassConstructor() {
	        return function(config) {
	            if (config != window.classjs.__IS_CREATE_CLASS__ && this.init) {
	                this.init.apply(this, arguments);
	                this.ready();
	                return this;
	            }
	        };
	    };
	
	    var ClassConstructorString = getClassConstructor().toString();
	
	    function getNameSpace(className, isClass) {
	        var parent = globa,
	            ref,
	            pack = [],
	            refNS;
	        each(className.split('\.'), function(i, NS, size) {
	            refNS = NS;
	            parent[NS] = parent[NS] || {};
	            // ref = parent[NS];
	
	            if (isClass && ((size > 1 && i == size - 2) || size == 1)) {
	                //创建类的构造函数，为了提高debug对象的可识别度
	                var fn = new Function(className + '=' + ClassConstructorString);
	                fn();
	            }
	            if (i < size - 1) {
	                parent = parent[NS];
	                pack.push(NS);
	            }
	            ref = parent[NS];
	        });
	
	        return {
	            parent: parent,
	            ref: ref,
	            pack: pack.join('.'),
	            refNS: refNS
	        };
	    };
	
	    function methodDestroy(ref){
	        ref[arguments.callee.caller.__name__]=util.emptyFN;
	    };
	
	    //给function设置所有者关系，用于logger信息和this.callPrototype()、this.callSuper()
	    function setOwner(clazz, name, fn, config) {
	        if (fn && isFunction(fn) && !fn.__owner__) {
	            fn.__owner__ = clazz;
	            fn.__name__ = name;
	            fn.destroy=methodDestroy;
	            merger(fn, config);
	            return true;
	        }
	        return false;
	    };
	
	    function setThisOwner(config) {
	        it(this, function(key, value) {
	            setOwner(this, key, value, config);
	        }, this);
	    };
	
	
	    function addClass(clazz) {
	        classMap[clazz.__className__] = clazz;
	    };
	
	    function getClass(className) {
	        var clazz = classMap[className];
	        if (clazz /*&& !clazz.__isSingleton__*/ ) {
	            return clazz;
	        } else if (className && !clazz) {
	            classjs.error('no find class:' + className);
	        }
	    };
	
	    function initClass(clazz) {
	        var NS = getNameSpace(clazz.className, true),
	            superClass = classjs.getClass(clazz.extend),
	            prototype = clazz;
	
	
	        $fn.emit('initClassBefore', {
	            clazz: clazz
	        });
	
	        clazz = NS.ref;
	
	        apply(clazz, prototype.statics);
	
	        merger(clazz, {
	            __isClass__: true,
	            __package__: NS.pack,
	            __name__: NS.refNS,
	            __className__: prototype.className,
	            __prototype__: prototype
	        });
	
	
	        delete prototype.extend;
	
	        if (superClass) {
	            clazz.__super__ = superClass;
	
	            //使用原型链继承，而不是copy、merger原型
	            // clazz.prototype = superClass.prototype;
	
	            clazz.prototype = superClass.prototype;
	
	            //clazz.prototype = new superClass(classjs.__IS_CREATE_CLASS__);
	            //superClass.prototype;
	
	            // var fn = new Function('return new ' + prototype.className + '(classjs.__IS_CREATE_CLASS__);');
	
	        }
	        //用原型链实现继承，并模拟类似DOM的继承关系
	        clazz.prototype = new clazz(classjs.__IS_CREATE_CLASS__);
	
	        NS.parent[NS.refNS] = clazz;
	
	        setThisOwner.call(clazz);
	        $fn.emit('initClassAfter', {
	            clazz: clazz
	        });
	        return clazz;
	    };
	
	    // function callSuper() {
	    //     var caller = arguments.callee.caller,
	    //         method,
	    //         arg,
	    //         superClass,
	    //         result,
	    //         superPrototype;
	
	    //     method = caller.__name__;
	    //     arg = caller.arguments;
	    //     superClass = caller.__owner__.getSuperClass();
	    //     superPrototype = superClass.prototype;
	
	    //     if (superPrototype && superPrototype[method]) {
	    //         result = superPrototype[method].apply(this, arg);
	    //     } else if (superClass[method]) {
	    //         result = superClass[method].apply(this, arg);
	    //     }
	    //     return result;
	    // };
	
	    function applyMixins(clazzPrototype) {
	        if (clazzPrototype.mixins) {
	            each(clazzPrototype.mixins, function(i, className) {
	                var mixinsClazz = getClass(className);
	
	                if (mixinsClazz) {
	                    var mPrototype;
	
	                    if (mixinsClazz.__isSingleton__) {
	                        mPrototype = mixinsClazz;
	                    } else {
	                        mPrototype = mixinsClazz.prototype;
	                    }
	                    //属性合并
	                    it(clazzPrototype, function(key, value) {
	                        var srcValue = mPrototype[key];
	                        if (isObject(value) && isObject(srcValue)) {
	                            apply(value, srcValue);
	                        }
	                    });
	                    apply(clazzPrototype, mPrototype);
	                } else {
	                    classjs.error('no find class:' + className);
	                }
	            });
	        }
	    }
	
	    function initPrototype(clazz) {
	        var prototype = clazz.__prototype__;
	
	        $fn.emit('initPrototypeBefore', {
	            clazz: clazz
	        });
	
	        delete prototype.statics;
	
	        delete clazz.__prototype__;
	
	        if (clazz.__super__) {
	            merger(prototype, {
	                callSuper: function() {
	                    var caller = arguments.callee.caller,
	                        method,
	                        arg,
	                        superClass,
	                        result,
	                        superPrototype;
	
	                    method = caller.__name__;
	                    if (arguments.length == 0) {
	                        arg = caller.arguments;
	                    } else {
	                        arg = arguments;
	                    }
	                    arg = [].slice.apply(arg);
	                    superClass = caller.__owner__.getSuperClass();
	                    superPrototype = superClass.prototype;
	
	                    if (superPrototype && superPrototype[method]) {
	                        result = superPrototype[method].apply(this, arg);
	                    } else if (superClass[method]) {
	                        result = superClass[method].apply(this, arg);
	                    }
	                    return result;
	                },
	                callSuperMethod: function(methodName, arg1, arg2, argN) {
	                    var caller = arguments.callee.caller,
	                        arg,
	                        superClass,
	                        result,
	                        superPrototype;
	
	                    if (arguments.length == 1) {
	                        arg = caller.arguments;
	                    } else {
	                        arg = [].slice.apply(arguments, 1);
	                    }
	                    superClass = caller.__owner__.getSuperClass();
	                    superPrototype = superClass.prototype;
	
	                    if (superPrototype && superPrototype[methodName]) {
	                        result = superPrototype[methodName].apply(this, arg);
	                    } else if (superClass[methodName]) {
	                        result = superClass[methodName].apply(this, arg);
	                    }
	                    return result;
	                },
	                getSuper: function() {
	                    return this.getSuperClass().prototype;
	                },
	                getSuperClass: function() {
	                    return this.__class__.__super__;
	                }
	            });
	
	            //属性合并
	            var superPrototype = clazz.__super__.prototype;
	            it(superPrototype, function(key, value) {
	                var targetValue = prototype[key];
	                if (isObject(value) && isObject(targetValue)) {
	                    apply(targetValue, value);
	                }
	            });
	        }
	
	
	        var clazzPrototype = clazz.prototype;
	
	        merger(clazzPrototype, {
	            constructor: clazz,
	            __isPrototype__: true,
	            __class__: clazz,
	            package: clazz.__package__,
	            name: clazz.__name__,
	            callPrototype: function() {
	                var caller = arguments.callee.caller,
	                    method,
	                    arg;
	                method = caller.__name__;
	                arg = caller.arguments;
	                return this.getPrototype()[method].apply(this, arg);
	            }
	        }, prototype);
	
	        apply(clazzPrototype, {
	            init: function(config) {
	                classjs.log();
	                //重写对象属性和方法
	                this.override(config);
	            },
	            ready: emptyFn,
	            destroy: function() {
	                classjs.log();
	                removeOwnProperty.call(this);
	            },
	            override: function(config) {
	                if (config) {
	                    merger(this, config);
	                    setThisOwner.call(this, {
	                        __isOverride__: true
	                    });
	                }
	            },
	            getClass: function() {
	                return this.__class__;
	            },
	            getPrototype: function() {
	                return this.__class__.prototype;
	            }
	        });
	
	
	        applyMixins(clazzPrototype);
	
	        $fn.emit('initPrototypeAfter', {
	            prototype: clazzPrototype
	        });
	
	        setThisOwner.call(clazzPrototype);
	
	        return clazz.prototype;
	    };
	
	
	
	    var Singleton = function() {};
	
	    merger(Singleton.prototype, {
	        __isSingleton__: true
	    });
	
	
	    function initSingleton(clazz) {
	        var instance = new Singleton();
	
	        merger(instance, clazz, {
	            getClass: function() {
	                return this;
	            },
	            destroy: function() {
	                classjs.log();
	                removeOwnProperty.call(this);
	            }
	        });
	
	
	
	        delete instance.singleton;
	
	        applyMixins(instance);
	
	
	        classMap[instance.className] = instance;
	
	        $fn.emit('initPrototypeAfter', {
	            prototype: instance
	        });
	
	
	        setThisOwner.call(instance);
	
	        var NS = getNameSpace(instance.className);
	
	        NS.parent[NS.refNS] = instance;
	
	        merger(instance, {
	            __package__: NS.pack,
	            __name__: NS.refNS,
	            __className__: instance.className,
	            __prototype__: instance
	        });
	
	        return instance;
	    };
	
	
	
	    var classMap = {},
	        $fn = {
	            //事件触发，用于插件注入
	            emit: emptyFn
	        };
	
	
			classjs = globa.classjs = function(clazz) {
	
	            $fn.emit('createClassBefore', {
	                clazz: clazz
	            });
	
	
	            if (clazz.singleton) {
	                clazz = initSingleton(clazz);
	            } else {
	                clazz = initClass(clazz);
	                initPrototype(clazz);
	                // clazz.prototype=new clazz(classjs.__IS_CREATE_CLASS__);
	            }
	
	            addClass(clazz);
	
	            $fn.emit('createClassAfter', {
	                clazz: clazz
	            });
	
	            return clazz;
	        };
	
	    function newInstace(className, option) {
	        var clazz = getClass(className);
	        return new clazz(option || classjs.__IS_CREATE_CLASS__);
	    };
	
	    merger(classjs, {
	        __IS_CREATE_CLASS__: '__IS_CREATE_CLASS__',
	        version: "1.0",
	        //暴露classjs.log接口
	        log: function(){},
	        $fn: $fn,
	        setOwner: setOwner,
	        getClass: getClass,
	        merger: merger,
	        apply: apply,
	        each: each,
	        it: it,
	        isObject: isObject,
	        isString: isString,
	        isFunction: isFunction,
	        override: function(className, config) {
	            var clazz = getClass(className);
	            if (config) {
	                clazz.prototype.override.call(clazz.prototype, config);
	            }
	        },
	        newInstace: newInstace,
	        error: function(msg) {
	            throw Error(msg);
	        },
	        removeOwnProperty: removeOwnProperty
	    });
	
	
	
	})();
	
	(function(){
		var classjs=window.classjs;
	    var $fn = classjs.$fn,
	        each = util.each,
	        merger = util.merger,
	        apply = util.apply,
	        setOwner = classjs.setOwner,
	        __NO_FUNCTION__ = '__NO_FUNCTION__';
	
	    //重写并实现$fn的on和trigger
	    util.event.extend($fn);
	    //注入initPrototype并让prototype实现event
	    $fn.on('initPrototypeAfter', function(e) {
	        var prototype = e.prototype;
	        if (prototype.extendEvent == true) {
	            util.event.extend(prototype);
	            delete prototype.extendEvent;
	        }
	    });
	
	})();

/***/ },
/* 54 */
/*!***************************!*\
  !*** ../js/tplsHelper.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return function(App) {
	        App.getModule = function(name) {
	            var modules = window.AppTPLs.modules;
	            return name ? modules[name] : modules;
	        };
	        App.getViewField = function(name) {
	            var modules = window.AppTPLs.fields.view;
	            return name ? modules[name] : modules;
	        };
	        App.getPropertyField = function(name) {
	            var modules = window.AppTPLs.fields.property;
	            return name ? modules[name] : modules;
	        };
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/*!************************************!*\
  !*** ../js/misc/TemplateHelper.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  var Handlebars = window.Handlebars;
	  var contextKey = '::context::';
	  var hashIndex = 123456;
	  var helper = {
	    isDesignMode: false,
	    defaultImageSrc: "images/common/p0.jpg",
	    imageServer: '',
	    block: {
	
	    },
	    regBlockHandle: function (name, handle) {
	      this.block[name] = handle;
	    },
	    exec: function (template, data, instace) {
	      data[contextKey] = {
	        instace: instace,
	        template: template
	      };
	      return template(data);
	    },
	    getImageSrc: function (src) {
	      if (src && !src.match(/^http/i)) {
	        src = (helper.imageServer || '') + src;
	      }
	      return src || helper.defaultImageSrc;
	    },
	    register: Handlebars.registerHelper.bind(Handlebars)
	  };
	
	  function isEmptyObject(obj) {
	    var key;
	    for (key in obj) {
	      return false;
	    }
	    return true;
	  };
	
	
	
	  helper.register({
	    'if_valid': function () {
	      if (this['@valid']) {
	        return options.fn(this);
	      }
	      return options.inverse(this);
	    },
	    'params-expression': function (exp1, exp2, exp3, exp4) {
	      var args = [].slice.call(arguments),
	        len = args.length - 1,
	        options = args[len],
	        parentData = this,
	        data = {}; //util.merger({}, this);
	
	      for (var i = 0; i < len; i++) {
	        var params = args[i].split("=");
	        var key = (params[0] || '').trim();
	        var value = (params[1] || "").trim();
	
	        var v1 = value.match(/^@(\w+)/);
	        if (v1 && v1[1]) {
	          value = this[v1[1]];
	        } else if (value.match(/^::(\w+)/)) {
	          var fn = Handlebars.helpers[value];
	          value = fn && fn(this);
	        }
	
	        if (key == "this") {
	          parentData = value;
	        } else {
	          data[key] = value === undefined ? '' : value;
	        }
	      }
	      if (len > 0) {
	        data = util.merger(parentData, data);
	      } else {
	        data = parentData;
	      }
	      return options.fn(data, {
	        data: options.data
	      });
	    },
	    'block-params': function () {
	      var args = [],
	        options = arguments[arguments.length - 1];
	      for (var i = 0; i < arguments.length - 1; i++) {
	        args.push(arguments[i]);
	      }
	      return options.fn(this, {
	        data: options.data,
	        blockParams: args
	      });
	    },
	    compare: function (left, operator, right, v1, v2, options) {
	      /*jshint eqeqeq: false*/
	      var args = arguments;
	      var argsLength = args.length;
	      options = args[argsLength - 1];
	      if (operator == 'isEmpty') {
	        right = '';
	        v1 = '';
	        v2 = '';
	      }
	      if (v1 && v1.name == 'compare') {
	        v1 = '';
	        v2 = '';
	      }
	      if (v2 && v2.name == 'compare') {
	        v2 = '';
	      }
	
	      if (v1) {
	        v1 = new Handlebars.SafeString(v1);
	      }
	
	      if (v2) {
	        v2 = new Handlebars.SafeString(v2);
	      }
	
	      if (argsLength < 3) {
	        throw new Error('Handlebars Helper "compare" needs 2 parameters');
	      }
	
	      if (options === undefined) {
	        options = right;
	        right = operator;
	        operator = '===';
	      }
	
	      var operators = {
	        '==': function (l, r) {
	          return l == r;
	        },
	        '===': function (l, r) {
	          return l === r;
	        },
	        '!=': function (l, r) {
	          return l != r;
	        },
	        '!==': function (l, r) {
	          return l !== r;
	        },
	        '<': function (l, r) {
	          return l < r;
	        },
	        '>': function (l, r) {
	          return l > r;
	        },
	        '<=': function (l, r) {
	          return l <= r;
	        },
	        '>=': function (l, r) {
	          return l >= r;
	        },
	        'in': function (array, value) {
	          if (array == value) {
	            return true;
	          }
	          if (array && array.length > 0) {
	            for (var i = 0, len = array.length; i < len; i++) {
	              if (array[i] == value) {
	                return true;
	              }
	            }
	          }
	          return false;
	        },
	        'typeof': function (l, r) {
	          return typeof l == r;
	        },
	        'isEmpty': function (l) {
	          return (l === null) || (l === undefined) || (l === '') || (isEmptyObject(l));
	        }
	      };
	
	      if (!operators[operator]) {
	        throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
	      }
	
	      var result = operators[operator](left, right);
	
	      if (result) {
	        return v1 ? v1 : (options.fn ? options.fn(this) : '');
	      } else {
	        return v2 ? v2 : (options.inverse ? options.inverse(this) : '');
	      }
	    },
	    'if_eq': function (v1, v2, options) {
	      if (v1 === v2) {
	        return options.fn(this);
	      }
	      return options.inverse(this);
	    },
	    'if_in': function (array, v1, options) {
	      if ($.inArray(array, v1) > -1) {
	        return options.fn(this);
	      }
	      return options.inverse(this);
	    },
	    'if_and': function (a, b, options) {
	      if (a && b) {
	        return options.fn(this);
	      } else {
	        return options.inverse(this);
	      }
	    },
	    '::getHeight': function (height) {
	      /*
	      取消模块的高度
	      if (height) {
	        return 'height: ' + height + 'px';
	      }
	      */
	      return '';
	    },
	    'eachInterval': function (start, end, options) {
	      var ret = '';
	      for (var i = start; i < end; i++) {
	        ret = ret + options.fn({
	          index: i,
	          length: length
	        });
	      }
	      return ret;
	    },
	    '::href': function () {
	      return new Handlebars.SafeString(' href="javascript:;" ');
	    },
	    '::setHash': function (data) {
	      if (arguments.length == 1) {
	        data = this;
	      }
	      data.hash = 'hash-' + (hashIndex++);
	    },
	    '::defaultValue': function (v1, defaultValue, options) {
	      if (defaultValue) {
	        var defaultValue = defaultValue.trim();
	        var helpers = Handlebars.helpers;
	        var handle;
	        var helperName;
	        if (defaultValue.match(/^::|#/)) {
	          handle = helpers[defaultValue];
	          if (!handle) {
	            helperName = defaultValue.split(/::|#/);
	            helperName = helperName[1];
	            handle = helpers[helperName];
	          } else {
	            defaultValue = '';
	          }
	        }
	        if (handle) {
	          defaultValue = handle.call(this);
	        }
	      }
	      return v1 ? v1 : defaultValue;
	    },
	    'if_design_mode': function (options) {
	      if (helper.isDesignMode == true) {
	        return options.fn(this);
	      }
	      return options.inverse(this);
	    },
	    '::initArray': function (data, key, length) {
	      var array = data[key] || [];
	      var start = array.length;
	      for (var i = start; i < length; i++) {
	        array.push({});
	      }
	      data[key] = array;
	    },
	    '::arrayToIndexItem': function (array) {
	      array = array || [];
	      for (var i = 0; i < array.length; i++) {
	        array['item' + i] = array[i];
	      }
	    },
	    '::setDataValue': function (data, name, value) {
	      if (value != undefined) {
	        data[name] = value;
	      } else {
	        delete data[name];
	      }
	    },
	    '::setId': (function () {
	      var index = parseInt('1' + ('' + Math.random()).substring(10, 15));
	      return function (data, key) {
	        data._ = data._ || {};
	        data._[key] = key + (index++);
	      }
	    })(),
	    'eachArray': function (array, parent,maxLength, options) {
	      var args = arguments;
	      var argsLen = args.length;
	      options = args[argsLen - 1];
	      
	      if(options===maxLength){
	        maxLength=array.length;
	      }
	
	      parent = options.data.root;
	      
	      var ret = '';
	      for (var i = 0, len = maxLength; i < len; i++) {
	        var value = array[i];
	        ret = ret + options.fn({
	          isFirst: i == 0,
	          isLast: i == len - 1,
	          i: i,
	          index: i + 1,
	          parent: parent,
	          value: value,
	          item: value
	        });
	      }
	      return ret;
	    },
	    '::callBlockHandle': function (blockName, data1, data2, dataN, options) {
	      var args = arguments;
	      var len = args.length;
	      var newArgs = [].slice.call(args, 1, len - 1);
	      options = args[len - 1];
	      newArgs.push(this);
	      // newArgs.push(options);
	      var context = options.data.root[contextKey];
	      var instace = context.instace;
	      var handle = instace.callBlockHandle;
	      if (handle) {
	        return new Handlebars.SafeString(handle.call(instace, blockName, newArgs, options));
	      }
	    },
	    '::getImageSrc': function (src) {
	      if (!src) {
	        return helper.defaultImageSrc;
	      }
	      return helper.getImageSrc(src);
	    },
	    '::getHalfHeight':function(height){
	      height=+height;
	      if(height>0){
	        return 'height:'+(height/2)+'px;';
	      }
	    },
	    '::isDebug':function(){
	      var c=1;
	    },
	    'isMargin': function () {}
	  });
	
	  return helper;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/*!*****************************!*\
  !*** ../js/ToolBarPanel.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ./App */ 51),
	    __webpack_require__(/*! ../hbs/toolbarIcon.hbs */ 57)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, template) {
	
	    App.reg({
	        className: 'ToolBarPanel',
	        singleton: true,
	        template: template,
	        init: function() {
	            App.once('ready', this.ready.bind(this));
	        },
	        ready: function() {
	            this.dom = App.dom.toolbar;
	            this.initEvent();
	            this.initToolBar();
	            App.emit('ready.ToolBarPanel', {
	                instace: this
	            });
	        },
	        initEvent: function() {
	            this.dom.closest('.scrollable').on('scroll', function(event) {
	                event.target.scrollLeft = 0;
	            });
	        },
	        initToolBar: function() {
	            var toolbar = this.dom;
	            toolbar.html(this.getToolBarHTML());
	
	            toolbar.children().draggable({
	                connectToSortable: App.dom.view,
	                helper: this.dragHelper.bind(this),
	                stop: this.dragStop.bind(this)
	            });
	        },
	        getToolBarHTML: function() {
	            var allModule = App.getModule();
	            var modules = App.options.modules || allModule;
	            var html = [];
	            for (var i = 0, len = modules.length; i < len; i++) {
	                var module = modules[i];
	                if (!module.name) {
	                    module = {
	                        name: module
	                    };
	                }
	                if(allModule[module.name]){
	                    module = util.merger(allModule[module.name], module);
	                    modules[i] = module;
	                    modules[module.name] = module;
	                    module.icon = module.icon || module.name;
	                    html.push(this.template(module));    
	                }
	            }
	            return html.join('');
	        },
	        dragHelper: function() {
	            return '<div class="drag-helper"></div>';
	        },
	        dragStop: function(event, ui) {
	            var name = $(event.target).attr('data-name');
	            ui.helper.attr('data-name', name);
	            App.emit('sortStop.ViewPanel');
	        }
	    }).init();
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/*!******************************!*\
  !*** ../hbs/toolbarIcon.hbs ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! handlebars/runtime */ 2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\"col-xs-6\" data-name=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\" title=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\">\r\n    <a class=\"padder-v block\" "
	    + alias4(((helper = (helper = helpers["::href"] || (depth0 != null ? depth0["::href"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"::href","hash":{},"data":data}) : helper)))
	    + ">\r\n	<i class=\"module-layout "
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + " icon-"
	    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
	    + "\"></i>\r\n	<h5>"
	    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
	    + "</h5>\r\n    </a>\r\n</div>";
	},"useData":true});

/***/ },
/* 58 */
/*!**************************!*\
  !*** ../js/ViewPanel.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ./App */ 51),
	  __webpack_require__(/*! ../hbs/viewItemPanel.hbs */ 59),
	  __webpack_require__(/*! js/misc/lazyloadPro */ 60),
	  __webpack_require__(/*! ./AbsPanel */ 61)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App, template, lazyloadPro) {
	
	  var uid = 1000;
	
	  App.reg({
	    className: 'ViewPanel',
	    singleton: true,
	    mixins: [App.className + '.AbsPanel'],
	    hashPrefix: 'view',
	    template: template,
	    viewData: [],
	    viewDataMap: {},
	    init: function () {
	      App.once('ready', this.ready.bind(this));
	    },
	    ready: function () {
	      this.dom = App.dom.view;
	      this.viewSection = this.dom.closest('.scrollable');
	      this.initEvent();
	    },
	    initEvent: function () {
	      var view = this.dom;
	
	      view.sortable({
	        revert: true,
	        refreshPositions: true,
	        // noRemove:true,
	        placeholder: "panel",
	        scroll: false,
	        mouseStart: function (event, ui) {
	          view.addClass('sortable');
	        },
	        // dropOnEmpty: false,
	        start: function (event, ui) {
	
	          ui.position = { top: 1000, left: 1000 };
	        },
	        stop: this.onSortStop.bind(this)
	      });
	
	      view.on('click', '[data-role=remove]', function (event) {
	        this.onRemove($(event.target).closest('[data-role=panel]'));
	        return false;
	      }.bind(this));
	
	
	      view.on('click', '[data-role=panel]', function (event) {
	        this.onCofig($(event.currentTarget));
	      }.bind(this));
	
	      App.on('change.Property', this.onChangeProperty.bind(this));
	
	      App.on('cancel.Property', this.onCancelProperty.bind(this));
	
	      App.on('sortStop.ViewPanel', this.onDragStop.bind(this));
	
	      $(window).on('resize', function (event) {
	        this.onResize();
	      }.bind(this));
	
	      this.onResize();
	    },
	    onResize: function () {
	      var dom = this.dom;
	      dom.css('min-height', this.viewSection.height() - 30);
	    },
	    onCofig: function (elem) {
	      if (elem.length == 0) {
	        this.initProperty();
	        return;
	      }
	      var id = elem.attr('id');
	      var data = this.viewDataMap[id];
	      this.initProperty(data);
	    },
	    initProperty: function (data) {
	      if (this.activeData && data && this.activeData.id == data.id) {
	        return;
	      }
	
	      if (data) {
	        App.emit('set.Property', {
	          data: {
	            id: data.id,
	            name: data.name,
	            property: util.clone(data.property)
	          }
	        });
	        /*
	                        if (util.isEmpty(data.property)) {
	                            data.property = App.PropertyPanel.getProperty();
	                        }
	        */
	        this.dom.find('.panel').removeClass('active');
	
	        var elem = App.get(data.id);
	        elem.addClass('active');
	      } else {
	        App.emit('set.Property');
	      }
	      this.activeData = data;
	    },
	    onRemove: function (elem) {
	      var id = elem.attr('id');
	      elem.remove();
	      delete this.viewDataMap[id];
	      this.onCofig(this.dom.find('[data-role=panel]:first'));
	    },
	    onDragStop: function () {
	      this.dom.find('.panel').css('height', '');
	      this.dom.removeClass('sortable');
	    },
	    onSortStop: function (event, ui) {
	      if (ui.item.hasClass('drag-helper')) {
	        this.insert(ui.item, ui.item.attr('data-name'));
	      }
	      this.onDragStop();
	    },
	    onChangeProperty: function (event) {
	      var data = event.data;
	      var elem = App.get(data.id);
	
	      var html = this.getViewItemHTML(data);
	
	      elem.find('.panel-body:first').html(html);
	      this.viewDataMap[data.id] = data;
	      this.activeData = data;
	
	
	      /**
	      * 重新生成 module-index
	      **/
	      var array = [];
	      var me = this;
	      this.dom.find('.panel').each(function (i, panel) {
	        var data = me.viewDataMap[panel.id];
	        var property = data.property;
	        property.layout = data.name;
	        property.seq = i;
	        array.push(property);
	      });
	
	      App.table=array;
	      this.dom.find('.module-box').each(function(i,moduleBox){
	        $(moduleBox).attr('data-module-index',i);
	      });
	      lazyloadPro(App, elem[0]);
	
	    },
	    onCancelProperty: function (event) {
	      var elem = this.dom.find('.active[data-role=panel]:first');
	      var data = this.viewDataMap[elem.attr('id')];
	      if (util.isEmpty(data.property)) {
	        this.onRemove(elem);
	      }
	      // this.onRemove(elem);
	    },
	    insert: function (elem, name) {
	      var data = this.getViewItemData(name);
	      var html = this.getPanelItemHTML(data);
	      elem.after(html);
	      elem.remove();
	      this.initProperty(data);
	      App.emit('EventDispatch', {
	        type: 'action',
	        data: {
	          instace: this,
	          name: 'insert'
	        }
	      });
	    },
	    append: function (property) {
	      var data = this.getViewItemData(property.layout, property);
	      var html = this.getPanelItemHTML(data);
	      this.dom.append(html);
	
	      //自动渲染属性面板
	      this.initProperty(data);
	    },
	    initView: function (propertys) {
	      var array = [];
	      var firstData;
	      App.table=JSON.parse(JSON.stringify(propertys));
	      for (var i = 0; i < propertys.length; i++) {
	        var property = propertys[i];
	        property.__index__=i;
	        var data = this.getViewItemData(property.layout, property);
	        var html = this.getPanelItemHTML(data);
	        array.push(html);
	        if (!firstData) {
	          firstData = data;
	        }
	      }
	      this.dom.html(array.join(''));
	      this.initProperty(firstData);
	      lazyloadPro(App, this.dom[0]);
	
	    },
	    update: function (item, property) {
	      //获取数据
	    },
	    empty: function () {
	      this.dom.empty();
	      this.viewDataMap = {};
	      App.PropertyPanel.set();
	    },
	    getViewItemData: function (name, property) {
	      var module = App.options.modules[name];
	      if (!module) {
	        return;
	      }
	      var item = {
	        id: this.getHashId(),
	        title: module.label,
	        name: name,
	        property: property || {}
	      };
	      this.viewDataMap[item.id] = item;
	      return item;
	    },
	    getPanelItemHTML: function (data) {
	      if (!data) {
	        return '';
	      }
	      var html = this.getViewItemHTML(data);
	      return this.template({
	        id: data.id,
	        title: data.title,
	        name: data.name,
	        html: html
	      });
	    },
	    getViewItemHTML: function (data) {
	      var module = App.getModule(data.name);
	      var template = module.view;
	      var html = 'no find view template: ' + data.name;
	      if (template) {
	        var property = util.clone(data.property);
	        property.layout = data.name;
	        html = App.helper.exec(template, property, this);
	      }
	      return html;
	    },
	    getViewProperty: function () {
	      App.PropertyPanel.change();
	      var array = [];
	      var me = this;
	      this.dom.find('.panel').each(function (i, panel) {
	        var data = me.viewDataMap[panel.id];
	        var property = data.property;
	        property.layout = data.name;
	        property.seq = i;
	        array.push(property);
	      });
	      return array;
	    },
	    callBlockHandle: function (blockName, args, options) {
	      if (this[blockName]) {
	        this[blockName](args);
	        return;
	      }
	      return this.doIncludeHandle(blockName, args, options);
	    },
	    getLink: function (data) {
	        return 'javascript:;';
	    },
	    doIncludeHandle: function (name, args, options) {
	      var data = {
	        instace: this,
	        name: name,
	        args: args,
	        options: options,
	        result: args[0] || {}
	      };
	      var template = App.getViewField(name);
	      var html = 'no find view template: ' + name;
	      if (template) {
	        if (!data.result) {
	          data.result = args[0];
	        }
	        html = App.helper.exec(template, data.result, this);
	      }
	      return html;
	    }
	  }).init();
	
	  //JSON.stringify(LTS.ViewPanel.getViewProperty())
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/*!********************************!*\
  !*** ../hbs/viewItemPanel.hbs ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! handlebars/runtime */ 2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<section class=\"panel panel-default pos-rlt clearfix\" data-role=\"panel\" id=\""
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\">\r\n<header class=\"panel-heading\">\r\n    <ul class=\"nav nav-pills pull-right\">\r\n        <li>\r\n            <a  "
	    + alias4(((helper = (helper = helpers["::href"] || (depth0 != null ? depth0["::href"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"::href","hash":{},"data":data}) : helper)))
	    + " class=\"panel-toggle text-muted\"><i class=\"fa fa-caret-down text-active\"></i><i class=\"fa fa-caret-up text\"></i></a>\r\n        </li>\r\n        <li>\r\n            <a  "
	    + alias4(((helper = (helper = helpers["::href"] || (depth0 != null ? depth0["::href"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"::href","hash":{},"data":data}) : helper)))
	    + " class=\"text-muted\"  data-role=\"remove\"><i class=\"fa fa-times\"></i></a>\r\n        </li>\r\n    </ul><span data-role=\"title\">"
	    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</span>\r\n</header>\r\n<div class=\"panel-body clearfix\" data-role=\"body\">\r\n    "
	    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\r\n</div>\r\n</section>";
	},"useData":true});

/***/ },
/* 60 */
/*!*********************************!*\
  !*** ../js/misc/lazyloadPro.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ./TemplateHelper */ 55)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (TemplateHelper) {
	
	  function eachModulePro(container,callback){
	    $(container).find('.module-pro .item').each(callback);
	  };
	
	  function getIn(table,path){
	    var result;
	    var currentResult=table;
	    var index=0;
	    while(currentResult){
	      currentResult=currentResult[path[index++]];
	      if(currentResult){
	        result=currentResult;
	      }
	    }
	    return JSON.parse(JSON.stringify(result));
	  }
	
	  function doPriceRequest(App,container,onRequest){
	    var table=App.table;
	    eachModulePro(container,function (i, item) {
	      var $item = $(item);
	      var moduleIndex=$item.closest('.module-pro').attr('data-module-index');
	      var path=[moduleIndex,'list',$item.attr('data-item-index')];
	      var data=getIn(table,path);
	      var moduleData=getIn(table,[moduleIndex]);
	      data.element=item;
	      data.moduleData=moduleData;
	      onRequest(data,function(newData){
	          $item.find('.pro-price:first').html(newData.price);
	          $item.find('.pro-title:first').html(newData.title);
	          var url=App.helper.getImageSrc(newData.image);
	          //var aList=$item.find('.row-image a');
	
	          $item.find('.row-image img').attr('src',url);
	
	          //aList.css('background-image','url('+url+')');
	
	          if(newData.link){
	            var $alink=$item.find('a');
	            if(!TemplateHelper.isDesignMode){
	              $alink.attr('href',newData.link);
	            }
	            $alink.removeClass('box');
	          }
	      });
	    });
	  };
	
	  function doOldPriceRequest(App,container,onRequest){
	      eachModulePro(container,function (i, item) {
	        var $item = $(item);
	        onRequest($item.attr('data-id'), $item.attr('data-type'), function (data) {
	          $item.find('.pro-price:first').text(data.price);
	          $item.find('.pro-title:first').text(data.title);
	          var url=App.helper.getImageSrc(data.image);
	          $item.find('.row-image a').css('background-image','url('+url+')');
	        });
	      });
	  }
	
	  return function (App, container) {
	
	
	    var onPriceRequest = App.onPriceRequest || App.options.onPriceRequest;
	    
	    onPriceRequest && doPriceRequest(App,container,onPriceRequest);
	    
	
	
	    /**
	    *旧的报价查询
	   
	    var onRequest = App.onRequest || App.options.onRequest;
	
	
	    if(onPriceRequest){
	      doPriceRequest(App,container,onPriceRequest);
	    }else if(onRequest){
	      doOldPriceRequest(App,container,onRequest);
	    }
	
	     **/
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/*!*************************!*\
  !*** ../js/AbsPanel.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ./App */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App) {
	    var $body;
	    return App.reg({
	        className: 'AbsPanel',
	        hashPrefix: 'x',
	        getHashId: (function() {
	            var hashCode = parseInt("1" + ("" + (+new Date())).substr(9));
	            return function() {
	                return this.hashPrefix + '.hash.' + (hashCode++);
	            }
	        })(),
	        getTargetId: function(target) {
	            var hashId = target.attr('id');
	            if (!hashId) {
	                hashId = this.getHashId();
	                target.attr('id', hashId);
	            }
	            return '';
	        },
	        getBody: function() {
	            if (!$body) {
	                $body = $(document.body);
	            }
	            this.getBody = function() {
	                return $body;
	            };
	            return $body;
	        },
	        getElement: (function() {
	            var $empty = $();
	            return function() {
	                if (this.id) {
	                    return this.get(this.id);
	                }
	                return $empty;
	            }
	        })(),
	        get: App.get
	    });
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/*!******************************!*\
  !*** ../js/PropertyPanel.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ./App */ 51),
	  __webpack_require__(/*! ./AbsPanel */ 61)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App) {
	  App.reg({
	    className: 'PropertyPanel',
	    singleton: true,
	    mixins: [App.className + '.AbsPanel'],
	    hashPrefix: 'property',
	    init: function () {
	      App.once('ready', this.ready.bind(this));
	    },
	    ready: function () {
	      this.dom = App.dom.property;
	      this.initEvent();
	
	    },
	    initEvent: function () {
	      App.on('set.Property', function (event) {
	        this.set(event.data);
	        return false;
	      }.bind(this));
	
	
	      App.on('update.Property', function (event) {
	        var property = event.property;
	        if (!property) {
	          property = this.getProperty();
	        }
	        this.update(property);
	        return false;
	      }.bind(this));
	
	
	      var property = this.dom;
	
	      property.on('change', 'input,select,textarea', (function (event) {
	        this.doChangeHandle(event.target);
	      }).bind(this));
	
	
	      App.on('cancel.Property', (function (event) {
	        this.cancel(event.target);
	      }).bind(this));
	
	      //property.on('click', '[data-action]', this.doActionHandle.bind(this));
	    },
	    set: function (data) {
	      /*
	      //切换面板触发属性更新到view
	      if (this.activeData && data) {
	          this.change();
	      }
	      */
	      this.activeData = data || {};
	      if (data) {
	        this.update(data.property);
	        App.dom.okButton.show();
	      } else {
	        this.dom.html('');
	        App.dom.okButton.hide();
	      }
	    },
	    update: function (property) {
	      var data = this.activeData;
	      data.property = property || {};
	
	      var module = App.getModule(data.name);
	      var template = module.property;
	      var html = 'no find property template: ' + data.name;
	      data.property.layout = data.name;
	      if (template) {
	        html = App.helper.exec(template, data.property, this);
	      }
	      this.dom.html(html);
	      App.emit('render.Property');
	    },
	    change: function (property) {
	      var data = this.activeData || {};
	      if (!property) {
	        property = this.getProperty();
	      }
	      data.property = property;
	      App.emit('change.Property', {
	        data: data
	      });
	    },
	    cancel: function () {
	      this.activeData = {};
	    },
	    getTargetValue: function (target, group, name) {
	      group = group || target.closest('[data-group-index]');
	      name = name || target.attr('name');
	
	      if (!group[0]) {
	        group = this.dom;
	      }
	      var value = '';
	      if (target.is(':radio')) {
	        group.find(':radio[name=' + name + ']').each(function (index, radio) {
	          if (!value) {
	            var $elem = $(radio);
	            if ($elem.is(':checked')) {
	              value = $elem.val();
	            }
	          }
	        });
	      } else if (target.is(':checkbox')) {
	        value = [];
	        group.find(':checkbox[name=' + name + ']').each(function (index, checkbox) {
	          var $elem = $(checkbox);
	          if ($elem.is(':checked')) {
	            value.push($elem.val());
	          }
	        });
	      } else if (target.attr('type') == 'file') {
	        //
	      } else {
	        value = target.val();
	      }
	
	      /*
	      if($.isArray(value) && value.length==0){
	          value="";
	      }
	      */
	      return value;
	    },
	    doChangeHandle: function (element) {
	      var name = element.name;
	      if (!name) {
	        return;
	      }
	      var target = $(element);
	      var group = target.closest('[data-group-index]');
	      // var value= this.getTargetValue(group, target, name);
	
	      var data = {
	        name: name,
	        instace: this,
	        target: element,
	        view: this.activeData
	          /*,
	          value: value*/
	      };
	      var groupIndex = -1;
	      var groupName = group.attr('data-group-name') || '';
	      if (group[0]) {
	        data.groupIndex = group.attr('data-group-index');
	      }
	      if (groupName) {
	        data.groupName = groupName;
	      }
	
	      //事件发出
	      App.emit('EventDispatch', {
	        type: 'change',
	        data: data
	      });
	    },
	    callBlockHandle: function (blockName, args, options) {
	      var method = this[blockName];
	      if (method) {
	        return method.apply(this, args);
	      }
	      return this.doIncludeHandle(blockName, args, options);
	    },
	    getImageSize: function (index) {
	      var modules = App.options.modules;
	      var module = modules[this.activeData.name]
	      module.size = module.size || [];
	      var size = module.size[index] || module.size[0];
	      if (!size) {
	        return ' - ';
	      }
	      var width = size.width || '-';
	      var height = size.height || '-';
	      return width + ' x ' + height;
	    },
	    doIncludeHandle: function (name, args, options) {
	      var data = {
	        instace: this,
	        name: name,
	        view: this.activeData,
	        args: args,
	        options: options,
	        result: args[0] || {}
	      };
	      /*
	      App.emit('EventDispatch', {
	          type: 'include',
	          data: data
	      });
	      */
	
	      var template = App.getPropertyField(name);
	
	      var html = 'no find property template: ' + name;
	      if (template) {
	        if (!data.result) {
	          data.result = args[0];
	        }
	        html = App.helper.exec(template, data.result, this);
	      }
	      return html;
	    },
	    getPropertyMetaData: function () {
	      var result = this.eachFormGroup(function (parent, elem) {
	        var item = parent[elem.name];
	        var value = $(elem).val();
	        if (item) {
	          if (!$.isArray(item)) {
	            item = [item];
	          }
	          item.push(value);
	        } else {
	          item = value;
	        }
	        parent[elem.name] = item;
	      });
	      return JSON.stringify(result);
	    },
	    getProperty: function () {
	      var property = this.eachFormGroup(function (parent, elem) {
	        var key = elem.name;
	        if (!(key in parent)) {
	          parent[key] = this.getTargetValue($(elem));
	        }
	      }.bind(this));
	      return property;
	    },
	    eachFormGroup: function (formItemHandle) {
	      var dataStructure = {};
	      var groupClassName = 'form-group';
	
	      function getFormGroup(group, parent) {
	        group.find('[name]').each(function (i, elem) {
	          formItemHandle(parent, elem);
	        });
	      };
	
	      var childrenIndex = 0;
	
	      function eachElement(children, parent) {
	        children.each(function (i, elem) {
	          var $elem = $(elem);
	          if ($elem.hasClass(groupClassName)) {
	            getFormGroup($elem, parent);
	          } else {
	            var children = {};
	            var groupName = $elem.attr('data-group-name');
	            //分组列表
	            if (groupName) {
	              eachElement($elem.find('.' + groupClassName), children);
	
	              var list = parent[groupName] || [];
	              parent[groupName] = list;
	
	              // if (!$.isEmptyObject(children)) {
	              list.push(children);
	              // }
	            }
	          }
	        });
	      };
	      eachElement(App.dom.property.children(), dataStructure);
	      return dataStructure;
	    }
	  }).init();
	
	  //console.error("处理EventDispatch.change重新渲染属性面板");
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 63 */
/*!******************************!*\
  !*** ../js/plugins/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ./components/Modal */ 64),
	    __webpack_require__(/*! ./view/Insert */ 69),
	    __webpack_require__(/*! ./property/WebUploader */ 71),
	    __webpack_require__(/*! ./property/DateTimePicker */ 76),
	    __webpack_require__(/*! ./property/select */ 83),
	    __webpack_require__(/*! ./property/Save */ 84),
	    __webpack_require__(/*! ./property/ImageLinkGroup */ 85),
	    __webpack_require__(/*! ./property/LinkType */ 86),
	    __webpack_require__(/*! ./property/height */ 87)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 64 */
/*!*****************************************!*\
  !*** ../js/plugins/components/Modal.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! js/3rd/classjs */ 53),
	    __webpack_require__(/*! js/App */ 51),
	    __webpack_require__(/*! js/AbsPanel */ 61),
	    __webpack_require__(/*! ../Plugin */ 65),
	    __webpack_require__(/*! hbs/components/modal.hbs */ 66),
	    __webpack_require__(/*! js/3rd/array/indexOf */ 67),
	    __webpack_require__(/*! js/3rd/array/remove */ 68)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(x, App, AbsPanel, Plugin, template) {
	
	    var Modal = classjs({
	        className: 'Modal',
	        mixins: [AbsPanel.__className__],
	        hashPrefix: 'modal',
	        extendEvent: true,
	        template: template,
	        ready: function() {
	            this.id = this.getHashId();
	        },
	        initEvent: function() {
	            var me = this;
	
	            this.getElement().on('hide.bs.modal', (function(event) {
	                this.cancel();
	            }).bind(this));
	
	            this.getElement().on('hidden.bs.modal', (function(event) {
	                me.emit('close');
	                setTimeout(function() {
	                    me.getElement().remove();
	                }, 0);
	            }).bind(this));
	
	            this.getElement().on('click', '[data-role=submit]', (function(event) {
	                this.submit();
	            }).bind(this));
	        },
	        create: function() {
	            var html = this.template(this);
	            this.getBody().append(html);
	            this.create.destroy(this);
	            this.body = this.getElement().find('.modal-body:first');
	            this.initEvent();
	            this.emit('create');
	        },
	        show: function() {
	            this.create();
	            this.getElement().modal('show');
	            this.emit('show');
	        },
	        submit: function() {
	            this.emit('submit');
	            this.close();
	        },
	        cancel: function() {
	            this.emit('cancel');
	        },
	        close: function() {
	            this.getElement().modal('hide');
	        }
	    });
	
	    Plugin.reg({
	        className: 'Modal',
	        extendEvent: true,
	        singleton: true,
	        init: function() {
	            App.once('ready', this.ready.bind(this));
	        },
	        initEvent: function() {
	
	        },
	        ready: function() {
	            this.initEvent();
	        },
	        array: [],
	        create: function(options) {
	            var me = this;
	            var modal = new Modal(options);
	            modal.once('show', function() {
	                me.array.active = this;
	            });
	            modal.once('close', function() {
	                me.remove(this);
	            });
	            this.array.push(modal);
	            if (options.isCreated) {
	                modal.create();
	            }
	            return modal;
	        },
	        show: function(options) {
	            var modal = this.create(options);
	            modal.show();
	            return modal;
	        },
	        remove: function(modal) {
	            var index = this.array.indexOf(modal);
	            if (index > -1) {
	                this.array.remove(index);
	            }
	            if (this.array.active == modal) {
	                delete this.array.active;
	            }
	        },
	        close: function() {
	            if (this.array.active) {
	                this.array.active.close();
	                this.remove(this.array.active);
	            }
	        }
	    });
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/*!*******************************!*\
  !*** ../js/plugins/Plugin.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ../App */ 51)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App) {
	    App.plugins = {
	        className: App.className + '.plugins',
	        reg: function(module) {
	            var className = this.className + '.' + module.className;
	            module.name = module.className;
	            module.className = className;
	            classjs(module);
	            return classjs.getClass(className);
	        }
	    };
	    return App.plugins;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 66 */
/*!***********************************!*\
  !*** ../hbs/components/modal.hbs ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! handlebars/runtime */ 2);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\"modal fade\" id=\""
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\">\r\n    <div class=\"modal-dialog "
	    + alias4(((helper = (helper = helpers.dialogCSS || (depth0 != null ? depth0.dialogCSS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dialogCSS","hash":{},"data":data}) : helper)))
	    + "\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"modal-title\">"
	    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</h4>\r\n            </div>\r\n            <div class=\"modal-body "
	    + alias4(((helper = (helper = helpers.bodyCSS || (depth0 != null ? depth0.bodyCSS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bodyCSS","hash":{},"data":data}) : helper)))
	    + "\" style=\""
	    + alias4(((helper = (helper = helpers.bodyStyle || (depth0 != null ? depth0.bodyStyle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bodyStyle","hash":{},"data":data}) : helper)))
	    + "\">\r\n                "
	    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\r\n            </div>\r\n            <!-- modal body -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
	    + alias4(((helper = (helper = helpers.cancelLabel || (depth0 != null ? depth0.cancelLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelLabel","hash":{},"data":data}) : helper)))
	    + "</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-role=\"submit\">"
	    + alias4(((helper = (helper = helpers.submitLabel || (depth0 != null ? depth0.submitLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submitLabel","hash":{},"data":data}) : helper)))
	    + "</button>\r\n            </div>\r\n            <!-- modal footer -->\r\n        </div>\r\n        <!-- modal content -->\r\n    </div>\r\n    <!-- modal dialog -->\r\n</div>\r\n";
	},"useData":true});

/***/ },
/* 67 */
/*!**********************************!*\
  !*** ../js/3rd/array/indexOf.js ***!
  \**********************************/
/***/ function(module, exports) {

	// Production steps of ECMA-262, Edition 5, 15.4.4.14
	// Reference: http://es5.github.io/#x15.4.4.14
	if (!Array.prototype.indexOf) {
	    Array.prototype.indexOf = function(searchElement, fromIndex) {
	
	        var k;
	
	        // 1. Let o be the result of calling ToObject passing
	        //    the this value as the argument.
	        if (this == null) {
	            throw new TypeError('"this" is null or not defined');
	        }
	
	        var o = Object(this);
	
	        // 2. Let lenValue be the result of calling the Get
	        //    internal method of o with the argument "length".
	        // 3. Let len be ToUint32(lenValue).
	        var len = o.length >>> 0;
	
	        // 4. If len is 0, return -1.
	        if (len === 0) {
	            return -1;
	        }
	
	        // 5. If argument fromIndex was passed let n be
	        //    ToInteger(fromIndex); else let n be 0.
	        var n = +fromIndex || 0;
	
	        if (Math.abs(n) === Infinity) {
	            n = 0;
	        }
	
	        // 6. If n >= len, return -1.
	        if (n >= len) {
	            return -1;
	        }
	
	        // 7. If n >= 0, then Let k be n.
	        // 8. Else, n<0, Let k be len - abs(n).
	        //    If k is less than 0, then let k be 0.
	        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	
	        // 9. Repeat, while k < len
	        while (k < len) {
	            // a. Let Pk be ToString(k).
	            //   This is implicit for LHS operands of the in operator
	            // b. Let kPresent be the result of calling the
	            //    HasProperty internal method of o with argument Pk.
	            //   This step can be combined with c
	            // c. If kPresent is true, then
	            //    i.  Let elementK be the result of calling the Get
	            //        internal method of o with the argument ToString(k).
	            //   ii.  Let same be the result of applying the
	            //        Strict Equality Comparison Algorithm to
	            //        searchElement and elementK.
	            //  iii.  If same is true, return k.
	            if (k in o && o[k] === searchElement) {
	                return k;
	            }
	            k++;
	        }
	        return -1;
	    };
	}


/***/ },
/* 68 */
/*!*********************************!*\
  !*** ../js/3rd/array/remove.js ***!
  \*********************************/
/***/ function(module, exports) {

	 // define(function() {
	 Array.prototype.remove = function(index, length) {
	     if (this.length < index) {
	         index = this.length;
	     } else if (index < 0) {
	         index = 0;
	     }
	
	     if (length > this.length) {
	         length = this.length;
	     } else if (length < this.length) {
	        
	     } else {
	         length = 1;
	     }
	     this.splice(index, length);
	     return this;
	 };
	 // });


/***/ },
/* 69 */
/*!************************************!*\
  !*** ../js/plugins/view/Insert.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! js/App */ 51),
	  __webpack_require__(/*! ../EventDispatch */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App, Dispatch) {
	
	  Dispatch.reg(new Dispatch.ActionHandle({
	    name: 'Insert',
	    onInsert: function (event) {
	      if (App.options.debug == true) {
	        return;
	      }
	      App.dom.mask.show();
	      App.dom.cancelButton.show();
	    },
	    initEvent: function () {
	      var me = this;
	      App.dom.cancelButton.on('click', function (event) {
	        App.emit('cancel.Property');
	
	        App.dom.mask.hide();
	        App.dom.cancelButton.hide();
	      });
	
	      App.on('change.Property', function () {
	        App.dom.mask.hide();
	        App.dom.cancelButton.hide();
	      });
	    },
	    init: function () {
	      var me = this;
	      App.once('ready', function () {
	        me.initEvent();
	      });
	      this.on('insert', this.onInsert.bind(this));
	    }
	  }));
	
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 70 */
/*!**************************************!*\
  !*** ../js/plugins/EventDispatch.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ../App */ 51),
	    __webpack_require__(/*! ./Plugin */ 65)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, Plugin) {
	
	
	
	    var clazz = Plugin.reg({
	        className: 'EventDispatch',
	        extendEvent: true,
	        singleton: true,
	        init: function() {
	            App.once('ready', this.ready.bind(this));
	        },
	        initEvent: function() {
	            App.on('EventDispatch', this.dispatch.bind(this));
	        },
	        ready: function() {
	            this.initEvent();
	        },
	        getEventType: function(arg1, arg2, arg3) {
	            var array = [];
	            for (var i = 0, len = arguments.length; i < len; i++) {
	                if (arguments[i]) {
	                    array.push(arguments[i]);
	                }
	            }
	            return array.join('.');
	        },
	        dispatch: function(event) {
	            classjs.log();
	            var data = event.data;
	            //事件类型.状态.模块
	            var eventType = this.getEventType(event.type, data.name, (data.view || {}).name);
	            // App.info(this.name + '.dispatch:' + eventType);
	            this.emit(eventType, data);
	
	            //事件类型.状态
	            if (data.returnValue == true) {
	                eventType = this.getEventType(event.type, data.name);
	                //App.info(this.name + '.dispatch:' + eventType);
	                this.emit(eventType, data);
	            }
	
	        },
	        handle: {},
	        reg: function(EventHandle) {
	            EventHandle.init();
	            var eventType = this.getEventType(EventHandle.id, EventHandle.name);
	            this.handle[eventType] = EventHandle;
	        }
	    });
	
	    if (clazz.init) {
	        clazz.init();
	    }
	
	    className = clazz.className;
	
	    classjs({
	        className: className + '.EventHandle',
	        eventType: 'event',
	        on: function(type, handle) {
	            var eventType = clazz.getEventType(this.eventType, type, this.id);
	            return clazz.on(eventType, handle);
	        },
	        get: function(id) {
	            return $(document.getElementById(id));
	        }
	    });
	
	
	    classjs({
	        className: className + '.ChangeHandle',
	        extend: className + '.EventHandle',
	        eventType: 'change'
	    });
	
	    classjs({
	        className: className + '.ActionHandle',
	        extend: className + '.EventHandle',
	        eventType: 'action'
	    });
	
	
	    classjs({
	        className: className + '.IncludeHandle',
	        extend: className + '.EventHandle',
	        eventType: 'include'
	    });
	
	    return clazz;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 71 */
/*!*********************************************!*\
  !*** ../js/plugins/property/WebUploader.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! js/3rd/webuploader.html5only */ 72),
	    __webpack_require__(/*! ../../App */ 51),
	    __webpack_require__(/*! ../EventDispatch */ 70),
	    __webpack_require__(/*! css/webuploader.css */ 74)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(WebUploader, App, EventDispatch) {
	    App.plugins.reg({
	        className: 'WebUploader',
	        singleton: true,
	        init: function() {
	            App.once('ready', this.initEvent.bind(this));
	        },
	        // onReady: function() {
	        //     this.initEvent();
	        // },
	        initEvent: function() {
	            var me = this;
	            App.dom.property.on('change', 'input[type="file"]', this.doChangeHandle.bind(this));
	
	            App.dom.property.on('click', '[data-action=selectedImage]', function(event) {
	                me.onSelectedImage(event);
	            });
	
	        },
	        onSelectedImage: function(event) {
	            var me = this;
	            var formGroup = $(event.target).closest('.form-group');
	
	            function callback(src) {
	                me.changeImage(formGroup, src);
	            };
	
	            App.options.onSelectedImage && App.options.onSelectedImage(callback);
	
	        },
	        doChangeHandle: function(event) {
	            var target = event.target;
	            var file = (target.files || [])[0];
	            if (file) {
	                var me=this;
	                var imageSize=$(target).closest('.form-group').attr('data-image-size');
	                var imageSizeArgs=imageSize.split(/\D+/);
	                var width=0;
	                var height=0;
	                if(+imageSizeArgs[0]>0){
	                    width= +imageSizeArgs[0];
	                }
	                if(+imageSizeArgs[1]>0){
	                    height= +imageSizeArgs[1];
	                }
	                var fr = new FileReader();
	
	                fr.onload = function() { // file is loaded
	                var img = new Image();
	
	                img.onload = function() {
	                    var naturalHeight=img.naturalHeight;
	                    var naturalWidth=img.naturalWidth;
	                    var stateCheck=true;
	                    if(App.options.onImageSizeCheck){
	                        stateCheck = App.options.onImageSizeCheck({
	                            height:height,
	                            width:width,
	                            naturalHeight:naturalHeight,
	                            naturalWidth:naturalWidth
	                        });
	                    }
	                    if(stateCheck){
	                        if(width === naturalWidth){
	                            width=0;
	                            height=0;
	                        }
	                        me.createWebUploader(target, file,width,height);
	                    }
	                };
	
	                img.src = fr.result; // is the data URL because called with readAsDataURL
	                };
	
	                fr.readAsDataURL(file); // I'm using a <input type="file"> for demonstrating
	
	            }
	        },
	        formData: {
	            uid: "asd"
	        },
	        createWebUploader: function(target, file,width,height) {
	            var me = this;
	            var defaultOptions = this.getWebUploaderOptions();
	            var opts = {
	                // 选完文件后，是否自动上传。
	                // auto: true,
	                // swf文件路径
	                // swf: this.getSWF(),
	                // 文件接收服务端。
	                dnd: document.body,
	                // 选择文件的按钮。可选。
	                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	                paste: document.body,
	                pick: {
	                    multiple: false,
	                    id: target
	                },
	                formData: this.formData,
	
	                // 只允许选择图片文件。
	                accept: {
	                    title: 'Images',
	                    extensions: 'jpg,jpeg',
	                    mimeTypes: 'image/jpg,image/jpeg'
	                }
	            };
	
	            if(width > 0 ){
	                opts.compress = {
	                    width: width,
	                    height: height,
	
	                    // 图片质量，只有type为`image/jpeg`的时候才有效。
	                    //quality: 90,
	
	                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	                    allowMagnify: false,
	
	                    // 是否允许裁剪。
	                    crop: true,
	
	                    // 是否保留头部meta信息。
	                    preserveHeaders: true,
	                    
	                    isTopAlignment:true,
	
	                    // 如果发现压缩后文件大小比原来还大，则使用原来图片
	                    // 此属性可能会影响图片自动纠正功能
	                    noCompressIfLarger: false,
	
	                    // 单位字节，如果图片大小小于此值，不会采用压缩。
	                    compressSize: 0
	                };
	            }
	            var uploader = WebUploader.create($.extend(true, {}, defaultOptions, opts));
	
	 
	
	
	            uploader.onUploadProgress = function(file, percentage) {
	                var uploadImageBox = $(this.options.pick.id).closest('.form-group');
	                var progress = uploadImageBox.find('.progress:first');
	                progress.removeClass('hide');
	                progress.find('[data-role=progressBar]:first').css('width', (percentage * 100) + '%');
	
	            };
	
	            if(defaultOptions && defaultOptions.onUploaderError){
	                uploader.on('error', defaultOptions.onUploaderError);
	            }
	
	
	            uploader.onUploadSuccess = function(file, response) {
	                var imageSrc = response._raw;
	                var uploadImageBox = $(this.options.pick.id).closest('.form-group');
	                me.changeImage(uploadImageBox, imageSrc);
	
	                //imageInput.change();
	
	                //App.PropertyPanel.change();
	            };
	
	            uploader.onUploadError = function(file, reason) {
	                App.error('上传图片出错:' + reason);
	            };
	
	            uploader.onUploadComplete = function(file) {
	                setTimeout(function() {
	                    uploader.destroy();
	                }, 0);
	            };
	            uploader.onReady = function() {
	                uploader.addFiles(file);
	                uploader.upload();
	            };
	
	        },
	        changeImage: function(formGroup, src) {
	            var progress = formGroup.find('.progress:first');
	            progress.addClass('hide');
	
	            formGroup.find('.img-full img:first').attr('src', App.helper.getImageSrc(src));
	            formGroup.find('[data-role=innerLabel]:first').text('修改图片');
	
	            var imageInput = formGroup.find('[name="imageSrc"]');
	
	            imageInput.val(src);
	
	        },
	        getWebUploaderOptions: function() {
	            var o = window.WebUploaderOptions || {};
	            if (!o.server) {
	                throw new Error('未配置图片上传至服务的地址,window.WebUploaderOptions.server 参见: http://fex.baidu.com/webuploader/doc/index.html');
	            }
	            return o;
	        }
	    }).init();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 72 */
/*!******************************************!*\
  !*** ../js/3rd/webuploader.html5only.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WebUploader 0.1.5 */
	
	
	/**
	 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
	 *
	 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
	 */
	(function( root, factory ) {
	    var modules = {},
	
	        // 内部require, 简单不完全实现。
	        // https://github.com/amdjs/amdjs-api/wiki/require
	        _require = function( deps, callback ) {
	            var args, len, i;
	
	            // 如果deps不是数组，则直接返回指定module
	            if ( typeof deps === 'string' ) {
	                return getModule( deps );
	            } else {
	                args = [];
	                for( len = deps.length, i = 0; i < len; i++ ) {
	                    args.push( getModule( deps[ i ] ) );
	                }
	
	                return callback.apply( null, args );
	            }
	        },
	
	        // 内部define，暂时不支持不指定id.
	        _define = function( id, deps, factory ) {
	            if ( arguments.length === 2 ) {
	                factory = deps;
	                deps = null;
	            }
	
	            _require( deps || [], function() {
	                setModule( id, factory, arguments );
	            });
	        },
	
	        // 设置module, 兼容CommonJs写法。
	        setModule = function( id, factory, args ) {
	            var module = {
	                    exports: factory
	                },
	                returned;
	
	            if ( typeof factory === 'function' ) {
	                args.length || (args = [ _require, module.exports, module ]);
	                returned = factory.apply( null, args );
	                returned !== undefined && (module.exports = returned);
	            }
	
	            modules[ id ] = module.exports;
	        },
	
	        // 根据id获取module
	        getModule = function( id ) {
	            var module = modules[ id ] || root[ id ];
	
	            if ( !module ) {
	                throw new Error( '`' + id + '` is undefined' );
	            }
	
	            return module;
	        },
	
	        // 将所有modules，将路径ids装换成对象。
	        exportsTo = function( obj ) {
	            var key, host, parts, part, last, ucFirst;
	
	            // make the first character upper case.
	            ucFirst = function( str ) {
	                return str && (str.charAt( 0 ).toUpperCase() + str.substr( 1 ));
	            };
	
	            for ( key in modules ) {
	                host = obj;
	
	                if ( !modules.hasOwnProperty( key ) ) {
	                    continue;
	                }
	
	                parts = key.split('/');
	                last = ucFirst( parts.pop() );
	
	                while( (part = ucFirst( parts.shift() )) ) {
	                    host[ part ] = host[ part ] || {};
	                    host = host[ part ];
	                }
	
	                host[ last ] = modules[ key ];
	            }
	
	            return obj;
	        },
	
	        makeExport = function( dollar ) {
	            root.__dollar = dollar;
	
	            // exports every module.
	            return exportsTo( factory( root, _define, _require ) );
	        },
	
	        origin;
	
	    if ( typeof module === 'object' && typeof module.exports === 'object' ) {
	
	        // For CommonJS and CommonJS-like environments where a proper window is present,
	        module.exports = makeExport();
	    } else if ( true ) {
	
	        // Allow using this built library as an AMD module
	        // in another project. That other project will only
	        // see this AMD call, not the internal modules in
	        // the closure below.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ 73) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (makeExport), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	
	        // Browser globals case. Just assign the
	        // result to a property on the global.
	        origin = root.WebUploader;
	        root.WebUploader = makeExport();
	        root.WebUploader.noConflict = function() {
	            root.WebUploader = origin;
	        };
	    }
	})( window, function( window, define, require ) {
	
	
	    /**
	     * @fileOverview jQuery or Zepto
	     */
	    define('dollar-third',[],function() {
	        var $ = window.__dollar || window.jQuery || window.Zepto;
	    
	        if ( !$ ) {
	            throw new Error('jQuery or Zepto not found!');
	        }
	    
	        return $;
	    });
	    /**
	     * @fileOverview Dom 操作相关
	     */
	    define('dollar',[
	        'dollar-third'
	    ], function( _ ) {
	        return _;
	    });
	    /**
	     * @fileOverview 使用jQuery的Promise
	     */
	    define('promise-third',[
	        'dollar'
	    ], function( $ ) {
	        return {
	            Deferred: $.Deferred,
	            when: $.when,
	    
	            isPromise: function( anything ) {
	                return anything && typeof anything.then === 'function';
	            }
	        };
	    });
	    /**
	     * @fileOverview Promise/A+
	     */
	    define('promise',[
	        'promise-third'
	    ], function( _ ) {
	        return _;
	    });
	    /**
	     * @fileOverview 基础类方法。
	     */
	    
	    /**
	     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
	     *
	     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
	     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
	     *
	     * * module `base`：WebUploader.Base
	     * * module `file`: WebUploader.File
	     * * module `lib/dnd`: WebUploader.Lib.Dnd
	     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
	     *
	     *
	     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
	     * @module WebUploader
	     * @title WebUploader API文档
	     */
	    define('base',[
	        'dollar',
	        'promise'
	    ], function( $, promise ) {
	    
	        var noop = function() {},
	            call = Function.call;
	    
	        // http://jsperf.com/uncurrythis
	        // 反科里化
	        function uncurryThis( fn ) {
	            return function() {
	                return call.apply( fn, arguments );
	            };
	        }
	    
	        function bindFn( fn, context ) {
	            return function() {
	                return fn.apply( context, arguments );
	            };
	        }
	    
	        function createObject( proto ) {
	            var f;
	    
	            if ( Object.create ) {
	                return Object.create( proto );
	            } else {
	                f = function() {};
	                f.prototype = proto;
	                return new f();
	            }
	        }
	    
	    
	        /**
	         * 基础类，提供一些简单常用的方法。
	         * @class Base
	         */
	        return {
	    
	            /**
	             * @property {String} version 当前版本号。
	             */
	            version: '0.1.5',
	    
	            /**
	             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
	             */
	            $: $,
	    
	            Deferred: promise.Deferred,
	    
	            isPromise: promise.isPromise,
	    
	            when: promise.when,
	    
	            /**
	             * @description  简单的浏览器检查结果。
	             *
	             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
	             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
	             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
	             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
	             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
	             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
	             *
	             * @property {Object} [browser]
	             */
	            browser: (function( ua ) {
	                var ret = {},
	                    webkit = ua.match( /WebKit\/([\d.]+)/ ),
	                    chrome = ua.match( /Chrome\/([\d.]+)/ ) ||
	                        ua.match( /CriOS\/([\d.]+)/ ),
	    
	                    ie = ua.match( /MSIE\s([\d\.]+)/ ) ||
	                        ua.match( /(?:trident)(?:.*rv:([\w.]+))?/i ),
	                    firefox = ua.match( /Firefox\/([\d.]+)/ ),
	                    safari = ua.match( /Safari\/([\d.]+)/ ),
	                    opera = ua.match( /OPR\/([\d.]+)/ );
	    
	                webkit && (ret.webkit = parseFloat( webkit[ 1 ] ));
	                chrome && (ret.chrome = parseFloat( chrome[ 1 ] ));
	                ie && (ret.ie = parseFloat( ie[ 1 ] ));
	                firefox && (ret.firefox = parseFloat( firefox[ 1 ] ));
	                safari && (ret.safari = parseFloat( safari[ 1 ] ));
	                opera && (ret.opera = parseFloat( opera[ 1 ] ));
	    
	                return ret;
	            })( navigator.userAgent ),
	    
	            /**
	             * @description  操作系统检查结果。
	             *
	             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
	             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
	             * @property {Object} [os]
	             */
	            os: (function( ua ) {
	                var ret = {},
	    
	                    // osx = !!ua.match( /\(Macintosh\; Intel / ),
	                    android = ua.match( /(?:Android);?[\s\/]+([\d.]+)?/ ),
	                    ios = ua.match( /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/ );
	    
	                // osx && (ret.osx = true);
	                android && (ret.android = parseFloat( android[ 1 ] ));
	                ios && (ret.ios = parseFloat( ios[ 1 ].replace( /_/g, '.' ) ));
	    
	                return ret;
	            })( navigator.userAgent ),
	    
	            /**
	             * 实现类与类之间的继承。
	             * @method inherits
	             * @grammar Base.inherits( super ) => child
	             * @grammar Base.inherits( super, protos ) => child
	             * @grammar Base.inherits( super, protos, statics ) => child
	             * @param  {Class} super 父类
	             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
	             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
	             * @param  {Object} [statics] 静态属性或方法。
	             * @return {Class} 返回子类。
	             * @example
	             * function Person() {
	             *     console.log( 'Super' );
	             * }
	             * Person.prototype.hello = function() {
	             *     console.log( 'hello' );
	             * };
	             *
	             * var Manager = Base.inherits( Person, {
	             *     world: function() {
	             *         console.log( 'World' );
	             *     }
	             * });
	             *
	             * // 因为没有指定构造器，父类的构造器将会执行。
	             * var instance = new Manager();    // => Super
	             *
	             * // 继承子父类的方法
	             * instance.hello();    // => hello
	             * instance.world();    // => World
	             *
	             * // 子类的__super__属性指向父类
	             * console.log( Manager.__super__ === Person );    // => true
	             */
	            inherits: function( Super, protos, staticProtos ) {
	                var child;
	    
	                if ( typeof protos === 'function' ) {
	                    child = protos;
	                    protos = null;
	                } else if ( protos && protos.hasOwnProperty('constructor') ) {
	                    child = protos.constructor;
	                } else {
	                    child = function() {
	                        return Super.apply( this, arguments );
	                    };
	                }
	    
	                // 复制静态方法
	                $.extend( true, child, Super, staticProtos || {} );
	    
	                /* jshint camelcase: false */
	    
	                // 让子类的__super__属性指向父类。
	                child.__super__ = Super.prototype;
	    
	                // 构建原型，添加原型方法或属性。
	                // 暂时用Object.create实现。
	                child.prototype = createObject( Super.prototype );
	                protos && $.extend( true, child.prototype, protos );
	    
	                return child;
	            },
	    
	            /**
	             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
	             * @method noop
	             */
	            noop: noop,
	    
	            /**
	             * 返回一个新的方法，此方法将已指定的`context`来执行。
	             * @grammar Base.bindFn( fn, context ) => Function
	             * @method bindFn
	             * @example
	             * var doSomething = function() {
	             *         console.log( this.name );
	             *     },
	             *     obj = {
	             *         name: 'Object Name'
	             *     },
	             *     aliasFn = Base.bind( doSomething, obj );
	             *
	             *  aliasFn();    // => Object Name
	             *
	             */
	            bindFn: bindFn,
	    
	            /**
	             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
	             * @grammar Base.log( args... ) => undefined
	             * @method log
	             */
	            log: (function() {
	                if ( window.console ) {
	                    return bindFn( console.log, console );
	                }
	                return noop;
	            })(),
	    
	            nextTick: (function() {
	    
	                return function( cb ) {
	                    setTimeout( cb, 1 );
	                };
	    
	                // @bug 当浏览器不在当前窗口时就停了。
	                // var next = window.requestAnimationFrame ||
	                //     window.webkitRequestAnimationFrame ||
	                //     window.mozRequestAnimationFrame ||
	                //     function( cb ) {
	                //         window.setTimeout( cb, 1000 / 60 );
	                //     };
	    
	                // // fix: Uncaught TypeError: Illegal invocation
	                // return bindFn( next, window );
	            })(),
	    
	            /**
	             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
	             * 将用来将非数组对象转化成数组对象。
	             * @grammar Base.slice( target, start[, end] ) => Array
	             * @method slice
	             * @example
	             * function doSomthing() {
	             *     var args = Base.slice( arguments, 1 );
	             *     console.log( args );
	             * }
	             *
	             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
	             */
	            slice: uncurryThis( [].slice ),
	    
	            /**
	             * 生成唯一的ID
	             * @method guid
	             * @grammar Base.guid() => String
	             * @grammar Base.guid( prefx ) => String
	             */
	            guid: (function() {
	                var counter = 0;
	    
	                return function( prefix ) {
	                    var guid = (+new Date()).toString( 32 ),
	                        i = 0;
	    
	                    for ( ; i < 5; i++ ) {
	                        guid += Math.floor( Math.random() * 65535 ).toString( 32 );
	                    }
	    
	                    return (prefix || 'wu_') + guid + (counter++).toString( 32 );
	                };
	            })(),
	    
	            /**
	             * 格式化文件大小, 输出成带单位的字符串
	             * @method formatSize
	             * @grammar Base.formatSize( size ) => String
	             * @grammar Base.formatSize( size, pointLength ) => String
	             * @grammar Base.formatSize( size, pointLength, units ) => String
	             * @param {Number} size 文件大小
	             * @param {Number} [pointLength=2] 精确到的小数点数。
	             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
	             * @example
	             * console.log( Base.formatSize( 100 ) );    // => 100B
	             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
	             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
	             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
	             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
	             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
	             */
	            formatSize: function( size, pointLength, units ) {
	                var unit;
	    
	                units = units || [ 'B', 'K', 'M', 'G', 'TB' ];
	    
	                while ( (unit = units.shift()) && size > 1024 ) {
	                    size = size / 1024;
	                }
	    
	                return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
	                        unit;
	            }
	        };
	    });
	    /**
	     * 事件处理类，可以独立使用，也可以扩展给对象使用。
	     * @fileOverview Mediator
	     */
	    define('mediator',[
	        'base'
	    ], function( Base ) {
	        var $ = Base.$,
	            slice = [].slice,
	            separator = /\s+/,
	            protos;
	    
	        // 根据条件过滤出事件handlers.
	        function findHandlers( arr, name, callback, context ) {
	            return $.grep( arr, function( handler ) {
	                return handler &&
	                        (!name || handler.e === name) &&
	                        (!callback || handler.cb === callback ||
	                        handler.cb._cb === callback) &&
	                        (!context || handler.ctx === context);
	            });
	        }
	    
	        function eachEvent( events, callback, iterator ) {
	            // 不支持对象，只支持多个event用空格隔开
	            $.each( (events || '').split( separator ), function( _, key ) {
	                iterator( key, callback );
	            });
	        }
	    
	        function triggerHanders( events, args ) {
	            var stoped = false,
	                i = -1,
	                len = events.length,
	                handler;
	    
	            while ( ++i < len ) {
	                handler = events[ i ];
	    
	                if ( handler.cb.apply( handler.ctx2, args ) === false ) {
	                    stoped = true;
	                    break;
	                }
	            }
	    
	            return !stoped;
	        }
	    
	        protos = {
	    
	            /**
	             * 绑定事件。
	             *
	             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
	             * ```javascript
	             * var obj = {};
	             *
	             * // 使得obj有事件行为
	             * Mediator.installTo( obj );
	             *
	             * obj.on( 'testa', function( arg1, arg2 ) {
	             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
	             * });
	             *
	             * obj.trigger( 'testa', 'arg1', 'arg2' );
	             * ```
	             *
	             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
	             * 切会影响到`trigger`方法的返回值，为`false`。
	             *
	             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
	             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
	             * ```javascript
	             * obj.on( 'all', function( type, arg1, arg2 ) {
	             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
	             * });
	             * ```
	             *
	             * @method on
	             * @grammar on( name, callback[, context] ) => self
	             * @param  {String}   name     事件名，支持多个事件用空格隔开
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             * @class Mediator
	             */
	            on: function( name, callback, context ) {
	                var me = this,
	                    set;
	    
	                if ( !callback ) {
	                    return this;
	                }
	    
	                set = this._events || (this._events = []);
	    
	                eachEvent( name, callback, function( name, callback ) {
	                    var handler = { e: name };
	    
	                    handler.cb = callback;
	                    handler.ctx = context;
	                    handler.ctx2 = context || me;
	                    handler.id = set.length;
	    
	                    set.push( handler );
	                });
	    
	                return this;
	            },
	    
	            /**
	             * 绑定事件，且当handler执行完后，自动解除绑定。
	             * @method once
	             * @grammar once( name, callback[, context] ) => self
	             * @param  {String}   name     事件名
	             * @param  {Function} callback 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */
	            once: function( name, callback, context ) {
	                var me = this;
	    
	                if ( !callback ) {
	                    return me;
	                }
	    
	                eachEvent( name, callback, function( name, callback ) {
	                    var once = function() {
	                            me.off( name, once );
	                            return callback.apply( context || me, arguments );
	                        };
	    
	                    once._cb = callback;
	                    me.on( name, once, context );
	                });
	    
	                return me;
	            },
	    
	            /**
	             * 解除事件绑定
	             * @method off
	             * @grammar off( [name[, callback[, context] ] ] ) => self
	             * @param  {String}   [name]     事件名
	             * @param  {Function} [callback] 事件处理器
	             * @param  {Object}   [context]  事件处理器的上下文。
	             * @return {self} 返回自身，方便链式
	             * @chainable
	             */
	            off: function( name, cb, ctx ) {
	                var events = this._events;
	    
	                if ( !events ) {
	                    return this;
	                }
	    
	                if ( !name && !cb && !ctx ) {
	                    this._events = [];
	                    return this;
	                }
	    
	                eachEvent( name, cb, function( name, cb ) {
	                    $.each( findHandlers( events, name, cb, ctx ), function() {
	                        delete events[ this.id ];
	                    });
	                });
	    
	                return this;
	            },
	    
	            /**
	             * 触发事件
	             * @method trigger
	             * @grammar trigger( name[, args...] ) => self
	             * @param  {String}   type     事件名
	             * @param  {*} [...] 任意参数
	             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
	             */
	            trigger: function( type ) {
	                var args, events, allEvents;
	    
	                if ( !this._events || !type ) {
	                    return this;
	                }
	    
	                args = slice.call( arguments, 1 );
	                events = findHandlers( this._events, type );
	                allEvents = findHandlers( this._events, 'all' );
	    
	                return triggerHanders( events, args ) &&
	                        triggerHanders( allEvents, arguments );
	            }
	        };
	    
	        /**
	         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
	         * 主要目的是负责模块与模块之间的合作，降低耦合度。
	         *
	         * @class Mediator
	         */
	        return $.extend({
	    
	            /**
	             * 可以通过这个接口，使任何对象具备事件功能。
	             * @method installTo
	             * @param  {Object} obj 需要具备事件行为的对象。
	             * @return {Object} 返回obj.
	             */
	            installTo: function( obj ) {
	                return $.extend( obj, protos );
	            }
	    
	        }, protos );
	    });
	    /**
	     * @fileOverview Uploader上传类
	     */
	    define('uploader',[
	        'base',
	        'mediator'
	    ], function( Base, Mediator ) {
	    
	        var $ = Base.$;
	    
	        /**
	         * 上传入口类。
	         * @class Uploader
	         * @constructor
	         * @grammar new Uploader( opts ) => Uploader
	         * @example
	         * var uploader = WebUploader.Uploader({
	         *     swf: 'path_of_swf/Uploader.swf',
	         *
	         *     // 开起分片上传。
	         *     chunked: true
	         * });
	         */
	        function Uploader( opts ) {
	            this.options = $.extend( true, {}, Uploader.options, opts );
	            this._init( this.options );
	        }
	    
	        // default Options
	        // widgets中有相应扩展
	        Uploader.options = {};
	        Mediator.installTo( Uploader.prototype );
	    
	        // 批量添加纯命令式方法。
	        $.each({
	            upload: 'start-upload',
	            stop: 'stop-upload',
	            getFile: 'get-file',
	            getFiles: 'get-files',
	            addFile: 'add-file',
	            addFiles: 'add-file',
	            sort: 'sort-files',
	            removeFile: 'remove-file',
	            cancelFile: 'cancel-file',
	            skipFile: 'skip-file',
	            retry: 'retry',
	            isInProgress: 'is-in-progress',
	            makeThumb: 'make-thumb',
	            md5File: 'md5-file',
	            getDimension: 'get-dimension',
	            addButton: 'add-btn',
	            predictRuntimeType: 'predict-runtime-type',
	            refresh: 'refresh',
	            disable: 'disable',
	            enable: 'enable',
	            reset: 'reset'
	        }, function( fn, command ) {
	            Uploader.prototype[ fn ] = function() {
	                return this.request( command, arguments );
	            };
	        });
	    
	        $.extend( Uploader.prototype, {
	            state: 'pending',
	    
	            _init: function( opts ) {
	                var me = this;
	    
	                me.request( 'init', opts, function() {
	                    me.state = 'ready';
	                    me.trigger('ready');
	                });
	            },
	    
	            /**
	             * 获取或者设置Uploader配置项。
	             * @method option
	             * @grammar option( key ) => *
	             * @grammar option( key, val ) => self
	             * @example
	             *
	             * // 初始状态图片上传前不会压缩
	             * var uploader = new WebUploader.Uploader({
	             *     compress: null;
	             * });
	             *
	             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
	             * uploader.option( 'compress', {
	             *     width: 1600,
	             *     height: 1600
	             * });
	             */
	            option: function( key, val ) {
	                var opts = this.options;
	    
	                // setter
	                if ( arguments.length > 1 ) {
	    
	                    if ( $.isPlainObject( val ) &&
	                            $.isPlainObject( opts[ key ] ) ) {
	                        $.extend( opts[ key ], val );
	                    } else {
	                        opts[ key ] = val;
	                    }
	    
	                } else {    // getter
	                    return key ? opts[ key ] : opts;
	                }
	            },
	    
	            /**
	             * 获取文件统计信息。返回一个包含一下信息的对象。
	             * * `successNum` 上传成功的文件数
	             * * `progressNum` 上传中的文件数
	             * * `cancelNum` 被删除的文件数
	             * * `invalidNum` 无效的文件数
	             * * `uploadFailNum` 上传失败的文件数
	             * * `queueNum` 还在队列中的文件数
	             * * `interruptNum` 被暂停的文件数
	             * @method getStats
	             * @grammar getStats() => Object
	             */
	            getStats: function() {
	                // return this._mgr.getStats.apply( this._mgr, arguments );
	                var stats = this.request('get-stats');
	    
	                return stats ? {
	                    successNum: stats.numOfSuccess,
	                    progressNum: stats.numOfProgress,
	    
	                    // who care?
	                    // queueFailNum: 0,
	                    cancelNum: stats.numOfCancel,
	                    invalidNum: stats.numOfInvalid,
	                    uploadFailNum: stats.numOfUploadFailed,
	                    queueNum: stats.numOfQueue,
	                    interruptNum: stats.numofInterrupt
	                } : {};
	            },
	    
	            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
	            trigger: function( type/*, args...*/ ) {
	                var args = [].slice.call( arguments, 1 ),
	                    opts = this.options,
	                    name = 'on' + type.substring( 0, 1 ).toUpperCase() +
	                        type.substring( 1 );
	    
	                if (
	                        // 调用通过on方法注册的handler.
	                        Mediator.trigger.apply( this, arguments ) === false ||
	    
	                        // 调用opts.onEvent
	                        $.isFunction( opts[ name ] ) &&
	                        opts[ name ].apply( this, args ) === false ||
	    
	                        // 调用this.onEvent
	                        $.isFunction( this[ name ] ) &&
	                        this[ name ].apply( this, args ) === false ||
	    
	                        // 广播所有uploader的事件。
	                        Mediator.trigger.apply( Mediator,
	                        [ this, type ].concat( args ) ) === false ) {
	    
	                    return false;
	                }
	    
	                return true;
	            },
	    
	            /**
	             * 销毁 webuploader 实例
	             * @method destroy
	             * @grammar destroy() => undefined
	             */
	            destroy: function() {
	                this.request( 'destroy', arguments );
	                this.off();
	            },
	    
	            // widgets/widget.js将补充此方法的详细文档。
	            request: Base.noop
	        });
	    
	        /**
	         * 创建Uploader实例，等同于new Uploader( opts );
	         * @method create
	         * @class Base
	         * @static
	         * @grammar Base.create( opts ) => Uploader
	         */
	        Base.create = Uploader.create = function( opts ) {
	            return new Uploader( opts );
	        };
	    
	        // 暴露Uploader，可以通过它来扩展业务逻辑。
	        Base.Uploader = Uploader;
	    
	        return Uploader;
	    });
	    /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */
	    define('runtime/runtime',[
	        'base',
	        'mediator'
	    ], function( Base, Mediator ) {
	    
	        var $ = Base.$,
	            factories = {},
	    
	            // 获取对象的第一个key
	            getFirstKey = function( obj ) {
	                for ( var key in obj ) {
	                    if ( obj.hasOwnProperty( key ) ) {
	                        return key;
	                    }
	                }
	                return null;
	            };
	    
	        // 接口类。
	        function Runtime( options ) {
	            this.options = $.extend({
	                container: document.body
	            }, options );
	            this.uid = Base.guid('rt_');
	        }
	    
	        $.extend( Runtime.prototype, {
	    
	            getContainer: function() {
	                var opts = this.options,
	                    parent, container;
	    
	                if ( this._container ) {
	                    return this._container;
	                }
	    
	                parent = $( opts.container || document.body );
	                container = $( document.createElement('div') );
	    
	                container.attr( 'id', 'rt_' + this.uid );
	                container.css({
	                    position: 'absolute',
	                    top: '0px',
	                    left: '0px',
	                    width: '1px',
	                    height: '1px',
	                    overflow: 'hidden'
	                });
	    
	                parent.append( container );
	                parent.addClass('webuploader-container');
	                this._container = container;
	                this._parent = parent;
	                return container;
	            },
	    
	            init: Base.noop,
	            exec: Base.noop,
	    
	            destroy: function() {
	                this._container && this._container.remove();
	                this._parent && this._parent.removeClass('webuploader-container');
	                this.off();
	            }
	        });
	    
	        Runtime.orders = 'html5,flash';
	    
	    
	        /**
	         * 添加Runtime实现。
	         * @param {String} type    类型
	         * @param {Runtime} factory 具体Runtime实现。
	         */
	        Runtime.addRuntime = function( type, factory ) {
	            factories[ type ] = factory;
	        };
	    
	        Runtime.hasRuntime = function( type ) {
	            return !!(type ? factories[ type ] : getFirstKey( factories ));
	        };
	    
	        Runtime.create = function( opts, orders ) {
	            var type, runtime;
	    
	            orders = orders || Runtime.orders;
	            $.each( orders.split( /\s*,\s*/g ), function() {
	                if ( factories[ this ] ) {
	                    type = this;
	                    return false;
	                }
	            });
	    
	            type = type || getFirstKey( factories );
	    
	            if ( !type ) {
	                throw new Error('Runtime Error');
	            }
	    
	            runtime = new factories[ type ]( opts );
	            return runtime;
	        };
	    
	        Mediator.installTo( Runtime.prototype );
	        return Runtime;
	    });
	    
	    /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */
	    define('runtime/client',[
	        'base',
	        'mediator',
	        'runtime/runtime'
	    ], function( Base, Mediator, Runtime ) {
	    
	        var cache;
	    
	        cache = (function() {
	            var obj = {};
	    
	            return {
	                add: function( runtime ) {
	                    obj[ runtime.uid ] = runtime;
	                },
	    
	                get: function( ruid, standalone ) {
	                    var i;
	    
	                    if ( ruid ) {
	                        return obj[ ruid ];
	                    }
	    
	                    for ( i in obj ) {
	                        // 有些类型不能重用，比如filepicker.
	                        if ( standalone && obj[ i ].__standalone ) {
	                            continue;
	                        }
	    
	                        return obj[ i ];
	                    }
	    
	                    return null;
	                },
	    
	                remove: function( runtime ) {
	                    delete obj[ runtime.uid ];
	                }
	            };
	        })();
	    
	        function RuntimeClient( component, standalone ) {
	            var deferred = Base.Deferred(),
	                runtime;
	    
	            this.uid = Base.guid('client_');
	    
	            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
	            this.runtimeReady = function( cb ) {
	                return deferred.done( cb );
	            };
	    
	            this.connectRuntime = function( opts, cb ) {
	    
	                // already connected.
	                if ( runtime ) {
	                    throw new Error('already connected!');
	                }
	    
	                deferred.done( cb );
	    
	                if ( typeof opts === 'string' && cache.get( opts ) ) {
	                    runtime = cache.get( opts );
	                }
	    
	                // 像filePicker只能独立存在，不能公用。
	                runtime = runtime || cache.get( null, standalone );
	    
	                // 需要创建
	                if ( !runtime ) {
	                    runtime = Runtime.create( opts, opts.runtimeOrder );
	                    runtime.__promise = deferred.promise();
	                    runtime.once( 'ready', deferred.resolve );
	                    runtime.init();
	                    cache.add( runtime );
	                    runtime.__client = 1;
	                } else {
	                    // 来自cache
	                    Base.$.extend( runtime.options, opts );
	                    runtime.__promise.then( deferred.resolve );
	                    runtime.__client++;
	                }
	    
	                standalone && (runtime.__standalone = standalone);
	                return runtime;
	            };
	    
	            this.getRuntime = function() {
	                return runtime;
	            };
	    
	            this.disconnectRuntime = function() {
	                if ( !runtime ) {
	                    return;
	                }
	    
	                runtime.__client--;
	    
	                if ( runtime.__client <= 0 ) {
	                    cache.remove( runtime );
	                    delete runtime.__promise;
	                    runtime.destroy();
	                }
	    
	                runtime = null;
	            };
	    
	            this.exec = function() {
	                if ( !runtime ) {
	                    return;
	                }
	    
	                var args = Base.slice( arguments );
	                component && args.unshift( component );
	    
	                return runtime.exec.apply( this, args );
	            };
	    
	            this.getRuid = function() {
	                return runtime && runtime.uid;
	            };
	    
	            this.destroy = (function( destroy ) {
	                return function() {
	                    destroy && destroy.apply( this, arguments );
	                    this.trigger('destroy');
	                    this.off();
	                    this.exec('destroy');
	                    this.disconnectRuntime();
	                };
	            })( this.destroy );
	        }
	    
	        Mediator.installTo( RuntimeClient.prototype );
	        return RuntimeClient;
	    });
	    /**
	     * @fileOverview 错误信息
	     */
	    define('lib/dnd',[
	        'base',
	        'mediator',
	        'runtime/client'
	    ], function( Base, Mediator, RuntimeClent ) {
	    
	        var $ = Base.$;
	    
	        function DragAndDrop( opts ) {
	            opts = this.options = $.extend({}, DragAndDrop.options, opts );
	    
	            opts.container = $( opts.container );
	    
	            if ( !opts.container.length ) {
	                return;
	            }
	    
	            RuntimeClent.call( this, 'DragAndDrop' );
	        }
	    
	        DragAndDrop.options = {
	            accept: null,
	            disableGlobalDnd: false
	        };
	    
	        Base.inherits( RuntimeClent, {
	            constructor: DragAndDrop,
	    
	            init: function() {
	                var me = this;
	    
	                me.connectRuntime( me.options, function() {
	                    me.exec('init');
	                    me.trigger('ready');
	                });
	            }
	        });
	    
	        Mediator.installTo( DragAndDrop.prototype );
	    
	        return DragAndDrop;
	    });
	    /**
	     * @fileOverview 组件基类。
	     */
	    define('widgets/widget',[
	        'base',
	        'uploader'
	    ], function( Base, Uploader ) {
	    
	        var $ = Base.$,
	            _init = Uploader.prototype._init,
	            _destroy = Uploader.prototype.destroy,
	            IGNORE = {},
	            widgetClass = [];
	    
	        function isArrayLike( obj ) {
	            if ( !obj ) {
	                return false;
	            }
	    
	            var length = obj.length,
	                type = $.type( obj );
	    
	            if ( obj.nodeType === 1 && length ) {
	                return true;
	            }
	    
	            return type === 'array' || type !== 'function' && type !== 'string' &&
	                    (length === 0 || typeof length === 'number' && length > 0 &&
	                    (length - 1) in obj);
	        }
	    
	        function Widget( uploader ) {
	            this.owner = uploader;
	            this.options = uploader.options;
	        }
	    
	        $.extend( Widget.prototype, {
	    
	            init: Base.noop,
	    
	            // 类Backbone的事件监听声明，监听uploader实例上的事件
	            // widget直接无法监听事件，事件只能通过uploader来传递
	            invoke: function( apiName, args ) {
	    
	                /*
	                    {
	                        'make-thumb': 'makeThumb'
	                    }
	                 */
	                var map = this.responseMap;
	    
	                // 如果无API响应声明则忽略
	                if ( !map || !(apiName in map) || !(map[ apiName ] in this) ||
	                        !$.isFunction( this[ map[ apiName ] ] ) ) {
	    
	                    return IGNORE;
	                }
	    
	                return this[ map[ apiName ] ].apply( this, args );
	    
	            },
	    
	            /**
	             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
	             * @method request
	             * @grammar request( command, args ) => * | Promise
	             * @grammar request( command, args, callback ) => Promise
	             * @for  Uploader
	             */
	            request: function() {
	                return this.owner.request.apply( this.owner, arguments );
	            }
	        });
	    
	        // 扩展Uploader.
	        $.extend( Uploader.prototype, {
	    
	            /**
	             * @property {String | Array} [disableWidgets=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
	             */
	    
	            // 覆写_init用来初始化widgets
	            _init: function() {
	                var me = this,
	                    widgets = me._widgets = [],
	                    deactives = me.options.disableWidgets || '';
	    
	                $.each( widgetClass, function( _, klass ) {
	                    (!deactives || !~deactives.indexOf( klass._name )) &&
	                        widgets.push( new klass( me ) );
	                });
	    
	                return _init.apply( me, arguments );
	            },
	    
	            request: function( apiName, args, callback ) {
	                var i = 0,
	                    widgets = this._widgets,
	                    len = widgets && widgets.length,
	                    rlts = [],
	                    dfds = [],
	                    widget, rlt, promise, key;
	    
	                args = isArrayLike( args ) ? args : [ args ];
	    
	                for ( ; i < len; i++ ) {
	                    widget = widgets[ i ];
	                    rlt = widget.invoke( apiName, args );
	    
	                    if ( rlt !== IGNORE ) {
	    
	                        // Deferred对象
	                        if ( Base.isPromise( rlt ) ) {
	                            dfds.push( rlt );
	                        } else {
	                            rlts.push( rlt );
	                        }
	                    }
	                }
	    
	                // 如果有callback，则用异步方式。
	                if ( callback || dfds.length ) {
	                    promise = Base.when.apply( Base, dfds );
	                    key = promise.pipe ? 'pipe' : 'then';
	    
	                    // 很重要不能删除。删除了会死循环。
	                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
	                    return promise[ key ](function() {
	                                var deferred = Base.Deferred(),
	                                    args = arguments;
	    
	                                if ( args.length === 1 ) {
	                                    args = args[ 0 ];
	                                }
	    
	                                setTimeout(function() {
	                                    deferred.resolve( args );
	                                }, 1 );
	    
	                                return deferred.promise();
	                            })[ callback ? key : 'done' ]( callback || Base.noop );
	                } else {
	                    return rlts[ 0 ];
	                }
	            },
	    
	            destroy: function() {
	                _destroy.apply( this, arguments );
	                this._widgets = null;
	            }
	        });
	    
	        /**
	         * 添加组件
	         * @grammar Uploader.register(proto);
	         * @grammar Uploader.register(map, proto);
	         * @param  {object} responseMap API 名称与函数实现的映射
	         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
	         * @method Uploader.register
	         * @for Uploader
	         * @example
	         * Uploader.register({
	         *     'make-thumb': 'makeThumb'
	         * }, {
	         *     init: function( options ) {},
	         *     makeThumb: function() {}
	         * });
	         *
	         * Uploader.register({
	         *     'make-thumb': function() {
	         *         
	         *     }
	         * });
	         */
	        Uploader.register = Widget.register = function( responseMap, widgetProto ) {
	            var map = { init: 'init', destroy: 'destroy', name: 'anonymous' },
	                klass;
	    
	            if ( arguments.length === 1 ) {
	                widgetProto = responseMap;
	    
	                // 自动生成 map 表。
	                $.each(widgetProto, function(key) {
	                    if ( key[0] === '_' || key === 'name' ) {
	                        key === 'name' && (map.name = widgetProto.name);
	                        return;
	                    }
	    
	                    map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
	                });
	    
	            } else {
	                map = $.extend( map, responseMap );
	            }
	    
	            widgetProto.responseMap = map;
	            klass = Base.inherits( Widget, widgetProto );
	            klass._name = map.name;
	            widgetClass.push( klass );
	    
	            return klass;
	        };
	    
	        /**
	         * 删除插件，只有在注册时指定了名字的才能被删除。
	         * @grammar Uploader.unRegister(name);
	         * @param  {string} name 组件名字
	         * @method Uploader.unRegister
	         * @for Uploader
	         * @example
	         *
	         * Uploader.register({
	         *     name: 'custom',
	         *     
	         *     'make-thumb': function() {
	         *         
	         *     }
	         * });
	         *
	         * Uploader.unRegister('custom');
	         */
	        Uploader.unRegister = Widget.unRegister = function( name ) {
	            if ( !name || name === 'anonymous' ) {
	                return;
	            }
	            
	            // 删除指定的插件。
	            for ( var i = widgetClass.length; i--; ) {
	                if ( widgetClass[i]._name === name ) {
	                    widgetClass.splice(i, 1)
	                }
	            }
	        };
	    
	        return Widget;
	    });
	    /**
	     * @fileOverview DragAndDrop Widget。
	     */
	    define('widgets/filednd',[
	        'base',
	        'uploader',
	        'lib/dnd',
	        'widgets/widget'
	    ], function( Base, Uploader, Dnd ) {
	        var $ = Base.$;
	    
	        Uploader.options.dnd = '';
	    
	        /**
	         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
	         * @namespace options
	         * @for Uploader
	         */
	        
	        /**
	         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
	         * @namespace options
	         * @for Uploader
	         */
	    
	        /**
	         * @event dndAccept
	         * @param {DataTransferItemList} items DataTransferItem
	         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
	         * @for  Uploader
	         */
	        return Uploader.register({
	            name: 'dnd',
	            
	            init: function( opts ) {
	    
	                if ( !opts.dnd ||
	                        this.request('predict-runtime-type') !== 'html5' ) {
	                    return;
	                }
	    
	                var me = this,
	                    deferred = Base.Deferred(),
	                    options = $.extend({}, {
	                        disableGlobalDnd: opts.disableGlobalDnd,
	                        container: opts.dnd,
	                        accept: opts.accept
	                    }),
	                    dnd;
	    
	                this.dnd = dnd = new Dnd( options );
	    
	                dnd.once( 'ready', deferred.resolve );
	                dnd.on( 'drop', function( files ) {
	                    me.request( 'add-file', [ files ]);
	                });
	    
	                // 检测文件是否全部允许添加。
	                dnd.on( 'accept', function( items ) {
	                    return me.owner.trigger( 'dndAccept', items );
	                });
	    
	                dnd.init();
	    
	                return deferred.promise();
	            },
	    
	            destroy: function() {
	                this.dnd && this.dnd.destroy();
	            }
	        });
	    });
	    
	    /**
	     * @fileOverview 错误信息
	     */
	    define('lib/filepaste',[
	        'base',
	        'mediator',
	        'runtime/client'
	    ], function( Base, Mediator, RuntimeClent ) {
	    
	        var $ = Base.$;
	    
	        function FilePaste( opts ) {
	            opts = this.options = $.extend({}, opts );
	            opts.container = $( opts.container || document.body );
	            RuntimeClent.call( this, 'FilePaste' );
	        }
	    
	        Base.inherits( RuntimeClent, {
	            constructor: FilePaste,
	    
	            init: function() {
	                var me = this;
	    
	                me.connectRuntime( me.options, function() {
	                    me.exec('init');
	                    me.trigger('ready');
	                });
	            }
	        });
	    
	        Mediator.installTo( FilePaste.prototype );
	    
	        return FilePaste;
	    });
	    /**
	     * @fileOverview 组件基类。
	     */
	    define('widgets/filepaste',[
	        'base',
	        'uploader',
	        'lib/filepaste',
	        'widgets/widget'
	    ], function( Base, Uploader, FilePaste ) {
	        var $ = Base.$;
	    
	        /**
	         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
	         * @namespace options
	         * @for Uploader
	         */
	        return Uploader.register({
	            name: 'paste',
	            
	            init: function( opts ) {
	    
	                if ( !opts.paste ||
	                        this.request('predict-runtime-type') !== 'html5' ) {
	                    return;
	                }
	    
	                var me = this,
	                    deferred = Base.Deferred(),
	                    options = $.extend({}, {
	                        container: opts.paste,
	                        accept: opts.accept
	                    }),
	                    paste;
	    
	                this.paste = paste = new FilePaste( options );
	    
	                paste.once( 'ready', deferred.resolve );
	                paste.on( 'paste', function( files ) {
	                    me.owner.request( 'add-file', [ files ]);
	                });
	                paste.init();
	    
	                return deferred.promise();
	            },
	    
	            destroy: function() {
	                this.paste && this.paste.destroy();
	            }
	        });
	    });
	    /**
	     * @fileOverview Blob
	     */
	    define('lib/blob',[
	        'base',
	        'runtime/client'
	    ], function( Base, RuntimeClient ) {
	    
	        function Blob( ruid, source ) {
	            var me = this;
	    
	            me.source = source;
	            me.ruid = ruid;
	            this.size = source.size || 0;
	    
	            // 如果没有指定 mimetype, 但是知道文件后缀。
	            if ( !source.type && this.ext &&
	                    ~'jpg,jpeg,png,gif,bmp'.indexOf( this.ext ) ) {
	                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
	            } else {
	                this.type = source.type || 'application/octet-stream';
	            }
	    
	            RuntimeClient.call( me, 'Blob' );
	            this.uid = source.uid || this.uid;
	    
	            if ( ruid ) {
	                me.connectRuntime( ruid );
	            }
	        }
	    
	        Base.inherits( RuntimeClient, {
	            constructor: Blob,
	    
	            slice: function( start, end ) {
	                return this.exec( 'slice', start, end );
	            },
	    
	            getSource: function() {
	                return this.source;
	            }
	        });
	    
	        return Blob;
	    });
	    /**
	     * 为了统一化Flash的File和HTML5的File而存在。
	     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
	     * @fileOverview File
	     */
	    define('lib/file',[
	        'base',
	        'lib/blob'
	    ], function( Base, Blob ) {
	    
	        var uid = 1,
	            rExt = /\.([^.]+)$/;
	    
	        function File( ruid, file ) {
	            var ext;
	    
	            this.name = file.name || ('untitled' + uid++);
	            ext = rExt.exec( file.name ) ? RegExp.$1.toLowerCase() : '';
	    
	            // todo 支持其他类型文件的转换。
	            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
	            if ( !ext && file.type ) {
	                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec( file.type ) ?
	                        RegExp.$1.toLowerCase() : '';
	                this.name += '.' + ext;
	            }
	    
	            this.ext = ext;
	            this.lastModifiedDate = file.lastModifiedDate ||
	                    (new Date()).toLocaleString();
	    
	            Blob.apply( this, arguments );
	        }
	    
	        return Base.inherits( Blob, File );
	    });
	    
	    /**
	     * @fileOverview 错误信息
	     */
	    define('lib/filepicker',[
	        'base',
	        'runtime/client',
	        'lib/file'
	    ], function( Base, RuntimeClent, File ) {
	    
	        var $ = Base.$;
	    
	        function FilePicker( opts ) {
	            opts = this.options = $.extend({}, FilePicker.options, opts );
	    
	            opts.container = $( opts.id );
	    
	            if ( !opts.container.length ) {
	                throw new Error('按钮指定错误');
	            }
	    
	            opts.innerHTML = opts.innerHTML || opts.label ||
	                    opts.container.html() || '';
	    
	            opts.button = $( opts.button || document.createElement('div') );
	            opts.button.html( opts.innerHTML );
	            opts.container.html( opts.button );
	    
	            RuntimeClent.call( this, 'FilePicker', true );
	        }
	    
	        FilePicker.options = {
	            button: null,
	            container: null,
	            label: null,
	            innerHTML: null,
	            multiple: true,
	            accept: null,
	            name: 'file'
	        };
	    
	        Base.inherits( RuntimeClent, {
	            constructor: FilePicker,
	    
	            init: function() {
	                var me = this,
	                    opts = me.options,
	                    button = opts.button;
	    
	                button.addClass('webuploader-pick');
	    
	                me.on( 'all', function( type ) {
	                    var files;
	    
	                    switch ( type ) {
	                        case 'mouseenter':
	                            button.addClass('webuploader-pick-hover');
	                            break;
	    
	                        case 'mouseleave':
	                            button.removeClass('webuploader-pick-hover');
	                            break;
	    
	                        case 'change':
	                            files = me.exec('getFiles');
	                            me.trigger( 'select', $.map( files, function( file ) {
	                                file = new File( me.getRuid(), file );
	    
	                                // 记录来源。
	                                file._refer = opts.container;
	                                return file;
	                            }), opts.container );
	                            break;
	                    }
	                });
	    
	                me.connectRuntime( opts, function() {
	                    me.refresh();
	                    me.exec( 'init', opts );
	                    me.trigger('ready');
	                });
	    
	                this._resizeHandler = Base.bindFn( this.refresh, this );
	                $( window ).on( 'resize', this._resizeHandler );
	            },
	    
	            refresh: function() {
	                var shimContainer = this.getRuntime().getContainer(),
	                    button = this.options.button,
	                    width = button.outerWidth ?
	                            button.outerWidth() : button.width(),
	    
	                    height = button.outerHeight ?
	                            button.outerHeight() : button.height(),
	    
	                    pos = button.offset();
	    
	                width && height && shimContainer.css({
	                    bottom: 'auto',
	                    right: 'auto',
	                    width: width + 'px',
	                    height: height + 'px'
	                }).offset( pos );
	            },
	    
	            enable: function() {
	                var btn = this.options.button;
	    
	                btn.removeClass('webuploader-pick-disable');
	                this.refresh();
	            },
	    
	            disable: function() {
	                var btn = this.options.button;
	    
	                this.getRuntime().getContainer().css({
	                    top: '-99999px'
	                });
	    
	                btn.addClass('webuploader-pick-disable');
	            },
	    
	            destroy: function() {
	                var btn = this.options.button;
	                $( window ).off( 'resize', this._resizeHandler );
	                btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' +
	                    'webuploader-pick');
	            }
	        });
	    
	        return FilePicker;
	    });
	    
	    /**
	     * @fileOverview 文件选择相关
	     */
	    define('widgets/filepicker',[
	        'base',
	        'uploader',
	        'lib/filepicker',
	        'widgets/widget'
	    ], function( Base, Uploader, FilePicker ) {
	        var $ = Base.$;
	    
	        $.extend( Uploader.options, {
	    
	            /**
	             * @property {Selector | Object} [pick=undefined]
	             * @namespace options
	             * @for Uploader
	             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
	             *
	             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
	             * * `label` {String} 请采用 `innerHTML` 代替
	             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
	             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
	             */
	            pick: null,
	    
	            /**
	             * @property {Arroy} [accept=null]
	             * @namespace options
	             * @for Uploader
	             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
	             *
	             * * `title` {String} 文字描述
	             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
	             * * `mimeTypes` {String} 多个用逗号分割。
	             *
	             * 如：
	             *
	             * ```
	             * {
	             *     title: 'Images',
	             *     extensions: 'gif,jpg,jpeg,bmp,png',
	             *     mimeTypes: 'image/*'
	             * }
	             * ```
	             */
	            accept: null/*{
	                title: 'Images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            }*/
	        });
	    
	        return Uploader.register({
	            name: 'picker',
	    
	            init: function( opts ) {
	                this.pickers = [];
	                return opts.pick && this.addBtn( opts.pick );
	            },
	    
	            refresh: function() {
	                $.each( this.pickers, function() {
	                    this.refresh();
	                });
	            },
	    
	            /**
	             * @method addButton
	             * @for Uploader
	             * @grammar addButton( pick ) => Promise
	             * @description
	             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
	             * @example
	             * uploader.addButton({
	             *     id: '#btnContainer',
	             *     innerHTML: '选择文件'
	             * });
	             */
	            addBtn: function( pick ) {
	                var me = this,
	                    opts = me.options,
	                    accept = opts.accept,
	                    promises = [];
	    
	                if ( !pick ) {
	                    return;
	                }
	    
	                $.isPlainObject( pick ) || (pick = {
	                    id: pick
	                });
	    
	                $( pick.id ).each(function() {
	                    var options, picker, deferred;
	    
	                    deferred = Base.Deferred();
	    
	                    options = $.extend({}, pick, {
	                        accept: $.isPlainObject( accept ) ? [ accept ] : accept,
	                        swf: opts.swf,
	                        runtimeOrder: opts.runtimeOrder,
	                        id: this
	                    });
	    
	                    picker = new FilePicker( options );
	    
	                    picker.once( 'ready', deferred.resolve );
	                    picker.on( 'select', function( files ) {
	                        me.owner.request( 'add-file', [ files ]);
	                    });
	                    picker.init();
	    
	                    me.pickers.push( picker );
	    
	                    promises.push( deferred.promise() );
	                });
	    
	                return Base.when.apply( Base, promises );
	            },
	    
	            disable: function() {
	                $.each( this.pickers, function() {
	                    this.disable();
	                });
	            },
	    
	            enable: function() {
	                $.each( this.pickers, function() {
	                    this.enable();
	                });
	            },
	    
	            destroy: function() {
	                $.each( this.pickers, function() {
	                    this.destroy();
	                });
	                this.pickers = null;
	            }
	        });
	    });
	    /**
	     * @fileOverview Image
	     */
	    define('lib/image',[
	        'base',
	        'runtime/client',
	        'lib/blob'
	    ], function( Base, RuntimeClient, Blob ) {
	        var $ = Base.$;
	    
	        // 构造器。
	        function Image( opts ) {
	            this.options = $.extend({}, Image.options, opts );
	            RuntimeClient.call( this, 'Image' );
	    
	            this.on( 'load', function() {
	                this._info = this.exec('info');
	                this._meta = this.exec('meta');
	            });
	        }
	    
	        // 默认选项。
	        Image.options = {
	    
	            // 默认的图片处理质量
	            quality: 90,
	    
	            // 是否裁剪
	            crop: false,
	    
	            // 是否保留头部信息
	            preserveHeaders: false,
	    
	            // 是否允许放大。
	            allowMagnify: false
	        };
	    
	        // 继承RuntimeClient.
	        Base.inherits( RuntimeClient, {
	            constructor: Image,
	    
	            info: function( val ) {
	    
	                // setter
	                if ( val ) {
	                    this._info = val;
	                    return this;
	                }
	    
	                // getter
	                return this._info;
	            },
	    
	            meta: function( val ) {
	    
	                // setter
	                if ( val ) {
	                    this._meta = val;
	                    return this;
	                }
	    
	                // getter
	                return this._meta;
	            },
	    
	            loadFromBlob: function( blob ) {
	                var me = this,
	                    ruid = blob.getRuid();
	    
	                this.connectRuntime( ruid, function() {
	                    me.exec( 'init', me.options );
	                    me.exec( 'loadFromBlob', blob );
	                });
	            },
	    
	            resize: function() {
	                var args = Base.slice( arguments );
	                return this.exec.apply( this, [ 'resize' ].concat( args ) );
	            },
	    
	            crop: function() {
	                var args = Base.slice( arguments );
	                return this.exec.apply( this, [ 'crop' ].concat( args ) );
	            },
	    
	            getAsDataUrl: function( type ) {
	                return this.exec( 'getAsDataUrl', type );
	            },
	    
	            getAsBlob: function( type ) {
	                var blob = this.exec( 'getAsBlob', type );
	    
	                return new Blob( this.getRuid(), blob );
	            }
	        });
	    
	        return Image;
	    });
	    /**
	     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
	     */
	    define('widgets/image',[
	        'base',
	        'uploader',
	        'lib/image',
	        'widgets/widget'
	    ], function( Base, Uploader, Image ) {
	    
	        var $ = Base.$,
	            throttle;
	    
	        // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
	        throttle = (function( max ) {
	            var occupied = 0,
	                waiting = [],
	                tick = function() {
	                    var item;
	    
	                    while ( waiting.length && occupied < max ) {
	                        item = waiting.shift();
	                        occupied += item[ 0 ];
	                        item[ 1 ]();
	                    }
	                };
	    
	            return function( emiter, size, cb ) {
	                waiting.push([ size, cb ]);
	                emiter.once( 'destroy', function() {
	                    occupied -= size;
	                    setTimeout( tick, 1 );
	                });
	                setTimeout( tick, 1 );
	            };
	        })( 5 * 1024 * 1024 );
	    
	        $.extend( Uploader.options, {
	    
	            /**
	             * @property {Object} [thumb]
	             * @namespace options
	             * @for Uploader
	             * @description 配置生成缩略图的选项。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 110,
	             *     height: 110,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 70,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: true,
	             *
	             *     // 是否允许裁剪。
	             *     crop: true,
	             *
	             *     // 为空的话则保留原有图片格式。
	             *     // 否则强制转换成指定的类型。
	             *     type: 'image/jpeg'
	             * }
	             * ```
	             */
	            thumb: {
	                width: 110,
	                height: 110,
	                quality: 70,
	                allowMagnify: true,
	                crop: true,
	                preserveHeaders: false,
	    
	                // 为空的话则保留原有图片格式。
	                // 否则强制转换成指定的类型。
	                // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
	                // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
	                type: 'image/jpeg'
	            },
	    
	            /**
	             * @property {Object} [compress]
	             * @namespace options
	             * @for Uploader
	             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
	             *
	             * 默认为：
	             *
	             * ```javascript
	             * {
	             *     width: 1600,
	             *     height: 1600,
	             *
	             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
	             *     quality: 90,
	             *
	             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
	             *     allowMagnify: false,
	             *
	             *     // 是否允许裁剪。
	             *     crop: false,
	             *
	             *     // 是否保留头部meta信息。
	             *     preserveHeaders: true,
	             *
	             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
	             *     // 此属性可能会影响图片自动纠正功能
	             *     noCompressIfLarger: false,
	             *
	             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
	             *     compressSize: 0
	             * }
	             * ```
	             */
	            compress: {
	                width: 1600,
	                height: 1600,
	                quality: 90,
	                allowMagnify: false,
	                crop: false,
	                preserveHeaders: true
	            }
	        });
	    
	        return Uploader.register({
	    
	            name: 'image',
	    
	    
	            /**
	             * 生成缩略图，此过程为异步，所以需要传入`callback`。
	             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
	             *
	             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
	             *
	             * `callback`中可以接收到两个参数。
	             * * 第一个为error，如果生成缩略图有错误，此error将为真。
	             * * 第二个为ret, 缩略图的Data URL值。
	             *
	             * **注意**
	             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
	             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
	             *
	             * @method makeThumb
	             * @grammar makeThumb( file, callback ) => undefined
	             * @grammar makeThumb( file, callback, width, height ) => undefined
	             * @for Uploader
	             * @example
	             *
	             * uploader.on( 'fileQueued', function( file ) {
	             *     var $li = ...;
	             *
	             *     uploader.makeThumb( file, function( error, ret ) {
	             *         if ( error ) {
	             *             $li.text('预览错误');
	             *         } else {
	             *             $li.append('<img alt="" src="' + ret + '" />');
	             *         }
	             *     });
	             *
	             * });
	             */
	            makeThumb: function( file, cb, width, height ) {
	                var opts, image;
	    
	                file = this.request( 'get-file', file );
	    
	                // 只预览图片格式。
	                if ( !file.type.match( /^image/ ) ) {
	                    cb( true );
	                    return;
	                }
	    
	                opts = $.extend({}, this.options.thumb );
	    
	                // 如果传入的是object.
	                if ( $.isPlainObject( width ) ) {
	                    opts = $.extend( opts, width );
	                    width = null;
	                }
	    
	                width = width || opts.width;
	                height = height || opts.height;
	    
	                image = new Image( opts );
	    
	                image.once( 'load', function() {
	                    file._info = file._info || image.info();
	                    file._meta = file._meta || image.meta();
	    
	                    // 如果 width 的值介于 0 - 1
	                    // 说明设置的是百分比。
	                    if ( width <= 1 && width > 0 ) {
	                        width = file._info.width * width;
	                    }
	    
	                    // 同样的规则应用于 height
	                    if ( height <= 1 && height > 0 ) {
	                        height = file._info.height * height;
	                    }
	    
	                    image.resize( width, height );
	                });
	    
	                // 当 resize 完后
	                image.once( 'complete', function() {
	                    cb( false, image.getAsDataUrl( opts.type ) );
	                    image.destroy();
	                });
	    
	                image.once( 'error', function( reason ) {
	                    cb( reason || true );
	                    image.destroy();
	                });
	    
	                throttle( image, file.source.size, function() {
	                    file._info && image.info( file._info );
	                    file._meta && image.meta( file._meta );
	                    image.loadFromBlob( file.source );
	                });
	            },
	    
	            beforeSendFile: function( file ) {
	                var opts = this.options.compress || this.options.resize,
	                    compressSize = opts && opts.compressSize || 0,
	                    noCompressIfLarger = opts && opts.noCompressIfLarger || false,
	                    image, deferred;
	    
	                file = this.request( 'get-file', file );
	    
	                // 只压缩 jpeg 图片格式。
	                // gif 可能会丢失针
	                // bmp png 基本上尺寸都不大，且压缩比比较小。
	                if ( !opts || !~'image/jpeg,image/jpg'.indexOf( file.type ) ||
	                        file.size < compressSize ||
	                        file._compressed ) {
	                    return;
	                }
	    
	                opts = $.extend({}, opts );
	                deferred = Base.Deferred();
	    
	                image = new Image( opts );
	    
	                deferred.always(function() {
	                    image.destroy();
	                    image = null;
	                });
	                image.once( 'error', deferred.reject );
	                image.once( 'load', function() {
	                    var width = opts.width,
	                        height = opts.height;
	    
	                    file._info = file._info || image.info();
	                    file._meta = file._meta || image.meta();
	    
	                    // 如果 width 的值介于 0 - 1
	                    // 说明设置的是百分比。
	                    if ( width <= 1 && width > 0 ) {
	                        width = file._info.width * width;
	                    }
	    
	                    // 同样的规则应用于 height
	                    if ( height <= 1 && height > 0 ) {
	                        height = file._info.height * height;
	                    }
	    
	                    image.resize( width, height );
	                });
	    
	                image.once( 'complete', function() {
	                    var blob, size;
	    
	                    // 移动端 UC / qq 浏览器的无图模式下
	                    // ctx.getImageData 处理大图的时候会报 Exception
	                    // INDEX_SIZE_ERR: DOM Exception 1
	                    try {
	                        blob = image.getAsBlob( opts.type );
	    
	                        size = file.size;
	    
	                        // 如果压缩后，比原来还大则不用压缩后的。
	                        if ( !noCompressIfLarger || blob.size < size ) {
	                            // file.source.destroy && file.source.destroy();
	                            file.source = blob;
	                            file.size = blob.size;
	    
	                            file.trigger( 'resize', blob.size, size );
	                        }
	    
	                        // 标记，避免重复压缩。
	                        file._compressed = true;
	                        deferred.resolve();
	                    } catch ( e ) {
	                        // 出错了直接继续，让其上传原始图片
	                        deferred.resolve();
	                    }
	                });
	    
	                file._info && image.info( file._info );
	                file._meta && image.meta( file._meta );
	    
	                image.loadFromBlob( file.source );
	                return deferred.promise();
	            }
	        });
	    });
	    /**
	     * @fileOverview 文件属性封装
	     */
	    define('file',[
	        'base',
	        'mediator'
	    ], function( Base, Mediator ) {
	    
	        var $ = Base.$,
	            idPrefix = 'WU_FILE_',
	            idSuffix = 0,
	            rExt = /\.([^.]+)$/,
	            statusMap = {};
	    
	        function gid() {
	            return idPrefix + idSuffix++;
	        }
	    
	        /**
	         * 文件类
	         * @class File
	         * @constructor 构造函数
	         * @grammar new File( source ) => File
	         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
	         */
	        function WUFile( source ) {
	    
	            /**
	             * 文件名，包括扩展名（后缀）
	             * @property name
	             * @type {string}
	             */
	            this.name = source.name || 'Untitled';
	    
	            /**
	             * 文件体积（字节）
	             * @property size
	             * @type {uint}
	             * @default 0
	             */
	            this.size = source.size || 0;
	    
	            /**
	             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
	             * @property type
	             * @type {string}
	             * @default 'application/octet-stream'
	             */
	            this.type = source.type || 'application/octet-stream';
	    
	            /**
	             * 文件最后修改日期
	             * @property lastModifiedDate
	             * @type {int}
	             * @default 当前时间戳
	             */
	            this.lastModifiedDate = source.lastModifiedDate || (new Date() * 1);
	    
	            /**
	             * 文件ID，每个对象具有唯一ID，与文件名无关
	             * @property id
	             * @type {string}
	             */
	            this.id = gid();
	    
	            /**
	             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
	             * @property ext
	             * @type {string}
	             */
	            this.ext = rExt.exec( this.name ) ? RegExp.$1 : '';
	    
	    
	            /**
	             * 状态文字说明。在不同的status语境下有不同的用途。
	             * @property statusText
	             * @type {string}
	             */
	            this.statusText = '';
	    
	            // 存储文件状态，防止通过属性直接修改
	            statusMap[ this.id ] = WUFile.Status.INITED;
	    
	            this.source = source;
	            this.loaded = 0;
	    
	            this.on( 'error', function( msg ) {
	                this.setStatus( WUFile.Status.ERROR, msg );
	            });
	        }
	    
	        $.extend( WUFile.prototype, {
	    
	            /**
	             * 设置状态，状态变化时会触发`change`事件。
	             * @method setStatus
	             * @grammar setStatus( status[, statusText] );
	             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
	             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
	             */
	            setStatus: function( status, text ) {
	    
	                var prevStatus = statusMap[ this.id ];
	    
	                typeof text !== 'undefined' && (this.statusText = text);
	    
	                if ( status !== prevStatus ) {
	                    statusMap[ this.id ] = status;
	                    /**
	                     * 文件状态变化
	                     * @event statuschange
	                     */
	                    this.trigger( 'statuschange', status, prevStatus );
	                }
	    
	            },
	    
	            /**
	             * 获取文件状态
	             * @return {File.Status}
	             * @example
	                     文件状态具体包括以下几种类型：
	                     {
	                         // 初始化
	                        INITED:     0,
	                        // 已入队列
	                        QUEUED:     1,
	                        // 正在上传
	                        PROGRESS:     2,
	                        // 上传出错
	                        ERROR:         3,
	                        // 上传成功
	                        COMPLETE:     4,
	                        // 上传取消
	                        CANCELLED:     5
	                    }
	             */
	            getStatus: function() {
	                return statusMap[ this.id ];
	            },
	    
	            /**
	             * 获取文件原始信息。
	             * @return {*}
	             */
	            getSource: function() {
	                return this.source;
	            },
	    
	            destroy: function() {
	                this.off();
	                delete statusMap[ this.id ];
	            }
	        });
	    
	        Mediator.installTo( WUFile.prototype );
	    
	        /**
	         * 文件状态值，具体包括以下几种类型：
	         * * `inited` 初始状态
	         * * `queued` 已经进入队列, 等待上传
	         * * `progress` 上传中
	         * * `complete` 上传完成。
	         * * `error` 上传出错，可重试
	         * * `interrupt` 上传中断，可续传。
	         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
	         * * `cancelled` 文件被移除。
	         * @property {Object} Status
	         * @namespace File
	         * @class File
	         * @static
	         */
	        WUFile.Status = {
	            INITED:     'inited',    // 初始状态
	            QUEUED:     'queued',    // 已经进入队列, 等待上传
	            PROGRESS:   'progress',    // 上传中
	            ERROR:      'error',    // 上传出错，可重试
	            COMPLETE:   'complete',    // 上传完成。
	            CANCELLED:  'cancelled',    // 上传取消。
	            INTERRUPT:  'interrupt',    // 上传中断，可续传。
	            INVALID:    'invalid'    // 文件不合格，不能重试上传。
	        };
	    
	        return WUFile;
	    });
	    
	    /**
	     * @fileOverview 文件队列
	     */
	    define('queue',[
	        'base',
	        'mediator',
	        'file'
	    ], function( Base, Mediator, WUFile ) {
	    
	        var $ = Base.$,
	            STATUS = WUFile.Status;
	    
	        /**
	         * 文件队列, 用来存储各个状态中的文件。
	         * @class Queue
	         * @extends Mediator
	         */
	        function Queue() {
	    
	            /**
	             * 统计文件数。
	             * * `numOfQueue` 队列中的文件数。
	             * * `numOfSuccess` 上传成功的文件数
	             * * `numOfCancel` 被取消的文件数
	             * * `numOfProgress` 正在上传中的文件数
	             * * `numOfUploadFailed` 上传错误的文件数。
	             * * `numOfInvalid` 无效的文件数。
	             * * `numofDeleted` 被移除的文件数。
	             * @property {Object} stats
	             */
	            this.stats = {
	                numOfQueue: 0,
	                numOfSuccess: 0,
	                numOfCancel: 0,
	                numOfProgress: 0,
	                numOfUploadFailed: 0,
	                numOfInvalid: 0,
	                numofDeleted: 0,
	                numofInterrupt: 0
	            };
	    
	            // 上传队列，仅包括等待上传的文件
	            this._queue = [];
	    
	            // 存储所有文件
	            this._map = {};
	        }
	    
	        $.extend( Queue.prototype, {
	    
	            /**
	             * 将新文件加入对队列尾部
	             *
	             * @method append
	             * @param  {File} file   文件对象
	             */
	            append: function( file ) {
	                this._queue.push( file );
	                this._fileAdded( file );
	                return this;
	            },
	    
	            /**
	             * 将新文件加入对队列头部
	             *
	             * @method prepend
	             * @param  {File} file   文件对象
	             */
	            prepend: function( file ) {
	                this._queue.unshift( file );
	                this._fileAdded( file );
	                return this;
	            },
	    
	            /**
	             * 获取文件对象
	             *
	             * @method getFile
	             * @param  {String} fileId   文件ID
	             * @return {File}
	             */
	            getFile: function( fileId ) {
	                if ( typeof fileId !== 'string' ) {
	                    return fileId;
	                }
	                return this._map[ fileId ];
	            },
	    
	            /**
	             * 从队列中取出一个指定状态的文件。
	             * @grammar fetch( status ) => File
	             * @method fetch
	             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
	             * @return {File} [File](#WebUploader:File)
	             */
	            fetch: function( status ) {
	                var len = this._queue.length,
	                    i, file;
	    
	                status = status || STATUS.QUEUED;
	    
	                for ( i = 0; i < len; i++ ) {
	                    file = this._queue[ i ];
	    
	                    if ( status === file.getStatus() ) {
	                        return file;
	                    }
	                }
	    
	                return null;
	            },
	    
	            /**
	             * 对队列进行排序，能够控制文件上传顺序。
	             * @grammar sort( fn ) => undefined
	             * @method sort
	             * @param {Function} fn 排序方法
	             */
	            sort: function( fn ) {
	                if ( typeof fn === 'function' ) {
	                    this._queue.sort( fn );
	                }
	            },
	    
	            /**
	             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
	             * @grammar getFiles( [status1[, status2 ...]] ) => Array
	             * @method getFiles
	             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
	             */
	            getFiles: function() {
	                var sts = [].slice.call( arguments, 0 ),
	                    ret = [],
	                    i = 0,
	                    len = this._queue.length,
	                    file;
	    
	                for ( ; i < len; i++ ) {
	                    file = this._queue[ i ];
	    
	                    if ( sts.length && !~$.inArray( file.getStatus(), sts ) ) {
	                        continue;
	                    }
	    
	                    ret.push( file );
	                }
	    
	                return ret;
	            },
	    
	            /**
	             * 在队列中删除文件。
	             * @grammar removeFile( file ) => Array
	             * @method removeFile
	             * @param {File} 文件对象。
	             */
	            removeFile: function( file ) {
	                var me = this,
	                    existing = this._map[ file.id ];
	    
	                if ( existing ) {
	                    delete this._map[ file.id ];
	                    file.destroy();
	                    this.stats.numofDeleted++;
	                }
	            },
	    
	            _fileAdded: function( file ) {
	                var me = this,
	                    existing = this._map[ file.id ];
	    
	                if ( !existing ) {
	                    this._map[ file.id ] = file;
	    
	                    file.on( 'statuschange', function( cur, pre ) {
	                        me._onFileStatusChange( cur, pre );
	                    });
	                }
	            },
	    
	            _onFileStatusChange: function( curStatus, preStatus ) {
	                var stats = this.stats;
	    
	                switch ( preStatus ) {
	                    case STATUS.PROGRESS:
	                        stats.numOfProgress--;
	                        break;
	    
	                    case STATUS.QUEUED:
	                        stats.numOfQueue --;
	                        break;
	    
	                    case STATUS.ERROR:
	                        stats.numOfUploadFailed--;
	                        break;
	    
	                    case STATUS.INVALID:
	                        stats.numOfInvalid--;
	                        break;
	    
	                    case STATUS.INTERRUPT:
	                        stats.numofInterrupt--;
	                        break;
	                }
	    
	                switch ( curStatus ) {
	                    case STATUS.QUEUED:
	                        stats.numOfQueue++;
	                        break;
	    
	                    case STATUS.PROGRESS:
	                        stats.numOfProgress++;
	                        break;
	    
	                    case STATUS.ERROR:
	                        stats.numOfUploadFailed++;
	                        break;
	    
	                    case STATUS.COMPLETE:
	                        stats.numOfSuccess++;
	                        break;
	    
	                    case STATUS.CANCELLED:
	                        stats.numOfCancel++;
	                        break;
	    
	    
	                    case STATUS.INVALID:
	                        stats.numOfInvalid++;
	                        break;
	    
	                    case STATUS.INTERRUPT:
	                        stats.numofInterrupt++;
	                        break;
	                }
	            }
	    
	        });
	    
	        Mediator.installTo( Queue.prototype );
	    
	        return Queue;
	    });
	    /**
	     * @fileOverview 队列
	     */
	    define('widgets/queue',[
	        'base',
	        'uploader',
	        'queue',
	        'file',
	        'lib/file',
	        'runtime/client',
	        'widgets/widget'
	    ], function( Base, Uploader, Queue, WUFile, File, RuntimeClient ) {
	    
	        var $ = Base.$,
	            rExt = /\.\w+$/,
	            Status = WUFile.Status;
	    
	        return Uploader.register({
	            name: 'queue',
	    
	            init: function( opts ) {
	                var me = this,
	                    deferred, len, i, item, arr, accept, runtime;
	    
	                if ( $.isPlainObject( opts.accept ) ) {
	                    opts.accept = [ opts.accept ];
	                }
	    
	                // accept中的中生成匹配正则。
	                if ( opts.accept ) {
	                    arr = [];
	    
	                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
	                        item = opts.accept[ i ].extensions;
	                        item && arr.push( item );
	                    }
	    
	                    if ( arr.length ) {
	                        accept = '\\.' + arr.join(',')
	                                .replace( /,/g, '$|\\.' )
	                                .replace( /\*/g, '.*' ) + '$';
	                    }
	    
	                    me.accept = new RegExp( accept, 'i' );
	                }
	    
	                me.queue = new Queue();
	                me.stats = me.queue.stats;
	    
	                // 如果当前不是html5运行时，那就算了。
	                // 不执行后续操作
	                if ( this.request('predict-runtime-type') !== 'html5' ) {
	                    return;
	                }
	    
	                // 创建一个 html5 运行时的 placeholder
	                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
	                deferred = Base.Deferred();
	                this.placeholder = runtime = new RuntimeClient('Placeholder');
	                runtime.connectRuntime({
	                    runtimeOrder: 'html5'
	                }, function() {
	                    me._ruid = runtime.getRuid();
	                    deferred.resolve();
	                });
	                return deferred.promise();
	            },
	    
	    
	            // 为了支持外部直接添加一个原生File对象。
	            _wrapFile: function( file ) {
	                if ( !(file instanceof WUFile) ) {
	    
	                    if ( !(file instanceof File) ) {
	                        if ( !this._ruid ) {
	                            throw new Error('Can\'t add external files.');
	                        }
	                        file = new File( this._ruid, file );
	                    }
	    
	                    file = new WUFile( file );
	                }
	    
	                return file;
	            },
	    
	            // 判断文件是否可以被加入队列
	            acceptFile: function( file ) {
	                var invalid = !file || !file.size || this.accept &&
	    
	                        // 如果名字中有后缀，才做后缀白名单处理。
	                        rExt.exec( file.name ) && !this.accept.test( file.name );
	    
	                return !invalid;
	            },
	    
	    
	            /**
	             * @event beforeFileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
	             * @for  Uploader
	             */
	    
	            /**
	             * @event fileQueued
	             * @param {File} file File对象
	             * @description 当文件被加入队列以后触发。
	             * @for  Uploader
	             */
	    
	            _addFile: function( file ) {
	                var me = this;
	    
	                file = me._wrapFile( file );
	    
	                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
	                if ( !me.owner.trigger( 'beforeFileQueued', file ) ) {
	                    return;
	                }
	    
	                // 类型不匹配，则派送错误事件，并返回。
	                if ( !me.acceptFile( file ) ) {
	                    me.owner.trigger( 'error', 'Q_TYPE_DENIED', file );
	                    return;
	                }
	    
	                me.queue.append( file );
	                me.owner.trigger( 'fileQueued', file );
	                return file;
	            },
	    
	            getFile: function( fileId ) {
	                return this.queue.getFile( fileId );
	            },
	    
	            /**
	             * @event filesQueued
	             * @param {File} files 数组，内容为原始File(lib/File）对象。
	             * @description 当一批文件添加进队列以后触发。
	             * @for  Uploader
	             */
	            
	            /**
	             * @property {Boolean} [auto=false]
	             * @namespace options
	             * @for Uploader
	             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
	             * 
	             */
	    
	            /**
	             * @method addFiles
	             * @grammar addFiles( file ) => undefined
	             * @grammar addFiles( [file1, file2 ...] ) => undefined
	             * @param {Array of File or File} [files] Files 对象 数组
	             * @description 添加文件到队列
	             * @for  Uploader
	             */
	            addFile: function( files ) {
	                var me = this;
	    
	                if ( !files.length ) {
	                    files = [ files ];
	                }
	    
	                files = $.map( files, function( file ) {
	                    return me._addFile( file );
	                });
	    
	                me.owner.trigger( 'filesQueued', files );
	    
	                if ( me.options.auto ) {
	                    setTimeout(function() {
	                        me.request('start-upload');
	                    }, 20 );
	                }
	            },
	    
	            getStats: function() {
	                return this.stats;
	            },
	    
	            /**
	             * @event fileDequeued
	             * @param {File} file File对象
	             * @description 当文件被移除队列后触发。
	             * @for  Uploader
	             */
	    
	             /**
	             * @method removeFile
	             * @grammar removeFile( file ) => undefined
	             * @grammar removeFile( id ) => undefined
	             * @grammar removeFile( file, true ) => undefined
	             * @grammar removeFile( id, true ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.removeFile( file );
	             * })
	             */
	            removeFile: function( file, remove ) {
	                var me = this;
	    
	                file = file.id ? file : me.queue.getFile( file );
	    
	                this.request( 'cancel-file', file );
	    
	                if ( remove ) {
	                    this.queue.removeFile( file );
	                }
	            },
	    
	            /**
	             * @method getFiles
	             * @grammar getFiles() => Array
	             * @grammar getFiles( status1, status2, status... ) => Array
	             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
	             * @for  Uploader
	             * @example
	             * console.log( uploader.getFiles() );    // => all files
	             * console.log( uploader.getFiles('error') )    // => all error files.
	             */
	            getFiles: function() {
	                return this.queue.getFiles.apply( this.queue, arguments );
	            },
	    
	            fetchFile: function() {
	                return this.queue.fetch.apply( this.queue, arguments );
	            },
	    
	            /**
	             * @method retry
	             * @grammar retry() => undefined
	             * @grammar retry( file ) => undefined
	             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
	             * @for  Uploader
	             * @example
	             * function retry() {
	             *     uploader.retry();
	             * }
	             */
	            retry: function( file, noForceStart ) {
	                var me = this,
	                    files, i, len;
	    
	                if ( file ) {
	                    file = file.id ? file : me.queue.getFile( file );
	                    file.setStatus( Status.QUEUED );
	                    noForceStart || me.request('start-upload');
	                    return;
	                }
	    
	                files = me.queue.getFiles( Status.ERROR );
	                i = 0;
	                len = files.length;
	    
	                for ( ; i < len; i++ ) {
	                    file = files[ i ];
	                    file.setStatus( Status.QUEUED );
	                }
	    
	                me.request('start-upload');
	            },
	    
	            /**
	             * @method sort
	             * @grammar sort( fn ) => undefined
	             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
	             * @for  Uploader
	             */
	            sortFiles: function() {
	                return this.queue.sort.apply( this.queue, arguments );
	            },
	    
	            /**
	             * @event reset
	             * @description 当 uploader 被重置的时候触发。
	             * @for  Uploader
	             */
	    
	            /**
	             * @method reset
	             * @grammar reset() => undefined
	             * @description 重置uploader。目前只重置了队列。
	             * @for  Uploader
	             * @example
	             * uploader.reset();
	             */
	            reset: function() {
	                this.owner.trigger('reset');
	                this.queue = new Queue();
	                this.stats = this.queue.stats;
	            },
	    
	            destroy: function() {
	                this.reset();
	                this.placeholder && this.placeholder.destroy();
	            }
	        });
	    
	    });
	    /**
	     * @fileOverview 添加获取Runtime相关信息的方法。
	     */
	    define('widgets/runtime',[
	        'uploader',
	        'runtime/runtime',
	        'widgets/widget'
	    ], function( Uploader, Runtime ) {
	    
	        Uploader.support = function() {
	            return Runtime.hasRuntime.apply( Runtime, arguments );
	        };
	    
	        /**
	         * @property {Object} [runtimeOrder=html5,flash]
	         * @namespace options
	         * @for Uploader
	         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
	         *
	         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
	         */
	    
	        return Uploader.register({
	            name: 'runtime',
	    
	            init: function() {
	                if ( !this.predictRuntimeType() ) {
	                    throw Error('Runtime Error');
	                }
	            },
	    
	            /**
	             * 预测Uploader将采用哪个`Runtime`
	             * @grammar predictRuntimeType() => String
	             * @method predictRuntimeType
	             * @for  Uploader
	             */
	            predictRuntimeType: function() {
	                var orders = this.options.runtimeOrder || Runtime.orders,
	                    type = this.type,
	                    i, len;
	    
	                if ( !type ) {
	                    orders = orders.split( /\s*,\s*/g );
	    
	                    for ( i = 0, len = orders.length; i < len; i++ ) {
	                        if ( Runtime.hasRuntime( orders[ i ] ) ) {
	                            this.type = type = orders[ i ];
	                            break;
	                        }
	                    }
	                }
	    
	                return type;
	            }
	        });
	    });
	    /**
	     * @fileOverview Transport
	     */
	    define('lib/transport',[
	        'base',
	        'runtime/client',
	        'mediator'
	    ], function( Base, RuntimeClient, Mediator ) {
	    
	        var $ = Base.$;
	    
	        function Transport( opts ) {
	            var me = this;
	    
	            opts = me.options = $.extend( true, {}, Transport.options, opts || {} );
	            RuntimeClient.call( this, 'Transport' );
	    
	            this._blob = null;
	            this._formData = opts.formData || {};
	            this._headers = opts.headers || {};
	    
	            this.on( 'progress', this._timeout );
	            this.on( 'load error', function() {
	                me.trigger( 'progress', 1 );
	                clearTimeout( me._timer );
	            });
	        }
	    
	        Transport.options = {
	            server: '',
	            method: 'POST',
	    
	            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
	            withCredentials: false,
	            fileVal: 'file',
	            timeout: 2 * 60 * 1000,    // 2分钟
	            formData: {},
	            headers: {},
	            sendAsBinary: false
	        };
	    
	        $.extend( Transport.prototype, {
	    
	            // 添加Blob, 只能添加一次，最后一次有效。
	            appendBlob: function( key, blob, filename ) {
	                var me = this,
	                    opts = me.options;
	    
	                if ( me.getRuid() ) {
	                    me.disconnectRuntime();
	                }
	    
	                // 连接到blob归属的同一个runtime.
	                me.connectRuntime( blob.ruid, function() {
	                    me.exec('init');
	                });
	    
	                me._blob = blob;
	                opts.fileVal = key || opts.fileVal;
	                opts.filename = filename || opts.filename;
	            },
	    
	            // 添加其他字段
	            append: function( key, value ) {
	                if ( typeof key === 'object' ) {
	                    $.extend( this._formData, key );
	                } else {
	                    this._formData[ key ] = value;
	                }
	            },
	    
	            setRequestHeader: function( key, value ) {
	                if ( typeof key === 'object' ) {
	                    $.extend( this._headers, key );
	                } else {
	                    this._headers[ key ] = value;
	                }
	            },
	    
	            send: function( method ) {
	                this.exec( 'send', method );
	                this._timeout();
	            },
	    
	            abort: function() {
	                clearTimeout( this._timer );
	                return this.exec('abort');
	            },
	    
	            destroy: function() {
	                this.trigger('destroy');
	                this.off();
	                this.exec('destroy');
	                this.disconnectRuntime();
	            },
	    
	            getResponse: function() {
	                return this.exec('getResponse');
	            },
	    
	            getResponseAsJson: function() {
	                return this.exec('getResponseAsJson');
	            },
	    
	            getStatus: function() {
	                return this.exec('getStatus');
	            },
	    
	            _timeout: function() {
	                var me = this,
	                    duration = me.options.timeout;
	    
	                if ( !duration ) {
	                    return;
	                }
	    
	                clearTimeout( me._timer );
	                me._timer = setTimeout(function() {
	                    me.abort();
	                    me.trigger( 'error', 'timeout' );
	                }, duration );
	            }
	    
	        });
	    
	        // 让Transport具备事件功能。
	        Mediator.installTo( Transport.prototype );
	    
	        return Transport;
	    });
	    /**
	     * @fileOverview 负责文件上传相关。
	     */
	    define('widgets/upload',[
	        'base',
	        'uploader',
	        'file',
	        'lib/transport',
	        'widgets/widget'
	    ], function( Base, Uploader, WUFile, Transport ) {
	    
	        var $ = Base.$,
	            isPromise = Base.isPromise,
	            Status = WUFile.Status;
	    
	        // 添加默认配置项
	        $.extend( Uploader.options, {
	    
	    
	            /**
	             * @property {Boolean} [prepareNextFile=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否允许在文件传输时提前把下一个文件准备好。
	             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
	             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
	             */
	            prepareNextFile: false,
	    
	            /**
	             * @property {Boolean} [chunked=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否要分片处理大文件上传。
	             */
	            chunked: false,
	    
	            /**
	             * @property {Boolean} [chunkSize=5242880]
	             * @namespace options
	             * @for Uploader
	             * @description 如果要分片，分多大一片？ 默认大小为5M.
	             */
	            chunkSize: 5 * 1024 * 1024,
	    
	            /**
	             * @property {Boolean} [chunkRetry=2]
	             * @namespace options
	             * @for Uploader
	             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
	             */
	            chunkRetry: 2,
	    
	            /**
	             * @property {Boolean} [threads=3]
	             * @namespace options
	             * @for Uploader
	             * @description 上传并发数。允许同时最大上传进程数。
	             */
	            threads: 3,
	    
	    
	            /**
	             * @property {Object} [formData={}]
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
	             */
	            formData: {}
	    
	            /**
	             * @property {Object} [fileVal='file']
	             * @namespace options
	             * @for Uploader
	             * @description 设置文件上传域的name。
	             */
	    
	            /**
	             * @property {Object} [method='POST']
	             * @namespace options
	             * @for Uploader
	             * @description 文件上传方式，`POST`或者`GET`。
	             */
	    
	            /**
	             * @property {Object} [sendAsBinary=false]
	             * @namespace options
	             * @for Uploader
	             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
	             * 其他参数在$_GET数组中。
	             */
	        });
	    
	        // 负责将文件切片。
	        function CuteFile( file, chunkSize ) {
	            var pending = [],
	                blob = file.source,
	                total = blob.size,
	                chunks = chunkSize ? Math.ceil( total / chunkSize ) : 1,
	                start = 0,
	                index = 0,
	                len, api;
	    
	            api = {
	                file: file,
	    
	                has: function() {
	                    return !!pending.length;
	                },
	    
	                shift: function() {
	                    return pending.shift();
	                },
	    
	                unshift: function( block ) {
	                    pending.unshift( block );
	                }
	            };
	    
	            while ( index < chunks ) {
	                len = Math.min( chunkSize, total - start );
	    
	                pending.push({
	                    file: file,
	                    start: start,
	                    end: chunkSize ? (start + len) : total,
	                    total: total,
	                    chunks: chunks,
	                    chunk: index++,
	                    cuted: api
	                });
	                start += len;
	            }
	    
	            file.blocks = pending.concat();
	            file.remaning = pending.length;
	    
	            return api;
	        }
	    
	        Uploader.register({
	            name: 'upload',
	    
	            init: function() {
	                var owner = this.owner,
	                    me = this;
	    
	                this.runing = false;
	                this.progress = false;
	    
	                owner
	                    .on( 'startUpload', function() {
	                        me.progress = true;
	                    })
	                    .on( 'uploadFinished', function() {
	                        me.progress = false;
	                    });
	    
	                // 记录当前正在传的数据，跟threads相关
	                this.pool = [];
	    
	                // 缓存分好片的文件。
	                this.stack = [];
	    
	                // 缓存即将上传的文件。
	                this.pending = [];
	    
	                // 跟踪还有多少分片在上传中但是没有完成上传。
	                this.remaning = 0;
	                this.__tick = Base.bindFn( this._tick, this );
	    
	                owner.on( 'uploadComplete', function( file ) {
	    
	                    // 把其他块取消了。
	                    file.blocks && $.each( file.blocks, function( _, v ) {
	                        v.transport && (v.transport.abort(), v.transport.destroy());
	                        delete v.transport;
	                    });
	    
	                    delete file.blocks;
	                    delete file.remaning;
	                });
	            },
	    
	            reset: function() {
	                this.request( 'stop-upload', true );
	                this.runing = false;
	                this.pool = [];
	                this.stack = [];
	                this.pending = [];
	                this.remaning = 0;
	                this._trigged = false;
	                this._promise = null;
	            },
	    
	            /**
	             * @event startUpload
	             * @description 当开始上传流程时触发。
	             * @for  Uploader
	             */
	    
	            /**
	             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
	             *
	             * 可以指定开始某一个文件。
	             * @grammar upload() => undefined
	             * @grammar upload( file | fileId) => undefined
	             * @method upload
	             * @for  Uploader
	             */
	            startUpload: function(file) {
	                var me = this;
	    
	                // 移出invalid的文件
	                $.each( me.request( 'get-files', Status.INVALID ), function() {
	                    me.request( 'remove-file', this );
	                });
	    
	                // 如果指定了开始某个文件，则只开始指定文件。
	                if ( file ) {
	                    file = file.id ? file : me.request( 'get-file', file );
	    
	                    if (file.getStatus() === Status.INTERRUPT) {
	                        $.each( me.pool, function( _, v ) {
	    
	                            // 之前暂停过。
	                            if (v.file !== file) {
	                                return;
	                            }
	    
	                            v.transport && v.transport.send();
	                        });
	    
	                        file.setStatus( Status.QUEUED );
	                    } else if (file.getStatus() === Status.PROGRESS) {
	                        return;
	                    } else {
	                        file.setStatus( Status.QUEUED );
	                    }
	                } else {
	                    $.each( me.request( 'get-files', [ Status.INITED ] ), function() {
	                        this.setStatus( Status.QUEUED );
	                    });
	                }
	    
	                if ( me.runing ) {
	                    return;
	                }
	    
	                me.runing = true;
	    
	                var files = [];
	    
	                // 如果有暂停的，则续传
	                $.each( me.pool, function( _, v ) {
	                    var file = v.file;
	    
	                    if ( file.getStatus() === Status.INTERRUPT ) {
	                        files.push(file);
	                        me._trigged = false;
	                        v.transport && v.transport.send();
	                    }
	                });
	    
	                var file;
	                while ( (file = files.shift()) ) {
	                    file.setStatus( Status.PROGRESS );
	                }
	    
	                file || $.each( me.request( 'get-files',
	                        Status.INTERRUPT ), function() {
	                    this.setStatus( Status.PROGRESS );
	                });
	    
	                me._trigged = false;
	                Base.nextTick( me.__tick );
	                me.owner.trigger('startUpload');
	            },
	    
	            /**
	             * @event stopUpload
	             * @description 当开始上传流程暂停时触发。
	             * @for  Uploader
	             */
	    
	            /**
	             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
	             *
	             * 如果第一个参数是文件，则只暂停指定文件。
	             * @grammar stop() => undefined
	             * @grammar stop( true ) => undefined
	             * @grammar stop( file ) => undefined
	             * @method stop
	             * @for  Uploader
	             */
	            stopUpload: function( file, interrupt ) {
	                var me = this;
	    
	                if (file === true) {
	                    interrupt = file;
	                    file = null;
	                }
	    
	                if ( me.runing === false ) {
	                    return;
	                }
	    
	                // 如果只是暂停某个文件。
	                if ( file ) {
	                    file = file.id ? file : me.request( 'get-file', file );
	    
	                    if ( file.getStatus() !== Status.PROGRESS &&
	                            file.getStatus() !== Status.QUEUED ) {
	                        return;
	                    }
	    
	                    file.setStatus( Status.INTERRUPT );
	                    $.each( me.pool, function( _, v ) {
	    
	                        // 只 abort 指定的文件。
	                        if (v.file !== file) {
	                            return;
	                        }
	    
	                        v.transport && v.transport.abort();
	                        me._putback(v);
	                        me._popBlock(v);
	                    });
	    
	                    return Base.nextTick( me.__tick );
	                }
	    
	                me.runing = false;
	    
	                if (this._promise && this._promise.file) {
	                    this._promise.file.setStatus( Status.INTERRUPT );
	                }
	    
	                interrupt && $.each( me.pool, function( _, v ) {
	                    v.transport && v.transport.abort();
	                    v.file.setStatus( Status.INTERRUPT );
	                });
	    
	                me.owner.trigger('stopUpload');
	            },
	    
	            /**
	             * @method cancelFile
	             * @grammar cancelFile( file ) => undefined
	             * @grammar cancelFile( id ) => undefined
	             * @param {File|id} file File对象或这File对象的id
	             * @description 标记文件状态为已取消, 同时将中断文件传输。
	             * @for  Uploader
	             * @example
	             *
	             * $li.on('click', '.remove-this', function() {
	             *     uploader.cancelFile( file );
	             * })
	             */
	            cancelFile: function( file ) {
	                file = file.id ? file : this.request( 'get-file', file );
	    
	                // 如果正在上传。
	                file.blocks && $.each( file.blocks, function( _, v ) {
	                    var _tr = v.transport;
	    
	                    if ( _tr ) {
	                        _tr.abort();
	                        _tr.destroy();
	                        delete v.transport;
	                    }
	                });
	    
	                file.setStatus( Status.CANCELLED );
	                this.owner.trigger( 'fileDequeued', file );
	            },
	    
	            /**
	             * 判断`Uplaode`r是否正在上传中。
	             * @grammar isInProgress() => Boolean
	             * @method isInProgress
	             * @for  Uploader
	             */
	            isInProgress: function() {
	                return !!this.progress;
	            },
	    
	            _getStats: function() {
	                return this.request('get-stats');
	            },
	    
	            /**
	             * 掉过一个文件上传，直接标记指定文件为已上传状态。
	             * @grammar skipFile( file ) => undefined
	             * @method skipFile
	             * @for  Uploader
	             */
	            skipFile: function( file, status ) {
	                file = file.id ? file : this.request( 'get-file', file );
	    
	                file.setStatus( status || Status.COMPLETE );
	                file.skipped = true;
	    
	                // 如果正在上传。
	                file.blocks && $.each( file.blocks, function( _, v ) {
	                    var _tr = v.transport;
	    
	                    if ( _tr ) {
	                        _tr.abort();
	                        _tr.destroy();
	                        delete v.transport;
	                    }
	                });
	    
	                this.owner.trigger( 'uploadSkip', file );
	            },
	    
	            /**
	             * @event uploadFinished
	             * @description 当所有文件上传结束时触发。
	             * @for  Uploader
	             */
	            _tick: function() {
	                var me = this,
	                    opts = me.options,
	                    fn, val;
	    
	                // 上一个promise还没有结束，则等待完成后再执行。
	                if ( me._promise ) {
	                    return me._promise.always( me.__tick );
	                }
	    
	                // 还有位置，且还有文件要处理的话。
	                if ( me.pool.length < opts.threads && (val = me._nextBlock()) ) {
	                    me._trigged = false;
	    
	                    fn = function( val ) {
	                        me._promise = null;
	    
	                        // 有可能是reject过来的，所以要检测val的类型。
	                        val && val.file && me._startSend( val );
	                        Base.nextTick( me.__tick );
	                    };
	    
	                    me._promise = isPromise( val ) ? val.always( fn ) : fn( val );
	    
	                // 没有要上传的了，且没有正在传输的了。
	                } else if ( !me.remaning && !me._getStats().numOfQueue &&
	                    !me._getStats().numofInterrupt ) {
	                    me.runing = false;
	    
	                    me._trigged || Base.nextTick(function() {
	                        me.owner.trigger('uploadFinished');
	                    });
	                    me._trigged = true;
	                }
	            },
	    
	            _putback: function(block) {
	                var idx;
	    
	                block.cuted.unshift(block);
	                idx = this.stack.indexOf(block.cuted);
	    
	                if (!~idx) {
	                    this.stack.unshift(block.cuted);
	                }
	            },
	    
	            _getStack: function() {
	                var i = 0,
	                    act;
	    
	                while ( (act = this.stack[ i++ ]) ) {
	                    if ( act.has() && act.file.getStatus() === Status.PROGRESS ) {
	                        return act;
	                    } else if (!act.has() ||
	                            act.file.getStatus() !== Status.PROGRESS &&
	                            act.file.getStatus() !== Status.INTERRUPT ) {
	    
	                        // 把已经处理完了的，或者，状态为非 progress（上传中）、
	                        // interupt（暂停中） 的移除。
	                        this.stack.splice( --i, 1 );
	                    }
	                }
	    
	                return null;
	            },
	    
	            _nextBlock: function() {
	                var me = this,
	                    opts = me.options,
	                    act, next, done, preparing;
	    
	                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
	                if ( (act = this._getStack()) ) {
	    
	                    // 是否提前准备下一个文件
	                    if ( opts.prepareNextFile && !me.pending.length ) {
	                        me._prepareNextFile();
	                    }
	    
	                    return act.shift();
	    
	                // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
	                } else if ( me.runing ) {
	    
	                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
	                    if ( !me.pending.length && me._getStats().numOfQueue ) {
	                        me._prepareNextFile();
	                    }
	    
	                    next = me.pending.shift();
	                    done = function( file ) {
	                        if ( !file ) {
	                            return null;
	                        }
	    
	                        act = CuteFile( file, opts.chunked ? opts.chunkSize : 0 );
	                        me.stack.push(act);
	                        return act.shift();
	                    };
	    
	                    // 文件可能还在prepare中，也有可能已经完全准备好了。
	                    if ( isPromise( next) ) {
	                        preparing = next.file;
	                        next = next[ next.pipe ? 'pipe' : 'then' ]( done );
	                        next.file = preparing;
	                        return next;
	                    }
	    
	                    return done( next );
	                }
	            },
	    
	    
	            /**
	             * @event uploadStart
	             * @param {File} file File对象
	             * @description 某个文件开始上传前触发，一个文件只会触发一次。
	             * @for  Uploader
	             */
	            _prepareNextFile: function() {
	                var me = this,
	                    file = me.request('fetch-file'),
	                    pending = me.pending,
	                    promise;
	    
	                if ( file ) {
	                    promise = me.request( 'before-send-file', file, function() {
	    
	                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
	                        if ( file.getStatus() === Status.PROGRESS ||
	                            file.getStatus() === Status.INTERRUPT ) {
	                            return file;
	                        }
	    
	                        return me._finishFile( file );
	                    });
	    
	                    me.owner.trigger( 'uploadStart', file );
	                    file.setStatus( Status.PROGRESS );
	    
	                    promise.file = file;
	    
	                    // 如果还在pending中，则替换成文件本身。
	                    promise.done(function() {
	                        var idx = $.inArray( promise, pending );
	    
	                        ~idx && pending.splice( idx, 1, file );
	                    });
	    
	                    // befeore-send-file的钩子就有错误发生。
	                    promise.fail(function( reason ) {
	                        file.setStatus( Status.ERROR, reason );
	                        me.owner.trigger( 'uploadError', file, reason );
	                        me.owner.trigger( 'uploadComplete', file );
	                    });
	    
	                    pending.push( promise );
	                }
	            },
	    
	            // 让出位置了，可以让其他分片开始上传
	            _popBlock: function( block ) {
	                var idx = $.inArray( block, this.pool );
	    
	                this.pool.splice( idx, 1 );
	                block.file.remaning--;
	                this.remaning--;
	            },
	    
	            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
	            _startSend: function( block ) {
	                var me = this,
	                    file = block.file,
	                    promise;
	    
	                // 有可能在 before-send-file 的 promise 期间改变了文件状态。
	                // 如：暂停，取消
	                // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
	                if ( file.getStatus() !== Status.PROGRESS ) {
	    
	                    // 如果是中断，则还需要放回去。
	                    if (file.getStatus() === Status.INTERRUPT) {
	                        me._putback(block);
	                    }
	    
	                    return;
	                }
	    
	                me.pool.push( block );
	                me.remaning++;
	    
	                // 如果没有分片，则直接使用原始的。
	                // 不会丢失content-type信息。
	                block.blob = block.chunks === 1 ? file.source :
	                        file.source.slice( block.start, block.end );
	    
	                // hook, 每个分片发送之前可能要做些异步的事情。
	                promise = me.request( 'before-send', block, function() {
	    
	                    // 有可能文件已经上传出错了，所以不需要再传输了。
	                    if ( file.getStatus() === Status.PROGRESS ) {
	                        me._doSend( block );
	                    } else {
	                        me._popBlock( block );
	                        Base.nextTick( me.__tick );
	                    }
	                });
	    
	                // 如果为fail了，则跳过此分片。
	                promise.fail(function() {
	                    if ( file.remaning === 1 ) {
	                        me._finishFile( file ).always(function() {
	                            block.percentage = 1;
	                            me._popBlock( block );
	                            me.owner.trigger( 'uploadComplete', file );
	                            Base.nextTick( me.__tick );
	                        });
	                    } else {
	                        block.percentage = 1;
	                        me.updateFileProgress( file );
	                        me._popBlock( block );
	                        Base.nextTick( me.__tick );
	                    }
	                });
	            },
	    
	    
	            /**
	             * @event uploadBeforeSend
	             * @param {Object} object
	             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
	             * @param {Object} headers 可以扩展此对象来控制上传头部。
	             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
	             * @for  Uploader
	             */
	    
	            /**
	             * @event uploadAccept
	             * @param {Object} object
	             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
	             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
	             * @for  Uploader
	             */
	    
	            /**
	             * @event uploadProgress
	             * @param {File} file File对象
	             * @param {Number} percentage 上传进度
	             * @description 上传过程中触发，携带上传进度。
	             * @for  Uploader
	             */
	    
	    
	            /**
	             * @event uploadError
	             * @param {File} file File对象
	             * @param {String} reason 出错的code
	             * @description 当文件上传出错时触发。
	             * @for  Uploader
	             */
	    
	            /**
	             * @event uploadSuccess
	             * @param {File} file File对象
	             * @param {Object} response 服务端返回的数据
	             * @description 当文件上传成功时触发。
	             * @for  Uploader
	             */
	    
	            /**
	             * @event uploadComplete
	             * @param {File} [file] File对象
	             * @description 不管成功或者失败，文件上传完成时触发。
	             * @for  Uploader
	             */
	    
	            // 做上传操作。
	            _doSend: function( block ) {
	                var me = this,
	                    owner = me.owner,
	                    opts = me.options,
	                    file = block.file,
	                    tr = new Transport( opts ),
	                    data = $.extend({}, opts.formData ),
	                    headers = $.extend({}, opts.headers ),
	                    requestAccept, ret;
	    
	                block.transport = tr;
	    
	                tr.on( 'destroy', function() {
	                    delete block.transport;
	                    me._popBlock( block );
	                    Base.nextTick( me.__tick );
	                });
	    
	                // 广播上传进度。以文件为单位。
	                tr.on( 'progress', function( percentage ) {
	                    block.percentage = percentage;
	                    me.updateFileProgress( file );
	                });
	    
	                // 用来询问，是否返回的结果是有错误的。
	                requestAccept = function( reject ) {
	                    var fn;
	    
	                    ret = tr.getResponseAsJson() || {};
	                    ret._raw = tr.getResponse();
	                    fn = function( value ) {
	                        reject = value;
	                    };
	    
	                    // 服务端响应了，不代表成功了，询问是否响应正确。
	                    if ( !owner.trigger( 'uploadAccept', block, ret, fn ) ) {
	                        reject = reject || 'server';
	                    }
	    
	                    return reject;
	                };
	    
	                // 尝试重试，然后广播文件上传出错。
	                tr.on( 'error', function( type, flag ) {
	                    block.retried = block.retried || 0;
	    
	                    // 自动重试
	                    if ( block.chunks > 1 && ~'http,abort'.indexOf( type ) &&
	                            block.retried < opts.chunkRetry ) {
	    
	                        block.retried++;
	                        tr.send();
	    
	                    } else {
	    
	                        // http status 500 ~ 600
	                        if ( !flag && type === 'server' ) {
	                            type = requestAccept( type );
	                        }
	    
	                        file.setStatus( Status.ERROR, type );
	                        owner.trigger( 'uploadError', file, type );
	                        owner.trigger( 'uploadComplete', file );
	                    }
	                });
	    
	                // 上传成功
	                tr.on( 'load', function() {
	                    var reason;
	    
	                    // 如果非预期，转向上传出错。
	                    if ( (reason = requestAccept()) ) {
	                        tr.trigger( 'error', reason, true );
	                        return;
	                    }
	    
	                    // 全部上传完成。
	                    if ( file.remaning === 1 ) {
	                        me._finishFile( file, ret );
	                    } else {
	                        tr.destroy();
	                    }
	                });
	    
	                // 配置默认的上传字段。
	                data = $.extend( data, {
	                    id: file.id,
	                    name: file.name,
	                    type: file.type,
	                    lastModifiedDate: file.lastModifiedDate,
	                    size: file.size
	                });
	    
	                block.chunks > 1 && $.extend( data, {
	                    chunks: block.chunks,
	                    chunk: block.chunk
	                });
	    
	                // 在发送之间可以添加字段什么的。。。
	                // 如果默认的字段不够使用，可以通过监听此事件来扩展
	                owner.trigger( 'uploadBeforeSend', block, data, headers );
	    
	                // 开始发送。
	                tr.appendBlob( opts.fileVal, block.blob, file.name );
	                tr.append( data );
	                tr.setRequestHeader( headers );
	                tr.send();
	            },
	    
	            // 完成上传。
	            _finishFile: function( file, ret, hds ) {
	                var owner = this.owner;
	    
	                return owner
	                        .request( 'after-send-file', arguments, function() {
	                            file.setStatus( Status.COMPLETE );
	                            owner.trigger( 'uploadSuccess', file, ret, hds );
	                        })
	                        .fail(function( reason ) {
	    
	                            // 如果外部已经标记为invalid什么的，不再改状态。
	                            if ( file.getStatus() === Status.PROGRESS ) {
	                                file.setStatus( Status.ERROR, reason );
	                            }
	    
	                            owner.trigger( 'uploadError', file, reason );
	                        })
	                        .always(function() {
	                            owner.trigger( 'uploadComplete', file );
	                        });
	            },
	    
	            updateFileProgress: function(file) {
	                var totalPercent = 0,
	                    uploaded = 0;
	    
	                if (!file.blocks) {
	                    return;
	                }
	    
	                $.each( file.blocks, function( _, v ) {
	                    uploaded += (v.percentage || 0) * (v.end - v.start);
	                });
	    
	                totalPercent = uploaded / file.size;
	                this.owner.trigger( 'uploadProgress', file, totalPercent || 0 );
	            }
	    
	        });
	    });
	    /**
	     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
	     */
	    
	    define('widgets/validator',[
	        'base',
	        'uploader',
	        'file',
	        'widgets/widget'
	    ], function( Base, Uploader, WUFile ) {
	    
	        var $ = Base.$,
	            validators = {},
	            api;
	    
	        /**
	         * @event error
	         * @param {String} type 错误类型。
	         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
	         *
	         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
	         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
	         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
	         * @for  Uploader
	         */
	    
	        // 暴露给外面的api
	        api = {
	    
	            // 添加验证器
	            addValidator: function( type, cb ) {
	                validators[ type ] = cb;
	            },
	    
	            // 移除验证器
	            removeValidator: function( type ) {
	                delete validators[ type ];
	            }
	        };
	    
	        // 在Uploader初始化的时候启动Validators的初始化
	        Uploader.register({
	            name: 'validator',
	    
	            init: function() {
	                var me = this;
	                Base.nextTick(function() {
	                    $.each( validators, function() {
	                        this.call( me.owner );
	                    });
	                });
	            }
	        });
	    
	        /**
	         * @property {int} [fileNumLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总数量, 超出则不允许加入队列。
	         */
	        api.addValidator( 'fileNumLimit', function() {
	            var uploader = this,
	                opts = uploader.options,
	                count = 0,
	                max = parseInt( opts.fileNumLimit, 10 ),
	                flag = true;
	    
	            if ( !max ) {
	                return;
	            }
	    
	            uploader.on( 'beforeFileQueued', function( file ) {
	    
	                if ( count >= max && flag ) {
	                    flag = false;
	                    this.trigger( 'error', 'Q_EXCEED_NUM_LIMIT', max, file );
	                    setTimeout(function() {
	                        flag = true;
	                    }, 1 );
	                }
	    
	                return count >= max ? false : true;
	            });
	    
	            uploader.on( 'fileQueued', function() {
	                count++;
	            });
	    
	            uploader.on( 'fileDequeued', function() {
	                count--;
	            });
	    
	            uploader.on( 'reset', function() {
	                count = 0;
	            });
	        });
	    
	    
	        /**
	         * @property {int} [fileSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
	         */
	        api.addValidator( 'fileSizeLimit', function() {
	            var uploader = this,
	                opts = uploader.options,
	                count = 0,
	                max = parseInt( opts.fileSizeLimit, 10 ),
	                flag = true;
	    
	            if ( !max ) {
	                return;
	            }
	    
	            uploader.on( 'beforeFileQueued', function( file ) {
	                var invalid = count + file.size > max;
	    
	                if ( invalid && flag ) {
	                    flag = false;
	                    this.trigger( 'error', 'Q_EXCEED_SIZE_LIMIT', max, file );
	                    setTimeout(function() {
	                        flag = true;
	                    }, 1 );
	                }
	    
	                return invalid ? false : true;
	            });
	    
	            uploader.on( 'fileQueued', function( file ) {
	                count += file.size;
	            });
	    
	            uploader.on( 'fileDequeued', function( file ) {
	                count -= file.size;
	            });
	    
	            uploader.on( 'reset', function() {
	                count = 0;
	            });
	        });
	    
	        /**
	         * @property {int} [fileSingleSizeLimit=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
	         */
	        api.addValidator( 'fileSingleSizeLimit', function() {
	            var uploader = this,
	                opts = uploader.options,
	                max = opts.fileSingleSizeLimit;
	    
	            if ( !max ) {
	                return;
	            }
	    
	            uploader.on( 'beforeFileQueued', function( file ) {
	    
	                if ( file.size > max ) {
	                    file.setStatus( WUFile.Status.INVALID, 'exceed_size' );
	                    this.trigger( 'error', 'F_EXCEED_SIZE', max, file );
	                    return false;
	                }
	    
	            });
	    
	        });
	    
	        /**
	         * @property {Boolean} [duplicate=undefined]
	         * @namespace options
	         * @for Uploader
	         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
	         */
	        api.addValidator( 'duplicate', function() {
	            var uploader = this,
	                opts = uploader.options,
	                mapping = {};
	    
	            if ( opts.duplicate ) {
	                return;
	            }
	    
	            function hashString( str ) {
	                var hash = 0,
	                    i = 0,
	                    len = str.length,
	                    _char;
	    
	                for ( ; i < len; i++ ) {
	                    _char = str.charCodeAt( i );
	                    hash = _char + (hash << 6) + (hash << 16) - hash;
	                }
	    
	                return hash;
	            }
	    
	            uploader.on( 'beforeFileQueued', function( file ) {
	                var hash = file.__hash || (file.__hash = hashString( file.name +
	                        file.size + file.lastModifiedDate ));
	    
	                // 已经重复了
	                if ( mapping[ hash ] ) {
	                    this.trigger( 'error', 'F_DUPLICATE', file );
	                    return false;
	                }
	            });
	    
	            uploader.on( 'fileQueued', function( file ) {
	                var hash = file.__hash;
	    
	                hash && (mapping[ hash ] = true);
	            });
	    
	            uploader.on( 'fileDequeued', function( file ) {
	                var hash = file.__hash;
	    
	                hash && (delete mapping[ hash ]);
	            });
	    
	            uploader.on( 'reset', function() {
	                mapping = {};
	            });
	        });
	    
	        return api;
	    });
	    
	    /**
	     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
	     */
	    define('runtime/compbase',[],function() {
	    
	        function CompBase( owner, runtime ) {
	    
	            this.owner = owner;
	            this.options = owner.options;
	    
	            this.getRuntime = function() {
	                return runtime;
	            };
	    
	            this.getRuid = function() {
	                return runtime.uid;
	            };
	    
	            this.trigger = function() {
	                return owner.trigger.apply( owner, arguments );
	            };
	        }
	    
	        return CompBase;
	    });
	    /**
	     * @fileOverview Html5Runtime
	     */
	    define('runtime/html5/runtime',[
	        'base',
	        'runtime/runtime',
	        'runtime/compbase'
	    ], function( Base, Runtime, CompBase ) {
	    
	        var type = 'html5',
	            components = {};
	    
	        function Html5Runtime() {
	            var pool = {},
	                me = this,
	                destroy = this.destroy;
	    
	            Runtime.apply( me, arguments );
	            me.type = type;
	    
	    
	            // 这个方法的调用者，实际上是RuntimeClient
	            me.exec = function( comp, fn/*, args...*/) {
	                var client = this,
	                    uid = client.uid,
	                    args = Base.slice( arguments, 2 ),
	                    instance;
	    
	                if ( components[ comp ] ) {
	                    instance = pool[ uid ] = pool[ uid ] ||
	                            new components[ comp ]( client, me );
	    
	                    if ( instance[ fn ] ) {
	                        return instance[ fn ].apply( instance, args );
	                    }
	                }
	            };
	    
	            me.destroy = function() {
	                // @todo 删除池子中的所有实例
	                return destroy && destroy.apply( this, arguments );
	            };
	        }
	    
	        Base.inherits( Runtime, {
	            constructor: Html5Runtime,
	    
	            // 不需要连接其他程序，直接执行callback
	            init: function() {
	                var me = this;
	                setTimeout(function() {
	                    me.trigger('ready');
	                }, 1 );
	            }
	    
	        });
	    
	        // 注册Components
	        Html5Runtime.register = function( name, component ) {
	            var klass = components[ name ] = Base.inherits( CompBase, component );
	            return klass;
	        };
	    
	        // 注册html5运行时。
	        // 只有在支持的前提下注册。
	        if ( window.Blob && window.FileReader && window.DataView ) {
	            Runtime.addRuntime( type, Html5Runtime );
	        }
	    
	        return Html5Runtime;
	    });
	    /**
	     * @fileOverview Blob Html实现
	     */
	    define('runtime/html5/blob',[
	        'runtime/html5/runtime',
	        'lib/blob'
	    ], function( Html5Runtime, Blob ) {
	    
	        return Html5Runtime.register( 'Blob', {
	            slice: function( start, end ) {
	                var blob = this.owner.source,
	                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;
	    
	                blob = slice.call( blob, start, end );
	    
	                return new Blob( this.getRuid(), blob );
	            }
	        });
	    });
	    /**
	     * @fileOverview FilePaste
	     */
	    define('runtime/html5/dnd',[
	        'base',
	        'runtime/html5/runtime',
	        'lib/file'
	    ], function( Base, Html5Runtime, File ) {
	    
	        var $ = Base.$,
	            prefix = 'webuploader-dnd-';
	    
	        return Html5Runtime.register( 'DragAndDrop', {
	            init: function() {
	                var elem = this.elem = this.options.container;
	    
	                this.dragEnterHandler = Base.bindFn( this._dragEnterHandler, this );
	                this.dragOverHandler = Base.bindFn( this._dragOverHandler, this );
	                this.dragLeaveHandler = Base.bindFn( this._dragLeaveHandler, this );
	                this.dropHandler = Base.bindFn( this._dropHandler, this );
	                this.dndOver = false;
	    
	                elem.on( 'dragenter', this.dragEnterHandler );
	                elem.on( 'dragover', this.dragOverHandler );
	                elem.on( 'dragleave', this.dragLeaveHandler );
	                elem.on( 'drop', this.dropHandler );
	    
	                if ( this.options.disableGlobalDnd ) {
	                    $( document ).on( 'dragover', this.dragOverHandler );
	                    $( document ).on( 'drop', this.dropHandler );
	                }
	            },
	    
	            _dragEnterHandler: function( e ) {
	                var me = this,
	                    denied = me._denied || false,
	                    items;
	    
	                e = e.originalEvent || e;
	    
	                if ( !me.dndOver ) {
	                    me.dndOver = true;
	    
	                    // 注意只有 chrome 支持。
	                    items = e.dataTransfer.items;
	    
	                    if ( items && items.length ) {
	                        me._denied = denied = !me.trigger( 'accept', items );
	                    }
	    
	                    me.elem.addClass( prefix + 'over' );
	                    me.elem[ denied ? 'addClass' :
	                            'removeClass' ]( prefix + 'denied' );
	                }
	    
	                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';
	    
	                return false;
	            },
	    
	            _dragOverHandler: function( e ) {
	                // 只处理框内的。
	                var parentElem = this.elem.parent().get( 0 );
	                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
	                    return false;
	                }
	    
	                clearTimeout( this._leaveTimer );
	                this._dragEnterHandler.call( this, e );
	    
	                return false;
	            },
	    
	            _dragLeaveHandler: function() {
	                var me = this,
	                    handler;
	    
	                handler = function() {
	                    me.dndOver = false;
	                    me.elem.removeClass( prefix + 'over ' + prefix + 'denied' );
	                };
	    
	                clearTimeout( me._leaveTimer );
	                me._leaveTimer = setTimeout( handler, 100 );
	                return false;
	            },
	    
	            _dropHandler: function( e ) {
	                var me = this,
	                    ruid = me.getRuid(),
	                    parentElem = me.elem.parent().get( 0 ),
	                    dataTransfer, data;
	    
	                // 只处理框内的。
	                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
	                    return false;
	                }
	    
	                e = e.originalEvent || e;
	                dataTransfer = e.dataTransfer;
	    
	                // 如果是页面内拖拽，还不能处理，不阻止事件。
	                // 此处 ie11 下会报参数错误，
	                try {
	                    data = dataTransfer.getData('text/html');
	                } catch( err ) {
	                }
	    
	                if ( data ) {
	                    return;
	                }
	    
	                me._getTansferFiles( dataTransfer, function( results ) {
	                    me.trigger( 'drop', $.map( results, function( file ) {
	                        return new File( ruid, file );
	                    }) );
	                });
	    
	                me.dndOver = false;
	                me.elem.removeClass( prefix + 'over' );
	                return false;
	            },
	    
	            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
	            _getTansferFiles: function( dataTransfer, callback ) {
	                var results  = [],
	                    promises = [],
	                    items, files, file, item, i, len, canAccessFolder;
	    
	                items = dataTransfer.items;
	                files = dataTransfer.files;
	    
	                canAccessFolder = !!(items && items[ 0 ].webkitGetAsEntry);
	    
	                for ( i = 0, len = files.length; i < len; i++ ) {
	                    file = files[ i ];
	                    item = items && items[ i ];
	    
	                    if ( canAccessFolder && item.webkitGetAsEntry().isDirectory ) {
	    
	                        promises.push( this._traverseDirectoryTree(
	                                item.webkitGetAsEntry(), results ) );
	                    } else {
	                        results.push( file );
	                    }
	                }
	    
	                Base.when.apply( Base, promises ).done(function() {
	    
	                    if ( !results.length ) {
	                        return;
	                    }
	    
	                    callback( results );
	                });
	            },
	    
	            _traverseDirectoryTree: function( entry, results ) {
	                var deferred = Base.Deferred(),
	                    me = this;
	    
	                if ( entry.isFile ) {
	                    entry.file(function( file ) {
	                        results.push( file );
	                        deferred.resolve();
	                    });
	                } else if ( entry.isDirectory ) {
	                    entry.createReader().readEntries(function( entries ) {
	                        var len = entries.length,
	                            promises = [],
	                            arr = [],    // 为了保证顺序。
	                            i;
	    
	                        for ( i = 0; i < len; i++ ) {
	                            promises.push( me._traverseDirectoryTree(
	                                    entries[ i ], arr ) );
	                        }
	    
	                        Base.when.apply( Base, promises ).then(function() {
	                            results.push.apply( results, arr );
	                            deferred.resolve();
	                        }, deferred.reject );
	                    });
	                }
	    
	                return deferred.promise();
	            },
	    
	            destroy: function() {
	                var elem = this.elem;
	    
	                // 还没 init 就调用 destroy
	                if (!elem) {
	                    return;
	                }
	                
	                elem.off( 'dragenter', this.dragEnterHandler );
	                elem.off( 'dragover', this.dragOverHandler );
	                elem.off( 'dragleave', this.dragLeaveHandler );
	                elem.off( 'drop', this.dropHandler );
	    
	                if ( this.options.disableGlobalDnd ) {
	                    $( document ).off( 'dragover', this.dragOverHandler );
	                    $( document ).off( 'drop', this.dropHandler );
	                }
	            }
	        });
	    });
	    
	    /**
	     * @fileOverview FilePaste
	     */
	    define('runtime/html5/filepaste',[
	        'base',
	        'runtime/html5/runtime',
	        'lib/file'
	    ], function( Base, Html5Runtime, File ) {
	    
	        return Html5Runtime.register( 'FilePaste', {
	            init: function() {
	                var opts = this.options,
	                    elem = this.elem = opts.container,
	                    accept = '.*',
	                    arr, i, len, item;
	    
	                // accetp的mimeTypes中生成匹配正则。
	                if ( opts.accept ) {
	                    arr = [];
	    
	                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
	                        item = opts.accept[ i ].mimeTypes;
	                        item && arr.push( item );
	                    }
	    
	                    if ( arr.length ) {
	                        accept = arr.join(',');
	                        accept = accept.replace( /,/g, '|' ).replace( /\*/g, '.*' );
	                    }
	                }
	                this.accept = accept = new RegExp( accept, 'i' );
	                this.hander = Base.bindFn( this._pasteHander, this );
	                elem.on( 'paste', this.hander );
	            },
	    
	            _pasteHander: function( e ) {
	                var allowed = [],
	                    ruid = this.getRuid(),
	                    items, item, blob, i, len;
	    
	                e = e.originalEvent || e;
	                items = e.clipboardData.items;
	    
	                for ( i = 0, len = items.length; i < len; i++ ) {
	                    item = items[ i ];
	    
	                    if ( item.kind !== 'file' || !(blob = item.getAsFile()) ) {
	                        continue;
	                    }
	    
	                    allowed.push( new File( ruid, blob ) );
	                }
	    
	                if ( allowed.length ) {
	                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
	                    e.preventDefault();
	                    e.stopPropagation();
	                    this.trigger( 'paste', allowed );
	                }
	            },
	    
	            destroy: function() {
	                this.elem.off( 'paste', this.hander );
	            }
	        });
	    });
	    
	    /**
	     * @fileOverview FilePicker
	     */
	    define('runtime/html5/filepicker',[
	        'base',
	        'runtime/html5/runtime'
	    ], function( Base, Html5Runtime ) {
	    
	        var $ = Base.$;
	    
	        return Html5Runtime.register( 'FilePicker', {
	            init: function() {
	                var container = this.getRuntime().getContainer(),
	                    me = this,
	                    owner = me.owner,
	                    opts = me.options,
	                    label = this.label = $( document.createElement('label') ),
	                    input =  this.input = $( document.createElement('input') ),
	                    arr, i, len, mouseHandler;
	    
	                input.attr( 'type', 'file' );
	                input.attr( 'name', opts.name );
	                input.addClass('webuploader-element-invisible');
	    
	                label.on( 'click', function() {
	                    input.trigger('click');
	                });
	    
	                label.css({
	                    opacity: 0,
	                    width: '100%',
	                    height: '100%',
	                    display: 'block',
	                    cursor: 'pointer',
	                    background: '#ffffff'
	                });
	    
	                if ( opts.multiple ) {
	                    input.attr( 'multiple', 'multiple' );
	                }
	    
	                // @todo Firefox不支持单独指定后缀
	                if ( opts.accept && opts.accept.length > 0 ) {
	                    arr = [];
	    
	                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
	                        arr.push( opts.accept[ i ].mimeTypes );
	                    }
	    
	                    input.attr( 'accept', arr.join(',') );
	                }
	    
	                container.append( input );
	                container.append( label );
	    
	                mouseHandler = function( e ) {
	                    owner.trigger( e.type );
	                };
	    
	                input.on( 'change', function( e ) {
	                    var fn = arguments.callee,
	                        clone;
	    
	                    me.files = e.target.files;
	    
	                    // reset input
	                    clone = this.cloneNode( true );
	                    clone.value = null;
	                    this.parentNode.replaceChild( clone, this );
	    
	                    input.off();
	                    input = $( clone ).on( 'change', fn )
	                            .on( 'mouseenter mouseleave', mouseHandler );
	    
	                    owner.trigger('change');
	                });
	    
	                label.on( 'mouseenter mouseleave', mouseHandler );
	    
	            },
	    
	    
	            getFiles: function() {
	                return this.files;
	            },
	    
	            destroy: function() {
	                this.input.off();
	                this.label.off();
	            }
	        });
	    });
	    /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */
	    define('runtime/html5/util',[
	        'base'
	    ], function( Base ) {
	    
	        var urlAPI = window.createObjectURL && window ||
	                window.URL && URL.revokeObjectURL && URL ||
	                window.webkitURL,
	            createObjectURL = Base.noop,
	            revokeObjectURL = createObjectURL;
	    
	        if ( urlAPI ) {
	    
	            // 更安全的方式调用，比如android里面就能把context改成其他的对象。
	            createObjectURL = function() {
	                return urlAPI.createObjectURL.apply( urlAPI, arguments );
	            };
	    
	            revokeObjectURL = function() {
	                return urlAPI.revokeObjectURL.apply( urlAPI, arguments );
	            };
	        }
	    
	        return {
	            createObjectURL: createObjectURL,
	            revokeObjectURL: revokeObjectURL,
	    
	            dataURL2Blob: function( dataURI ) {
	                var byteStr, intArray, ab, i, mimetype, parts;
	    
	                parts = dataURI.split(',');
	    
	                if ( ~parts[ 0 ].indexOf('base64') ) {
	                    byteStr = atob( parts[ 1 ] );
	                } else {
	                    byteStr = decodeURIComponent( parts[ 1 ] );
	                }
	    
	                ab = new ArrayBuffer( byteStr.length );
	                intArray = new Uint8Array( ab );
	    
	                for ( i = 0; i < byteStr.length; i++ ) {
	                    intArray[ i ] = byteStr.charCodeAt( i );
	                }
	    
	                mimetype = parts[ 0 ].split(':')[ 1 ].split(';')[ 0 ];
	    
	                return this.arrayBufferToBlob( ab, mimetype );
	            },
	    
	            dataURL2ArrayBuffer: function( dataURI ) {
	                var byteStr, intArray, i, parts;
	    
	                parts = dataURI.split(',');
	    
	                if ( ~parts[ 0 ].indexOf('base64') ) {
	                    byteStr = atob( parts[ 1 ] );
	                } else {
	                    byteStr = decodeURIComponent( parts[ 1 ] );
	                }
	    
	                intArray = new Uint8Array( byteStr.length );
	    
	                for ( i = 0; i < byteStr.length; i++ ) {
	                    intArray[ i ] = byteStr.charCodeAt( i );
	                }
	    
	                return intArray.buffer;
	            },
	    
	            arrayBufferToBlob: function( buffer, type ) {
	                var builder = window.BlobBuilder || window.WebKitBlobBuilder,
	                    bb;
	    
	                // android不支持直接new Blob, 只能借助blobbuilder.
	                if ( builder ) {
	                    bb = new builder();
	                    bb.append( buffer );
	                    return bb.getBlob( type );
	                }
	    
	                return new Blob([ buffer ], type ? { type: type } : {} );
	            },
	    
	            // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
	            // 你得到的结果是png.
	            canvasToDataUrl: function( canvas, type, quality ) {
	                return canvas.toDataURL( type, quality / 100 );
	            },
	    
	            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	            parseMeta: function( blob, callback ) {
	                callback( false, {});
	            },
	    
	            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
	            updateImageHead: function( data ) {
	                return data;
	            }
	        };
	    });
	    /**
	     * Terms:
	     *
	     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
	     * @fileOverview Image控件
	     */
	    define('runtime/html5/imagemeta',[
	        'runtime/html5/util'
	    ], function( Util ) {
	    
	        var api;
	    
	        api = {
	            parsers: {
	                0xffe1: []
	            },
	    
	            maxMetaDataSize: 262144,
	    
	            parse: function( blob, cb ) {
	                var me = this,
	                    fr = new FileReader();
	    
	                fr.onload = function() {
	                    cb( false, me._parse( this.result ) );
	                    fr = fr.onload = fr.onerror = null;
	                };
	    
	                fr.onerror = function( e ) {
	                    cb( e.message );
	                    fr = fr.onload = fr.onerror = null;
	                };
	    
	                blob = blob.slice( 0, me.maxMetaDataSize );
	                fr.readAsArrayBuffer( blob.getSource() );
	            },
	    
	            _parse: function( buffer, noParse ) {
	                if ( buffer.byteLength < 6 ) {
	                    return;
	                }
	    
	                var dataview = new DataView( buffer ),
	                    offset = 2,
	                    maxOffset = dataview.byteLength - 4,
	                    headLength = offset,
	                    ret = {},
	                    markerBytes, markerLength, parsers, i;
	    
	                if ( dataview.getUint16( 0 ) === 0xffd8 ) {
	    
	                    while ( offset < maxOffset ) {
	                        markerBytes = dataview.getUint16( offset );
	    
	                        if ( markerBytes >= 0xffe0 && markerBytes <= 0xffef ||
	                                markerBytes === 0xfffe ) {
	    
	                            markerLength = dataview.getUint16( offset + 2 ) + 2;
	    
	                            if ( offset + markerLength > dataview.byteLength ) {
	                                break;
	                            }
	    
	                            parsers = api.parsers[ markerBytes ];
	    
	                            if ( !noParse && parsers ) {
	                                for ( i = 0; i < parsers.length; i += 1 ) {
	                                    parsers[ i ].call( api, dataview, offset,
	                                            markerLength, ret );
	                                }
	                            }
	    
	                            offset += markerLength;
	                            headLength = offset;
	                        } else {
	                            break;
	                        }
	                    }
	    
	                    if ( headLength > 6 ) {
	                        if ( buffer.slice ) {
	                            ret.imageHead = buffer.slice( 2, headLength );
	                        } else {
	                            // Workaround for IE10, which does not yet
	                            // support ArrayBuffer.slice:
	                            ret.imageHead = new Uint8Array( buffer )
	                                    .subarray( 2, headLength );
	                        }
	                    }
	                }
	    
	                return ret;
	            },
	    
	            updateImageHead: function( buffer, head ) {
	                var data = this._parse( buffer, true ),
	                    buf1, buf2, bodyoffset;
	    
	    
	                bodyoffset = 2;
	                if ( data.imageHead ) {
	                    bodyoffset = 2 + data.imageHead.byteLength;
	                }
	    
	                if ( buffer.slice ) {
	                    buf2 = buffer.slice( bodyoffset );
	                } else {
	                    buf2 = new Uint8Array( buffer ).subarray( bodyoffset );
	                }
	    
	                buf1 = new Uint8Array( head.byteLength + 2 + buf2.byteLength );
	    
	                buf1[ 0 ] = 0xFF;
	                buf1[ 1 ] = 0xD8;
	                buf1.set( new Uint8Array( head ), 2 );
	                buf1.set( new Uint8Array( buf2 ), head.byteLength + 2 );
	    
	                return buf1.buffer;
	            }
	        };
	    
	        Util.parseMeta = function() {
	            return api.parse.apply( api, arguments );
	        };
	    
	        Util.updateImageHead = function() {
	            return api.updateImageHead.apply( api, arguments );
	        };
	    
	        return api;
	    });
	    /**
	     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
	     * 暂时项目中只用了orientation.
	     *
	     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
	     * @fileOverview EXIF解析
	     */
	    
	    // Sample
	    // ====================================
	    // Make : Apple
	    // Model : iPhone 4S
	    // Orientation : 1
	    // XResolution : 72 [72/1]
	    // YResolution : 72 [72/1]
	    // ResolutionUnit : 2
	    // Software : QuickTime 7.7.1
	    // DateTime : 2013:09:01 22:53:55
	    // ExifIFDPointer : 190
	    // ExposureTime : 0.058823529411764705 [1/17]
	    // FNumber : 2.4 [12/5]
	    // ExposureProgram : Normal program
	    // ISOSpeedRatings : 800
	    // ExifVersion : 0220
	    // DateTimeOriginal : 2013:09:01 22:52:51
	    // DateTimeDigitized : 2013:09:01 22:52:51
	    // ComponentsConfiguration : YCbCr
	    // ShutterSpeedValue : 4.058893515764426
	    // ApertureValue : 2.5260688216892597 [4845/1918]
	    // BrightnessValue : -0.3126686601998395
	    // MeteringMode : Pattern
	    // Flash : Flash did not fire, compulsory flash mode
	    // FocalLength : 4.28 [107/25]
	    // SubjectArea : [4 values]
	    // FlashpixVersion : 0100
	    // ColorSpace : 1
	    // PixelXDimension : 2448
	    // PixelYDimension : 3264
	    // SensingMethod : One-chip color area sensor
	    // ExposureMode : 0
	    // WhiteBalance : Auto white balance
	    // FocalLengthIn35mmFilm : 35
	    // SceneCaptureType : Standard
	    define('runtime/html5/imagemeta/exif',[
	        'base',
	        'runtime/html5/imagemeta'
	    ], function( Base, ImageMeta ) {
	    
	        var EXIF = {};
	    
	        EXIF.ExifMap = function() {
	            return this;
	        };
	    
	        EXIF.ExifMap.prototype.map = {
	            'Orientation': 0x0112
	        };
	    
	        EXIF.ExifMap.prototype.get = function( id ) {
	            return this[ id ] || this[ this.map[ id ] ];
	        };
	    
	        EXIF.exifTagTypes = {
	            // byte, 8-bit unsigned int:
	            1: {
	                getValue: function( dataView, dataOffset ) {
	                    return dataView.getUint8( dataOffset );
	                },
	                size: 1
	            },
	    
	            // ascii, 8-bit byte:
	            2: {
	                getValue: function( dataView, dataOffset ) {
	                    return String.fromCharCode( dataView.getUint8( dataOffset ) );
	                },
	                size: 1,
	                ascii: true
	            },
	    
	            // short, 16 bit int:
	            3: {
	                getValue: function( dataView, dataOffset, littleEndian ) {
	                    return dataView.getUint16( dataOffset, littleEndian );
	                },
	                size: 2
	            },
	    
	            // long, 32 bit int:
	            4: {
	                getValue: function( dataView, dataOffset, littleEndian ) {
	                    return dataView.getUint32( dataOffset, littleEndian );
	                },
	                size: 4
	            },
	    
	            // rational = two long values,
	            // first is numerator, second is denominator:
	            5: {
	                getValue: function( dataView, dataOffset, littleEndian ) {
	                    return dataView.getUint32( dataOffset, littleEndian ) /
	                        dataView.getUint32( dataOffset + 4, littleEndian );
	                },
	                size: 8
	            },
	    
	            // slong, 32 bit signed int:
	            9: {
	                getValue: function( dataView, dataOffset, littleEndian ) {
	                    return dataView.getInt32( dataOffset, littleEndian );
	                },
	                size: 4
	            },
	    
	            // srational, two slongs, first is numerator, second is denominator:
	            10: {
	                getValue: function( dataView, dataOffset, littleEndian ) {
	                    return dataView.getInt32( dataOffset, littleEndian ) /
	                        dataView.getInt32( dataOffset + 4, littleEndian );
	                },
	                size: 8
	            }
	        };
	    
	        // undefined, 8-bit byte, value depending on field:
	        EXIF.exifTagTypes[ 7 ] = EXIF.exifTagTypes[ 1 ];
	    
	        EXIF.getExifValue = function( dataView, tiffOffset, offset, type, length,
	                littleEndian ) {
	    
	            var tagType = EXIF.exifTagTypes[ type ],
	                tagSize, dataOffset, values, i, str, c;
	    
	            if ( !tagType ) {
	                Base.log('Invalid Exif data: Invalid tag type.');
	                return;
	            }
	    
	            tagSize = tagType.size * length;
	    
	            // Determine if the value is contained in the dataOffset bytes,
	            // or if the value at the dataOffset is a pointer to the actual data:
	            dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32( offset + 8,
	                    littleEndian ) : (offset + 8);
	    
	            if ( dataOffset + tagSize > dataView.byteLength ) {
	                Base.log('Invalid Exif data: Invalid data offset.');
	                return;
	            }
	    
	            if ( length === 1 ) {
	                return tagType.getValue( dataView, dataOffset, littleEndian );
	            }
	    
	            values = [];
	    
	            for ( i = 0; i < length; i += 1 ) {
	                values[ i ] = tagType.getValue( dataView,
	                        dataOffset + i * tagType.size, littleEndian );
	            }
	    
	            if ( tagType.ascii ) {
	                str = '';
	    
	                // Concatenate the chars:
	                for ( i = 0; i < values.length; i += 1 ) {
	                    c = values[ i ];
	    
	                    // Ignore the terminating NULL byte(s):
	                    if ( c === '\u0000' ) {
	                        break;
	                    }
	                    str += c;
	                }
	    
	                return str;
	            }
	            return values;
	        };
	    
	        EXIF.parseExifTag = function( dataView, tiffOffset, offset, littleEndian,
	                data ) {
	    
	            var tag = dataView.getUint16( offset, littleEndian );
	            data.exif[ tag ] = EXIF.getExifValue( dataView, tiffOffset, offset,
	                    dataView.getUint16( offset + 2, littleEndian ),    // tag type
	                    dataView.getUint32( offset + 4, littleEndian ),    // tag length
	                    littleEndian );
	        };
	    
	        EXIF.parseExifTags = function( dataView, tiffOffset, dirOffset,
	                littleEndian, data ) {
	    
	            var tagsNumber, dirEndOffset, i;
	    
	            if ( dirOffset + 6 > dataView.byteLength ) {
	                Base.log('Invalid Exif data: Invalid directory offset.');
	                return;
	            }
	    
	            tagsNumber = dataView.getUint16( dirOffset, littleEndian );
	            dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
	    
	            if ( dirEndOffset + 4 > dataView.byteLength ) {
	                Base.log('Invalid Exif data: Invalid directory size.');
	                return;
	            }
	    
	            for ( i = 0; i < tagsNumber; i += 1 ) {
	                this.parseExifTag( dataView, tiffOffset,
	                        dirOffset + 2 + 12 * i,    // tag offset
	                        littleEndian, data );
	            }
	    
	            // Return the offset to the next directory:
	            return dataView.getUint32( dirEndOffset, littleEndian );
	        };
	    
	        // EXIF.getExifThumbnail = function(dataView, offset, length) {
	        //     var hexData,
	        //         i,
	        //         b;
	        //     if (!length || offset + length > dataView.byteLength) {
	        //         Base.log('Invalid Exif data: Invalid thumbnail data.');
	        //         return;
	        //     }
	        //     hexData = [];
	        //     for (i = 0; i < length; i += 1) {
	        //         b = dataView.getUint8(offset + i);
	        //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
	        //     }
	        //     return 'data:image/jpeg,%' + hexData.join('%');
	        // };
	    
	        EXIF.parseExifData = function( dataView, offset, length, data ) {
	    
	            var tiffOffset = offset + 10,
	                littleEndian, dirOffset;
	    
	            // Check for the ASCII code for "Exif" (0x45786966):
	            if ( dataView.getUint32( offset + 4 ) !== 0x45786966 ) {
	                // No Exif data, might be XMP data instead
	                return;
	            }
	            if ( tiffOffset + 8 > dataView.byteLength ) {
	                Base.log('Invalid Exif data: Invalid segment size.');
	                return;
	            }
	    
	            // Check for the two null bytes:
	            if ( dataView.getUint16( offset + 8 ) !== 0x0000 ) {
	                Base.log('Invalid Exif data: Missing byte alignment offset.');
	                return;
	            }
	    
	            // Check the byte alignment:
	            switch ( dataView.getUint16( tiffOffset ) ) {
	                case 0x4949:
	                    littleEndian = true;
	                    break;
	    
	                case 0x4D4D:
	                    littleEndian = false;
	                    break;
	    
	                default:
	                    Base.log('Invalid Exif data: Invalid byte alignment marker.');
	                    return;
	            }
	    
	            // Check for the TIFF tag marker (0x002A):
	            if ( dataView.getUint16( tiffOffset + 2, littleEndian ) !== 0x002A ) {
	                Base.log('Invalid Exif data: Missing TIFF marker.');
	                return;
	            }
	    
	            // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
	            dirOffset = dataView.getUint32( tiffOffset + 4, littleEndian );
	            // Create the exif object to store the tags:
	            data.exif = new EXIF.ExifMap();
	            // Parse the tags of the main image directory and retrieve the
	            // offset to the next directory, usually the thumbnail directory:
	            dirOffset = EXIF.parseExifTags( dataView, tiffOffset,
	                    tiffOffset + dirOffset, littleEndian, data );
	    
	            // 尝试读取缩略图
	            // if ( dirOffset ) {
	            //     thumbnailData = {exif: {}};
	            //     dirOffset = EXIF.parseExifTags(
	            //         dataView,
	            //         tiffOffset,
	            //         tiffOffset + dirOffset,
	            //         littleEndian,
	            //         thumbnailData
	            //     );
	    
	            //     // Check for JPEG Thumbnail offset:
	            //     if (thumbnailData.exif[0x0201]) {
	            //         data.exif.Thumbnail = EXIF.getExifThumbnail(
	            //             dataView,
	            //             tiffOffset + thumbnailData.exif[0x0201],
	            //             thumbnailData.exif[0x0202] // Thumbnail data length
	            //         );
	            //     }
	            // }
	        };
	    
	        ImageMeta.parsers[ 0xffe1 ].push( EXIF.parseExifData );
	        return EXIF;
	    });
	    /**
	     * @fileOverview Image
	     */
	    define('runtime/html5/image',[
	        'base',
	        'runtime/html5/runtime',
	        'runtime/html5/util'
	    ], function( Base, Html5Runtime, Util ) {
	    
	        var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';
	    
	        return Html5Runtime.register( 'Image', {
	    
	            // flag: 标记是否被修改过。
	            modified: false,
	    
	            init: function() {
	                var me = this,
	                    img = new Image();
	    
	                img.onload = function() {
	    
	                    me._info = {
	                        type: me.type,
	                        width: this.width,
	                        height: this.height
	                    };
	    
	                    // 读取meta信息。
	                    if ( !me._metas && 'image/jpeg' === me.type ) {
	                        Util.parseMeta( me._blob, function( error, ret ) {
	                            me._metas = ret;
	                            me.owner.trigger('load');
	                        });
	                    } else {
	                        me.owner.trigger('load');
	                    }
	                };
	    
	                img.onerror = function() {
	                    me.owner.trigger('error');
	                };
	    
	                me._img = img;
	            },
	    
	            loadFromBlob: function( blob ) {
	                var me = this,
	                    img = me._img;
	    
	                me._blob = blob;
	                me.type = blob.type;
	                img.src = Util.createObjectURL( blob.getSource() );
	                me.owner.once( 'load', function() {
	                    Util.revokeObjectURL( img.src );
	                });
	            },
	    
	            resize: function( width, height ) {
	                var canvas = this._canvas ||
	                        (this._canvas = document.createElement('canvas'));
	    
	                this._resize( this._img, canvas, width, height );
	                this._blob = null;    // 没用了，可以删掉了。
	                this.modified = true;
	                this.owner.trigger( 'complete', 'resize' );
	            },
	    
	            crop: function( x, y, w, h, s ) {
	                var cvs = this._canvas ||
	                        (this._canvas = document.createElement('canvas')),
	                    opts = this.options,
	                    img = this._img,
	                    iw = img.naturalWidth,
	                    ih = img.naturalHeight,
	                    orientation = this.getOrientation();
	    
	                s = s || 1;
	    
	                // todo 解决 orientation 的问题。
	                // values that require 90 degree rotation
	                // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
	    
	                //     switch ( orientation ) {
	                //         case 6:
	                //             tmp = x;
	                //             x = y;
	                //             y = iw * s - tmp - w;
	                //             console.log(ih * s, tmp, w)
	                //             break;
	                //     }
	    
	                //     (w ^= h, h ^= w, w ^= h);
	                // }
	    
	                cvs.width = w;
	                cvs.height = h;
	    
	                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
	                this._renderImageToCanvas( cvs, img, -x, -y, iw * s, ih * s );
	    
	                this._blob = null;    // 没用了，可以删掉了。
	                this.modified = true;
	                this.owner.trigger( 'complete', 'crop' );
	            },
	    
	            getAsBlob: function( type ) {
	                var blob = this._blob,
	                    opts = this.options,
	                    canvas;
	    
	                type = type || this.type;
	    
	                // blob需要重新生成。
	                if ( this.modified || this.type !== type ) {
	                    canvas = this._canvas;
	    
	                    if ( type === 'image/jpeg' ) {
	    
	                        blob = Util.canvasToDataUrl( canvas, type, opts.quality );
	    
	                        if ( opts.preserveHeaders && this._metas &&
	                                this._metas.imageHead ) {
	    
	                            blob = Util.dataURL2ArrayBuffer( blob );
	                            blob = Util.updateImageHead( blob,
	                                    this._metas.imageHead );
	                            blob = Util.arrayBufferToBlob( blob, type );
	                            return blob;
	                        }
	                    } else {
	                        blob = Util.canvasToDataUrl( canvas, type );
	                    }
	    
	                    blob = Util.dataURL2Blob( blob );
	                }
	    
	                return blob;
	            },
	    
	            getAsDataUrl: function( type ) {
	                var opts = this.options;
	    
	                type = type || this.type;
	    
	                if ( type === 'image/jpeg' ) {
	                    return Util.canvasToDataUrl( this._canvas, type, opts.quality );
	                } else {
	                    return this._canvas.toDataURL( type );
	                }
	            },
	    
	            getOrientation: function() {
	                return this._metas && this._metas.exif &&
	                        this._metas.exif.get('Orientation') || 1;
	            },
	    
	            info: function( val ) {
	    
	                // setter
	                if ( val ) {
	                    this._info = val;
	                    return this;
	                }
	    
	                // getter
	                return this._info;
	            },
	    
	            meta: function( val ) {
	    
	                // setter
	                if ( val ) {
	                    this._meta = val;
	                    return this;
	                }
	    
	                // getter
	                return this._meta;
	            },
	    
	            destroy: function() {
	                var canvas = this._canvas;
	                this._img.onload = null;
	    
	                if ( canvas ) {
	                    canvas.getContext('2d')
	                            .clearRect( 0, 0, canvas.width, canvas.height );
	                    canvas.width = canvas.height = 0;
	                    this._canvas = null;
	                }
	    
	                // 释放内存。非常重要，否则释放不了image的内存。
	                this._img.src = BLANK;
	                this._img = this._blob = null;
	            },
	    
	            _resize: function( img, cvs, width, height ) {
	                var opts = this.options,
	                    naturalWidth = img.width,
	                    naturalHeight = img.height,
	                    orientation = this.getOrientation(),
	                    scale, w, h, x, y;
	    
	                // values that require 90 degree rotation
	                if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
	    
	                    // 交换width, height的值。
	                    width ^= height;
	                    height ^= width;
	                    width ^= height;
	                }
	    
	                scale = Math[ opts.crop ? 'max' : 'min' ]( width / naturalWidth,
	                        height / naturalHeight );
	    
	                // 不允许放大。
	                opts.allowMagnify || (scale = Math.min( 1, scale ));
	    
	                w = naturalWidth * scale;
	                h = naturalHeight * scale;
	    
	                if ( opts.crop ) {
	                    cvs.width = width;
	                    cvs.height = height;
	                } else {
	                    cvs.width = w;
	                    cvs.height = h;
	                }
	    
	                x = (cvs.width - w) / 2;
	                y = (cvs.height - h) / 2;
	    
	                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
	
	                if(opts.isTopAlignment && y < 0){
	                    y = 0;
	                }
	    
	                this._renderImageToCanvas( cvs, img, x, y, w, h );
	            },
	    
	            _rotate2Orientaion: function( canvas, orientation ) {
	                var width = canvas.width,
	                    height = canvas.height,
	                    ctx = canvas.getContext('2d');
	    
	                switch ( orientation ) {
	                    case 5:
	                    case 6:
	                    case 7:
	                    case 8:
	                        canvas.width = height;
	                        canvas.height = width;
	                        break;
	                }
	    
	                switch ( orientation ) {
	                    case 2:    // horizontal flip
	                        ctx.translate( width, 0 );
	                        ctx.scale( -1, 1 );
	                        break;
	    
	                    case 3:    // 180 rotate left
	                        ctx.translate( width, height );
	                        ctx.rotate( Math.PI );
	                        break;
	    
	                    case 4:    // vertical flip
	                        ctx.translate( 0, height );
	                        ctx.scale( 1, -1 );
	                        break;
	    
	                    case 5:    // vertical flip + 90 rotate right
	                        ctx.rotate( 0.5 * Math.PI );
	                        ctx.scale( 1, -1 );
	                        break;
	    
	                    case 6:    // 90 rotate right
	                        ctx.rotate( 0.5 * Math.PI );
	                        ctx.translate( 0, -height );
	                        break;
	    
	                    case 7:    // horizontal flip + 90 rotate right
	                        ctx.rotate( 0.5 * Math.PI );
	                        ctx.translate( width, -height );
	                        ctx.scale( -1, 1 );
	                        break;
	    
	                    case 8:    // 90 rotate left
	                        ctx.rotate( -0.5 * Math.PI );
	                        ctx.translate( -width, 0 );
	                        break;
	                }
	            },
	    
	            // https://github.com/stomita/ios-imagefile-megapixel/
	            // blob/master/src/megapix-image.js
	            _renderImageToCanvas: (function() {
	    
	                // 如果不是ios, 不需要这么复杂！
	                if ( !Base.os.ios ) {
	                    return function( canvas ) {
	                        var args = Base.slice( arguments, 1 ),
	                            ctx = canvas.getContext('2d');
	    
	                        ctx.drawImage.apply( ctx, args );
	                    };
	                }
	    
	                /**
	                 * Detecting vertical squash in loaded image.
	                 * Fixes a bug which squash image vertically while drawing into
	                 * canvas for some images.
	                 */
	                function detectVerticalSquash( img, iw, ih ) {
	                    var canvas = document.createElement('canvas'),
	                        ctx = canvas.getContext('2d'),
	                        sy = 0,
	                        ey = ih,
	                        py = ih,
	                        data, alpha, ratio;
	    
	    
	                    canvas.width = 1;
	                    canvas.height = ih;
	                    ctx.drawImage( img, 0, 0 );
	                    data = ctx.getImageData( 0, 0, 1, ih ).data;
	    
	                    // search image edge pixel position in case
	                    // it is squashed vertically.
	                    while ( py > sy ) {
	                        alpha = data[ (py - 1) * 4 + 3 ];
	    
	                        if ( alpha === 0 ) {
	                            ey = py;
	                        } else {
	                            sy = py;
	                        }
	    
	                        py = (ey + sy) >> 1;
	                    }
	    
	                    ratio = (py / ih);
	                    return (ratio === 0) ? 1 : ratio;
	                }
	    
	                // fix ie7 bug
	                // http://stackoverflow.com/questions/11929099/
	                // html5-canvas-drawimage-ratio-bug-ios
	                if ( Base.os.ios >= 7 ) {
	                    return function( canvas, img, x, y, w, h ) {
	                        var iw = img.naturalWidth,
	                            ih = img.naturalHeight,
	                            vertSquashRatio = detectVerticalSquash( img, iw, ih );
	    
	                        return canvas.getContext('2d').drawImage( img, 0, 0,
	                                iw * vertSquashRatio, ih * vertSquashRatio,
	                                x, y, w, h );
	                    };
	                }
	    
	                /**
	                 * Detect subsampling in loaded image.
	                 * In iOS, larger images than 2M pixels may be
	                 * subsampled in rendering.
	                 */
	                function detectSubsampling( img ) {
	                    var iw = img.naturalWidth,
	                        ih = img.naturalHeight,
	                        canvas, ctx;
	    
	                    // subsampling may happen overmegapixel image
	                    if ( iw * ih > 1024 * 1024 ) {
	                        canvas = document.createElement('canvas');
	                        canvas.width = canvas.height = 1;
	                        ctx = canvas.getContext('2d');
	                        ctx.drawImage( img, -iw + 1, 0 );
	    
	                        // subsampled image becomes half smaller in rendering size.
	                        // check alpha channel value to confirm image is covering
	                        // edge pixel or not. if alpha value is 0
	                        // image is not covering, hence subsampled.
	                        return ctx.getImageData( 0, 0, 1, 1 ).data[ 3 ] === 0;
	                    } else {
	                        return false;
	                    }
	                }
	    
	    
	                return function( canvas, img, x, y, width, height ) {
	                    var iw = img.naturalWidth,
	                        ih = img.naturalHeight,
	                        ctx = canvas.getContext('2d'),
	                        subsampled = detectSubsampling( img ),
	                        doSquash = this.type === 'image/jpeg',
	                        d = 1024,
	                        sy = 0,
	                        dy = 0,
	                        tmpCanvas, tmpCtx, vertSquashRatio, dw, dh, sx, dx;
	    
	                    if ( subsampled ) {
	                        iw /= 2;
	                        ih /= 2;
	                    }
	    
	                    ctx.save();
	                    tmpCanvas = document.createElement('canvas');
	                    tmpCanvas.width = tmpCanvas.height = d;
	    
	                    tmpCtx = tmpCanvas.getContext('2d');
	                    vertSquashRatio = doSquash ?
	                            detectVerticalSquash( img, iw, ih ) : 1;
	    
	                    dw = Math.ceil( d * width / iw );
	                    dh = Math.ceil( d * height / ih / vertSquashRatio );
	    
	                    while ( sy < ih ) {
	                        sx = 0;
	                        dx = 0;
	                        while ( sx < iw ) {
	                            tmpCtx.clearRect( 0, 0, d, d );
	                            tmpCtx.drawImage( img, -sx, -sy );
	                            ctx.drawImage( tmpCanvas, 0, 0, d, d,
	                                    x + dx, y + dy, dw, dh );
	                            sx += d;
	                            dx += dw;
	                        }
	                        sy += d;
	                        dy += dh;
	                    }
	                    ctx.restore();
	                    tmpCanvas = tmpCtx = null;
	                };
	            })()
	        });
	    });
	    /**
	     * @fileOverview Transport
	     * @todo 支持chunked传输，优势：
	     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
	     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
	     */
	    define('runtime/html5/transport',[
	        'base',
	        'runtime/html5/runtime'
	    ], function( Base, Html5Runtime ) {
	    
	        var noop = Base.noop,
	            $ = Base.$;
	    
	        return Html5Runtime.register( 'Transport', {
	            init: function() {
	                this._status = 0;
	                this._response = null;
	            },
	    
	            send: function() {
	                var owner = this.owner,
	                    opts = this.options,
	                    xhr = this._initAjax(),
	                    blob = owner._blob,
	                    server = opts.server,
	                    formData, binary, fr;
	    
	                if ( opts.sendAsBinary ) {
	                    server += (/\?/.test( server ) ? '&' : '?') +
	                            $.param( owner._formData );
	    
	                    binary = blob.getSource();
	                } else {
	                    formData = new FormData();
	                    $.each( owner._formData, function( k, v ) {
	                        formData.append( k, v );
	                    });
	    
	                    formData.append( opts.fileVal, blob.getSource(),
	                            opts.filename || owner._formData.name || '' );
	                }
	    
	                if ( opts.withCredentials && 'withCredentials' in xhr ) {
	                    xhr.open( opts.method, server, true );
	                    xhr.withCredentials = true;
	                } else {
	                    xhr.open( opts.method, server );
	                }
	    
	                this._setRequestHeader( xhr, opts.headers );
	    
	                if ( binary ) {
	                    // 强制设置成 content-type 为文件流。
	                    xhr.overrideMimeType &&
	                            xhr.overrideMimeType('application/octet-stream');
	    
	                    // android直接发送blob会导致服务端接收到的是空文件。
	                    // bug详情。
	                    // https://code.google.com/p/android/issues/detail?id=39882
	                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
	                    if ( Base.os.android ) {
	                        fr = new FileReader();
	    
	                        fr.onload = function() {
	                            xhr.send( this.result );
	                            fr = fr.onload = null;
	                        };
	    
	                        fr.readAsArrayBuffer( binary );
	                    } else {
	                        xhr.send( binary );
	                    }
	                } else {
	                    xhr.send( formData );
	                }
	            },
	    
	            getResponse: function() {
	                return this._response;
	            },
	    
	            getResponseAsJson: function() {
	                return this._parseJson( this._response );
	            },
	    
	            getStatus: function() {
	                return this._status;
	            },
	    
	            abort: function() {
	                var xhr = this._xhr;
	    
	                if ( xhr ) {
	                    xhr.upload.onprogress = noop;
	                    xhr.onreadystatechange = noop;
	                    xhr.abort();
	    
	                    this._xhr = xhr = null;
	                }
	            },
	    
	            destroy: function() {
	                this.abort();
	            },
	    
	            _initAjax: function() {
	                var me = this,
	                    xhr = new XMLHttpRequest(),
	                    opts = this.options;
	    
	                if ( opts.withCredentials && !('withCredentials' in xhr) &&
	                        typeof XDomainRequest !== 'undefined' ) {
	                    xhr = new XDomainRequest();
	                }
	    
	                xhr.upload.onprogress = function( e ) {
	                    var percentage = 0;
	    
	                    if ( e.lengthComputable ) {
	                        percentage = e.loaded / e.total;
	                    }
	    
	                    return me.trigger( 'progress', percentage );
	                };
	    
	                xhr.onreadystatechange = function() {
	    
	                    if ( xhr.readyState !== 4 ) {
	                        return;
	                    }
	    
	                    xhr.upload.onprogress = noop;
	                    xhr.onreadystatechange = noop;
	                    me._xhr = null;
	                    me._status = xhr.status;
	    
	                    if ( xhr.status >= 200 && xhr.status < 300 ) {
	                        me._response = xhr.responseText;
	                        return me.trigger('load');
	                    } else if ( xhr.status >= 500 && xhr.status < 600 ) {
	                        me._response = xhr.responseText;
	                        return me.trigger( 'error', 'server' );
	                    }
	    
	    
	                    return me.trigger( 'error', me._status ? 'http' : 'abort' );
	                };
	    
	                me._xhr = xhr;
	                return xhr;
	            },
	    
	            _setRequestHeader: function( xhr, headers ) {
	                $.each( headers, function( key, val ) {
	                    xhr.setRequestHeader( key, val );
	                });
	            },
	    
	            _parseJson: function( str ) {
	                var json;
	    
	                try {
	                    json = JSON.parse( str );
	                } catch ( ex ) {
	                    json = {};
	                }
	    
	                return json;
	            }
	        });
	    });
	    /**
	     * @fileOverview 只有html5实现的文件版本。
	     */
	    define('preset/html5only',[
	        'base',
	    
	        // widgets
	        'widgets/filednd',
	        'widgets/filepaste',
	        'widgets/filepicker',
	        'widgets/image',
	        'widgets/queue',
	        'widgets/runtime',
	        'widgets/upload',
	        'widgets/validator',
	    
	        // runtimes
	        // html5
	        'runtime/html5/blob',
	        'runtime/html5/dnd',
	        'runtime/html5/filepaste',
	        'runtime/html5/filepicker',
	        'runtime/html5/imagemeta/exif',
	        'runtime/html5/image',
	        'runtime/html5/transport'
	    ], function( Base ) {
	        return Base;
	    });
	    define('webuploader',[
	        'preset/html5only'
	    ], function( preset ) {
	        return preset;
	    });
	    return require('webuploader');
	});


/***/ },
/* 73 */
/*!*************************************************************************************************************************!*\
  !*** external {"var":"jQuery","this":"jquery","root":"jQuery","amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \*************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 74 */
/*!******************************!*\
  !*** ../css/webuploader.css ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/.0.21.0@css-loader!./webuploader.css */ 75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/.0.13.1@style-loader/addStyles.js */ 48)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.21.0@css-loader/index.js!./webuploader.css", function() {
				var newContent = require("!!./../node_modules/.0.21.0@css-loader/index.js!./webuploader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/*!******************************************************!*\
  !*** ../~/.0.21.0@css-loader!../css/webuploader.css ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/.0.21.0@css-loader/lib/css-base.js */ 47)();
	// imports
	
	
	// module
	exports.push([module.id, ".webuploader-container {\n\tposition: relative;\n}\n.webuploader-element-invisible {\n\tposition: absolute !important;\n\tclip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n    clip: rect(1px,1px,1px,1px);\n}\n.webuploader-pick {\n\tposition: relative;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tbackground: #00b7ee;\n\tpadding: 10px 15px;\n\tcolor: #fff;\n\ttext-align: center;\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.webuploader-pick-hover {\n\tbackground: #00a2d4;\n}\n\n.webuploader-pick-disable {\n\topacity: 0.6;\n\tpointer-events:none;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 76 */
/*!************************************************!*\
  !*** ../js/plugins/property/DateTimePicker.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! js/3rd/datetimepicker/moment */ 77)
	], __WEBPACK_LOCAL_MODULE_0__ = (function(moment) {
	    return moment;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __WEBPACK_LOCAL_MODULE_0__,
	    __webpack_require__(/*! js/3rd/datetimepicker/datetimepicker */ 79),
	    __webpack_require__(/*! js/3rd/datetimepicker/zh-cn */ 80),
	    __webpack_require__(/*! js/3rd/datetimepicker/datetimepicker.min.css */ 81)
	], __WEBPACK_LOCAL_MODULE_1__ = (function(moment, datetimepicker) {
	    return datetimepicker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ../../App */ 51),
	    __webpack_require__(/*! ../EventDispatch */ 70),
	    __WEBPACK_LOCAL_MODULE_0__,
	    __WEBPACK_LOCAL_MODULE_1__
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, Dispatch, moment) {
	
	    Dispatch.reg(new Dispatch.ActionHandle({
	        name: 'DateTimePicker',
	        initDateTimePicker: function(startDate, endDate) {
	            if (startDate.data('DateTimePicker') || endDate.data('DateTimePicker')) {
	                return;
	            }
	            startDate.datetimepicker({
	                format: 'YYYY-MM-DD H:mm:ss',
	                showClose: true,
	                // defaultDate: moment().format('YYYY-MM-DD H:59:59'),
	                // sideBySide: true,
	                // debug: true,
	                locale: moment.locale('zh-cn')
	            });
	
	            startDate.data('rel', endDate);
	
	            endDate.datetimepicker({
	                format: 'YYYY-MM-DD H:mm:ss',
	                showClose: true,
	                // defaultDate: moment().format('YYYY-MM-DD H:mm:ss'),
	                // sideBySide: true,
	                // debug: true,
	                locale: moment.locale('zh-cn')
	            });
	
	            endDate.data('rel', startDate);
	
	            startDate.on("dp.change", function(e) {
	                var rel = $(this).data('rel');
	                var relDateTimePicker = rel.data('DateTimePicker')
	                if (relDateTimePicker) {
	                    relDateTimePicker.minDate(e.date);
	                }
	
	            });
	            endDate.on("dp.change", function(e) {
	                var rel = $(this).data('rel');
	                var relDateTimePicker = rel.data('DateTimePicker')
	                if (relDateTimePicker) {
	                    relDateTimePicker.maxDate(e.date);
	                }
	            });
	        },
	        ready: function() {
	            this.panel = App.dom.property;
	            this.initEvent();
	        },
	        initEvent: function() {
	            var panel = this.panel;
	            var me = this;
	            panel.on('focus', 'input[data-role=startDateTime],input[data-role=endDateTime]', function(event) {
	                var input = $(this);
	                var hash = input.attr('data-hash');
	                var startDate = panel.find('input[data-hash=' + hash + '][data-role=startDateTime]:first');
	                var endDate = panel.find('input[data-hash=' + hash + '][data-role=endDateTime]:first');
	                me.initDateTimePicker(startDate, endDate);
	            });
	        },
	        init: function() {
	            var me = this;
	            App.once('ready', this.ready.bind(this));
	            /*
	            App.on('render.Property', function(event) {
	                var property = App.dom.property;
	                var list = property.find('[data-group-name] input[data-role=startDateTime]');
	                if (list.length > 0) {
	                    list.each(function(i, startDate) {
	                        startDate = $(startDate);
	                        var endDate = startDate.closest('[data-group-name]').find('input[data-role=endDateTime]:first');
	                        me.initDateTimePicker(startDate, endDate);
	                    });
	                } else {
	                    var startDate = property.find('input[data-role=startDateTime]:first');
	                    var endDate = property.find('input[data-role=endDateTime]:first');
	                    me.initDateTimePicker(startDate, endDate);
	                }
	            });
	            */
	        }
	    }));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 77 */
/*!******************************************!*\
  !*** ../js/3rd/datetimepicker/moment.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.13.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';
	
	    var hookCallback;
	
	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;
	
	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	
	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }
	
	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    var updateInProgress = false;
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	
	    function absFloor (number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	    function isObject(input) {
	        return Object.prototype.toString.call(input) === '[object Object]';
	    }
	
	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    var keys;
	
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	
	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                //require('./locale/' + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale (name, config) {
	        if (config !== null) {
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale');
	                config = mergeConfigs(locales[name]._config, config);
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    config = mergeConfigs(locales[config.parentLocale]._config, config);
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet');
	                }
	            }
	            locales[name] = new Locale(config);
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale;
	            if (locales[name] != null) {
	                config = mergeConfigs(locales[name]._config, config);
	            }
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function locale_locales__listLocales() {
	        return keys(locales);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }
	
	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	
	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }
	
	    // MOMENTS
	
	    function getSet (units, value) {
	        var unit;
	        if (typeof units === 'object') {
	            for (unit in units) {
	                this.set(unit, units[unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	    var formatFunctions = {};
	
	    var formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	
	
	    var regexes = {};
	
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	
	    var indexOf;
	
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PARSING
	
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	
	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth (mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	
	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PARSING
	
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    // HOOKS
	
	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', true);
	
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (getParsingFlags(config).bigHour === true &&
	                config._a[HOUR] <= 12 &&
	                config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	
	            scoreToBeat,
	            i,
	            currentScore;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	
	        configFromArray(config);
	    }
	
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || locale_locales__getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else {
	            configFromInput(config);
	        }
	
	        if (!valid__isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	         function () {
	             var other = local__createLocal.apply(null, arguments);
	             if (this.isValid() && other.isValid()) {
	                 return other < this ? this : other;
	             } else {
	                 return valid__createInvalid();
	             }
	         }
	     );
	
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	
	        this._data = {};
	
	        this._locale = locale_locales__getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	
	    // FORMATTING
	
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }
	
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {};
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	
	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    }
	
	    create__createDuration.fn = Duration.prototype;
	
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};
	
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }
	
	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	
	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            diff = this.diff(sod, 'days', true),
	            format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	
	        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
	
	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	
	    function clone () {
	        return new Moment(this);
	    }
	
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	
	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }
	
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }
	
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }
	
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }
	
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }
	
	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }
	
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData () {
	        return this._locale;
	    }
	
	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	        case 'date':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	        }
	
	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }
	
	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }
	
	        return this;
	    }
	
	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	
	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }
	
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	
	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	
	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }
	
	    function toDate () {
	        return this._offset ? new Date(this.valueOf()) : this._d;
	    }
	
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }
	
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PARSING
	
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PARSING
	
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PARSING
	
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PARSING
	
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    // LOCALES
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }
	
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }
	
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }
	
	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	
	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	    }
	
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }
	
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }
	
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }
	
	
	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	
	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PARSING
	
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    function kFormat() {
	        return this.hours() || 24;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PARSING
	
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	
	    // MOMENTS
	
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PARSING
	
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PARSING
	
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PARSING
	
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var momentPrototype__proto = Moment.prototype;
	
	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = getSet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = getSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;
	
	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	
	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	
	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	
	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	
	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	
	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;
	
	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	
	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	
	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	
	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	
	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;
	
	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	
	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
	
	    var momentPrototype = momentPrototype__proto;
	
	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }
	
	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }
	
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	
	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate () {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    function preParsePostFormat (string) {
	        return string;
	    }
	
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	
	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var prototype__proto = Locale.prototype;
	
	    prototype__proto._calendar       = defaultCalendar;
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto._longDateFormat = defaultLongDateFormat;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto._invalidDate    = defaultInvalidDate;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto._ordinal        = defaultOrdinal;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto._ordinalParse   = defaultOrdinalParse;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto._relativeTime   = defaultRelativeTime;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;
	
	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto._months           = defaultLocaleMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto._monthsRegex      = defaultMonthsRegex;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;
	
	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto._week = defaultLocaleWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	
	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto._weekdays      = defaultLocaleWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;
	
	    prototype__proto._weekdaysRegex      = defaultWeekdaysRegex;
	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto._weekdaysMinRegex   = defaultWeekdaysMinRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;
	
	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	    prototype__proto.meridiem = localeMeridiem;
	
	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }
	
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        }
	
	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;
	
	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	
	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	
	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	
	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	
	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	
	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	
	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	
	    var mathAbs = Math.abs;
	
	    function duration_abs__abs () {
	        var data           = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	
	        return this;
	    }
	
	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	
	        return this;
	    }
	
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	
	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');
	
	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	
	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }
	
	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var iso_string__abs = Math.abs;
	
	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }
	
	    var duration_prototype__proto = Duration.prototype;
	
	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;
	
	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	
	    // Side effect imports
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    // Side effect imports
	
	
	    utils_hooks__hooks.version = '2.13.0';
	
	    setHookCallback(local__createLocal);
	
	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.prototype             = momentPrototype;
	
	    var _moment = utils_hooks__hooks;
	
	    return _moment;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../../npm/global/~/webpack/buildin/module.js */ 78)(module)))

/***/ },
/* 78 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 79 */
/*!**************************************************!*\
  !*** ../js/3rd/datetimepicker/datetimepicker.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! version : 4.17.37
	 =========================================================
	 bootstrap-datetimejs
	 https://github.com/Eonasdan/bootstrap-datetimepicker
	 Copyright (c) 2015 Jonathan Peterson
	 =========================================================
	 */
	/*
	 The MIT License (MIT)
	
	 Copyright (c) 2015 Jonathan Peterson
	
	 Permission is hereby granted, free of charge, to any person obtaining a copy
	 of this software and associated documentation files (the "Software"), to deal
	 in the Software without restriction, including without limitation the rights
	 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 copies of the Software, and to permit persons to whom the Software is
	 furnished to do so, subject to the following conditions:
	
	 The above copyright notice and this permission notice shall be included in
	 all copies or substantial portions of the Software.
	
	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 THE SOFTWARE.
	 */
	/*global define:false */
	/*global exports:false */
	/*global require:false */
	/*global jQuery:false */
	/*global moment:false */
	(function (factory) {
	    'use strict';
	    if (true) {
	        // AMD is used - Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 73), __webpack_require__(/*! ./moment */ 77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        factory(require('jquery'), require('moment'));
	    } else {
	        // Neither AMD nor CommonJS used. Use global variables.
	        if (typeof jQuery === 'undefined') {
	            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
	        }
	        if (typeof moment === 'undefined') {
	            throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';
	        }
	        factory(jQuery, moment);
	    }
	}(function ($, moment) {
	    'use strict';
	    if (!moment) {
	        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
	    }
	
	    var dateTimePicker = function (element, options) {
	        var picker = {},
	            date,
	            viewDate,
	            unset = true,
	            input,
	            component = false,
	            widget = false,
	            use24Hours,
	            minViewModeNumber = 0,
	            actualFormat,
	            parseFormats,
	            currentViewMode,
	            datePickerModes = [
	                {
	                    clsName: 'days',
	                    navFnc: 'M',
	                    navStep: 1
	                },
	                {
	                    clsName: 'months',
	                    navFnc: 'y',
	                    navStep: 1
	                },
	                {
	                    clsName: 'years',
	                    navFnc: 'y',
	                    navStep: 10
	                },
	                {
	                    clsName: 'decades',
	                    navFnc: 'y',
	                    navStep: 100
	                }
	            ],
	            viewModes = ['days', 'months', 'years', 'decades'],
	            verticalModes = ['top', 'bottom', 'auto'],
	            horizontalModes = ['left', 'right', 'auto'],
	            toolbarPlacements = ['default', 'top', 'bottom'],
	            keyMap = {
	                'up': 38,
	                38: 'up',
	                'down': 40,
	                40: 'down',
	                'left': 37,
	                37: 'left',
	                'right': 39,
	                39: 'right',
	                'tab': 9,
	                9: 'tab',
	                'escape': 27,
	                27: 'escape',
	                'enter': 13,
	                13: 'enter',
	                'pageUp': 33,
	                33: 'pageUp',
	                'pageDown': 34,
	                34: 'pageDown',
	                'shift': 16,
	                16: 'shift',
	                'control': 17,
	                17: 'control',
	                'space': 32,
	                32: 'space',
	                't': 84,
	                84: 't',
	                'delete': 46,
	                46: 'delete'
	            },
	            keyState = {},
	
	            /********************************************************************************
	             *
	             * Private functions
	             *
	             ********************************************************************************/
	            getMoment = function (d) {
	                var tzEnabled = false,
	                    returnMoment,
	                    currentZoneOffset,
	                    incomingZoneOffset,
	                    timeZoneIndicator,
	                    dateWithTimeZoneInfo;
	
	                if (moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '') {
	                    tzEnabled = true;
	                }
	                if (d === undefined || d === null) {
	                    if (tzEnabled) {
	                        returnMoment = moment().tz(options.timeZone).startOf('d');
	                    } else {
	                        returnMoment = moment().startOf('d');
	                    }
	                } else {
	                    if (tzEnabled) {
	                        currentZoneOffset = moment().tz(options.timeZone).utcOffset();
	                        incomingZoneOffset = moment(d, parseFormats, options.useStrict).utcOffset();
	                        if (incomingZoneOffset !== currentZoneOffset) {
	                            timeZoneIndicator = moment().tz(options.timeZone).format('Z');
	                            dateWithTimeZoneInfo = moment(d, parseFormats, options.useStrict).format('YYYY-MM-DD[T]HH:mm:ss') + timeZoneIndicator;
	                            returnMoment = moment(dateWithTimeZoneInfo, parseFormats, options.useStrict).tz(options.timeZone);
	                        } else {
	                            returnMoment = moment(d, parseFormats, options.useStrict).tz(options.timeZone);
	                        }
	                    } else {
	                        returnMoment = moment(d, parseFormats, options.useStrict);
	                    }
	                }
	                return returnMoment;
	            },
	            isEnabled = function (granularity) {
	                if (typeof granularity !== 'string' || granularity.length > 1) {
	                    throw new TypeError('isEnabled expects a single character string parameter');
	                }
	                switch (granularity) {
	                    case 'y':
	                        return actualFormat.indexOf('Y') !== -1;
	                    case 'M':
	                        return actualFormat.indexOf('M') !== -1;
	                    case 'd':
	                        return actualFormat.toLowerCase().indexOf('d') !== -1;
	                    case 'h':
	                    case 'H':
	                        return actualFormat.toLowerCase().indexOf('h') !== -1;
	                    case 'm':
	                        return actualFormat.indexOf('m') !== -1;
	                    case 's':
	                        return actualFormat.indexOf('s') !== -1;
	                    default:
	                        return false;
	                }
	            },
	            hasTime = function () {
	                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
	            },
	
	            hasDate = function () {
	                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
	            },
	
	            getDatePickerTemplate = function () {
	                var headTemplate = $('<thead>')
	                        .append($('<tr>')
	                            .append($('<th>').addClass('prev').attr('data-action', 'previous')
	                                .append($('<span>').addClass(options.icons.previous))
	                                )
	                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
	                            .append($('<th>').addClass('next').attr('data-action', 'next')
	                                .append($('<span>').addClass(options.icons.next))
	                                )
	                            ),
	                    contTemplate = $('<tbody>')
	                        .append($('<tr>')
	                            .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
	                            );
	
	                return [
	                    $('<div>').addClass('datepicker-days')
	                        .append($('<table>').addClass('table-condensed')
	                            .append(headTemplate)
	                            .append($('<tbody>'))
	                            ),
	                    $('<div>').addClass('datepicker-months')
	                        .append($('<table>').addClass('table-condensed')
	                            .append(headTemplate.clone())
	                            .append(contTemplate.clone())
	                            ),
	                    $('<div>').addClass('datepicker-years')
	                        .append($('<table>').addClass('table-condensed')
	                            .append(headTemplate.clone())
	                            .append(contTemplate.clone())
	                            ),
	                    $('<div>').addClass('datepicker-decades')
	                        .append($('<table>').addClass('table-condensed')
	                            .append(headTemplate.clone())
	                            .append(contTemplate.clone())
	                            )
	                ];
	            },
	
	            getTimePickerMainTemplate = function () {
	                var topRow = $('<tr>'),
	                    middleRow = $('<tr>'),
	                    bottomRow = $('<tr>');
	
	                if (isEnabled('h')) {
	                    topRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour}).addClass('btn').attr('data-action', 'incrementHours')
	                            .append($('<span>').addClass(options.icons.up))));
	                    middleRow.append($('<td>')
	                        .append($('<span>').addClass('timepicker-hour').attr({'data-time-component':'hours', 'title': options.tooltips.pickHour}).attr('data-action', 'showHours')));
	                    bottomRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour}).addClass('btn').attr('data-action', 'decrementHours')
	                            .append($('<span>').addClass(options.icons.down))));
	                }
	                if (isEnabled('m')) {
	                    if (isEnabled('h')) {
	                        topRow.append($('<td>').addClass('separator'));
	                        middleRow.append($('<td>').addClass('separator').html(':'));
	                        bottomRow.append($('<td>').addClass('separator'));
	                    }
	                    topRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute}).addClass('btn').attr('data-action', 'incrementMinutes')
	                            .append($('<span>').addClass(options.icons.up))));
	                    middleRow.append($('<td>')
	                        .append($('<span>').addClass('timepicker-minute').attr({'data-time-component': 'minutes', 'title': options.tooltips.pickMinute}).attr('data-action', 'showMinutes')));
	                    bottomRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute}).addClass('btn').attr('data-action', 'decrementMinutes')
	                            .append($('<span>').addClass(options.icons.down))));
	                }
	                if (isEnabled('s')) {
	                    if (isEnabled('m')) {
	                        topRow.append($('<td>').addClass('separator'));
	                        middleRow.append($('<td>').addClass('separator').html(':'));
	                        bottomRow.append($('<td>').addClass('separator'));
	                    }
	                    topRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond}).addClass('btn').attr('data-action', 'incrementSeconds')
	                            .append($('<span>').addClass(options.icons.up))));
	                    middleRow.append($('<td>')
	                        .append($('<span>').addClass('timepicker-second').attr({'data-time-component': 'seconds', 'title': options.tooltips.pickSecond}).attr('data-action', 'showSeconds')));
	                    bottomRow.append($('<td>')
	                        .append($('<a>').attr({href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond}).addClass('btn').attr('data-action', 'decrementSeconds')
	                            .append($('<span>').addClass(options.icons.down))));
	                }
	
	                if (!use24Hours) {
	                    topRow.append($('<td>').addClass('separator'));
	                    middleRow.append($('<td>')
	                        .append($('<button>').addClass('btn btn-primary').attr({'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod})));
	                    bottomRow.append($('<td>').addClass('separator'));
	                }
	
	                return $('<div>').addClass('timepicker-picker')
	                    .append($('<table>').addClass('table-condensed')
	                        .append([topRow, middleRow, bottomRow]));
	            },
	
	            getTimePickerTemplate = function () {
	                var hoursView = $('<div>').addClass('timepicker-hours')
	                        .append($('<table>').addClass('table-condensed')),
	                    minutesView = $('<div>').addClass('timepicker-minutes')
	                        .append($('<table>').addClass('table-condensed')),
	                    secondsView = $('<div>').addClass('timepicker-seconds')
	                        .append($('<table>').addClass('table-condensed')),
	                    ret = [getTimePickerMainTemplate()];
	
	                if (isEnabled('h')) {
	                    ret.push(hoursView);
	                }
	                if (isEnabled('m')) {
	                    ret.push(minutesView);
	                }
	                if (isEnabled('s')) {
	                    ret.push(secondsView);
	                }
	
	                return ret;
	            },
	
	            getToolbar = function () {
	                var row = [];
	                if (options.showTodayButton) {
	                    row.push($('<td>').append($('<a>').attr({'data-action':'today', 'title': options.tooltips.today}).append($('<span>').addClass(options.icons.today))));
	                }
	                if (!options.sideBySide && hasDate() && hasTime()) {
	                    row.push($('<td>').append($('<a>').attr({'data-action':'togglePicker', 'title': options.tooltips.selectTime}).append($('<span>').addClass(options.icons.time))));
	                }
	                if (options.showClear) {
	                    row.push($('<td>').append($('<a>').attr({'data-action':'clear', 'title': options.tooltips.clear}).append($('<span>').addClass(options.icons.clear))));
	                }
	                if (options.showClose) {
	                    row.push($('<td>').append($('<a>').attr({'data-action':'close', 'title': options.tooltips.close}).append($('<span>').addClass(options.icons.close))));
	                }
	                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
	            },
	
	            getTemplate = function () {
	                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
	                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
	                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
	                    content = $('<ul>').addClass('list-unstyled'),
	                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());
	
	                if (options.inline) {
	                    template.removeClass('dropdown-menu');
	                }
	
	                if (use24Hours) {
	                    template.addClass('usetwentyfour');
	                }
	                if (isEnabled('s') && !use24Hours) {
	                    template.addClass('wider');
	                }
	
	                if (options.sideBySide && hasDate() && hasTime()) {
	                    template.addClass('timepicker-sbs');
	                    if (options.toolbarPlacement === 'top') {
	                        template.append(toolbar);
	                    }
	                    template.append(
	                        $('<div>').addClass('row')
	                            .append(dateView.addClass('col-md-6'))
	                            .append(timeView.addClass('col-md-6'))
	                    );
	                    if (options.toolbarPlacement === 'bottom') {
	                        template.append(toolbar);
	                    }
	                    return template;
	                }
	
	                if (options.toolbarPlacement === 'top') {
	                    content.append(toolbar);
	                }
	                if (hasDate()) {
	                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
	                }
	                if (options.toolbarPlacement === 'default') {
	                    content.append(toolbar);
	                }
	                if (hasTime()) {
	                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
	                }
	                if (options.toolbarPlacement === 'bottom') {
	                    content.append(toolbar);
	                }
	                return template.append(content);
	            },
	
	            dataToOptions = function () {
	                var eData,
	                    dataOptions = {};
	
	                if (element.is('input') || options.inline) {
	                    eData = element.data();
	                } else {
	                    eData = element.find('input').data();
	                }
	
	                if (eData.dateOptions && eData.dateOptions instanceof Object) {
	                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
	                }
	
	                $.each(options, function (key) {
	                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
	                    if (eData[attributeName] !== undefined) {
	                        dataOptions[key] = eData[attributeName];
	                    }
	                });
	                return dataOptions;
	            },
	
	            place = function () {
	                var position = (component || element).position(),
	                    offset = (component || element).offset(),
	                    vertical = options.widgetPositioning.vertical,
	                    horizontal = options.widgetPositioning.horizontal,
	                    parent;
	
	                if (options.widgetParent) {
	                    parent = options.widgetParent.append(widget);
	                } else if (element.is('input')) {
	                    parent = element.after(widget).parent();
	                } else if (options.inline) {
	                    parent = element.append(widget);
	                    return;
	                } else {
	                    parent = element;
	                    element.children().first().after(widget);
	                }
	
	                // Top and bottom logic
	                if (vertical === 'auto') {
	                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
	                        widget.height() + element.outerHeight() < offset.top) {
	                        vertical = 'top';
	                    } else {
	                        vertical = 'bottom';
	                    }
	                }
	
	                // Left and right logic
	                if (horizontal === 'auto') {
	                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
	                        offset.left + widget.outerWidth() > $(window).width()) {
	                        horizontal = 'right';
	                    } else {
	                        horizontal = 'left';
	                    }
	                }
	
	                if (vertical === 'top') {
	                    widget.addClass('top').removeClass('bottom');
	                } else {
	                    widget.addClass('bottom').removeClass('top');
	                }
	
	                if (horizontal === 'right') {
	                    widget.addClass('pull-right');
	                } else {
	                    widget.removeClass('pull-right');
	                }
	
	                // find the first parent element that has a relative css positioning
	                if (parent.css('position') !== 'relative') {
	                    parent = parent.parents().filter(function () {
	                        return $(this).css('position') === 'relative';
	                    }).first();
	                }
	
	                if (parent.length === 0) {
	                    throw new Error('datetimepicker component should be placed within a relative positioned container');
	                }
	
	                widget.css({
	                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
	                    bottom: vertical === 'top' ? position.top + element.outerHeight() : 'auto',
	                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
	                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
	                });
	            },
	
	            notifyEvent = function (e) {
	                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
	                    return;
	                }
	                element.trigger(e);
	            },
	
	            viewUpdate = function (e) {
	                if (e === 'y') {
	                    e = 'YYYY';
	                }
	                notifyEvent({
	                    type: 'dp.update',
	                    change: e,
	                    viewDate: viewDate.clone()
	                });
	            },
	
	            showMode = function (dir) {
	                if (!widget) {
	                    return;
	                }
	                if (dir) {
	                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
	                }
	                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
	            },
	
	            fillDow = function () {
	                var row = $('<tr>'),
	                    currentDate = viewDate.clone().startOf('w').startOf('d');
	
	                if (options.calendarWeeks === true) {
	                    row.append($('<th>').addClass('cw').text('#'));
	                }
	
	                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
	                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
	                    currentDate.add(1, 'd');
	                }
	                widget.find('.datepicker-days thead').append(row);
	            },
	
	            isInDisabledDates = function (testDate) {
	                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
	            },
	
	            isInEnabledDates = function (testDate) {
	                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
	            },
	
	            isInDisabledHours = function (testDate) {
	                return options.disabledHours[testDate.format('H')] === true;
	            },
	
	            isInEnabledHours = function (testDate) {
	                return options.enabledHours[testDate.format('H')] === true;
	            },
	
	            isValid = function (targetMoment, granularity) {
	                if (!targetMoment.isValid()) {
	                    return false;
	                }
	                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
	                    return false;
	                }
	                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
	                    return false;
	                }
	                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
	                    return false;
	                }
	                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
	                    return false;
	                }
	                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
	                    return false;
	                }
	                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
	                    return false;
	                }
	                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
	                    return false;
	                }
	                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
	                    var found = false;
	                    $.each(options.disabledTimeIntervals, function () {
	                        if (targetMoment.isBetween(this[0], this[1])) {
	                            found = true;
	                            return false;
	                        }
	                    });
	                    if (found) {
	                        return false;
	                    }
	                }
	                return true;
	            },
	
	            fillMonths = function () {
	                var spans = [],
	                    monthsShort = viewDate.clone().startOf('y').startOf('d');
	                while (monthsShort.isSame(viewDate, 'y')) {
	                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
	                    monthsShort.add(1, 'M');
	                }
	                widget.find('.datepicker-months td').empty().append(spans);
	            },
	
	            updateMonths = function () {
	                var monthsView = widget.find('.datepicker-months'),
	                    monthsViewHeader = monthsView.find('th'),
	                    months = monthsView.find('tbody').find('span');
	
	                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
	                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
	                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);
	
	                monthsView.find('.disabled').removeClass('disabled');
	
	                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
	                    monthsViewHeader.eq(0).addClass('disabled');
	                }
	
	                monthsViewHeader.eq(1).text(viewDate.year());
	
	                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
	                    monthsViewHeader.eq(2).addClass('disabled');
	                }
	
	                months.removeClass('active');
	                if (date.isSame(viewDate, 'y') && !unset) {
	                    months.eq(date.month()).addClass('active');
	                }
	
	                months.each(function (index) {
	                    if (!isValid(viewDate.clone().month(index), 'M')) {
	                        $(this).addClass('disabled');
	                    }
	                });
	            },
	
	            updateYears = function () {
	                var yearsView = widget.find('.datepicker-years'),
	                    yearsViewHeader = yearsView.find('th'),
	                    startYear = viewDate.clone().subtract(5, 'y'),
	                    endYear = viewDate.clone().add(6, 'y'),
	                    html = '';
	
	                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
	                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
	                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);
	
	                yearsView.find('.disabled').removeClass('disabled');
	
	                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
	                    yearsViewHeader.eq(0).addClass('disabled');
	                }
	
	                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());
	
	                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
	                    yearsViewHeader.eq(2).addClass('disabled');
	                }
	
	                while (!startYear.isAfter(endYear, 'y')) {
	                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
	                    startYear.add(1, 'y');
	                }
	
	                yearsView.find('td').html(html);
	            },
	
	            updateDecades = function () {
	                var decadesView = widget.find('.datepicker-decades'),
	                    decadesViewHeader = decadesView.find('th'),
	                    startDecade = moment({y: viewDate.year() - (viewDate.year() % 100) - 1}),
	                    endDecade = startDecade.clone().add(100, 'y'),
	                    startedAt = startDecade.clone(),
	                    html = '';
	
	                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
	                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);
	
	                decadesView.find('.disabled').removeClass('disabled');
	
	                if (startDecade.isSame(moment({y: 1900})) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
	                    decadesViewHeader.eq(0).addClass('disabled');
	                }
	
	                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());
	
	                if (startDecade.isSame(moment({y: 2000})) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
	                    decadesViewHeader.eq(2).addClass('disabled');
	                }
	
	                while (!startDecade.isAfter(endDecade, 'y')) {
	                    html += '<span data-action="selectDecade" class="decade' + (startDecade.isSame(date, 'y') ? ' active' : '') +
	                        (!isValid(startDecade, 'y') ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
	                    startDecade.add(12, 'y');
	                }
	                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even
	
	                decadesView.find('td').html(html);
	                decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
	            },
	
	            fillDate = function () {
	                var daysView = widget.find('.datepicker-days'),
	                    daysViewHeader = daysView.find('th'),
	                    currentDate,
	                    html = [],
	                    row,
	                    clsName,
	                    i;
	
	                if (!hasDate()) {
	                    return;
	                }
	
	                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
	                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
	                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);
	
	                daysView.find('.disabled').removeClass('disabled');
	                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));
	
	                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
	                    daysViewHeader.eq(0).addClass('disabled');
	                }
	                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
	                    daysViewHeader.eq(2).addClass('disabled');
	                }
	
	                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');
	
	                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
	                    if (currentDate.weekday() === 0) {
	                        row = $('<tr>');
	                        if (options.calendarWeeks) {
	                            row.append('<td class="cw">' + currentDate.week() + '</td>');
	                        }
	                        html.push(row);
	                    }
	                    clsName = '';
	                    if (currentDate.isBefore(viewDate, 'M')) {
	                        clsName += ' old';
	                    }
	                    if (currentDate.isAfter(viewDate, 'M')) {
	                        clsName += ' new';
	                    }
	                    if (currentDate.isSame(date, 'd') && !unset) {
	                        clsName += ' active';
	                    }
	                    if (!isValid(currentDate, 'd')) {
	                        clsName += ' disabled';
	                    }
	                    if (currentDate.isSame(getMoment(), 'd')) {
	                        clsName += ' today';
	                    }
	                    if (currentDate.day() === 0 || currentDate.day() === 6) {
	                        clsName += ' weekend';
	                    }
	                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
	                    currentDate.add(1, 'd');
	                }
	
	                daysView.find('tbody').empty().append(html);
	
	                updateMonths();
	
	                updateYears();
	
	                updateDecades();
	            },
	
	            fillHours = function () {
	                var table = widget.find('.timepicker-hours table'),
	                    currentHour = viewDate.clone().startOf('d'),
	                    html = [],
	                    row = $('<tr>');
	
	                if (viewDate.hour() > 11 && !use24Hours) {
	                    currentHour.hour(12);
	                }
	                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
	                    if (currentHour.hour() % 4 === 0) {
	                        row = $('<tr>');
	                        html.push(row);
	                    }
	                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
	                    currentHour.add(1, 'h');
	                }
	                table.empty().append(html);
	            },
	
	            fillMinutes = function () {
	                var table = widget.find('.timepicker-minutes table'),
	                    currentMinute = viewDate.clone().startOf('h'),
	                    html = [],
	                    row = $('<tr>'),
	                    step = options.stepping === 1 ? 5 : options.stepping;
	
	                while (viewDate.isSame(currentMinute, 'h')) {
	                    if (currentMinute.minute() % (step * 4) === 0) {
	                        row = $('<tr>');
	                        html.push(row);
	                    }
	                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
	                    currentMinute.add(step, 'm');
	                }
	                table.empty().append(html);
	            },
	
	            fillSeconds = function () {
	                var table = widget.find('.timepicker-seconds table'),
	                    currentSecond = viewDate.clone().startOf('m'),
	                    html = [],
	                    row = $('<tr>');
	
	                while (viewDate.isSame(currentSecond, 'm')) {
	                    if (currentSecond.second() % 20 === 0) {
	                        row = $('<tr>');
	                        html.push(row);
	                    }
	                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
	                    currentSecond.add(5, 's');
	                }
	
	                table.empty().append(html);
	            },
	
	            fillTime = function () {
	                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');
	
	                if (!use24Hours) {
	                    toggle = widget.find('.timepicker [data-action=togglePeriod]');
	                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');
	
	                    toggle.text(date.format('A'));
	
	                    if (isValid(newDate, 'h')) {
	                        toggle.removeClass('disabled');
	                    } else {
	                        toggle.addClass('disabled');
	                    }
	                }
	                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
	                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
	                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));
	
	                fillHours();
	                fillMinutes();
	                fillSeconds();
	            },
	
	            update = function () {
	                if (!widget) {
	                    return;
	                }
	                fillDate();
	                fillTime();
	            },
	
	            setValue = function (targetMoment) {
	                var oldDate = unset ? null : date;
	
	                // case of calling setValue(null or false)
	                if (!targetMoment) {
	                    unset = true;
	                    input.val('');
	                    element.data('date', '');
	                    notifyEvent({
	                        type: 'dp.change',
	                        date: false,
	                        oldDate: oldDate
	                    });
	                    update();
	                    return;
	                }
	
	                targetMoment = targetMoment.clone().locale(options.locale);
	
	                if (options.stepping !== 1) {
	                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping) % 60).seconds(0);
	                }
	
	                if (isValid(targetMoment)) {
	                    date = targetMoment;
	                    viewDate = date.clone();
	                    input.val(date.format(actualFormat));
	                    element.data('date', date.format(actualFormat));
	                    unset = false;
	                    update();
	                    notifyEvent({
	                        type: 'dp.change',
	                        date: date.clone(),
	                        oldDate: oldDate
	                    });
	                } else {
	                    if (!options.keepInvalid) {
	                        input.val(unset ? '' : date.format(actualFormat));
	                    }
	                    notifyEvent({
	                        type: 'dp.error',
	                        date: targetMoment
	                    });
	                }
	            },
	
	            hide = function () {
	                ///<summary>Hides the widget. Possibly will emit dp.hide</summary>
	                var transitioning = false;
	                if (!widget) {
	                    return picker;
	                }
	                // Ignore event if in the middle of a picker transition
	                widget.find('.collapse').each(function () {
	                    var collapseData = $(this).data('collapse');
	                    if (collapseData && collapseData.transitioning) {
	                        transitioning = true;
	                        return false;
	                    }
	                    return true;
	                });
	                if (transitioning) {
	                    return picker;
	                }
	                if (component && component.hasClass('btn')) {
	                    component.toggleClass('active');
	                }
	                widget.hide();
	
	                $(window).off('resize', place);
	                widget.off('click', '[data-action]');
	                widget.off('mousedown', false);
	
	                widget.remove();
	                widget = false;
	
	                notifyEvent({
	                    type: 'dp.hide',
	                    date: date.clone()
	                });
	
	                input.blur();
	
	                return picker;
	            },
	
	            clear = function () {
	                setValue(null);
	            },
	
	            /********************************************************************************
	             *
	             * Widget UI interaction functions
	             *
	             ********************************************************************************/
	            actions = {
	                next: function () {
	                    var navFnc = datePickerModes[currentViewMode].navFnc;
	                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
	                    fillDate();
	                    viewUpdate(navFnc);
	                },
	
	                previous: function () {
	                    var navFnc = datePickerModes[currentViewMode].navFnc;
	                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
	                    fillDate();
	                    viewUpdate(navFnc);
	                },
	
	                pickerSwitch: function () {
	                    showMode(1);
	                },
	
	                selectMonth: function (e) {
	                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
	                    viewDate.month(month);
	                    if (currentViewMode === minViewModeNumber) {
	                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
	                        if (!options.inline) {
	                            hide();
	                        }
	                    } else {
	                        showMode(-1);
	                        fillDate();
	                    }
	                    viewUpdate('M');
	                },
	
	                selectYear: function (e) {
	                    var year = parseInt($(e.target).text(), 10) || 0;
	                    viewDate.year(year);
	                    if (currentViewMode === minViewModeNumber) {
	                        setValue(date.clone().year(viewDate.year()));
	                        if (!options.inline) {
	                            hide();
	                        }
	                    } else {
	                        showMode(-1);
	                        fillDate();
	                    }
	                    viewUpdate('YYYY');
	                },
	
	                selectDecade: function (e) {
	                    var year = parseInt($(e.target).data('selection'), 10) || 0;
	                    viewDate.year(year);
	                    if (currentViewMode === minViewModeNumber) {
	                        setValue(date.clone().year(viewDate.year()));
	                        if (!options.inline) {
	                            hide();
	                        }
	                    } else {
	                        showMode(-1);
	                        fillDate();
	                    }
	                    viewUpdate('YYYY');
	                },
	
	                selectDay: function (e) {
	                    var day = viewDate.clone();
	                    if ($(e.target).is('.old')) {
	                        day.subtract(1, 'M');
	                    }
	                    if ($(e.target).is('.new')) {
	                        day.add(1, 'M');
	                    }
	                    setValue(day.date(parseInt($(e.target).text(), 10)));
	                    if (!hasTime() && !options.keepOpen && !options.inline) {
	                        hide();
	                    }
	                },
	
	                incrementHours: function () {
	                    var newDate = date.clone().add(1, 'h');
	                    if (isValid(newDate, 'h')) {
	                        setValue(newDate);
	                    }
	                },
	
	                incrementMinutes: function () {
	                    var newDate = date.clone().add(options.stepping, 'm');
	                    if (isValid(newDate, 'm')) {
	                        setValue(newDate);
	                    }
	                },
	
	                incrementSeconds: function () {
	                    var newDate = date.clone().add(1, 's');
	                    if (isValid(newDate, 's')) {
	                        setValue(newDate);
	                    }
	                },
	
	                decrementHours: function () {
	                    var newDate = date.clone().subtract(1, 'h');
	                    if (isValid(newDate, 'h')) {
	                        setValue(newDate);
	                    }
	                },
	
	                decrementMinutes: function () {
	                    var newDate = date.clone().subtract(options.stepping, 'm');
	                    if (isValid(newDate, 'm')) {
	                        setValue(newDate);
	                    }
	                },
	
	                decrementSeconds: function () {
	                    var newDate = date.clone().subtract(1, 's');
	                    if (isValid(newDate, 's')) {
	                        setValue(newDate);
	                    }
	                },
	
	                togglePeriod: function () {
	                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
	                },
	
	                togglePicker: function (e) {
	                    var $this = $(e.target),
	                        $parent = $this.closest('ul'),
	                        expanded = $parent.find('.in'),
	                        closed = $parent.find('.collapse:not(.in)'),
	                        collapseData;
	
	                    if (expanded && expanded.length) {
	                        collapseData = expanded.data('collapse');
	                        if (collapseData && collapseData.transitioning) {
	                            return;
	                        }
	                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
	                            expanded.collapse('hide');
	                            closed.collapse('show');
	                        } else { // otherwise just toggle in class on the two views
	                            expanded.removeClass('in');
	                            closed.addClass('in');
	                        }
	                        if ($this.is('span')) {
	                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
	                        } else {
	                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
	                        }
	
	                        // NOTE: uncomment if toggled state will be restored in show()
	                        //if (component) {
	                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
	                        //}
	                    }
	                },
	
	                showPicker: function () {
	                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
	                    widget.find('.timepicker .timepicker-picker').show();
	                },
	
	                showHours: function () {
	                    widget.find('.timepicker .timepicker-picker').hide();
	                    widget.find('.timepicker .timepicker-hours').show();
	                },
	
	                showMinutes: function () {
	                    widget.find('.timepicker .timepicker-picker').hide();
	                    widget.find('.timepicker .timepicker-minutes').show();
	                },
	
	                showSeconds: function () {
	                    widget.find('.timepicker .timepicker-picker').hide();
	                    widget.find('.timepicker .timepicker-seconds').show();
	                },
	
	                selectHour: function (e) {
	                    var hour = parseInt($(e.target).text(), 10);
	
	                    if (!use24Hours) {
	                        if (date.hours() >= 12) {
	                            if (hour !== 12) {
	                                hour += 12;
	                            }
	                        } else {
	                            if (hour === 12) {
	                                hour = 0;
	                            }
	                        }
	                    }
	                    setValue(date.clone().hours(hour));
	                    actions.showPicker.call(picker);
	                },
	
	                selectMinute: function (e) {
	                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
	                    actions.showPicker.call(picker);
	                },
	
	                selectSecond: function (e) {
	                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
	                    actions.showPicker.call(picker);
	                },
	
	                clear: clear,
	
	                today: function () {
	                    var todaysDate = getMoment();
	                    if (isValid(todaysDate, 'd')) {
	                        setValue(todaysDate);
	                    }
	                },
	
	                close: hide
	            },
	
	            doAction = function (e) {
	                if ($(e.currentTarget).is('.disabled')) {
	                    return false;
	                }
	                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
	                return false;
	            },
	
	            show = function () {
	                ///<summary>Shows the widget. Possibly will emit dp.show and dp.change</summary>
	                var currentMoment,
	                    useCurrentGranularity = {
	                        'year': function (m) {
	                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);
	                        },
	                        'month': function (m) {
	                            return m.date(1).hours(0).seconds(0).minutes(0);
	                        },
	                        'day': function (m) {
	                            return m.hours(0).seconds(0).minutes(0);
	                        },
	                        'hour': function (m) {
	                            return m.seconds(0).minutes(0);
	                        },
	                        'minute': function (m) {
	                            return m.seconds(0);
	                        }
	                    };
	
	                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
	                    return picker;
	                }
	                if (input.val() !== undefined && input.val().trim().length !== 0) {
	                    setValue(parseInputDate(input.val().trim()));
	                } else if (options.useCurrent && unset && ((input.is('input') && input.val().trim().length === 0) || options.inline)) {
	                    currentMoment = getMoment();
	                    if (typeof options.useCurrent === 'string') {
	                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
	                    }
	                    setValue(currentMoment);
	                }
	
	                widget = getTemplate();
	
	                fillDow();
	                fillMonths();
	
	                widget.find('.timepicker-hours').hide();
	                widget.find('.timepicker-minutes').hide();
	                widget.find('.timepicker-seconds').hide();
	
	                update();
	                showMode();
	
	                $(window).on('resize', place);
	                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
	                widget.on('mousedown', false);
	
	                if (component && component.hasClass('btn')) {
	                    component.toggleClass('active');
	                }
	                widget.show();
	                place();
	
	                if (options.focusOnShow && !input.is(':focus')) {
	                    input.focus();
	                }
	
	                notifyEvent({
	                    type: 'dp.show'
	                });
	                return picker;
	            },
	
	            toggle = function () {
	                /// <summary>Shows or hides the widget</summary>
	                return (widget ? hide() : show());
	            },
	
	            parseInputDate = function (inputDate) {
	                if (options.parseInputDate === undefined) {
	                    if (moment.isMoment(inputDate) || inputDate instanceof Date) {
	                        inputDate = moment(inputDate);
	                    } else {
	                        inputDate = getMoment(inputDate);
	                    }
	                } else {
	                    inputDate = options.parseInputDate(inputDate);
	                }
	                inputDate.locale(options.locale);
	                return inputDate;
	            },
	
	            keydown = function (e) {
	                var handler = null,
	                    index,
	                    index2,
	                    pressedKeys = [],
	                    pressedModifiers = {},
	                    currentKey = e.which,
	                    keyBindKeys,
	                    allModifiersPressed,
	                    pressed = 'p';
	
	                keyState[currentKey] = pressed;
	
	                for (index in keyState) {
	                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
	                        pressedKeys.push(index);
	                        if (parseInt(index, 10) !== currentKey) {
	                            pressedModifiers[index] = true;
	                        }
	                    }
	                }
	
	                for (index in options.keyBinds) {
	                    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {
	                        keyBindKeys = index.split(' ');
	                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
	                            allModifiersPressed = true;
	                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
	                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
	                                    allModifiersPressed = false;
	                                    break;
	                                }
	                            }
	                            if (allModifiersPressed) {
	                                handler = options.keyBinds[index];
	                                break;
	                            }
	                        }
	                    }
	                }
	
	                if (handler) {
	                    handler.call(picker, widget);
	                    e.stopPropagation();
	                    e.preventDefault();
	                }
	            },
	
	            keyup = function (e) {
	                keyState[e.which] = 'r';
	                e.stopPropagation();
	                e.preventDefault();
	            },
	
	            change = function (e) {
	                var val = $(e.target).val().trim(),
	                    parsedDate = val ? parseInputDate(val) : null;
	                setValue(parsedDate);
	                e.stopImmediatePropagation();
	                return false;
	            },
	
	            attachDatePickerElementEvents = function () {
	                input.on({
	                    'change': change,
	                    'blur': options.debug ? '' : hide,
	                    'keydown': keydown,
	                    'keyup': keyup,
	                    'focus': options.allowInputToggle ? show : ''
	                });
	
	                if (element.is('input')) {
	                    input.on({
	                        'focus': show
	                    });
	                } else if (component) {
	                    component.on('click', toggle);
	                    component.on('mousedown', false);
	                }
	            },
	
	            detachDatePickerElementEvents = function () {
	                input.off({
	                    'change': change,
	                    'blur': blur,
	                    'keydown': keydown,
	                    'keyup': keyup,
	                    'focus': options.allowInputToggle ? hide : ''
	                });
	
	                if (element.is('input')) {
	                    input.off({
	                        'focus': show
	                    });
	                } else if (component) {
	                    component.off('click', toggle);
	                    component.off('mousedown', false);
	                }
	            },
	
	            indexGivenDates = function (givenDatesArray) {
	                // Store given enabledDates and disabledDates as keys.
	                // This way we can check their existence in O(1) time instead of looping through whole array.
	                // (for example: options.enabledDates['2014-02-27'] === true)
	                var givenDatesIndexed = {};
	                $.each(givenDatesArray, function () {
	                    var dDate = parseInputDate(this);
	                    if (dDate.isValid()) {
	                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
	                    }
	                });
	                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
	            },
	
	            indexGivenHours = function (givenHoursArray) {
	                // Store given enabledHours and disabledHours as keys.
	                // This way we can check their existence in O(1) time instead of looping through whole array.
	                // (for example: options.enabledHours['2014-02-27'] === true)
	                var givenHoursIndexed = {};
	                $.each(givenHoursArray, function () {
	                    givenHoursIndexed[this] = true;
	                });
	                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
	            },
	
	            initFormatting = function () {
	                var format = options.format || 'L LT';
	
	                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
	                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
	                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
	                        return date.localeData().longDateFormat(formatInput2) || formatInput2;
	                    });
	                });
	
	
	                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
	                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
	                    parseFormats.push(actualFormat);
	                }
	
	                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);
	
	                if (isEnabled('y')) {
	                    minViewModeNumber = 2;
	                }
	                if (isEnabled('M')) {
	                    minViewModeNumber = 1;
	                }
	                if (isEnabled('d')) {
	                    minViewModeNumber = 0;
	                }
	
	                currentViewMode = Math.max(minViewModeNumber, currentViewMode);
	
	                if (!unset) {
	                    setValue(date);
	                }
	            };
	
	        /********************************************************************************
	         *
	         * Public API functions
	         * =====================
	         *
	         * Important: Do not expose direct references to private objects or the options
	         * object to the outer world. Always return a clone when returning values or make
	         * a clone when setting a private variable.
	         *
	         ********************************************************************************/
	        picker.destroy = function () {
	            ///<summary>Destroys the widget and removes all attached event listeners</summary>
	            hide();
	            detachDatePickerElementEvents();
	            element.removeData('DateTimePicker');
	            element.removeData('date');
	        };
	
	        picker.toggle = toggle;
	
	        picker.show = show;
	
	        picker.hide = hide;
	
	        picker.disable = function () {
	            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
	            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
	            hide();
	            if (component && component.hasClass('btn')) {
	                component.addClass('disabled');
	            }
	            input.prop('disabled', true);
	            return picker;
	        };
	
	        picker.enable = function () {
	            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
	            if (component && component.hasClass('btn')) {
	                component.removeClass('disabled');
	            }
	            input.prop('disabled', false);
	            return picker;
	        };
	
	        picker.ignoreReadonly = function (ignoreReadonly) {
	            if (arguments.length === 0) {
	                return options.ignoreReadonly;
	            }
	            if (typeof ignoreReadonly !== 'boolean') {
	                throw new TypeError('ignoreReadonly () expects a boolean parameter');
	            }
	            options.ignoreReadonly = ignoreReadonly;
	            return picker;
	        };
	
	        picker.options = function (newOptions) {
	            if (arguments.length === 0) {
	                return $.extend(true, {}, options);
	            }
	
	            if (!(newOptions instanceof Object)) {
	                throw new TypeError('options() options parameter should be an object');
	            }
	            $.extend(true, options, newOptions);
	            $.each(options, function (key, value) {
	                if (picker[key] !== undefined) {
	                    picker[key](value);
	                } else {
	                    throw new TypeError('option ' + key + ' is not recognized!');
	                }
	            });
	            return picker;
	        };
	
	        picker.date = function (newDate) {
	            ///<signature helpKeyword="$.fn.datetimepicker.date">
	            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
	            ///<returns type="Moment">date.clone()</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
	            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                if (unset) {
	                    return null;
	                }
	                return date.clone();
	            }
	
	            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
	                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
	            }
	
	            setValue(newDate === null ? null : parseInputDate(newDate));
	            return picker;
	        };
	
	        picker.format = function (newFormat) {
	            ///<summary>test su</summary>
	            ///<param name="newFormat">info about para</param>
	            ///<returns type="string|boolean">returns foo</returns>
	            if (arguments.length === 0) {
	                return options.format;
	            }
	
	            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
	                throw new TypeError('format() expects a sting or boolean:false parameter ' + newFormat);
	            }
	
	            options.format = newFormat;
	            if (actualFormat) {
	                initFormatting(); // reinit formatting
	            }
	            return picker;
	        };
	
	        picker.timeZone = function (newZone) {
	            if (arguments.length === 0) {
	                return options.timeZone;
	            }
	
	            options.timeZone = newZone;
	
	            return picker;
	        };
	
	        picker.dayViewHeaderFormat = function (newFormat) {
	            if (arguments.length === 0) {
	                return options.dayViewHeaderFormat;
	            }
	
	            if (typeof newFormat !== 'string') {
	                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
	            }
	
	            options.dayViewHeaderFormat = newFormat;
	            return picker;
	        };
	
	        picker.extraFormats = function (formats) {
	            if (arguments.length === 0) {
	                return options.extraFormats;
	            }
	
	            if (formats !== false && !(formats instanceof Array)) {
	                throw new TypeError('extraFormats() expects an array or false parameter');
	            }
	
	            options.extraFormats = formats;
	            if (parseFormats) {
	                initFormatting(); // reinit formatting
	            }
	            return picker;
	        };
	
	        picker.disabledDates = function (dates) {
	            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
	            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
	            ///<returns type="array">options.disabledDates</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
	            ///options.enabledDates if such exist.</summary>
	            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
	            }
	
	            if (!dates) {
	                options.disabledDates = false;
	                update();
	                return picker;
	            }
	            if (!(dates instanceof Array)) {
	                throw new TypeError('disabledDates() expects an array parameter');
	            }
	            options.disabledDates = indexGivenDates(dates);
	            options.enabledDates = false;
	            update();
	            return picker;
	        };
	
	        picker.enabledDates = function (dates) {
	            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
	            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
	            ///<returns type="array">options.enabledDates</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
	            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
	            }
	
	            if (!dates) {
	                options.enabledDates = false;
	                update();
	                return picker;
	            }
	            if (!(dates instanceof Array)) {
	                throw new TypeError('enabledDates() expects an array parameter');
	            }
	            options.enabledDates = indexGivenDates(dates);
	            options.disabledDates = false;
	            update();
	            return picker;
	        };
	
	        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
	            if (arguments.length === 0) {
	                return options.daysOfWeekDisabled.splice(0);
	            }
	
	            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
	                options.daysOfWeekDisabled = false;
	                update();
	                return picker;
	            }
	
	            if (!(daysOfWeekDisabled instanceof Array)) {
	                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
	            }
	            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
	                currentValue = parseInt(currentValue, 10);
	                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
	                    return previousValue;
	                }
	                if (previousValue.indexOf(currentValue) === -1) {
	                    previousValue.push(currentValue);
	                }
	                return previousValue;
	            }, []).sort();
	            if (options.useCurrent && !options.keepInvalid) {
	                var tries = 0;
	                while (!isValid(date, 'd')) {
	                    date.add(1, 'd');
	                    if (tries === 7) {
	                        throw 'Tried 7 times to find a valid date';
	                    }
	                    tries++;
	                }
	                setValue(date);
	            }
	            update();
	            return picker;
	        };
	
	        picker.maxDate = function (maxDate) {
	            if (arguments.length === 0) {
	                return options.maxDate ? options.maxDate.clone() : options.maxDate;
	            }
	
	            if ((typeof maxDate === 'boolean') && maxDate === false) {
	                options.maxDate = false;
	                update();
	                return picker;
	            }
	
	            if (typeof maxDate === 'string') {
	                if (maxDate === 'now' || maxDate === 'moment') {
	                    maxDate = getMoment();
	                }
	            }
	
	            var parsedDate = parseInputDate(maxDate);
	
	            if (!parsedDate.isValid()) {
	                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
	            }
	            if (options.minDate && parsedDate.isBefore(options.minDate)) {
	                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
	            }
	            options.maxDate = parsedDate;
	            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
	                setValue(options.maxDate);
	            }
	            if (viewDate.isAfter(parsedDate)) {
	                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
	            }
	            update();
	            return picker;
	        };
	
	        picker.minDate = function (minDate) {
	            if (arguments.length === 0) {
	                return options.minDate ? options.minDate.clone() : options.minDate;
	            }
	
	            if ((typeof minDate === 'boolean') && minDate === false) {
	                options.minDate = false;
	                update();
	                return picker;
	            }
	
	            if (typeof minDate === 'string') {
	                if (minDate === 'now' || minDate === 'moment') {
	                    minDate = getMoment();
	                }
	            }
	
	            var parsedDate = parseInputDate(minDate);
	
	            if (!parsedDate.isValid()) {
	                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
	            }
	            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
	                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
	            }
	            options.minDate = parsedDate;
	            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
	                setValue(options.minDate);
	            }
	            if (viewDate.isBefore(parsedDate)) {
	                viewDate = parsedDate.clone().add(options.stepping, 'm');
	            }
	            update();
	            return picker;
	        };
	
	        picker.defaultDate = function (defaultDate) {
	            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
	            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
	            ///<returns type="Moment">date.clone()</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
	            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
	            }
	            if (!defaultDate) {
	                options.defaultDate = false;
	                return picker;
	            }
	
	            if (typeof defaultDate === 'string') {
	                if (defaultDate === 'now' || defaultDate === 'moment') {
	                    defaultDate = getMoment();
	                }
	            }
	
	            var parsedDate = parseInputDate(defaultDate);
	            if (!parsedDate.isValid()) {
	                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
	            }
	            if (!isValid(parsedDate)) {
	                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
	            }
	
	            options.defaultDate = parsedDate;
	
	            if ((options.defaultDate && options.inline) || input.val().trim() === '') {
	                setValue(options.defaultDate);
	            }
	            return picker;
	        };
	
	        picker.locale = function (locale) {
	            if (arguments.length === 0) {
	                return options.locale;
	            }
	
	            if (!moment.localeData(locale)) {
	                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
	            }
	
	            options.locale = locale;
	            date.locale(options.locale);
	            viewDate.locale(options.locale);
	
	            if (actualFormat) {
	                initFormatting(); // reinit formatting
	            }
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.stepping = function (stepping) {
	            if (arguments.length === 0) {
	                return options.stepping;
	            }
	
	            stepping = parseInt(stepping, 10);
	            if (isNaN(stepping) || stepping < 1) {
	                stepping = 1;
	            }
	            options.stepping = stepping;
	            return picker;
	        };
	
	        picker.useCurrent = function (useCurrent) {
	            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
	            if (arguments.length === 0) {
	                return options.useCurrent;
	            }
	
	            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
	                throw new TypeError('useCurrent() expects a boolean or string parameter');
	            }
	            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
	                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
	            }
	            options.useCurrent = useCurrent;
	            return picker;
	        };
	
	        picker.collapse = function (collapse) {
	            if (arguments.length === 0) {
	                return options.collapse;
	            }
	
	            if (typeof collapse !== 'boolean') {
	                throw new TypeError('collapse() expects a boolean parameter');
	            }
	            if (options.collapse === collapse) {
	                return picker;
	            }
	            options.collapse = collapse;
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.icons = function (icons) {
	            if (arguments.length === 0) {
	                return $.extend({}, options.icons);
	            }
	
	            if (!(icons instanceof Object)) {
	                throw new TypeError('icons() expects parameter to be an Object');
	            }
	            $.extend(options.icons, icons);
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.tooltips = function (tooltips) {
	            if (arguments.length === 0) {
	                return $.extend({}, options.tooltips);
	            }
	
	            if (!(tooltips instanceof Object)) {
	                throw new TypeError('tooltips() expects parameter to be an Object');
	            }
	            $.extend(options.tooltips, tooltips);
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.useStrict = function (useStrict) {
	            if (arguments.length === 0) {
	                return options.useStrict;
	            }
	
	            if (typeof useStrict !== 'boolean') {
	                throw new TypeError('useStrict() expects a boolean parameter');
	            }
	            options.useStrict = useStrict;
	            return picker;
	        };
	
	        picker.sideBySide = function (sideBySide) {
	            if (arguments.length === 0) {
	                return options.sideBySide;
	            }
	
	            if (typeof sideBySide !== 'boolean') {
	                throw new TypeError('sideBySide() expects a boolean parameter');
	            }
	            options.sideBySide = sideBySide;
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.viewMode = function (viewMode) {
	            if (arguments.length === 0) {
	                return options.viewMode;
	            }
	
	            if (typeof viewMode !== 'string') {
	                throw new TypeError('viewMode() expects a string parameter');
	            }
	
	            if (viewModes.indexOf(viewMode) === -1) {
	                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
	            }
	
	            options.viewMode = viewMode;
	            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);
	
	            showMode();
	            return picker;
	        };
	
	        picker.toolbarPlacement = function (toolbarPlacement) {
	            if (arguments.length === 0) {
	                return options.toolbarPlacement;
	            }
	
	            if (typeof toolbarPlacement !== 'string') {
	                throw new TypeError('toolbarPlacement() expects a string parameter');
	            }
	            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
	                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
	            }
	            options.toolbarPlacement = toolbarPlacement;
	
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.widgetPositioning = function (widgetPositioning) {
	            if (arguments.length === 0) {
	                return $.extend({}, options.widgetPositioning);
	            }
	
	            if (({}).toString.call(widgetPositioning) !== '[object Object]') {
	                throw new TypeError('widgetPositioning() expects an object variable');
	            }
	            if (widgetPositioning.horizontal) {
	                if (typeof widgetPositioning.horizontal !== 'string') {
	                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
	                }
	                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
	                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
	                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
	                }
	                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
	            }
	            if (widgetPositioning.vertical) {
	                if (typeof widgetPositioning.vertical !== 'string') {
	                    throw new TypeError('widgetPositioning() vertical variable must be a string');
	                }
	                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
	                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
	                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
	                }
	                options.widgetPositioning.vertical = widgetPositioning.vertical;
	            }
	            update();
	            return picker;
	        };
	
	        picker.calendarWeeks = function (calendarWeeks) {
	            if (arguments.length === 0) {
	                return options.calendarWeeks;
	            }
	
	            if (typeof calendarWeeks !== 'boolean') {
	                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
	            }
	
	            options.calendarWeeks = calendarWeeks;
	            update();
	            return picker;
	        };
	
	        picker.showTodayButton = function (showTodayButton) {
	            if (arguments.length === 0) {
	                return options.showTodayButton;
	            }
	
	            if (typeof showTodayButton !== 'boolean') {
	                throw new TypeError('showTodayButton() expects a boolean parameter');
	            }
	
	            options.showTodayButton = showTodayButton;
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.showClear = function (showClear) {
	            if (arguments.length === 0) {
	                return options.showClear;
	            }
	
	            if (typeof showClear !== 'boolean') {
	                throw new TypeError('showClear() expects a boolean parameter');
	            }
	
	            options.showClear = showClear;
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.widgetParent = function (widgetParent) {
	            if (arguments.length === 0) {
	                return options.widgetParent;
	            }
	
	            if (typeof widgetParent === 'string') {
	                widgetParent = $(widgetParent);
	            }
	
	            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
	                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
	            }
	
	            options.widgetParent = widgetParent;
	            if (widget) {
	                hide();
	                show();
	            }
	            return picker;
	        };
	
	        picker.keepOpen = function (keepOpen) {
	            if (arguments.length === 0) {
	                return options.keepOpen;
	            }
	
	            if (typeof keepOpen !== 'boolean') {
	                throw new TypeError('keepOpen() expects a boolean parameter');
	            }
	
	            options.keepOpen = keepOpen;
	            return picker;
	        };
	
	        picker.focusOnShow = function (focusOnShow) {
	            if (arguments.length === 0) {
	                return options.focusOnShow;
	            }
	
	            if (typeof focusOnShow !== 'boolean') {
	                throw new TypeError('focusOnShow() expects a boolean parameter');
	            }
	
	            options.focusOnShow = focusOnShow;
	            return picker;
	        };
	
	        picker.inline = function (inline) {
	            if (arguments.length === 0) {
	                return options.inline;
	            }
	
	            if (typeof inline !== 'boolean') {
	                throw new TypeError('inline() expects a boolean parameter');
	            }
	
	            options.inline = inline;
	            return picker;
	        };
	
	        picker.clear = function () {
	            clear();
	            return picker;
	        };
	
	        picker.keyBinds = function (keyBinds) {
	            options.keyBinds = keyBinds;
	            return picker;
	        };
	
	        picker.getMoment = function (d) {
	            return getMoment(d);
	        };
	
	        picker.debug = function (debug) {
	            if (typeof debug !== 'boolean') {
	                throw new TypeError('debug() expects a boolean parameter');
	            }
	
	            options.debug = debug;
	            return picker;
	        };
	
	        picker.allowInputToggle = function (allowInputToggle) {
	            if (arguments.length === 0) {
	                return options.allowInputToggle;
	            }
	
	            if (typeof allowInputToggle !== 'boolean') {
	                throw new TypeError('allowInputToggle() expects a boolean parameter');
	            }
	
	            options.allowInputToggle = allowInputToggle;
	            return picker;
	        };
	
	        picker.showClose = function (showClose) {
	            if (arguments.length === 0) {
	                return options.showClose;
	            }
	
	            if (typeof showClose !== 'boolean') {
	                throw new TypeError('showClose() expects a boolean parameter');
	            }
	
	            options.showClose = showClose;
	            return picker;
	        };
	
	        picker.keepInvalid = function (keepInvalid) {
	            if (arguments.length === 0) {
	                return options.keepInvalid;
	            }
	
	            if (typeof keepInvalid !== 'boolean') {
	                throw new TypeError('keepInvalid() expects a boolean parameter');
	            }
	            options.keepInvalid = keepInvalid;
	            return picker;
	        };
	
	        picker.datepickerInput = function (datepickerInput) {
	            if (arguments.length === 0) {
	                return options.datepickerInput;
	            }
	
	            if (typeof datepickerInput !== 'string') {
	                throw new TypeError('datepickerInput() expects a string parameter');
	            }
	
	            options.datepickerInput = datepickerInput;
	            return picker;
	        };
	
	        picker.parseInputDate = function (parseInputDate) {
	            if (arguments.length === 0) {
	                return options.parseInputDate;
	            }
	
	            if (typeof parseInputDate !== 'function') {
	                throw new TypeError('parseInputDate() sholud be as function');
	            }
	
	            options.parseInputDate = parseInputDate;
	
	            return picker;
	        };
	
	        picker.disabledTimeIntervals = function (disabledTimeIntervals) {
	            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
	            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
	            ///<returns type="array">options.disabledTimeIntervals</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
	            ///options.enabledDates if such exist.</summary>
	            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
	            }
	
	            if (!disabledTimeIntervals) {
	                options.disabledTimeIntervals = false;
	                update();
	                return picker;
	            }
	            if (!(disabledTimeIntervals instanceof Array)) {
	                throw new TypeError('disabledTimeIntervals() expects an array parameter');
	            }
	            options.disabledTimeIntervals = disabledTimeIntervals;
	            update();
	            return picker;
	        };
	
	        picker.disabledHours = function (hours) {
	            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
	            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
	            ///<returns type="array">options.disabledHours</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
	            ///options.enabledHours if such exist.</summary>
	            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
	            }
	
	            if (!hours) {
	                options.disabledHours = false;
	                update();
	                return picker;
	            }
	            if (!(hours instanceof Array)) {
	                throw new TypeError('disabledHours() expects an array parameter');
	            }
	            options.disabledHours = indexGivenHours(hours);
	            options.enabledHours = false;
	            if (options.useCurrent && !options.keepInvalid) {
	                var tries = 0;
	                while (!isValid(date, 'h')) {
	                    date.add(1, 'h');
	                    if (tries === 24) {
	                        throw 'Tried 24 times to find a valid date';
	                    }
	                    tries++;
	                }
	                setValue(date);
	            }
	            update();
	            return picker;
	        };
	
	        picker.enabledHours = function (hours) {
	            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
	            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
	            ///<returns type="array">options.enabledHours</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
	            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
	            }
	
	            if (!hours) {
	                options.enabledHours = false;
	                update();
	                return picker;
	            }
	            if (!(hours instanceof Array)) {
	                throw new TypeError('enabledHours() expects an array parameter');
	            }
	            options.enabledHours = indexGivenHours(hours);
	            options.disabledHours = false;
	            if (options.useCurrent && !options.keepInvalid) {
	                var tries = 0;
	                while (!isValid(date, 'h')) {
	                    date.add(1, 'h');
	                    if (tries === 24) {
	                        throw 'Tried 24 times to find a valid date';
	                    }
	                    tries++;
	                }
	                setValue(date);
	            }
	            update();
	            return picker;
	        };
	
	        picker.viewDate = function (newDate) {
	            ///<signature helpKeyword="$.fn.datetimepicker.viewDate">
	            ///<summary>Returns the component's model current viewDate, a moment object or null if not set.</summary>
	            ///<returns type="Moment">viewDate.clone()</returns>
	            ///</signature>
	            ///<signature>
	            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
	            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, viewDate, moment, null parameter.</param>
	            ///</signature>
	            if (arguments.length === 0) {
	                return viewDate.clone();
	            }
	
	            if (!newDate) {
	                viewDate = date.clone();
	                return picker;
	            }
	
	            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
	                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
	            }
	
	            viewDate = parseInputDate(newDate);
	            viewUpdate();
	            return picker;
	        };
	
	        // initializing element and component attributes
	        if (element.is('input')) {
	            input = element;
	        } else {
	            input = element.find(options.datepickerInput);
	            if (input.size() === 0) {
	                input = element.find('input');
	            } else if (!input.is('input')) {
	                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
	            }
	        }
	
	        if (element.hasClass('input-group')) {
	            // in case there is more then one 'input-group-addon' Issue #48
	            if (element.find('.datepickerbutton').size() === 0) {
	                component = element.find('.input-group-addon');
	            } else {
	                component = element.find('.datepickerbutton');
	            }
	        }
	
	        if (!options.inline && !input.is('input')) {
	            throw new Error('Could not initialize DateTimePicker without an input element');
	        }
	
	        // Set defaults for date here now instead of in var declaration
	        date = getMoment();
	        viewDate = date.clone();
	
	        $.extend(true, options, dataToOptions());
	
	        picker.options(options);
	
	        initFormatting();
	
	        attachDatePickerElementEvents();
	
	        if (input.prop('disabled')) {
	            picker.disable();
	        }
	        if (input.is('input') && input.val().trim().length !== 0) {
	            setValue(parseInputDate(input.val().trim()));
	        }
	        else if (options.defaultDate && input.attr('placeholder') === undefined) {
	            setValue(options.defaultDate);
	        }
	        if (options.inline) {
	            show();
	        }
	        return picker;
	    };
	
	    /********************************************************************************
	     *
	     * jQuery plugin constructor and defaults object
	     *
	     ********************************************************************************/
	
	    $.fn.datetimepicker = function (options) {
	        return this.each(function () {
	            var $this = $(this);
	            if (!$this.data('DateTimePicker')) {
	                // create a private copy of the defaults object
	                options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
	                $this.data('DateTimePicker', dateTimePicker($this, options));
	            }
	        });
	    };
	
	    $.fn.datetimepicker.defaults = {
	        timeZone: 'Etc/UTC',
	        format: false,
	        dayViewHeaderFormat: 'MMMM YYYY',
	        extraFormats: false,
	        stepping: 1,
	        minDate: false,
	        maxDate: false,
	        useCurrent: true,
	        collapse: true,
	        locale: moment.locale(),
	        defaultDate: false,
	        disabledDates: false,
	        enabledDates: false,
	        icons: {
	            time: 'glyphicon glyphicon-time',
	            date: 'glyphicon glyphicon-calendar',
	            up: 'glyphicon glyphicon-chevron-up',
	            down: 'glyphicon glyphicon-chevron-down',
	            previous: 'glyphicon glyphicon-chevron-left',
	            next: 'glyphicon glyphicon-chevron-right',
	            today: 'glyphicon glyphicon-screenshot',
	            clear: 'glyphicon glyphicon-trash',
	            close: 'glyphicon glyphicon-remove'
	        },
	        tooltips: {
	            today: 'Go to today',
	            clear: 'Clear selection',
	            close: 'Close the picker',
	            selectMonth: 'Select Month',
	            prevMonth: 'Previous Month',
	            nextMonth: 'Next Month',
	            selectYear: 'Select Year',
	            prevYear: 'Previous Year',
	            nextYear: 'Next Year',
	            selectDecade: 'Select Decade',
	            prevDecade: 'Previous Decade',
	            nextDecade: 'Next Decade',
	            prevCentury: 'Previous Century',
	            nextCentury: 'Next Century',
	            pickHour: 'Pick Hour',
	            incrementHour: 'Increment Hour',
	            decrementHour: 'Decrement Hour',
	            pickMinute: 'Pick Minute',
	            incrementMinute: 'Increment Minute',
	            decrementMinute: 'Decrement Minute',
	            pickSecond: 'Pick Second',
	            incrementSecond: 'Increment Second',
	            decrementSecond: 'Decrement Second',
	            togglePeriod: 'Toggle Period',
	            selectTime: 'Select Time'
	        },
	        useStrict: false,
	        sideBySide: false,
	        daysOfWeekDisabled: false,
	        calendarWeeks: false,
	        viewMode: 'days',
	        toolbarPlacement: 'default',
	        showTodayButton: false,
	        showClear: false,
	        showClose: false,
	        widgetPositioning: {
	            horizontal: 'auto',
	            vertical: 'auto'
	        },
	        widgetParent: null,
	        ignoreReadonly: false,
	        keepOpen: false,
	        focusOnShow: true,
	        inline: false,
	        keepInvalid: false,
	        datepickerInput: '.datepickerinput',
	        keyBinds: {
	            up: function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().subtract(7, 'd'));
	                } else {
	                    this.date(d.clone().add(this.stepping(), 'm'));
	                }
	            },
	            down: function (widget) {
	                if (!widget) {
	                    this.show();
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().add(7, 'd'));
	                } else {
	                    this.date(d.clone().subtract(this.stepping(), 'm'));
	                }
	            },
	            'control up': function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().subtract(1, 'y'));
	                } else {
	                    this.date(d.clone().add(1, 'h'));
	                }
	            },
	            'control down': function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().add(1, 'y'));
	                } else {
	                    this.date(d.clone().subtract(1, 'h'));
	                }
	            },
	            left: function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().subtract(1, 'd'));
	                }
	            },
	            right: function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().add(1, 'd'));
	                }
	            },
	            pageUp: function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().subtract(1, 'M'));
	                }
	            },
	            pageDown: function (widget) {
	                if (!widget) {
	                    return;
	                }
	                var d = this.date() || this.getMoment();
	                if (widget.find('.datepicker').is(':visible')) {
	                    this.date(d.clone().add(1, 'M'));
	                }
	            },
	            enter: function () {
	                this.hide();
	            },
	            escape: function () {
	                this.hide();
	            },
	            //tab: function (widget) { //this break the flow of the form. disabling for now
	            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
	            //    if(toggle.length > 0) toggle.click();
	            //},
	            'control space': function (widget) {
	                if (widget.find('.timepicker').is(':visible')) {
	                    widget.find('.btn[data-action="togglePeriod"]').click();
	                }
	            },
	            t: function () {
	                this.date(this.getMoment());
	            },
	            'delete': function () {
	                this.clear();
	            }
	        },
	        debug: false,
	        allowInputToggle: false,
	        disabledTimeIntervals: false,
	        disabledHours: false,
	        enabledHours: false,
	        viewDate: false
	    };
	}));


/***/ },
/* 80 */
/*!*****************************************!*\
  !*** ../js/3rd/datetimepicker/zh-cn.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chinese (zh-cn)
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(/*! ./moment */ 77)) :
	   typeof define === 'function' && define.amd ? define(['./moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_cn = moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm分',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah点mm分',
	            LLLL : 'YYYY年MMMD日ddddAh点mm分',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah点mm分',
	            llll : 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1 分钟',
	            mm : '%d 分钟',
	            h : '1 小时',
	            hh : '%d 小时',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 个月',
	            MM : '%d 个月',
	            y : '1 年',
	            yy : '%d 年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return zh_cn;
	
	}));

/***/ },
/* 81 */
/*!*******************************************************!*\
  !*** ../js/3rd/datetimepicker/datetimepicker.min.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/.0.21.0@css-loader!./datetimepicker.min.css */ 82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/.0.13.1@style-loader/addStyles.js */ 48)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./datetimepicker.min.css", function() {
				var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./datetimepicker.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/*!*******************************************************************************!*\
  !*** ../~/.0.21.0@css-loader!../js/3rd/datetimepicker/datetimepicker.min.css ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/.0.21.0@css-loader/lib/css-base.js */ 47)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Datetimepicker for Bootstrap 3\r\n * version : 4.17.37\r\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\r\n */.bootstrap-datetimepicker-widget{list-style:none}.bootstrap-datetimepicker-widget.dropdown-menu{margin:2px 0;padding:4px;width:19em}@media (min-width:768px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:992px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:1200px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}.bootstrap-datetimepicker-widget.dropdown-menu:before,.bootstrap-datetimepicker-widget.dropdown-menu:after{content:'';display:inline-block;position:absolute}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-bottom-color:rgba(0,0,0,0.2);top:-7px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid white;top:-6px;left:8px}.bootstrap-datetimepicker-widget.dropdown-menu.top:before{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #ccc;border-top-color:rgba(0,0,0,0.2);bottom:-7px;left:6px}.bootstrap-datetimepicker-widget.dropdown-menu.top:after{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid white;bottom:-6px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before{left:auto;right:6px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after{left:auto;right:7px}.bootstrap-datetimepicker-widget .list-unstyled{margin:0}.bootstrap-datetimepicker-widget a[data-action]{padding:6px 0}.bootstrap-datetimepicker-widget a[data-action]:active{box-shadow:none}.bootstrap-datetimepicker-widget .timepicker-hour,.bootstrap-datetimepicker-widget .timepicker-minute,.bootstrap-datetimepicker-widget .timepicker-second{width:54px;font-weight:bold;font-size:1.2em;margin:0}.bootstrap-datetimepicker-widget button[data-action]{padding:6px}.bootstrap-datetimepicker-widget .btn[data-action=\"incrementHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Increment Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=\"incrementMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Increment Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=\"decrementHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Decrement Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=\"decrementMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Decrement Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=\"showHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Show Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=\"showMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Show Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=\"togglePeriod\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Toggle AM/PM\"}.bootstrap-datetimepicker-widget .btn[data-action=\"clear\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Clear the picker\"}.bootstrap-datetimepicker-widget .btn[data-action=\"today\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Set the date to today\"}.bootstrap-datetimepicker-widget .picker-switch{text-align:center}.bootstrap-datetimepicker-widget .picker-switch::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Toggle Date and Time Screens\"}.bootstrap-datetimepicker-widget .picker-switch td{padding:0;margin:0;height:auto;width:auto;line-height:inherit}.bootstrap-datetimepicker-widget .picker-switch td span{line-height:2.5;height:2.5em;width:100%}.bootstrap-datetimepicker-widget table{width:100%;margin:0}.bootstrap-datetimepicker-widget table td,.bootstrap-datetimepicker-widget table th{text-align:center;border-radius:4px}.bootstrap-datetimepicker-widget table th{height:20px;line-height:20px;width:20px}.bootstrap-datetimepicker-widget table th.picker-switch{width:145px}.bootstrap-datetimepicker-widget table th.disabled,.bootstrap-datetimepicker-widget table th.disabled:hover{background:none;color:#777;cursor:not-allowed}.bootstrap-datetimepicker-widget table th.prev::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Previous Month\"}.bootstrap-datetimepicker-widget table th.next::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Next Month\"}.bootstrap-datetimepicker-widget table thead tr:first-child th{cursor:pointer}.bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#eee}.bootstrap-datetimepicker-widget table td{height:54px;line-height:54px;width:54px}.bootstrap-datetimepicker-widget table td.cw{font-size:.8em;height:20px;line-height:20px;color:#777}.bootstrap-datetimepicker-widget table td.day{height:20px;line-height:20px;width:20px}.bootstrap-datetimepicker-widget table td.day:hover,.bootstrap-datetimepicker-widget table td.hour:hover,.bootstrap-datetimepicker-widget table td.minute:hover,.bootstrap-datetimepicker-widget table td.second:hover{background:#eee;cursor:pointer}.bootstrap-datetimepicker-widget table td.old,.bootstrap-datetimepicker-widget table td.new{color:#777}.bootstrap-datetimepicker-widget table td.today{position:relative}.bootstrap-datetimepicker-widget table td.today:before{content:'';display:inline-block;border:solid transparent;border-width:0 0 7px 7px;border-bottom-color:#337ab7;border-top-color:rgba(0,0,0,0.2);position:absolute;bottom:4px;right:4px}.bootstrap-datetimepicker-widget table td.active,.bootstrap-datetimepicker-widget table td.active:hover{background-color:#337ab7;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.bootstrap-datetimepicker-widget table td.active.today:before{border-bottom-color:#fff}.bootstrap-datetimepicker-widget table td.disabled,.bootstrap-datetimepicker-widget table td.disabled:hover{background:none;color:#777;cursor:not-allowed}.bootstrap-datetimepicker-widget table td span{display:inline-block;width:54px;height:54px;line-height:54px;margin:2px 1.5px;cursor:pointer;border-radius:4px}.bootstrap-datetimepicker-widget table td span:hover{background:#eee}.bootstrap-datetimepicker-widget table td span.active{background-color:#337ab7;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.bootstrap-datetimepicker-widget table td span.old{color:#777}.bootstrap-datetimepicker-widget table td span.disabled,.bootstrap-datetimepicker-widget table td span.disabled:hover{background:none;color:#777;cursor:not-allowed}.bootstrap-datetimepicker-widget.usetwentyfour td.hour{height:27px;line-height:27px}.bootstrap-datetimepicker-widget.wider{width:21em}.bootstrap-datetimepicker-widget .datepicker-decades .decade{line-height:1.8em !important}.input-group.date .input-group-addon{cursor:pointer}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}", ""]);
	
	// exports


/***/ },
/* 83 */
/*!****************************************!*\
  !*** ../js/plugins/property/select.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ../../App */ 51),
	    __webpack_require__(/*! ../EventDispatch */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, Dispatch) {
	
	    Dispatch.reg(new Dispatch.ChangeHandle({
	        name: 'Select',
	        initEvent: function(event) {
	            App.dom.property.on('click', '.dropdown-select li', function(event) {
	                var input = $(event.target).find('input');
	                input.closest('.form-group').find(':hidden[data-role=text]').val(input.attr('data-text'));
	                setTimeout(function() {
	                    App.PropertyPanel.doChangeHandle(input[0]);
	                }, 0);
	            });
	        },
	        init: function() {
	            App.once('ready', this.initEvent.bind(this));
	        }
	    }));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 84 */
/*!**************************************!*\
  !*** ../js/plugins/property/Save.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ../../App */ 51),
	  __webpack_require__(/*! ../EventDispatch */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App, Dispatch) {
	
	  Dispatch.reg(new Dispatch.ActionHandle({
	    name: 'Save',
	    onSave: function (event) {
	      var panel = App.PropertyPanel;
	      if (App.options.debug == true) {
	        panel.change();
	        return;
	      }
	
	      var change = true;
	      var firstScrollTop = -1;
	      panel.dom.find("[data-required=true]").each(function (i, input) {
	        var $form = $(input).closest('.form-group');
	        if (input.value == '') {
	          $form.addClass('has-error');
	          $form.attr('title', '必填字段不能为空');
	          change = false;
	          if (firstScrollTop < 0) {
	            firstScrollTop = $form[0].offsetTop;
	          }
	        } else {
	          $form.removeClass('has-error');
	          $form.removeAttr('title');
	        }
	      });
	
	      if (change) {
	        panel.change();
	      } else {
	        panel.dom.closest('.scrollable')[0].scrollTop = firstScrollTop - 20;
	      }
	    },
	    initEvent: function () {
	      var me = this;
	      App.dom.okButton.on('click', function (event) {
	        me.onSave(event);
	      });
	    },
	    init: function () {
	      var me = this;
	      App.once('ready', function () {
	        me.initEvent();
	      });
	    }
	  }));
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 85 */
/*!************************************************!*\
  !*** ../js/plugins/property/ImageLinkGroup.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! ../../App */ 51),
	    __webpack_require__(/*! ../EventDispatch */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, Dispatch) {
	
	    function ArrayRemove(array, index, length) {
	        if (array.length < index) {
	            index = array.length;
	        } else if (index < 0) {
	            index = 0;
	        }
	
	        if (length > array.length) {
	            length = array.length;
	        } else if (length < array.length) {
	
	        } else {
	            length = 1;
	        }
	        array.splice(index, length);
	        return array;
	    };
	
	
	    Dispatch.reg(new Dispatch.ActionHandle({
	        name: 'ImageLinkGroup',
	        onDel: function(target) {
	            var attrKey = 'data-group-index';
	            var group = $(target).closest('[' + attrKey + ']');
	            var index = group.attr(attrKey);
	            var name = group.attr('data-group-name');
	
	            var property = App.PropertyPanel.getProperty();
	
	            var list = property[name] || [];
	
	            ArrayRemove(list, index, 1);
	
	            App.emit('update.Property', {
	                property: property
	            });
	
	        },
	        onAdd: function(target) {
	            var name = $(target).attr('data-group-name');
	            var property = App.PropertyPanel.getProperty();
	            var list = property[name] || [];
	
	            list.push({
	
	            });
	
	            property[name] = list;
	
	            App.emit('update.Property', {
	                property: property
	            });
	        },
	        initEvent: function() {
	            var me = this;
	            var dom = App.dom.property;
	            dom.on('click', '[data-action=delItem]', function(event) {
	                me.onDel(event.target);
	            });
	            dom.on('click', '[data-action=addItem]', function(event) {
	                me.onAdd(event.target);
	            });
	        },
	        init: function() {
	            var me = this;
	
	            App.once('ready', function() {
	                me.initEvent();
	            });
	        }
	    }));
	
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 86 */
/*!******************************************!*\
  !*** ../js/plugins/property/LinkType.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! js/App */ 51),
	  __webpack_require__(/*! js/plugins/EventDispatch */ 70),
	  __webpack_require__(/*! js/misc/TemplateHelper */ 55)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (App, Dispatch, helper) {
	
	
	  var LinkTypeData = {
	    init: function () {
	      this.load();
	    },
	    load: function () {
	      var data = App.options.linkTypeData;
	      if (!data) {
	        throw new Error('App.options.LinkTypeData is Null');
	      }
	      this.doLoad(data);
	    },
	    doLoad: function (data) {
	      var map = {};
	      for (var i = 0, len = data.length; i < len; i++) {
	        var item = data[i];
	        map[item.value] = item;
	      }
	      this.data = data;
	      this.map = map;
	    }
	  };
	
	  function getLayout(data){
	    return (data && data.parent && data.parent) ? data.parent.layout :'';
	  }
	
	  helper.register({
	    '::getLinkTypeList': function (data) {
	      var layout=getLayout(data);
	      if(layout=="pro_2"){
	        return [LinkTypeData.map[5]];
	      }
	      return LinkTypeData.data;
	    },
	    '::getLinkTypeText': function (data) {
	      var layout=getLayout(data);
	      if(layout=="pro_2"){
	        return LinkTypeData.map[5].key;
	      }
	      var item = LinkTypeData.map[data.linkType] || {};
	      return item.key || '';
	    },
	    '::setDefaultLinkType' : function(item,data){
	      var layout=getLayout(item);
	      if(layout=="pro_2"){
	        item.linkType = '5';
	      }else if(!item.linkType){
	        item.linkType = '7';
	      }
	    }
	  });
	
	/*
	  var TagTypeData = {
	    init: function () {
	      this.load();
	    },
	    load: function () {
	      var data = App.options.tagTypeData;
	      if (!data) {
	        throw new Error('App.options.tagTypeData is Null');
	      }
	      this.doLoad(data);
	    },
	    doLoad: function (data) {
	      var map = {};
	      for (var i = 0, len = data.length; i < len; i++) {
	        var item = data[i];
	        map[item.value] = item;
	      }
	      this.data = data;
	      this.map = map;
	    }
	  };
	
	
	  helper.register({
	    '::getTagTypeList': function () {
	      return TagTypeData.data;
	    },
	    '::getTagTypeText': function (data) {
	      var item = TagTypeData.map[data.tag] || {};
	      return item.key || '';
	    }
	  });
	
	  */
	  Dispatch.reg(new Dispatch.ChangeHandle({
	    name: 'LinkType',
	    onLinkType: function (event) {
	
	      var formGroup = $(event.target).closest('.form-group').parent();
	      var linkId = formGroup.find('input[name=linkId]');
	      var linkName = formGroup.find('input[name=linkName]');
	
	      linkId.val('');
	      linkName.val('');
	
	      App.emit('update.Property');
	    },
	    onSelected: function (event) {
	      var formGroup = $(event.target).closest('.form-group');
	      var dataGroup = $(event.target).closest('[data-group-name]');
	      var linkType = dataGroup.find(':checked[name=linkType]:first');
	      var linkId = formGroup.find('input[name=linkId]');
	      var linkName = formGroup.find('input[name=linkName]');
	      function callback(item) {
	        linkId.val(item.id || item.linkId);
	        linkName.val(item.text || item.linkName);
	      };
	      App.options.onLinkSelected && App.options.onLinkSelected(linkType.val(), callback);
	
	    },
	    initEvent: function () {
	      var me = this;
	      App.dom.property.on('click', '[data-role=linkSelected]', function (event) {
	        me.onSelected(event);
	      });
	      this.on('linkType', this.onLinkType.bind(this));
	    },
	    init: function () {
	
	      var me = this;
	      App.once('ready', function () {
	        me.initEvent();
	        LinkTypeData.init();
	        //TagTypeData.init();
	      });
	    }
	  }));
	
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 87 */
/*!****************************************!*\
  !*** ../js/plugins/property/height.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! js/App */ 51),
	    __webpack_require__(/*! ../EventDispatch */ 70)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(App, Dispatch) {
	
	    Dispatch.reg(new Dispatch.ChangeHandle({
	        name: 'Height',
	        onHeight: function(event) {
	            var target = $(event.target);
	            var value = target.val();
	            if (+value >= (App.options.MIN_HEIGHT || 30) && +value <= (App.options.MAX_HEIGHT || 500)) {
	
	            } else {
	                target.val('');
	            }
	        },
	        init: function() {
	            this.on('height', this.onHeight.bind(this));
	        }
	    }));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map