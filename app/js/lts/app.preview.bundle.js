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
/******/ ({

/***/ 0:
/*!*************************!*\
  !*** multi app.preview ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! D:\wuhao\front-end\bs3-1.0.0\app\LTS\js\3rd\handlebars.runtime-v4.0.5.js */43);
	module.exports = __webpack_require__(/*! D:\wuhao\front-end\bs3-1.0.0\app\LTS\dev\preview.js */88);


/***/ },

/***/ 43:
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

/***/ 54:
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

/***/ 55:
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

/***/ 60:
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

/***/ 88:
/*!*************************!*\
  !*** ../dev/preview.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! js/Preview */ 89)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 89:
/*!************************!*\
  !*** ../js/Preview.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	  __webpack_require__(/*! ./tplsHelper */ 54),
	  __webpack_require__(/*! ./misc/TemplateHelper */ 55),
	  __webpack_require__(/*! js/misc/lazyloadPro */ 60)
	  // ,'js/misc/lazyload'
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (tplsHelper, helper, lazyloadPro, lazyload) {
	  var App = {
	    helper: helper,
	    data: [],
	    render: null,
	    'image-lazyload-attr':'src',
	    init: function (config) {
	      $.extend(this, config);
	      if (!this.render.jquery) {
	        this.render = $(this.render);
	      }
	      this.initView(this.data || []);
	      this.ready();
	      //lazyload(this.render.parent()[0]);
	      lazyloadPro(this, this.render[0]);
	    },
	    ready: function () {},
	    initView: function (propertys) {
	      var array = [];
	      this.table=JSON.parse(JSON.stringify(propertys));
	      for (var i = 0; i < propertys.length; i++) {
	        var property = propertys[i];
	        
	        var module = App.getModule(property.layout);
	
	        if(module){
	          property.__index__=i;
	          var html = this.getHTML(this.getViewItemHTML(property), property.layout);
	          array.push(html);
	        }
	        
	      }
	      this.render.html(array.join(''));
	    },
	    getViewItemHTML: function (property) {
	
	      var module = App.getModule(property.layout);
	      
	      var template = module.view;
	
	      var html = 'no find view template: ' + property.layout;
	      if (template) {
	        html = App.helper.exec(template, property, this);
	      }
	      return html;
	    },
	    getHTML: function (html, layout) {
	      return html;
	    },
	    callBlockHandle: function (blockName, args, options) {
	      var method = this[blockName];
	      if (method) {
	        return method.apply(this, args);
	      }
	      return this.getFiledHTML(blockName, args, options);
	    },
	    getLink: function (data) {
	      var link;
	      if (data.linkType != 7 && this.getLinkURL) {
	        link = this.getLinkURL(data.linkId, data.linkType);
	      }
	      return link || data.link || 'javascript:;';
	    },
	    getFiledHTML: function (blockName, args, options) {
	      var data = {
	        instace: this,
	        name: blockName,
	        args: args,
	        options: options,
	        result: args[0] || {}
	      };
	      var template = App.getViewField(blockName);
	      var html = 'no find view template: ' + blockName;
	      if (template) {
	        if (!data.result) {
	          data.result = args[0];
	        }
	        html = App.helper.exec(template, data.result, this);
	      }
	      return html;
	    }
	  };
	
	  helper.register({
	    'isMargin': function (margin, options) {
	      var state = /false/i.test(margin) || margin == false ? false : true;
	      if (state == true) {
	        return options.fn(this);
	      }
	      return options.inverse(this);
	    },
	    '::getSrcAttr':function(){
	        return App['image-lazyload-attr'];
	    }
	
	  });
	  tplsHelper(App);
	
	
	  window.App = App;
	  window.initApp && window.initApp(App);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

/******/ });
//# sourceMappingURL=app.preview.bundle.js.map