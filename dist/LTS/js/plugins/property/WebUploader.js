define([
    "js/3rd/webuploader.html5only",
    '../../App',
    '../EventDispatch',
    "css/webuploader.css"
], function(WebUploader, App, EventDispatch) {
    App.plugins.reg({
        className: 'WebUploader',
        singleton: true,
        init: function() {
            App.once('ready', this.initEvent.bind(this));
        },
        // onReady: function() {
        //     this.initEvent();
        // },
        initEvent: function() {
            var me = this;
            App.dom.property.on('change', 'input[type="file"]', this.doChangeHandle.bind(this));

            App.dom.property.on('click', '[data-action=selectedImage]', function(event) {
                me.onSelectedImage(event);
            });

        },
        onSelectedImage: function(event) {
            var me = this;
            var formGroup = $(event.target).closest('.form-group');

            function callback(src) {
                me.changeImage(formGroup, src);
            };

            App.options.onSelectedImage && App.options.onSelectedImage(callback);

        },
        doChangeHandle: function(event) {
            var target = event.target;
            var file = (target.files || [])[0];
            if (file) {
                var me=this;
                var imageSize=$(target).closest('.form-group').attr('data-image-size');
                var imageSizeArgs=imageSize.split(/\D+/);
                var width=0;
                var height=0;
                if(+imageSizeArgs[0]>0){
                    width= +imageSizeArgs[0];
                }
                if(+imageSizeArgs[1]>0){
                    height= +imageSizeArgs[1];
                }
                var fr = new FileReader();

                fr.onload = function() { // file is loaded
                var img = new Image();

                img.onload = function() {
                    var naturalHeight=img.naturalHeight;
                    var naturalWidth=img.naturalWidth;
                    var stateCheck=true;
                    if(App.options.onImageSizeCheck){
                        stateCheck = App.options.onImageSizeCheck({
                            height:height,
                            width:width,
                            naturalHeight:naturalHeight,
                            naturalWidth:naturalWidth
                        });
                    }
                    if(stateCheck){
                        if(width === naturalWidth){
                            width=0;
                            height=0;
                        }
                        me.createWebUploader(target, file,width,height);
                    }
                };

                img.src = fr.result; // is the data URL because called with readAsDataURL
                };

                fr.readAsDataURL(file); // I'm using a <input type="file"> for demonstrating

            }
        },
        formData: {
            uid: "asd"
        },
        createWebUploader: function(target, file,width,height) {
            var me = this;
            var defaultOptions = this.getWebUploaderOptions();
            var opts = {
                // 选完文件后，是否自动上传。
                // auto: true,
                // swf文件路径
                // swf: this.getSWF(),
                // 文件接收服务端。
                dnd: document.body,
                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                paste: document.body,
                pick: {
                    multiple: false,
                    id: target
                },
                formData: this.formData,

                // 只允许选择图片文件。
                accept: {
                    title: 'Images',
                    extensions: 'jpg,jpeg',
                    mimeTypes: 'image/jpg,image/jpeg'
                }
            };

            if(width > 0 ){
                opts.compress = {
                    width: width,
                    height: height,

                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    //quality: 90,

                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,

                    // 是否允许裁剪。
                    crop: true,

                    // 是否保留头部meta信息。
                    preserveHeaders: true,
                    
                    isTopAlignment:true,

                    // 如果发现压缩后文件大小比原来还大，则使用原来图片
                    // 此属性可能会影响图片自动纠正功能
                    noCompressIfLarger: false,

                    // 单位字节，如果图片大小小于此值，不会采用压缩。
                    compressSize: 0
                };
            }
            var uploader = WebUploader.create($.extend(true, {}, defaultOptions, opts));

 


            uploader.onUploadProgress = function(file, percentage) {
                var uploadImageBox = $(this.options.pick.id).closest('.form-group');
                var progress = uploadImageBox.find('.progress:first');
                progress.removeClass('hide');
                progress.find('[data-role=progressBar]:first').css('width', (percentage * 100) + '%');

            };

            if(defaultOptions && defaultOptions.onUploaderError){
                uploader.on('error', defaultOptions.onUploaderError);
            }


            uploader.onUploadSuccess = function(file, response) {
                var imageSrc = response._raw;
                var uploadImageBox = $(this.options.pick.id).closest('.form-group');
                me.changeImage(uploadImageBox, imageSrc);

                //imageInput.change();

                //App.PropertyPanel.change();
            };

            uploader.onUploadError = function(file, reason) {
                App.error('上传图片出错:' + reason);
            };

            uploader.onUploadComplete = function(file) {
                setTimeout(function() {
                    uploader.destroy();
                }, 0);
            };
            uploader.onReady = function() {
                uploader.addFiles(file);
                uploader.upload();
            };

        },
        changeImage: function(formGroup, src) {
            var progress = formGroup.find('.progress:first');
            progress.addClass('hide');

            formGroup.find('.img-full img:first').attr('src', App.helper.getImageSrc(src));
            formGroup.find('[data-role=innerLabel]:first').text('修改图片');

            var imageInput = formGroup.find('[name="imageSrc"]');

            imageInput.val(src);

        },
        getWebUploaderOptions: function() {
            var o = window.WebUploaderOptions || {};
            if (!o.server) {
                throw new Error('未配置图片上传至服务的地址,window.WebUploaderOptions.server 参见: http://fex.baidu.com/webuploader/doc/index.html');
            }
            return o;
        }
    }).init();
});
