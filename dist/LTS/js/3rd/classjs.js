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