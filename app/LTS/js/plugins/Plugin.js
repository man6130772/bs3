define([
    '../App'
], function(App) {
    App.plugins = {
        className: App.className + '.plugins',
        reg: function(module) {
            var className = this.className + '.' + module.className;
            module.name = module.className;
            module.className = className;
            classjs(module);
            return classjs.getClass(className);
        }
    };
    return App.plugins;
});
