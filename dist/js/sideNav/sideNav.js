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
