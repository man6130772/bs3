define(function () {
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
});
