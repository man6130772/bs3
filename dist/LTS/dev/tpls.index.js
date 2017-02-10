module.exports = {
    tplsHandle: {
        header: function() {
            return [
                'define("tpls",function() {\n',
                '   var tpls={modules:[],fields:{}};\n',
                '   window.AppTPLs=tpls;\n',
                '   return tpls;\n',
                '});\n'

            ].join('');
        },
        footer: function() {
            return [
                'window.onTPLReady && window.onTPLReady(window.AppTPLs);'
            ].join('');
        },
        define: function(item, isPreview) {
            return [
                'define("', item.name, '", [\n',
                '   "tpls",\n',
                '   "hbs/view/', item.name, '.hbs",\n',
                (isPreview == true ? '' :
                    '   "hbs/property/' + item.name + '.hbs"\n'),
                '], function(tpls,view',
                (isPreview == true ? '' :
                    (', property')), ') {\n',
                '   var m={\n',
                '       name: "', item.name, '",\n',
                '       view: view',
                (isPreview == true ? '\n' :
                    (',\n' +
                        '       label: "' + item.label + '",\n' +
                        '       property: property\n')),
                '   };\n',
                '   tpls.modules.push(m);\n',
                '   tpls.modules[m.name]=m;\n',
                '});\n',
                'require(["' + item.name + '"]);\n'
            ].join('');
        },
        defineFields: function(type, array) {
            var moduleName = '"' + type + 'Field"';
            var p = [];
            var e = [];
            var args = [];
            for (var i = 0, len = array.length; i < len; i++) {
                var name = array[i];
                args.push('m' + i);
                p.push('   "hbs/' + type + '/field/' + name + '.hbs"');
                e.push('   "' + name + '":' + args[i]);
            };
            return ['define(', moduleName, ', [\n',
                '   "tpls",\n',
                p.join(',\n'),
                '\n], function(tpls,', args.join(','), ') {\n',
                '   tpls.fields.' + type + '={\n',
                e.join(',\n'),
                '\n   };\n',
                '});\n',
                'require([', moduleName, ']);\n'
            ].join('');
        }
    },
    fields: {
        view: ["image","image_bg", "footer"],
        property: ["header", "image-link", "startTime-endTime", "select", "height", "text", "daterange", "image", "link", "margin"]
    },
    modules: [{
        name: "module_l2_fixed",
        label: "模块链接2(定高)"
    },{
        name: "slides",
        label: "轮播图"
    }, {
        name: "recommend",
        label: "功能推荐"
    },/* {
        name: "module_l_1_1",
        label: "模块链接1-1"
    }, */{
        name: "module_l_1_2",
        label: "模块链接1-2"
    }, {
        name: "module_l_1_3",
        label: "模块链接1-3"
    }, {
        name: "module_l1",
        label: "模块链接1"
    }, {
        name: "module_l2",
        label: "模块链接2"
    }, {
        name: "module_l3",
        label: "模块链接3"
    }, {
        name: "module_2_1",
        label: "模块链接2-1"
    }, {
        name: "module_1_2",
        label: "模块链接1-2上下"
    }, {
        name: "module_n",
        label: "模块链接N个横铺"
    }, {
        name: "notice",
        label: "快报"
    }, {
        name: "pro_n",
        label: "商品列表N个横铺"
    }, {
        name: "pro_2",
        label: "商品列表2个横铺"
    }]
};
