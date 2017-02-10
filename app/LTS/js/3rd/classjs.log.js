(function() {
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
