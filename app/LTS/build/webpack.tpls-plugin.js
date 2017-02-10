var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var config = require('../dev/tpls.index.js');
var tplsHandle = config.tplsHandle;
var editModuleMap = {};
var previewModuleMap = {};
var propertyFiledModule = [];
var viewFiledModule = [];
var allTPLS = [];
(function() {
    var modules = config.modules;
    for (var i = 0, len = modules.length; i < len; i++) {
        var item = modules[i];
        editModuleMap[item.name] = tplsHandle.define(item);
        previewModuleMap[item.name] = tplsHandle.define(item, true);
        allTPLS.push(item.name);
    }

    var fields = config.fields;
    var view = fields.view;
    viewFiledModule = tplsHandle.defineFields('view', fields.view);

    var property = fields.property;
    propertyFiledModule = tplsHandle.defineFields('property', fields.property);

})();

function plugin(options) {

};

plugin.prototype.apply = function(compiler) {
    var options = compiler.options;
    var tpls = options.tpls || {};
    var dist = options.output.path;

    if (!fs.existsSync(dist)) {
        mkdirp(dist);
    }

    for (var key in tpls) {
        if (!tpls.hasOwnProperty(key)) {
            return;
        }
        var value = tpls[key];
        if (value.length > 0) {
            writeTPLFile(key, value, dist, options);
        }

    }

    writeTPLFile("all", allTPLS, dist, options);
};

function writeTPLFile(key, list, dist, options) {

    var editSource = [tplsHandle.header(), viewFiledModule, propertyFiledModule];
    var previewSource = [tplsHandle.header(), viewFiledModule];

    list.forEach && list.forEach(function(name, index, array) {
        if (!editModuleMap[name] || !previewModuleMap[name]) {
            throw new Error('找不到' + name + '模版');
        }
        editSource.push(editModuleMap[name]);
        previewSource.push(previewModuleMap[name]);
    });
    var fileName = path.resolve(dist, key + '_tpls.tmp');
    var previewFileName = path.resolve(dist, key + '_tpls_preview.tmp');
    options.entry[key + '.tpls'] = fileName;
    options.entry[key + '.tpls.preview'] = previewFileName;

    editSource.push(tplsHandle.footer());
    previewSource.push(tplsHandle.footer());
    fs.writeFileSync(fileName, editSource.join('\n'));
    fs.writeFileSync(previewFileName, previewSource.join('\n'));
};

module.exports = plugin;
