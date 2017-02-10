define([
    './App',
    '../hbs/toolbarIcon.hbs'
], function(App, template) {

    App.reg({
        className: 'ToolBarPanel',
        singleton: true,
        template: template,
        init: function() {
            App.once('ready', this.ready.bind(this));
        },
        ready: function() {
            this.dom = App.dom.toolbar;
            this.initEvent();
            this.initToolBar();
            App.emit('ready.ToolBarPanel', {
                instace: this
            });
        },
        initEvent: function() {
            this.dom.closest('.scrollable').on('scroll', function(event) {
                event.target.scrollLeft = 0;
            });
        },
        initToolBar: function() {
            var toolbar = this.dom;
            toolbar.html(this.getToolBarHTML());

            toolbar.children().draggable({
                connectToSortable: App.dom.view,
                helper: this.dragHelper.bind(this),
                stop: this.dragStop.bind(this)
            });
        },
        getToolBarHTML: function() {
            var allModule = App.getModule();
            var modules = App.options.modules || allModule;
            var html = [];
            for (var i = 0, len = modules.length; i < len; i++) {
                var module = modules[i];
                if (!module.name) {
                    module = {
                        name: module
                    };
                }
                if(allModule[module.name]){
                    module = util.merger(allModule[module.name], module);
                    modules[i] = module;
                    modules[module.name] = module;
                    module.icon = module.icon || module.name;
                    html.push(this.template(module));    
                }
            }
            return html.join('');
        },
        dragHelper: function() {
            return '<div class="drag-helper"></div>';
        },
        dragStop: function(event, ui) {
            var name = $(event.target).attr('data-name');
            ui.helper.attr('data-name', name);
            App.emit('sortStop.ViewPanel');
        }
    }).init();

});
