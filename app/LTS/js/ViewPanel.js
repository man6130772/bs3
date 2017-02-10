define([
  './App',
  '../hbs/viewItemPanel.hbs',
  'js/misc/lazyloadPro',
  './AbsPanel'
], function (App, template, lazyloadPro) {

  var uid = 1000;

  App.reg({
    className: 'ViewPanel',
    singleton: true,
    mixins: [App.className + '.AbsPanel'],
    hashPrefix: 'view',
    template: template,
    viewData: [],
    viewDataMap: {},
    init: function () {
      App.once('ready', this.ready.bind(this));
    },
    ready: function () {
      this.dom = App.dom.view;
      this.viewSection = this.dom.closest('.scrollable');
      this.initEvent();
    },
    initEvent: function () {
      var view = this.dom;

      view.sortable({
        revert: true,
        refreshPositions: true,
        // noRemove:true,
        placeholder: "panel",
        scroll: false,
        mouseStart: function (event, ui) {
          view.addClass('sortable');
        },
        // dropOnEmpty: false,
        start: function (event, ui) {

          ui.position = { top: 1000, left: 1000 };
        },
        stop: this.onSortStop.bind(this)
      });

      view.on('click', '[data-role=remove]', function (event) {
        this.onRemove($(event.target).closest('[data-role=panel]'));
        return false;
      }.bind(this));


      view.on('click', '[data-role=panel]', function (event) {
        this.onCofig($(event.currentTarget));
      }.bind(this));

      App.on('change.Property', this.onChangeProperty.bind(this));

      App.on('cancel.Property', this.onCancelProperty.bind(this));

      App.on('sortStop.ViewPanel', this.onDragStop.bind(this));

      $(window).on('resize', function (event) {
        this.onResize();
      }.bind(this));

      this.onResize();
    },
    onResize: function () {
      var dom = this.dom;
      dom.css('min-height', this.viewSection.height() - 30);
    },
    onCofig: function (elem) {
      if (elem.length == 0) {
        this.initProperty();
        return;
      }
      var id = elem.attr('id');
      var data = this.viewDataMap[id];
      this.initProperty(data);
    },
    initProperty: function (data) {
      if (this.activeData && data && this.activeData.id == data.id) {
        return;
      }

      if (data) {
        App.emit('set.Property', {
          data: {
            id: data.id,
            name: data.name,
            property: util.clone(data.property)
          }
        });
        /*
                        if (util.isEmpty(data.property)) {
                            data.property = App.PropertyPanel.getProperty();
                        }
        */
        this.dom.find('.panel').removeClass('active');

        var elem = App.get(data.id);
        elem.addClass('active');
      } else {
        App.emit('set.Property');
      }
      this.activeData = data;
    },
    onRemove: function (elem) {
      var id = elem.attr('id');
      elem.remove();
      delete this.viewDataMap[id];
      this.onCofig(this.dom.find('[data-role=panel]:first'));
    },
    onDragStop: function () {
      this.dom.find('.panel').css('height', '');
      this.dom.removeClass('sortable');
    },
    onSortStop: function (event, ui) {
      if (ui.item.hasClass('drag-helper')) {
        this.insert(ui.item, ui.item.attr('data-name'));
      }
      this.onDragStop();
    },
    onChangeProperty: function (event) {
      var data = event.data;
      var elem = App.get(data.id);

      var html = this.getViewItemHTML(data);

      elem.find('.panel-body:first').html(html);
      this.viewDataMap[data.id] = data;
      this.activeData = data;


      /**
      * 重新生成 module-index
      **/
      var array = [];
      var me = this;
      this.dom.find('.panel').each(function (i, panel) {
        var data = me.viewDataMap[panel.id];
        var property = data.property;
        property.layout = data.name;
        property.seq = i;
        array.push(property);
      });

      App.table=array;
      this.dom.find('.module-box').each(function(i,moduleBox){
        $(moduleBox).attr('data-module-index',i);
      });
      lazyloadPro(App, elem[0]);

    },
    onCancelProperty: function (event) {
      var elem = this.dom.find('.active[data-role=panel]:first');
      var data = this.viewDataMap[elem.attr('id')];
      if (util.isEmpty(data.property)) {
        this.onRemove(elem);
      }
      // this.onRemove(elem);
    },
    insert: function (elem, name) {
      var data = this.getViewItemData(name);
      var html = this.getPanelItemHTML(data);
      elem.after(html);
      elem.remove();
      this.initProperty(data);
      App.emit('EventDispatch', {
        type: 'action',
        data: {
          instace: this,
          name: 'insert'
        }
      });
    },
    append: function (property) {
      var data = this.getViewItemData(property.layout, property);
      var html = this.getPanelItemHTML(data);
      this.dom.append(html);

      //自动渲染属性面板
      this.initProperty(data);
    },
    initView: function (propertys) {
      var array = [];
      var firstData;
      App.table=JSON.parse(JSON.stringify(propertys));
      for (var i = 0; i < propertys.length; i++) {
        var property = propertys[i];
        property.__index__=i;
        var data = this.getViewItemData(property.layout, property);
        var html = this.getPanelItemHTML(data);
        array.push(html);
        if (!firstData) {
          firstData = data;
        }
      }
      this.dom.html(array.join(''));
      this.initProperty(firstData);
      lazyloadPro(App, this.dom[0]);

    },
    update: function (item, property) {
      //获取数据
    },
    empty: function () {
      this.dom.empty();
      this.viewDataMap = {};
      App.PropertyPanel.set();
    },
    getViewItemData: function (name, property) {
      var module = App.options.modules[name];
      if (!module) {
        return;
      }
      var item = {
        id: this.getHashId(),
        title: module.label,
        name: name,
        property: property || {}
      };
      this.viewDataMap[item.id] = item;
      return item;
    },
    getPanelItemHTML: function (data) {
      if (!data) {
        return '';
      }
      var html = this.getViewItemHTML(data);
      return this.template({
        id: data.id,
        title: data.title,
        name: data.name,
        html: html
      });
    },
    getViewItemHTML: function (data) {
      var module = App.getModule(data.name);
      var template = module.view;
      var html = 'no find view template: ' + data.name;
      if (template) {
        var property = util.clone(data.property);
        property.layout = data.name;
        html = App.helper.exec(template, property, this);
      }
      return html;
    },
    getViewProperty: function () {
      App.PropertyPanel.change();
      var array = [];
      var me = this;
      this.dom.find('.panel').each(function (i, panel) {
        var data = me.viewDataMap[panel.id];
        var property = data.property;
        property.layout = data.name;
        property.seq = i;
        array.push(property);
      });
      return array;
    },
    callBlockHandle: function (blockName, args, options) {
      if (this[blockName]) {
        this[blockName](args);
        return;
      }
      return this.doIncludeHandle(blockName, args, options);
    },
    getLink: function (data) {
        return 'javascript:;';
    },
    doIncludeHandle: function (name, args, options) {
      var data = {
        instace: this,
        name: name,
        args: args,
        options: options,
        result: args[0] || {}
      };
      var template = App.getViewField(name);
      var html = 'no find view template: ' + name;
      if (template) {
        if (!data.result) {
          data.result = args[0];
        }
        html = App.helper.exec(template, data.result, this);
      }
      return html;
    }
  }).init();

  //JSON.stringify(LTS.ViewPanel.getViewProperty())
});
