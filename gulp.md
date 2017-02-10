### bs3的gulp构建命令：

* 构建全部版本: gulp build
* 更新到所有服务器: gulp update-all-ftp

* 更新到公共静态资源服务器: gulp update-ftp-common-resource
* 更新到会员服务器: gulp update-ftp-member
* 更新到前端服务器: gulp update-ftp-frontend


### bs3的构建说明：

* 正常构建bs3使用gulp build和gulp update-all-ftp就可以
* gulp update-all-ftp有时更新到前端服务器会失败，需要先进入branches/bs3-1.0.0/dist目录下，将里面的css,fonts,images,js,LTS这五个文件夹手动上传到前端服务器的/var/www/html/ocp目录下，服务器账号密码等见gulpfile.js里update-ftp-frontend部分


### bs3的转测命令：
* 更新本地trunk目录: gulp trunk (使用此构建命令的前提是本地svn目录下的branches和trunk目录同级)


### bs3的转测步骤：

1. 根据需要修改branches/bs3-1.0.0/package.json文件里的version版本号，没有版本变更就不改
2. 运行gulp build，构建全部版本
3. 更新到所有服务器（因为有时只需本地构建，不需要每次更新到服务器，所以构建和更新服务器分成了2个命令）
4. 运行gulp trunk，更新本地trunk目录资源
5. 重命名trunk/bs3-1.0.0/doc目录下的excel文件，文件名的版本号改成最近提交的svn版本号，文件内容里更新日期和版本号就可以了
6. svn提交trunk目录下的更新
7. 发送转测邮件，发送给scm，样例见之前收件箱的转测邮件，发送前确认好邮件标题和内容里的项目名、版本号等信息没有问题


