/**
 * OCP - Omni Channel Platform
 * @version 1.0.1
 * @contact wu.h1
 * @update 2017/1/6 15:16
 */
var __CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
};

var bootPATH = __CreateJSPath("boot.js");

document.write('<script src="' + bootPATH + 'libs/jquery.min.js" type="text/javascript"></script>');
document.write('<script src="' + bootPATH + 'ui.js" type="text/javascript"></script>');
document.write('<script src="' + bootPATH + 'base.js" type="text/javascript"></script>');
document.write('<script src="' + bootPATH + 'components.js" type="text/javascript"></script>');
