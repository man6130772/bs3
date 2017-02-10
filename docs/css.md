
#### icon字体图标使用示例

框架默认支持fontawesome, glyphicons, icon三套字体图标集，共有上千种图标。
查找图标可打开[icon字体图标集](../template/icons.html)


fontawesome图标基础使用示例
```
<i class="fa fa-calendar"></i>
```

fontawesome图标大尺寸使用示例
```
<i class="fa fa-calendar fa-lg"></i>
```

glyphicon图标使用示例
```
<i class="glyphicon glyphicon-calendar"></i>
```

icon图标使用示例
```
<i class="i i-calendar"></i>
```


#### icon字体图标使用说明
1. fa为必有的样式类名，后面的fa-calendar为具体的图标名称；
2. 图标尺寸可用的样式类名有fa-lg (增大33%), fa-2x, fa-3x, fa-4x, fa-5x；
3. fontawesome图标还支持2个图标组合使用、动画效果等，具体参考 [fontawesome图标官方使用示例](http://fontawesome.io/examples/)；
4. 目前框架里使用的fontawesome图标集为官方的4.6.3版本。
5. 其他2种图标的使用方法类似，不支持大尺寸或其他效果。


#### margin和padding样式类使用示例

margin-right示例:
```
<div class="m-r-xxs"></div>
<div class="m-r-xs"></div>
<div class="m-r-sm"></div>
<div class="m-r"></div>
<div class="m-r-md"></div>
<div class="m-r-lg"></div>
```

margin示例（四个方向都有边距）:
```
<div class="m-xxs"></div>
<div class="m-xs"></div>
<div class="m-sm"></div>
<div class="m"></div>
<div class="m-md"></div>
<div class="m-lg"></div>
```

padding-right示例:
```
<div class="p-r-xxs"></div>
<div class="p-r-xs"></div>
<div class="p-r-sm"></div>
<div class="p-r"></div>
<div class="p-r-md"></div>
<div class="p-r-lg"></div>
```

padding示例（四个方向都有填充）:
```
<div class="p-xxs"></div>
<div class="p-xs"></div>
<div class="p-sm"></div>
<div class="p"></div>
<div class="p-md"></div>
<div class="p-lg"></div>
```

padding水平方向填充示例（左右都有填充）:
```
<div class="padder-sm"></div>
<div class="padder"></div>
<div class="padder-md"></div>
```

padding垂直方向填充示例（上下都有填充）:
```
<div class="padder-v-sm"></div>
<div class="padder-v"></div>
<div class="padder-v-md"></div>
```


#### margin和padding样式类使用说明
1. 上边距margin-top、右边距margin-right、下边距margin-bottom、左边距margin-left的样式类名分别是`m-t`、`m-r`、`m-b`、`m-l`，即首字母简写；
2. margin和padding可用的尺寸有xxs(1像素)，xs(5像素)，sm(10像素)，md(20像素)，lg(30像素)，什么都不加的比如`m`或`m-r`为15像素；
3. padding四个方向的样式名为:`p-t`，`p-r`，`p-b`，`p-l`，四个方向都需要填充的话使用`p`+`尺寸名`（见上面的示例）；
4. 以上这些样式类可以根据实际需要组合使用；


#### wrapper填充样式类使用示例

```
<div class="wrappper-xxs"></div>
<div class="wrappper-xs"></div>
<div class="wrappper-sm"></div>
<div class="wrappper"></div>
<div class="wrappper-md"></div>
<div class="wrappper-lg"></div>
<div class="wrappper-xl"></div>
```

#### wrapper填充样式类使用说明
1. wrapper样式类主要适合于div容器使用；
2. wrapper的尺寸样式类`wrapper-xxs`、`wrapper-xs`、`wrapper-sm`、`wrapper`、`wrapper-md`、`wrapper-lg`、`wrapper-xl`分别对应的填充尺寸为上下2像素左右6像素、上下4像素左右8像素、上下5像素左右10像素、上下左右均为15像素、上下左右均为20像素、上下左右均为30像素、上下左右均为50像素；



#### border样式类使用示例

border为1像素样式类示例
```
<div class="b-a"></div>
<div class="b-t"></div>
<div class="b-r"></div>
<div class="b-b"></div>
<div class="b-l"></div>
```

border可用的颜色样式类示例
```
<div class="b-light"></div>
<div class="b-dark"></div>
<div class="b-primary"></div>
<div class="b-success"></div>
<div class="b-info"></div>
<div class="b-warning"></div>
<div class="b-danger"></div>
<div class="b-black"></div>
<div class="b-white"></div>
```

border右边框为2像素样式类示例
```
<div class="b-r b-2x"></div>
```

border右边框为1像素红色样式类示例
```
<div class="b-r b-danger"></div>
```

#### border样式类使用说明
1. 上右下左的简写与上面的margin和padding一样`b-t`、`b-r`、`b-b`、`b-l`；
2. 四个边都有边框的样式类为`b-a`；
3. border可用颜色有几个使用了与bootstrap相同的颜色名称，色值也是一样的，此外增加了几个颜色；
4. border的尺寸样式类`b-2x`、`b-3x`、`b-4x`、`b-5x`分别对应的尺寸为2像素、3像素、4像素、5像素；



#### text样式类使用示例
text字体大小样式类示例

```
<div class="text-xs"></div>
<div class="text-sm"></div>
<div class="text-md"></div>
<div class="text-lg"></div>
```

text字体大小样式类说明
1. text字体大小样式类`text-xs`、`text-sm`、`text-md`、`text-lg`分别对应的字体大小为11像素、12像素、14像素、16像素；
2. 需要更大的字号，建议使用h1 ~ h6标签；


text文字省略号样式类示例

```
<div class="text-ellipsis">
    <a href="#">一段很长很长很长很长的文字一段很长很长很长很长的文字</a>
</div>
```

text字母大写样式类示例

```
<div class="text-u-c"></div>
```

text文字删除线样式类示例

```
<div class="text-l-t"></div>
```

text文字下划线样式类示例

```
<div class="text-u-l"></div>
```


#### thumb缩略图样式类使用示例
```
<div class="thumb-xs"><img src="..." /></div>
<div class="thumb-sm"><img src="..." /></div>
<div class="thumb"><img src="..." /></div>
<div class="thumb-md"><img src="..." /></div>
<div class="thumb-lg"><img src="..." /></div>
```

#### thumb缩略图样式类使用说明
1. thumb的五个尺寸`thumb-xs`、`thumb-sm`、`thumb`、`thumb-md`、`thumb-lg`分别对应的尺寸为24像素、34像素、50像素、64像素、128像素；
2. thumb为行内块元素；
3. thumb下的图片为宽度占满、宽度自动，垂直居中于thumb内部；

#### no开头的相关样式类示例

```
<div class="no-border"></div>
<div class="no-borders"></div>

<div class="no-radius"></div>

<div class="no-padder"></div>
```



### 框架内其他组件及样式使用参考

使用方式进入下面页面后，右键查看源代码（不是审查元素），拷贝html代码到项目页面即可。
不需要额外步骤，因为样式在框架的`app.css`里都有了。

* [button按钮样式](../template/buttons.html)
* [grid网格布局](../template/grid.html)
* [各种bootstrap自带组件样式](../template/components.html)
* [各种挂件样式](../template/widgets.html)
* [媒体列表样式](../template/portlet.html)
* [其他参考](../template/index.html)

