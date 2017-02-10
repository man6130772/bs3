define([
  'js/App',
  'js/plugins/EventDispatch',
  "js/misc/TemplateHelper"
], function (App, Dispatch, helper) {


  var LinkTypeData = {
    init: function () {
      this.load();
    },
    load: function () {
      var data = App.options.linkTypeData;
      if (!data) {
        throw new Error('App.options.LinkTypeData is Null');
      }
      this.doLoad(data);
    },
    doLoad: function (data) {
      var map = {};
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        map[item.value] = item;
      }
      this.data = data;
      this.map = map;
    }
  };

  function getLayout(data){
    return (data && data.parent && data.parent) ? data.parent.layout :'';
  }

  helper.register({
    '::getLinkTypeList': function (data) {
      var layout=getLayout(data);
      if(layout=="pro_2"){
        return [LinkTypeData.map[5]];
      }
      return LinkTypeData.data;
    },
    '::getLinkTypeText': function (data) {
      var layout=getLayout(data);
      if(layout=="pro_2"){
        return LinkTypeData.map[5].key;
      }
      var item = LinkTypeData.map[data.linkType] || {};
      return item.key || '';
    },
    '::setDefaultLinkType' : function(item,data){
      var layout=getLayout(item);
      if(layout=="pro_2"){
        item.linkType = '5';
      }else if(!item.linkType){
        item.linkType = '7';
      }
    }
  });

/*
  var TagTypeData = {
    init: function () {
      this.load();
    },
    load: function () {
      var data = App.options.tagTypeData;
      if (!data) {
        throw new Error('App.options.tagTypeData is Null');
      }
      this.doLoad(data);
    },
    doLoad: function (data) {
      var map = {};
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        map[item.value] = item;
      }
      this.data = data;
      this.map = map;
    }
  };


  helper.register({
    '::getTagTypeList': function () {
      return TagTypeData.data;
    },
    '::getTagTypeText': function (data) {
      var item = TagTypeData.map[data.tag] || {};
      return item.key || '';
    }
  });

  */
  Dispatch.reg(new Dispatch.ChangeHandle({
    name: 'LinkType',
    onLinkType: function (event) {

      var formGroup = $(event.target).closest('.form-group').parent();
      var linkId = formGroup.find('input[name=linkId]');
      var linkName = formGroup.find('input[name=linkName]');

      linkId.val('');
      linkName.val('');

      App.emit('update.Property');
    },
    onSelected: function (event) {
      var formGroup = $(event.target).closest('.form-group');
      var dataGroup = $(event.target).closest('[data-group-name]');
      var linkType = dataGroup.find(':checked[name=linkType]:first');
      var linkId = formGroup.find('input[name=linkId]');
      var linkName = formGroup.find('input[name=linkName]');
      function callback(item) {
        linkId.val(item.id || item.linkId);
        linkName.val(item.text || item.linkName);
      };
      App.options.onLinkSelected && App.options.onLinkSelected(linkType.val(), callback);

    },
    initEvent: function () {
      var me = this;
      App.dom.property.on('click', '[data-role=linkSelected]', function (event) {
        me.onSelected(event);
      });
      this.on('linkType', this.onLinkType.bind(this));
    },
    init: function () {

      var me = this;
      App.once('ready', function () {
        me.initEvent();
        LinkTypeData.init();
        //TagTypeData.init();
      });
    }
  }));


});
