define([
    '../../App',
    '../EventDispatch'
], function(App, Dispatch) {

    Dispatch.reg(new Dispatch.ChangeHandle({
        name: 'Select',
        initEvent: function(event) {
            App.dom.property.on('click', '.dropdown-select li', function(event) {
                var input = $(event.target).find('input');
                input.closest('.form-group').find(':hidden[data-role=text]').val(input.attr('data-text'));
                setTimeout(function() {
                    App.PropertyPanel.doChangeHandle(input[0]);
                }, 0);
            });
        },
        init: function() {
            App.once('ready', this.initEvent.bind(this));
        }
    }));
});
