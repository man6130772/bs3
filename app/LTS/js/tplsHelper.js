define(function() {
    return function(App) {
        App.getModule = function(name) {
            var modules = window.AppTPLs.modules;
            return name ? modules[name] : modules;
        };
        App.getViewField = function(name) {
            var modules = window.AppTPLs.fields.view;
            return name ? modules[name] : modules;
        };
        App.getPropertyField = function(name) {
            var modules = window.AppTPLs.fields.property;
            return name ? modules[name] : modules;
        };
    };
});
