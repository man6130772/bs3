### css目录
* app.css : bootstrap框架及字体及动画样式
* base.css : 公共全局样式及第三方组件样式
* login.css : 登录页样式

### fonts目录
* opensans目录 : opensans字体
* fontawesome* : fontawesome字体图标
* glyphicons* : bootstrap自带的glyphicons字体图标
* icon* : icon字体图标

### js目录
* boot.js : 框架初始化js文件
* base.js : 左侧菜单组件及全局事件
* components.js : 常用第三方组件（树形treeview及扩展、警告框bootbox、消息通知notify、下拉选择列表select、滚动条slimscroll、加载中waitingfor）

### html页面
* [blank.html](../app/blank.html) : 空白页（可作为基础开发页面）
* [category.html](../app/category.html) : 分类列表页（左侧树状，右边可拖拽的列表）
* [column-form.html](../app/column-form.html) : 多列表单页（一行显示多个表单项，可用于弹出框的表单或内容较多的表单）
* [detail.html](../app/detail.html) : 详细页（数据项的显示及编辑页面）
* [gallery.html](../app/gallery.html) : 相册页（多图列表的展示页面）
* [index.html](../app/index.html) : 首页 （模板项目的首页）
* [list-simple.html](../app/list-simple.html) : 简单列表页（用于日常开发的搜索及数据表格展示页）
* [list.html](../app/list.html) : 复杂列表页（复杂数据表格的展示页）
* [login.html](../app/login.html) : 登录页（模板登录页）
* [modules.html](../app/modules.html) : 模块管理页（复杂布局及标签页及各种弹出选择的页）
* [scroll-form.html](../app/scroll-form.html) : 滚动表单页（一行一个表单项的长表单页，顶部可自动高亮显示当前表单的定位）
* [table-edit.html](../app/table-edit.html) : 表格编辑状态页（数据表格编辑的formatter演示）
* [validator.html](../app/validator.html) : 表单验证页（表单校验插件的演示页）


### 框架说明
1. 目前模板页面每个页面都是独立的，需要刷新整个页面的，这样是为了性能考虑，
以前包括easyui那种页面里tab标签形式，实际是开了很多个iframe，开几个页面之后，cpu就会占用很高，
因此这种方式早就开始被淘汰了，各大网站后台包括淘宝等都没有采用的，浏览器自带了标签页也会对资源进行缓存；
2. 项目里需要根据空白页`blank.html`分离出头部、左部、底部为共通的文件，模板文件都是静态页面，没有做分离处理；
3. 基础页面也可以以空白页`blank.html`为基础进行开发;
4. 模板页面里使用的css、js、fonts已经放到了开发环境和生产环境，可按上面的使用方法去引用，在项目里配置好该框架的资源路径；
