
#### 页面头部html引用
```
<!DOCTYPE html>
<html lang="en" class="app no-touch">
<head>
    <meta charset="utf-8" />
    <title>OCP微商城管理系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="http://s.belle.net.cn/bs3/1.0.1/css/app.css" type="text/css" />
    <link rel="stylesheet" href="http://s.belle.net.cn/bs3/1.0.1/css/base.css" type="text/css" />
</head>
```
#### 页面头部html引用说明
1. 头部head区域代码使用以上就可以，可以根据项目需要再加额外的代码进去；
2. 文档声明统一使用`<!DOCTYPE html>`；
3. 上面的html标签必须加`class="app no-touch"`；
4. 上面的两个css文件引用，必须是`app.css`在上面，`base.css`在下面，额外的css文件放在`base.css`下面；



#### 页面底部js引用
* 所有的js代码引用统一放到页面底部
* js代码独立成文件，html标签和页面上不要有js代码片段（模板页面底部的js代码片段是方便演示和拷贝）

每个页面底部必须引用的js
```
    <script>
        // 配置信息一定要放在boot.js上面，
        // 所有js引用和代码放在页面底部
        var staticurl = 'http://s.belle.net.cn/bs3/1.0.1';
        var BasePath = './';
    </script>
    <script src="http://s.belle.net.cn/bs3/1.0.1/js/boot.js"></script>
    <script>
    $(function(){
        /**
         * init sideNav
         * json数据模板: http://172.17.210.82/ocp/json/sideNav.json
         */
        $('#sideNav').sideNav({
            url: BasePath+'json/left_tree.json'
        });
    });
    </script>
```
#### 页面底部js引用说明
1. `staticurl`根据项目需要配置，项目除了公共的这个`staticurl`，应该还有自己静态资源的url，
如`staticurl`所示，版本号也要放在`staticurl`里面作为项目的配置属性，以后框架升级，需要修改这个1.0.0版本号；
2. `BasePath`也是根据项目路径去设置，设置为相对路径就可以；
3. `staticurl`和`BasePath`的配置，要放在`boot.js`引用的上面；
4. `boot.js`引用是放在所有js文件引用最上面的，因为`boot.js`里面加载了jquery及bootstrap等框架文件和第三方组件；
5. `sideNav`为左侧菜单的插件，详细使用请参看下面。

