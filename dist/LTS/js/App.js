define([
  'js/3rd/immutable-3.8.1',
  'js/3rd/classjs'
], function (Immutable) {
  var classjs = window.classjs;
  window.Immutable = Immutable;
  Immutable.fromJSON = Immutable.fromJS;


  classjs({
    className: 'App',
    extendEvent: true,
    // singleton: true,
    dom: {},
    init: function () {
      this.initEvent();
      var dom = this.dom;
      $(document.body).find('[data-role]').each(function (index, elem) {
        var $elem = $(elem);
        var key = $elem.attr('data-role');
        dom[key] = $elem;
      });
      this.emit('init');
    },
    initEvent: function () {
      this.emit('initEvent');
    },
    render: function (options) {
      var helper = this.helper;
      helper.isDesignMode = true;
      helper.defaultImageSrc = options.defaultImageSrc;
      helper.imageServer = options.imageServer;

      this.options = options;

      this.emit('ready');

      if (options.data) {
        this.ViewPanel.initView(options.data);
      }
    },
    setOptions: function (key, value) {
      this.options[key] = value;
    },
    reg: function (module) {
      var className = this.className + '.' + module.className;
      module.className = className;
      classjs(module);
      return classjs.getClass(className);
    },
    hashPrefix: 'app',
    getHashId: (function () {
      var hashCode = parseInt("1" + ("" + (+new Date())).substr(9));
      return function () {
        return this.hashPrefix + '.hash.' + (hashCode++);
      }
    })(),
    get: function (id) {
      return $(document.getElementById(id));
    }
  });
  var App = new window.App();
  window.App = App;

  App.warning = window.alert;
  App.error = window.alert;
  App.notify = window.alert;
  App.IMT = Immutable;
  App.info = function (arg) {
    console.info(arg);
  };
  /*
      App.oldEmit = App.emit;
      App.emit = function() {
          console.info('App.emit:', arguments[0], arguments[1]);
          this.oldEmit.apply(this, arguments);
      };
  */
  return App;
});
