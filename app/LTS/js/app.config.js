(function(factory) {
    window.App ? factory(window.App) : window.initApp = factory;
})(function(App) {
    var helper = App.helper;
    helper.isDesignMode = true;
    helper.defaultImageSrc = "images/common/p0.jpg";
    helper.imageServer = 'http://172.17.205.67:8901/tmp/';



    window.WebUploaderOptions = window.WebUploaderOptions || {
        server: 'http://172.17.205.67:8901/upload/'
    };

    App.LinkTypeData = [{
        value: "1",
        key: "商品列表页"
    }, {
        value: "2",
        key: "品牌页面"
    }, {
        value: "3",
        key: "商品详情页"
    }, {
        value: "4",
        key: "商品分类页面"
    }, {
        value: "5",
        key: "搜索关键字"
    }, {
        value: "6",
        key: "页面列表"
    }, {
        value: "7",
        key: "无跳转"
    }];

    App.ready();


    var view = App.dom.view;
    view.empty();
    view.css({
        'padding-bottom': '100px',
        'background-color': '#FFF',
    });

    App.ViewPanel.initView([{
        "platform": [],
        "title": "",
        "startDateTime": "",
        "endDateTime": "",
        "size": "m",
        "margin": "false",
        "list": [{
            "image": "images/photo/p6.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p1.jpg",
            "linkType": "2",
            "link": ""
        }, {
            "image": "images/photo/p4.jpg",
            "linkType": "2",
            "link": ""
        }],
        "layout": "module_l_1_2"
    }, {
        "platform": ["1", "2"],
        "title": "标题",
        "startDateTime": "2016-06-07",
        "endDateTime": "2016-09-07",
        "size": "l",
        "margin": "true",
        "list": [{
            "image": "images/photo/p6.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p5.jpg",
            "linkType": ""
        }],
        "layout": "module_l2"
    }, {
        "platform": [],
        "startDateTime": "",
        "endDateTime": "",
        "size": "m",
        "margin": "false",
        "list": [{
            "image": "images/photo/p1.jpg",
            "title": "",
            "linkType": "7"
        }, {
            "image": "images/photo/p2.jpg",
            "title": "",
            "linkType": "5",
            "link": ""
        }, {
            "image": "images/photo/p3.jpg",
            "title": "",
            "linkType": "2",
            "link": ""
        }, {
            "image": "images/photo/p4.jpg",
            "title": "",
            "linkType": "2",
            "link": ""
        }],
        "layout": "recommend"
    }, {
        "platform": ["1", "2"],
        "title": "",
        "size": "m",
        "margin": "false",
        "startDateTime": "",
        "endDateTime": "",
        "list": [{
            "image": "images/photo/p8.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p9.jpg",
            "linkType": ""
        }, {
            "image": "",
            "linkType": ""
        }],
        "layout": "slides"
    }, {
        "platform": [],
        "title": "",
        "startDateTime": "2016-06-20 10:00:00",
        "endDateTime": "2016-07-20 10:00:00",
        "size": "m",
        "margin": "false",
        "list": [{
            "image": "images/photo/p6.jpg",
            "linkType": "2",
            "link": "http://baidu.com/"
        }, {
            "image": "images/photo/p5.jpg",
            "linkType": "1",
            "link": "http://baidu.com/"
        }, {
            "image": "images/photo/p4.jpg",
            "linkType": "2",
            "link": "http://baidu.com/"
        }, {
            "image": "images/photo/p3.jpg",
            "linkType": "3",
            "link": "http://baidu.com/"
        }],
        "layout": "module_l_1_3"
    }, {
        "platform": [],
        "title": "",
        "startDateTime": "2016-06-20 10:00:00",
        "endDateTime": "2016-07-20 10:00:00",
        "size": "m",
        "margin": "false",
        "list": [{
            "image": "images/photo/p6.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p5.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p4.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p3.jpg",
            "linkType": ""
        }],
        "layout": "module_l_1_3"
    }, {
        "platform": ["1", "2"],
        "title": "标题",
        "startDateTime": "2016-06-07",
        "endDateTime": "2016-09-07",
        "size": "l",
        "margin": "true",
        "list": [{
            "image": "images/photo/p6.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p7.jpg",
            "linkType": ""
        }],
        "layout": "module_l2"
    }, {
        "platform": [],
        "startDateTime": "",
        "endDateTime": "",
        "size": "m",
        "margin": "false",
        "list": [{
            "image": "images/photo/p1.jpg",
            "title": "",
            "linkType": "7"
        }, {
            "image": "images/photo/p2.jpg",
            "title": "",
            "linkType": "5",
            "link": ""
        }, {
            "image": "images/photo/p3.jpg",
            "title": "",
            "linkType": "2",
            "link": ""
        }, {
            "image": "images/photo/p4.jpg",
            "title": "",
            "linkType": "2",
            "link": ""
        }],
        "layout": "recommend"
    }, {
        "platform": ["1", "2"],
        "title": "",
        "size": "m",
        "margin": "false",
        "startDateTime": "",
        "endDateTime": "",
        "list": [{
            "image": "images/photo/p8.jpg",
            "linkType": ""
        }, {
            "image": "images/photo/p9.jpg",
            "linkType": ""
        }, {
            "image": "",
            "linkType": ""
        }],
        "layout": "slides"
    }]);



    $('[href="#modulesPreview"]').on('click', function(event) {
        if ($(this).closest('li.active').length > 0) {
            return;
        }
        App.dom.property.hide();
        var iframe = $('#modulesPreview').find('iframe:first');

        iframe.attr('src', 'preview.html?data=' + encodeURIComponent(JSON.stringify(App.ViewPanel.getViewProperty())));


        iframe.css('height', App.dom.view[0].clientHeight);
    });

    $('[href=#moduleEdit]').on('click', function(event) {
        App.dom.property.show();
    });

});
