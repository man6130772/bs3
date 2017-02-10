window.loadTPLSHandle = function(tplsModule, isEdit, callback) {
    var tplsIndexModule = {
        exports: {}
    };
    window.module = tplsIndexModule;

    include.js('dev/tpls.index.js', function() {
        var exports = tplsIndexModule.exports;
        var modules = exports.modules;
        var tplsHandle = exports.tplsHandle;

        var editModuleMap = {};
        var previewModuleMap = {};
        var propertyFiledModule = [];
        var viewFiledModule = [];
        var tplsArray=[];

        for (var i = 0, len = modules.length; i < len; i++) {
            var item = modules[i];
            editModuleMap[item.name] = tplsHandle.define(item);
            previewModuleMap[item.name] = tplsHandle.define(item, true);
            tplsArray.push(item.name);
        }

        var fields = exports.fields;
        var view = fields.view;

        viewFiledModule = tplsHandle.defineFields('view', fields.view);

        var property = fields.property;
        propertyFiledModule = tplsHandle.defineFields('property', fields.property);

        var editSource = [tplsHandle.header(), viewFiledModule, propertyFiledModule];
        var previewSource = [tplsHandle.header(), viewFiledModule];
 
        for (var i = 0, len = tplsArray.length; i < len; i++) {
            var moduleName = tplsArray[i];
            editSource.push(editModuleMap[moduleName]);
            previewSource.push(previewModuleMap[moduleName]);
        }
        editSource.push(tplsHandle.footer());
        previewSource.push(tplsHandle.footer());
        var code;
        if (isEdit) {
            code = editSource.join('');
        } else {
            code = previewSource.join('');
        }
        //var fn = new Function(code);
        //fn();
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.appendChild(document.createTextNode(code));

        delete window.module;
        
        var root = document.head || document.body;
        root.insertBefore(script, root.lastChild);
        callback && callback();
    });

};
