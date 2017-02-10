/**
 * OCP - Omni Channel Platform
 * @version 1.0.1
 * @contact wu.h1
 * @update 2017/1/6 15:16
 */
/*
 * Side Nav
 * author: wu.h1
 * date: 2016/07/13
 */
(function($){
    var sideNav = {
        nav: '#nav', // 左侧aside的id
        switchBtn: '#sideNavSwitch', // 切换箭头的id
        navData: null,
        init: function(target, opts){
            this.opts = opts;
            this.target = target;
            this.getData();
        },
        getData: function(){
            var _self = this;
            if(!_self.opts.url && !_self.opts.data)
                return;
            if(_self.opts.url){
                $.getJSON(_self.opts.url, function (data) {
                    if (typeof data == "string") {
                        data = jQuery.parseJSON(data);
                    }
                    _self.navData = data[0].children;
                    _self.renderHtml();
                });
            }
            if(!_self.opts.url && _self.opts.data){
                _self.navData = _self.opts.data[0].children;
                _self.renderHtml();
            }
        },
        getUrl: function(href){
            var urlPath = href.indexOf('http')!=-1 ? href : BasePath+href;
            return urlPath;
        },
        renderHtml: function(){
            var _self = this;
            var _html = [];
            _html.push('<div class="text-muted text-sm hidden-nav-xs padder"></div>');
            _html.push('<ul class="nav nav-main side-nav" data-ride="collapse">');

            //递归子菜单
            function foreach(array,level) {
                var _level = 2;
                _html.push('<ul class="nav dk level_'+level+'">');
                $.each(array, function(index, item) {
                    var icon = item.children ? 'i i-plus2' : 'i i-dot';
                    var href = item.attributes.url ? _self.getUrl(item.attributes.url) : 'javascript:void(0);';
                    var target = href.indexOf('http')!=-1 ? '_blank' : '_self';
                    _html.push('<li id="level-'+level+'-'+item.id+'">');
                    _html.push('<a href="'+href+'" class="auto"><i class="'+icon+'"></i><span>'+item.text+'</span></a>');

                    //判断子菜单
                    if (item["children"]) {
                        if (item["children"].length > 0) {
                            level++;
                            foreach(item["children"], level);
                        }
                    }

                    _html.push('</li>');
                });
                _html.push('</ul>');
            }

            // 输出左侧菜单
            $.each(_self.navData, function(indexF, itemF){
                var activeClass = indexF==0 ? 'active' : '';
                var hrefF = itemF.attributes.url ? _self.getUrl(itemF.attributes.url) : 'javascript:void(0);';
                var iconArray = ['i i-stack', 'i i-statistics', 'i i-settings', 'i i-book', 'i i-data', 
                    'i i-bars', 'i i-search', 'i i-params'];
                var iconF = itemF.icon ? itemF.icon : iconArray[indexF];

                // 输出一级菜单
                _html.push('<li id="level-1-'+itemF.id+'" class=" level_1">');
                _html.push('<a href="'+hrefF+'" class="auto">');
                _html.push('<span class="pull-right text-muted"><i class="i i-circle-sm-o text"></i><i class="i i-circle-sm text-success-dk text-active"></i></span>');
                _html.push('<i class="'+iconF+' icon"></i><span class="font-bold">'+itemF.text+'</span></a>');
                
                // 输出子菜单
                if(itemF.children){
                    foreach(itemF.children,2);
                }
                _html.push('</li>');
            });
            _html.push('</ul>');
            $(_self.target).html(_html.join(''));
            
            _self.afterLoadNav();
        },
        afterLoadNav: function(){
            var _self = this;
            if(_self.opts.mini){
                _self.collapse();
            }
            _self.autoOpenNav();
            _self.bindEvents();
            _self.opts.afterLoad.call();
        },
        autoOpenNav: function(){
            // 获取localStorage里的菜单id，自动展开菜单及高亮其父菜单
            var _self = this;
            var pageName = location.pathname;
            var $li = $('a[href*="'+pageName+'"]', $(_self.target)).parent('li');
            var levelId = localStorage.getItem('sideNavLevelId');

            if($li.length>0){
                //当前页面地址在左侧菜单存在时，找出并高亮
                $li.addClass('active');
                $li.parents('li').addClass('active');
            }else{
                //当前页面地址在左侧菜单不存在时，高亮之前打开的页面
                $('#'+levelId, $(_self.target)).addClass('active');
                $('#'+levelId, $(_self.target)).parents('li').addClass('active');
            }
        },
        bindEvents: function(){
            var _self = this;
            // 将点击的菜单id存到localStorage里
            $(document).off('click.sideNav').on('click.sideNav', '.side-nav .nav a', function(){
                var levelId = $(this).parent('li').attr('id');
                localStorage.setItem('sideNavLevelId', levelId);
            });
        },
        expand: function(target){
            // 展开左侧导航面板
            var _self = this;
            $(_self.switchBtn).click();
            setSwitchText();
        },
        collapse: function(target){
            // 折叠左侧导航面板
            var _self = this;
            $(_self.switchBtn).click();
            setSwitchText();
        }
    }
    // sideNav options
    $.fn.sideNav = function(options, param){
        if (typeof options == 'string'){
            return $.fn.sideNav.methods[options](this, param);
        }
        var options = $.extend({}, $.fn.sideNav.defaults, options);
        this.each(function(){
            sideNav.init(this,options);
        });
    };
    // sideNav methods
    $.fn.sideNav.methods = {
        expand: function(jq){
            return jq.each(function(){
                sideNav.expand(jq);
            });
        },
        collapse: function(jq){
            return jq.each(function(){
                sideNav.collapse(jq);
            });
        }
    };
    // sideNav defaults
    $.fn.sideNav.defaults = {
        url: null,
        data: null,
        mini: false,
        afterLoad: function(){}
    };
})(jQuery);

/**
 * Global Functions
 */
function setSwitchText(){
    var $switchBtn = $('#sideNavSwitch');
    var title = $switchBtn.hasClass('active') ? '展开' : '收缩';
    $switchBtn.tooltip('hide').attr('data-original-title', title).tooltip();
}

/**
 * Events bind while document init
 */
$(function() {
    // toggle show and hidden layout
    $(document).on('click', '[data-toggle^="class"]', function(e) {
        e && e.preventDefault();
        var $this = $(e.target),
            $class, $target, $tmp, $classes, $targets;
        !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
        $class = $this.data()['toggle'];
        $target = $this.data('target') || $this.attr('href');
        $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
        $target && ($targets = $target.split(','));
        $classes && $classes.length && $.each($targets, function(index, value) {
            if ($classes[index].indexOf('*') !== -1) {
                var patt = new RegExp('\\s' + $classes[index].replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') + '\\s', 'g');
                $($this).each(function(i, it) {
                    var cn = ' ' + it.className + ' ';
                    while (patt.test(cn)) { cn = cn.replace(patt, ' '); }
                    it.className = $.trim(cn);
                });
            }
            ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
        });
        $this.toggleClass('active');
        if($this.attr('href').indexOf('#nav')!=-1){
            setSwitchText();
        }
    });

    // toggle show and hidden panel body
    $(document).on('click', '.panel-toggle', function(e) {
        e && e.preventDefault();
        var $this = $(e.target),
            $class = 'collapse',
            $target;
        if (!$this.is('a'))
            $this = $this.closest('a');
        $target = $this.closest('.panel');
        $target.find('.panel-body').toggleClass($class);
        $this.toggleClass('active');
    });

    // dropdown menu
    $.fn.dropdown.Constructor.prototype.change = function(e) {
        e.preventDefault();
        var $item = $(e.target),
            $select, $checked = false,
            $menu, $label;
        !$item.is('a') && ($item = $item.closest('a'));
        $menu = $item.closest('.dropdown-menu');
        $label = $menu.parent().find('.dropdown-label');
        $labelHolder = $label.text();
        $select = $item.find('input');
        $checked = $select.is(':checked');
        if ($select.is(':disabled'))
            return;
        if ($select.attr('type') == 'radio' && $checked)
            return;
        if ($select.attr('type') == 'radio')
            $menu.find('li').removeClass('active');
        $item.parent().removeClass('active');
        !$checked && $item.parent().addClass('active');
        $select.prop("checked", !$select.prop("checked"));
        $items = $menu.find('li > a > input:checked');
        if ($items.length) {
            $text = [];
            $items.each(function() {
                var $str = $(this).parent().text();
                $str && $text.push($.trim($str));
            });
            $text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';
            $label.html($text);
        } else {
            $label.html($label.data('placeholder'));
        }
    }
    $(document).on('click.dropdown-menu', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);

    // toggle show and hidden collapse
    $(document).on('click', '[data-ride="collapse"] a', function(e) {
        var $this = $(e.target),
            $active;
        $this.is('a') || ($this = $this.closest('a'));
        $active = $this.parent().siblings(".active");
        $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
        ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
        $this.parent().toggleClass('active');
        $this.next().is('ul') && e.preventDefault();
        setTimeout(function() {
            $(document).trigger('updateNav');
        }, 300);
    });
    $(document).on('click.bs.dropdown.data-api', '.dropdown .on, .dropup .on, .open .on', function(e) {
        e.stopPropagation()
    });

    // slim scroll
    $('.no-touch .slim-scroll').each(function(){
        var $self = $(this), $data = $self.data(), $slimResize;
        $self.slimScroll($data);
        $(window).resize(function(e) {
            clearTimeout($slimResize);
            $slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);
        });
        $(document).on('updateNav', function(){
          $self.slimScroll($data);
        });
    });

    // init bootstrap select
    $('.selectpicker').selectpicker();

    // init bootstrap tooltip
    $('body').tooltip({
        selector: '[data-toggle="tooltip"],[rel="tooltip"]'
    });

    // init bootstrap popover
    $('body').popover({
        selector: '[data-toggle="popover"],[rel="popover"]'
    });

});
