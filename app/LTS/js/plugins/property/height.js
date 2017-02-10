define([
    'js/App',
    '../EventDispatch'
], function(App, Dispatch) {

    Dispatch.reg(new Dispatch.ChangeHandle({
        name: 'Height',
        onHeight: function(event) {
            var target = $(event.target);
            var value = target.val();
            if (+value >= (App.options.MIN_HEIGHT || 30) && +value <= (App.options.MAX_HEIGHT || 500)) {

            } else {
                target.val('');
            }
        },
        init: function() {
            this.on('height', this.onHeight.bind(this));
        }
    }));
});
