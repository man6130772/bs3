define([
  "./App",
  "./tplsHelper",
  "./misc/TemplateHelper",
  "./ToolBarPanel",
  "./ViewPanel",
  "./PropertyPanel",
  "./plugins/index"
], function (App, tplsHelper, helper) {
  App.helper = helper;
  tplsHelper(App);
  App.getData = function () {
    return App.ViewPanel.getViewProperty();
  };

  helper.register({
    '::getMaxSlidesSize': function () {
      return App.options.MAX_SLIDES_SIZE || 10;
    },
    '::getMaxNoticeSize': function () {
      return App.options.MAX_NOTICE_SIZE || 5;
    },
    '::getNoticeHeight': function () {
      return App.options.NOTICE_HEIGHT || 100;
    },
    '::getModule_l2_fixed': function () {
      return App.options.MODULE_L2_FIXED_HEIGHT || 100;
    },
    '::getTagMaxLength': function () {
      return App.options.TAG_MAX_LENGTH || 4;
    },
    '::isHeightFieldReadyOlny': function (options) {
      var layout = (((options || {}).data || {}).root || {}).layout;
      if (layout == "notice" || layout == "module_l2_fixed") {
        return 'readonly';
      }
    },
    '::isChecked':function(item,parent){
      if(item.value === parent.value ){
        return 'checked';
        //item.isFirst "===" item.isLast
      }
    }
  });

  window.initApp && window.initApp(App);
});
