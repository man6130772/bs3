(function(include) {
    include.setRoot(include.getParentPath(include.getPath('app.dev.js')));

    var tplsModule = {
        exports: {}
    };
    window.module = tplsModule;

    var appRootPath=include.getParentPath(include.getParentPath(include.getPath('app.dev.js')));
    include.css(appRootPath+'css/lts.css');

    setTimeout(function() {
        include.js(
            'js/3rd/handlebars-v4.0.5.js',
            'js/3rd/require.2.2.0.js',
            'js/3rd/require.include.js',
            'js/3rd/require.config.js',
            function() {
                window.debug = true;

                include.js('dev/load.tpls.dev.js', function() {
                    window.loadTPLSHandle(tplsModule, true, function() {
                        require(['dev/index'], function() {
                            //logDebug();
                        });
                    });
                });

            });
    }, 500);

})((function(exports) {

    var include = exports.include ? exports.include : function(src, callback) {
        return __include__('js', src, callback);
    };


    function __include__(type, src, callback) {
        var pack = null;
        if (!src || include.scripts[src]) {
            return;
        }
        if (!/^http/i.test(src)) {
            src = include.getRoot() + src;
        }
        var head = include.head;
        if (type == "css") {
            pack = document.createElement("link");
            pack.rel = "stylesheet";
            pack.type = "text/css";
            pack.href = src;
        } else {
            pack = document.createElement("script");
            if (type == "javascript" || type == "js") {
                type = "text/javascript";
            } else {
                type = "text/html";
            }
            pack.type = type;
            pack.src = src;
        }


        include.scripts[pack.src || pack.href] = 1;

        if (pack) {
            head.insertBefore(pack, head.lastChild);
            if (callback) {
                pack.onload = pack.onreadystatechange = function(_, isAbort) {
                    if (isAbort || !pack.readyState || /loaded|complete/.test(pack.readyState)) {
                        pack.onload = pack.onreadystatechange = null;
                        pack = undefined;
                        if (!isAbort && callback) {
                            callback(200, "success");
                        }
                    }
                };
                pack.onerror = callback;
            }
            return 1;
        }
        return 0;
    };


    include.head = (function() {
        return document.head || document.body || document.documentElement;
    })();


    include.queue = function(type, src1, src2, src3, callback) {
        var array = [].slice.apply(arguments);
        var len = array.length - 1;
        var index = 1;

        function get() {
            if (index == len) {
                var fn = array[len];
                if (typeof fn == "function") {
                    fn();
                } else if (typeof fn == "string") {
                    __include__(type, fn);
                }
                return;
            }
            var url = array[index++];
            if (url) {
                __include__(type, url, get);
            }
        }
        get();
    };


    include.css = function(src1, src2, src3, callback) {
        var args = ['css'];
        args.push.apply(args, arguments);
        this.queue.apply(this, args);
    };

    include.js = function(src1, src2, src3, callback) {
        var args = ['js'];
        args.push.apply(args, arguments);
        this.queue.apply(this, args);
    };

    include.text = function(src1, src2, src3, callback) {
        var args = ['text'];
        args.push.apply(args, arguments);
        this.queue.apply(this, args);
    };



    (function() {
        var paths = window.location.href.split(/\//);
        var dirPath;
        var len = paths.length - 1;
        var dirPath = paths.slice(0, len).join('\/') + '/';
        var rootPath = paths.slice(0, 3).join('\/') + '/';
        include.getRoot = function() {
            return rootPath || '';
        };


        include.setRoot = function(path) {
            console.info('root:' + path);
            rootPath = path || '';
        };

        include.getDirRoot = function() {
            return dirPath || '';
        };

    })();



    include.scripts = {};

    include.getScript = function() {
        var scripts = document.scripts;
        for (var i = 0, len = scripts.length; i < len; i++) {
            var s = scripts[i];
            if (s.src) {
                include.scripts[s.src] = 1;
            }
        }
    };

    include.getPath = function(fileName) {
        include.getScript();
        var regx = new RegExp(fileName.replace('.', '\\.'), 'i');
        for (var url in include.scripts) {
            var urls = url.split(regx);
            if (urls && urls.length >= 2) {
                return urls[0];
            };
        }
        return '';
    };

    include.getParentPath = function(url) {
        if (!url) {
            return include.getRoot();
        }
        var paths = url.split(/\//);
        var len = paths.length - 1;
        if (url.match(/\/$/)) {
            len = paths.length - 2;
        }
        var basePath = paths.slice(0, len).join('\/');
        return basePath + '/';
    };

    exports.include = include;

    return include;

})(this));

function logDebug() {
    (function() {

        function dateFormat(date, f) {
            var format = f || 'yyyy-MM-dd hh:mm:ss',
                o = {
                    "M+": date.getMonth() + 1,
                    "d+": date.getDate(),
                    "h+": date.getHours(),
                    "m+": date.getMinutes(),
                    "s+": date.getSeconds(),
                    "q+": Math.floor((date.getMonth() + 3) / 3),
                    "S": date.getMilliseconds()
                };
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        };

        Date.prototype.format = function(f) {
            return dateFormat(this, f);
        };

        var classjs = window.classjs;
        var util = window.util;

        var each = util.each,
            it = util.it,
            merger = util.merger,
            apply = util.apply,
            isObject = util.isObject,
            ArraySlice = [].slice;


        classjs.debug = true;


        //重写并实现log方法
        var data = {
                arg: true,
                time: true,
                type: true,
                method: true
            },
            log = classjs.log = (function() {

                var index = 1;
                return function(owner) {
                    if (!this.debug) {
                        this.log = function() {};
                        return;
                    }
                    var caller = arguments.callee.caller,
                        callerInfo = owner && owner.className ? log.getCallerInfoByInstance(owner, caller) : log.getCallerInfo(caller),
                        info,
                        time,
                        type;
                    if (!callerInfo) {
                        return;
                    }
                    if (log.timeformat) {
                        time = new Date().format(log.timeformat);
                    }
                    type = '[INFO-' + (index++) + ']';

                    method = callerInfo.className + '.' + (callerInfo.isOverride ? '$' : '') + (callerInfo.isEventHandle ? '#' : '') + callerInfo.method;

                    info = {
                        time: time,
                        type: type,
                        method: method,
                        arg: callerInfo.arg,
                        msg: {
                            info: [time || '', type, method].join(' '),
                            arg: callerInfo.arg
                        }
                    };

                    if (data) {
                        if (data.time == false) {
                            delete info.time;
                        }
                        if (data.type == false) {
                            delete info.type;
                        }
                        if (data.method == false) {
                            delete info.method;
                        }
                        if (data.arg == false) {
                            delete info.arg;
                        }
                    }

                    log.print(info);
                };
            })();

        merger(log, {
            maxLength: 100,
            setConfig: function(config) {
                merger(data, config);
            },
            timeformat: 'hh:mm:ss',
            getCallerInfoByInstance: function(instance, caller) {
                var clazz = instance.getClass(),
                    method = caller.__name__,
                    arg = ArraySlice.call(caller.arguments, 0);

                if (!clazz && arg && arg[0] && arg[0].__isEvent__) {
                    clazz = {
                        className: 'classjs.eventDispatch'
                    };
                    method = arg[0].__type__;
                }

                if (clazz) {
                    return {
                        'class': clazz,
                        className: instance.className,
                        method: method,
                        isOverride: caller.__isOverride__,
                        isEventHandle: caller.__isEventHandle__,
                        arg: arg
                    };
                }
            },
            getCallerInfo: function(caller) {
                var clazz = caller.__owner__,
                    method = caller.__name__,
                    arg = ArraySlice.call(caller.arguments, 0);

                if (!clazz && arg && arg[0] && arg[0].__isEvent__) {
                    clazz = {
                        className: 'classjs.eventDispatch'
                    };
                    method = arg[0].__type__;
                }

                if (clazz) {
                    return {
                        'class': clazz,
                        className: clazz.className,
                        method: method,
                        isOverride: caller.__isOverride__,
                        isEventHandle: caller.__isEventHandle__,
                        arg: arg
                    };
                }
                return false;
            },
            print: (function() {
                if (!window.console || !window.console.info || /mobile/gi.test(navigator.userAgent)) {
                    var DOC = document,
                        index = 0,
                        styleText = [
                            '.classjs-log-box {',
                            '    position: absolute;',
                            '    right: 0px;',
                            '    bottom: 0px;',
                            '    height: 200px;',
                            '    left: 0px;',
                            '    font-size: 14px;',
                            '    font-family: Verdana, Arial;',
                            '    overflow-y: auto;',
                            '    overflow-x: hidden;',
                            '    margin: 5px;',
                            '    text-shadow: 0px 0px 0px #000000;',
                            '    overflow-y: auto;',
                            '    overflow-x: hidden;',
                            '}',
                            '.classjs-log-item {',
                            '    white-space: nowrap;',
                            '}',
                            '.classjs-log-item .time {',
                            '    color: #555;',
                            '    padding-right: 3px;',
                            '}',
                            '.classjs-log-item .type {',
                            '    color: #091;',
                            '    padding-right: 3px;',
                            '}',
                            '.classjs-log-item .method {',
                            '    color: #08F;',
                            '}',
                            '.classjs-log-item .arg {',
                            '    color: #aaa;',
                            '    max-width: 70%;',
                            '    text-overflow: ellipsis;',
                            '    display: inline-block;',
                            '    overflow: hidden;',
                            '    vertical-align: bottom;',
                            '}',
                            '.classjs-log-item .arg .key {',
                            '    color: #CD3DC3;',
                            '}',
                            '.classjs-log-item .arg .value {',
                            '    color: #C86D6B;',
                            '}'
                        ].join('').replace(/\s\s/g, ''),

                        div = DOC.createElement("div"),

                        logBox = DOC.createElement("div"),
                        lastChild = DOC.body.lastChild,
                        body = DOC.body;

                    div.innerHTML = '_<style  type=\"text/css\">' + styleText + '</style>';
                    div.removeChild(div.firstChild); //针对低版本Safari和Chrome
                    body.insertBefore(div.firstChild, lastChild);

                    logBox.className = "classjs-log-box";

                    body.insertBefore(logBox, lastChild);

                    function getInfo(info) {
                        var arg = null,
                            result = [];
                        if (info.time) {
                            result.push('<span class="time">', info.time, '</span>');
                        }

                        if (info.type) {
                            result.push('<span class="type">', info.type, '</span>');
                        }

                        if (info.method) {
                            result.push('<span class="method">', info.method, '(</span>');
                        }

                        if (info.arg) {
                            arg = getArg(info.arg);
                            if (arg) {
                                result.push('<span class="arg">', arg, '</span>');
                            }
                        }
                        return result.join('') + '<span class="method">)</span>';
                    };

                    function getArg(arg) {
                        var args = [];
                        each(arg, function(i, item) {
                            if (isObject(item)) {
                                var o = [];
                                it(item, function(k, v) {
                                    o.push('"<span class="key">' + k + '</span>" : <span class="value">"' + v + '</span>"');
                                });
                                args.push('{' + o.join(', ') + '}');
                            } else {
                                args.push(item);
                            }
                        });
                        return args.join(',');
                    };

                    return function(info) {
                        if (index >= this.maxLength) {
                            logBox.innerHTML = '';
                            index = 0;
                        }
                        var div = DOC.createElement("div");
                        div.className = "classjs-log-item";
                        div.innerHTML = getInfo(info);
                        logBox.appendChild(div);
                        logBox.scrollTop = logBox.scrollHeight;

                        index++;
                    };
                } else {
                    return function(info) {
                        console.info(info.msg.info + '()', info.msg.arg);
                    };
                }
            })()
        });
    })();
};
