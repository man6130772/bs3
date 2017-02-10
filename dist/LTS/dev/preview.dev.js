(function(include) {
    include.setRoot(include.getParentPath(include.getPath('preview.dev.js')));

    var tplsModule = {
        exports: {}
    };
    window.module = tplsModule;

    setTimeout(function() {

        include.js(
            'js/3rd/handlebars-v4.0.5.js',
            'js/3rd/require.2.2.0.js',
            'js/3rd/require.include.js',
            'js/3rd/require.config.js',
            function() {
                window.debug = true;
                include.js('dev/load.tpls.dev.js', function() {
                    window.loadTPLSHandle(tplsModule, false, function() {
                        require(['dev/preview'], function() {});
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
