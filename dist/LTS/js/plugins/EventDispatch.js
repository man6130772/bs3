define([
    '../App',
    './Plugin'
], function(App, Plugin) {



    var clazz = Plugin.reg({
        className: 'EventDispatch',
        extendEvent: true,
        singleton: true,
        init: function() {
            App.once('ready', this.ready.bind(this));
        },
        initEvent: function() {
            App.on('EventDispatch', this.dispatch.bind(this));
        },
        ready: function() {
            this.initEvent();
        },
        getEventType: function(arg1, arg2, arg3) {
            var array = [];
            for (var i = 0, len = arguments.length; i < len; i++) {
                if (arguments[i]) {
                    array.push(arguments[i]);
                }
            }
            return array.join('.');
        },
        dispatch: function(event) {
            classjs.log();
            var data = event.data;
            //事件类型.状态.模块
            var eventType = this.getEventType(event.type, data.name, (data.view || {}).name);
            // App.info(this.name + '.dispatch:' + eventType);
            this.emit(eventType, data);

            //事件类型.状态
            if (data.returnValue == true) {
                eventType = this.getEventType(event.type, data.name);
                //App.info(this.name + '.dispatch:' + eventType);
                this.emit(eventType, data);
            }

        },
        handle: {},
        reg: function(EventHandle) {
            EventHandle.init();
            var eventType = this.getEventType(EventHandle.id, EventHandle.name);
            this.handle[eventType] = EventHandle;
        }
    });

    if (clazz.init) {
        clazz.init();
    }

    className = clazz.className;

    classjs({
        className: className + '.EventHandle',
        eventType: 'event',
        on: function(type, handle) {
            var eventType = clazz.getEventType(this.eventType, type, this.id);
            return clazz.on(eventType, handle);
        },
        get: function(id) {
            return $(document.getElementById(id));
        }
    });


    classjs({
        className: className + '.ChangeHandle',
        extend: className + '.EventHandle',
        eventType: 'change'
    });

    classjs({
        className: className + '.ActionHandle',
        extend: className + '.EventHandle',
        eventType: 'action'
    });


    classjs({
        className: className + '.IncludeHandle',
        extend: className + '.EventHandle',
        eventType: 'include'
    });

    return clazz;
});
