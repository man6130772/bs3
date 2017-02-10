define([
  "./tplsHelper",
  "./misc/TemplateHelper",
  'js/misc/lazyloadPro'
  // ,'js/misc/lazyload'
], function (tplsHelper, helper, lazyloadPro, lazyload) {
  var App = {
    helper: helper,
    data: [],
    render: null,
    'image-lazyload-attr':'src',
    init: function (config) {
      $.extend(this, config);
      if (!this.render.jquery) {
        this.render = $(this.render);
      }
      this.initView(this.data || []);
      this.ready();
      //lazyload(this.render.parent()[0]);
      lazyloadPro(this, this.render[0]);
    },
    ready: function () {},
    initView: function (propertys) {
      var array = [];
      this.table=JSON.parse(JSON.stringify(propertys));
      for (var i = 0; i < propertys.length; i++) {
        var property = propertys[i];
        
        var module = App.getModule(property.layout);

        if(module){
          property.__index__=i;
          var html = this.getHTML(this.getViewItemHTML(property), property.layout);
          array.push(html);
        }
        
      }
      this.render.html(array.join(''));
    },
    getViewItemHTML: function (property) {

      var module = App.getModule(property.layout);
      
      var template = module.view;

      var html = 'no find view template: ' + property.layout;
      if (template) {
        html = App.helper.exec(template, property, this);
      }
      return html;
    },
    getHTML: function (html, layout) {
      return html;
    },
    callBlockHandle: function (blockName, args, options) {
      var method = this[blockName];
      if (method) {
        return method.apply(this, args);
      }
      return this.getFiledHTML(blockName, args, options);
    },
    getLink: function (data) {
      var link;
      if (data.linkType != 7 && this.getLinkURL) {
        link = this.getLinkURL(data.linkId, data.linkType);
      }
      return link || data.link || 'javascript:;';
    },
    getFiledHTML: function (blockName, args, options) {
      var data = {
        instace: this,
        name: blockName,
        args: args,
        options: options,
        result: args[0] || {}
      };
      var template = App.getViewField(blockName);
      var html = 'no find view template: ' + blockName;
      if (template) {
        if (!data.result) {
          data.result = args[0];
        }
        html = App.helper.exec(template, data.result, this);
      }
      return html;
    }
  };

  helper.register({
    'isMargin': function (margin, options) {
      var state = /false/i.test(margin) || margin == false ? false : true;
      if (state == true) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    '::getSrcAttr':function(){
        return App['image-lazyload-attr'];
    }

  });
  tplsHelper(App);


  window.App = App;
  window.initApp && window.initApp(App);
});
