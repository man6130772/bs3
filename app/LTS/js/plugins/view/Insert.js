define([
  'js/App',
  '../EventDispatch'
], function (App, Dispatch) {

  Dispatch.reg(new Dispatch.ActionHandle({
    name: 'Insert',
    onInsert: function (event) {
      if (App.options.debug == true) {
        return;
      }
      App.dom.mask.show();
      App.dom.cancelButton.show();
    },
    initEvent: function () {
      var me = this;
      App.dom.cancelButton.on('click', function (event) {
        App.emit('cancel.Property');

        App.dom.mask.hide();
        App.dom.cancelButton.hide();
      });

      App.on('change.Property', function () {
        App.dom.mask.hide();
        App.dom.cancelButton.hide();
      });
    },
    init: function () {
      var me = this;
      App.once('ready', function () {
        me.initEvent();
      });
      this.on('insert', this.onInsert.bind(this));
    }
  }));


});
