define([
    '../../App',
    '../EventDispatch'
], function(App, Dispatch) {

    function ArrayRemove(array, index, length) {
        if (array.length < index) {
            index = array.length;
        } else if (index < 0) {
            index = 0;
        }

        if (length > array.length) {
            length = array.length;
        } else if (length < array.length) {

        } else {
            length = 1;
        }
        array.splice(index, length);
        return array;
    };


    Dispatch.reg(new Dispatch.ActionHandle({
        name: 'ImageLinkGroup',
        onDel: function(target) {
            var attrKey = 'data-group-index';
            var group = $(target).closest('[' + attrKey + ']');
            var index = group.attr(attrKey);
            var name = group.attr('data-group-name');

            var property = App.PropertyPanel.getProperty();

            var list = property[name] || [];

            ArrayRemove(list, index, 1);

            App.emit('update.Property', {
                property: property
            });

        },
        onAdd: function(target) {
            var name = $(target).attr('data-group-name');
            var property = App.PropertyPanel.getProperty();
            var list = property[name] || [];

            list.push({

            });

            property[name] = list;

            App.emit('update.Property', {
                property: property
            });
        },
        initEvent: function() {
            var me = this;
            var dom = App.dom.property;
            dom.on('click', '[data-action=delItem]', function(event) {
                me.onDel(event.target);
            });
            dom.on('click', '[data-action=addItem]', function(event) {
                me.onAdd(event.target);
            });
        },
        init: function() {
            var me = this;

            App.once('ready', function() {
                me.initEvent();
            });
        }
    }));


});
