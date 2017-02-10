define([
  './App',
  './AbsPanel'
], function (App) {
  App.reg({
    className: 'PropertyPanel',
    singleton: true,
    mixins: [App.className + '.AbsPanel'],
    hashPrefix: 'property',
    init: function () {
      App.once('ready', this.ready.bind(this));
    },
    ready: function () {
      this.dom = App.dom.property;
      this.initEvent();

    },
    initEvent: function () {
      App.on('set.Property', function (event) {
        this.set(event.data);
        return false;
      }.bind(this));


      App.on('update.Property', function (event) {
        var property = event.property;
        if (!property) {
          property = this.getProperty();
        }
        this.update(property);
        return false;
      }.bind(this));


      var property = this.dom;

      property.on('change', 'input,select,textarea', (function (event) {
        this.doChangeHandle(event.target);
      }).bind(this));


      App.on('cancel.Property', (function (event) {
        this.cancel(event.target);
      }).bind(this));

      //property.on('click', '[data-action]', this.doActionHandle.bind(this));
    },
    set: function (data) {
      /*
      //切换面板触发属性更新到view
      if (this.activeData && data) {
          this.change();
      }
      */
      this.activeData = data || {};
      if (data) {
        this.update(data.property);
        App.dom.okButton.show();
      } else {
        this.dom.html('');
        App.dom.okButton.hide();
      }
    },
    update: function (property) {
      var data = this.activeData;
      data.property = property || {};

      var module = App.getModule(data.name);
      var template = module.property;
      var html = 'no find property template: ' + data.name;
      data.property.layout = data.name;
      if (template) {
        html = App.helper.exec(template, data.property, this);
      }
      this.dom.html(html);
      App.emit('render.Property');
    },
    change: function (property) {
      var data = this.activeData || {};
      if (!property) {
        property = this.getProperty();
      }
      data.property = property;
      App.emit('change.Property', {
        data: data
      });
    },
    cancel: function () {
      this.activeData = {};
    },
    getTargetValue: function (target, group, name) {
      group = group || target.closest('[data-group-index]');
      name = name || target.attr('name');

      if (!group[0]) {
        group = this.dom;
      }
      var value = '';
      if (target.is(':radio')) {
        group.find(':radio[name=' + name + ']').each(function (index, radio) {
          if (!value) {
            var $elem = $(radio);
            if ($elem.is(':checked')) {
              value = $elem.val();
            }
          }
        });
      } else if (target.is(':checkbox')) {
        value = [];
        group.find(':checkbox[name=' + name + ']').each(function (index, checkbox) {
          var $elem = $(checkbox);
          if ($elem.is(':checked')) {
            value.push($elem.val());
          }
        });
      } else if (target.attr('type') == 'file') {
        //
      } else {
        value = target.val();
      }

      /*
      if($.isArray(value) && value.length==0){
          value="";
      }
      */
      return value;
    },
    doChangeHandle: function (element) {
      var name = element.name;
      if (!name) {
        return;
      }
      var target = $(element);
      var group = target.closest('[data-group-index]');
      // var value= this.getTargetValue(group, target, name);

      var data = {
        name: name,
        instace: this,
        target: element,
        view: this.activeData
          /*,
          value: value*/
      };
      var groupIndex = -1;
      var groupName = group.attr('data-group-name') || '';
      if (group[0]) {
        data.groupIndex = group.attr('data-group-index');
      }
      if (groupName) {
        data.groupName = groupName;
      }

      //事件发出
      App.emit('EventDispatch', {
        type: 'change',
        data: data
      });
    },
    callBlockHandle: function (blockName, args, options) {
      var method = this[blockName];
      if (method) {
        return method.apply(this, args);
      }
      return this.doIncludeHandle(blockName, args, options);
    },
    getImageSize: function (index) {
      var modules = App.options.modules;
      var module = modules[this.activeData.name]
      module.size = module.size || [];
      var size = module.size[index] || module.size[0];
      if (!size) {
        return ' - ';
      }
      var width = size.width || '-';
      var height = size.height || '-';
      return width + ' x ' + height;
    },
    doIncludeHandle: function (name, args, options) {
      var data = {
        instace: this,
        name: name,
        view: this.activeData,
        args: args,
        options: options,
        result: args[0] || {}
      };
      /*
      App.emit('EventDispatch', {
          type: 'include',
          data: data
      });
      */

      var template = App.getPropertyField(name);

      var html = 'no find property template: ' + name;
      if (template) {
        if (!data.result) {
          data.result = args[0];
        }
        html = App.helper.exec(template, data.result, this);
      }
      return html;
    },
    getPropertyMetaData: function () {
      var result = this.eachFormGroup(function (parent, elem) {
        var item = parent[elem.name];
        var value = $(elem).val();
        if (item) {
          if (!$.isArray(item)) {
            item = [item];
          }
          item.push(value);
        } else {
          item = value;
        }
        parent[elem.name] = item;
      });
      return JSON.stringify(result);
    },
    getProperty: function () {
      var property = this.eachFormGroup(function (parent, elem) {
        var key = elem.name;
        if (!(key in parent)) {
          parent[key] = this.getTargetValue($(elem));
        }
      }.bind(this));
      return property;
    },
    eachFormGroup: function (formItemHandle) {
      var dataStructure = {};
      var groupClassName = 'form-group';

      function getFormGroup(group, parent) {
        group.find('[name]').each(function (i, elem) {
          formItemHandle(parent, elem);
        });
      };

      var childrenIndex = 0;

      function eachElement(children, parent) {
        children.each(function (i, elem) {
          var $elem = $(elem);
          if ($elem.hasClass(groupClassName)) {
            getFormGroup($elem, parent);
          } else {
            var children = {};
            var groupName = $elem.attr('data-group-name');
            //分组列表
            if (groupName) {
              eachElement($elem.find('.' + groupClassName), children);

              var list = parent[groupName] || [];
              parent[groupName] = list;

              // if (!$.isEmptyObject(children)) {
              list.push(children);
              // }
            }
          }
        });
      };
      eachElement(App.dom.property.children(), dataStructure);
      return dataStructure;
    }
  }).init();

  //console.error("处理EventDispatch.change重新渲染属性面板");
});
