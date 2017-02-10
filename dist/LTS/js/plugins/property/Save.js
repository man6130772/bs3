define([
  '../../App',
  '../EventDispatch'
], function (App, Dispatch) {

  Dispatch.reg(new Dispatch.ActionHandle({
    name: 'Save',
    onSave: function (event) {
      var panel = App.PropertyPanel;
      if (App.options.debug == true) {
        panel.change();
        return;
      }

      var change = true;
      var firstScrollTop = -1;
      panel.dom.find("[data-required=true]").each(function (i, input) {
        var $form = $(input).closest('.form-group');
        if (input.value == '') {
          $form.addClass('has-error');
          $form.attr('title', '必填字段不能为空');
          change = false;
          if (firstScrollTop < 0) {
            firstScrollTop = $form[0].offsetTop;
          }
        } else {
          $form.removeClass('has-error');
          $form.removeAttr('title');
        }
      });

      if (change) {
        panel.change();
      } else {
        panel.dom.closest('.scrollable')[0].scrollTop = firstScrollTop - 20;
      }
    },
    initEvent: function () {
      var me = this;
      App.dom.okButton.on('click', function (event) {
        me.onSave(event);
      });
    },
    init: function () {
      var me = this;
      App.once('ready', function () {
        me.initEvent();
      });
    }
  }));

});
