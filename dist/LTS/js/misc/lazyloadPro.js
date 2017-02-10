define([
  "./TemplateHelper"
  ],
function (TemplateHelper) {

  function eachModulePro(container,callback){
    $(container).find('.module-pro .item').each(callback);
  };

  function getIn(table,path){
    var result;
    var currentResult=table;
    var index=0;
    while(currentResult){
      currentResult=currentResult[path[index++]];
      if(currentResult){
        result=currentResult;
      }
    }
    return JSON.parse(JSON.stringify(result));
  }

  function doPriceRequest(App,container,onRequest){
    var table=App.table;
    eachModulePro(container,function (i, item) {
      var $item = $(item);
      var moduleIndex=$item.closest('.module-pro').attr('data-module-index');
      var path=[moduleIndex,'list',$item.attr('data-item-index')];
      var data=getIn(table,path);
      var moduleData=getIn(table,[moduleIndex]);
      data.element=item;
      data.moduleData=moduleData;
      onRequest(data,function(newData){
          $item.find('.pro-price:first').html(newData.price);
          $item.find('.pro-title:first').html(newData.title);
          var url=App.helper.getImageSrc(newData.image);
          //var aList=$item.find('.row-image a');

          $item.find('.row-image img').attr('src',url);

          //aList.css('background-image','url('+url+')');

          if(newData.link){
            var $alink=$item.find('a');
            if(!TemplateHelper.isDesignMode){
              $alink.attr('href',newData.link);
            }
            $alink.removeClass('box');
          }
      });
    });
  };

  function doOldPriceRequest(App,container,onRequest){
      eachModulePro(container,function (i, item) {
        var $item = $(item);
        onRequest($item.attr('data-id'), $item.attr('data-type'), function (data) {
          $item.find('.pro-price:first').text(data.price);
          $item.find('.pro-title:first').text(data.title);
          var url=App.helper.getImageSrc(data.image);
          $item.find('.row-image a').css('background-image','url('+url+')');
        });
      });
  }

  return function (App, container) {


    var onPriceRequest = App.onPriceRequest || App.options.onPriceRequest;
    
    onPriceRequest && doPriceRequest(App,container,onPriceRequest);
    


    /**
    *旧的报价查询
   
    var onRequest = App.onRequest || App.options.onRequest;


    if(onPriceRequest){
      doPriceRequest(App,container,onPriceRequest);
    }else if(onRequest){
      doOldPriceRequest(App,container,onRequest);
    }

     **/
  };
});
