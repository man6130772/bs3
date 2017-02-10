define(function () {

  var docElem = function () {
    return document.documentElement;
  };
  var getOffset = function (elem) {
    var box;
    if (elem.getBoundingClientRect) {
      box = elem.getBoundingClientRect();
    } else {
      return {
        top: 0,
        left: 0
      };
    }
    return {
      top: box.top + (window.pageYOffset || docElem().scrollTop) - docElem().clientTop,
      left: box.left + (window.pageXOffset || docElem().scrollLeft) - docElem().clientLeft
    };
  };
  var getWindowHeight = function () {
    return window.innerHeight ? window.innerHeight : docElem().clientHeight;
  };
  var getWindowWidth = function () {
    return docElem().clientWidth;
  };

  var getWindowScrollTop = function () {
    return docElem().scrollTop;
  };

  var getWindowScrollLeft = function () {
    return docElem().scrollLeft;
  };

  var belowthefold = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = getWindowHeight() + getWindowScrollTop();
    } else {
      fold = getOffset(settings.container).top + settings.container.clientHeight;
    }

    return fold <= getOffset(element).top - settings.threshold;
  };

  var rightoffold = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = getWindowWidth() + getWindowScrollLeft();
    } else {
      fold = getOffset(settings.container).left + settings.container.clientWidth;
    }

    return fold <= getOffset(element).left - settings.threshold;
  };

  var abovethetop = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = getWindowScrollTop();
    } else {
      fold = getOffset(settings.container).top;
    }

    return fold >= getOffset(element).top + settings.threshold + element.clientHeight;
  };

  var leftofbegin = function (element, settings) {
    var fold;

    if (settings.container === undefined || settings.container === window) {
      fold = getWindowScrollLeft();
    } else {
      fold = getOffset(settings.container).left;
    }

    return fold >= getOffset(element).left + settings.threshold + element.clientWidth;
  };

  /*
  var settings = {
      threshold       : 0,
      container       : window
  };
  */
  var inViewPort = function (element, settings) {
    settings = settings || {};
    settings.threshold = settings.threshold || 0;
    settings.container = settings.container || window;
    return !rightoffold(element, settings) && !leftofbegin(element, settings) && !belowthefold(element, settings) && !abovethetop(element, settings);
  };




  var handle = function (container) {
    this.container = container || window;

    var $container = $(this.container);
    if ($container.data('islazyload')) {
      return;
    }
    this.settings = {
      threshold: 50,
      container: this.container
    };
    $container.data('islazyload', true);
    this.ready();
  };

  handle.prototype.attr = 'data-src';

  handle.prototype.scrollHandle = function (event) {
    if (this.list.index >= this.list.length) {
      $(this.container).off('scroll', this.doScrollHandle);
      delete this.list;
      return;
    }
    this.update();
  };

  handle.prototype.ready = function () {
    var me = this;
    this.list = $(this.container, '.module-box');

    this.doScrollHandle = function (event) {
      me.scrollHandle(event);
    };

    $(this.container).on('scroll', this.doScrollHandle);
    this.update();
    this.ready = function () {};
  };

  handle.prototype.update = function () {
    var me = this;
    var list = this.list;
    $.each(list, function (i, item) {
      if (item && inViewPort(item, me.settings)) {
        list[i] = null;
        list.index++;
        $(item).find('img[' + me.attr + ']').each(function (n, img) {
          var $img = $(img);
          var src=$img.attr(me.attr);
          $img.attr('src', src);
          $img.removeAttr(me.attr);
        });
      }
    });
  };
  return function (container) {
    return new handle(container);
  };
});
