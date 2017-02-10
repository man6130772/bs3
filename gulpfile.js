'use strict';

var pkg = require('./package.json');
var appPath = 'app';
var buildPath = 'dist';
var path = {
    copy: {
        src: [
            appPath+'/css/**',
            appPath+'/fonts/**',
            appPath+'/images/**',
            appPath+'/js/**',
            appPath+'/LTS/**',
            '!'+appPath+'/js/treeview/**',
            '!'+appPath+'/js/bootbox/**',
            '!'+appPath+'/js/notify/**',
            '!'+appPath+'/js/select/**',
            '!'+appPath+'/js/slimscroll/**',
            '!'+appPath+'/js/waitingfor/**'
        ],
        dest: buildPath
    },
    css: {
        src: [
            buildPath+'/css/**/app.css',
            buildPath+'/css/**/base.css',
            buildPath+'/css/**/lts.css'
        ],
        dest: buildPath+'/css'
    },
    js: {
        src: [
            appPath+'/js/*.js',
            '!'+appPath+'/js/base*.js',
            '!'+appPath+'/js/components*.js',
        ],
        base: [
            appPath+'/js/sideNav/sideNav.js',
            appPath+'/js/_global/events.js'
        ],
        components: [
            appPath+'/js/treeview/treeview.js',
            appPath+'/js/treeview/treeview.extend.js',
            appPath+'/js/bootbox/*.js',
            appPath+'/js/notify/*.js',
            appPath+'/js/select/*.js',
            appPath+'/js/slimscroll/*.js',
            appPath+'/js/waitingfor/*.js'
        ],
        dest: buildPath+'/js'
    },
    image: {
        src: buildPath+'/images/**/*.{png,jpg}',
        dest: buildPath+'/images'
    },
    ftp: {
        server162: {
            filePath: buildPath+'/**',
            remotePath: '/data/retail/retail-resources/bs3/'+pkg.version
        },
        server82: {
            filePath: [
                buildPath+'/**',
                appPath+'/**',
                '!'+appPath+'/css/**',
                '!'+appPath+'/fonts/**',
                '!'+appPath+'/images/**',
                '!'+appPath+'/js/**',
                '!'+appPath+'/LTS/**'
            ],
            remotePath: '/var/www/html/ocp'
        },
        server105: {
            filePath: buildPath+'/**',
            remotePath: '/usr/local/wonhigh/miu-static/bs3/'+pkg.version,
            cssFilePath: buildPath+'/css/lts.css',
            cssRemotePath: '/usr/local/wonhigh/miu-static/lg7/'+pkg.version+'/css',
            jsFilePath: buildPath+'/js/lts/**',
            jsRemotePath: '/usr/local/wonhigh/miu-static/lg7/'+pkg.version+'/js/lts'
        },
    },
    trunk: {
        src: [
            buildPath+'/css/**',
            buildPath+'/fonts/**',
            buildPath+'/images/**',
            buildPath+'/js/**',
            '!'+buildPath+'/js/boot.min.js',
        ],
        dest: '../../trunk/bs3-1.0.0',
        bootJsSrc: '../../trunk/bs3-1.0.0/js/boot.js',
        bootJsDest: '../../trunk/bs3-1.0.0/js',
    },
};
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version <%= pkg.version %>',
  ' * @contact <%= pkg.contact %>',
  ' * @update <%= new Date().getFullYear() %>/<%= new Date().getMonth()+1 %>/<%= new Date().getDate() %> <%= new Date().getHours() %>:<%= new Date().getMinutes() %>',
  // ' * @link <%= pkg.homepage %>',
  ' */',
  ''].join('\n');

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
// load plugins
var $ = require('gulp-load-plugins')();
var gulpCopy = require('gulp-copy');



/*================== bs3: build local branches resources =================*/

/*
 * Copy all files into dist
 */
gulp.task('copy', function () {
    return gulp.src(path.copy.src)
        .pipe(gulpCopy(path.copy.dest,{prefix: 1}));
});

/*
 * Minify any CSS sources
 */
gulp.task('styles', function () {
    return gulp.src([
            appPath+'/css/lts.css',
            appPath+'/css/base.css'
        ])
        .pipe($.concat('base.css'))
        .pipe(gulp.dest(path.css.dest))
        .pipe($.size())
        .on('finish', function() {
            return gulp.src(path.css.src)
                // .pipe($.autoprefixer('last 2 version'))
                .pipe($.header(banner, { pkg : pkg }))
                .pipe(gulp.dest(path.css.dest))
                .pipe($.rename({suffix:'.min'}))
                .pipe($.csso())
                .pipe($.header(banner, { pkg : pkg }))
                .pipe(gulp.dest(path.css.dest))
                .pipe($.size());
        });
});

/*
 * Minify javascript sources
 */
gulp.task('scripts', function () {
    return gulp.src(path.js.src)
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.rename({suffix:'.min'}))
        .pipe($.uglify())
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.size());
});

/*
 * Concat javascript base sources
 */
gulp.task('jsbase', function () {
    return gulp.src(path.js.base)
        .pipe($.concat('base.js'))
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.rename({suffix:'.min'}))
        .pipe($.uglify())
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.size())
        .on('finish', function() {
            return gulp.src([
                    path.js.dest+'/base.js',
                    path.js.dest+'/base.min.js',
                ])
                .pipe(gulpCopy(appPath+'/js',{prefix: 2}));
        });
});

/*
 * Concat javascript components sources
 */
gulp.task('jsconcat', function () {
    return gulp.src(path.js.components)
        .pipe($.concat('components.js'))
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.rename({suffix:'.min'}))
        .pipe($.uglify())
        .pipe($.header(banner, { pkg : pkg }))
        .pipe(gulp.dest(path.js.dest))
        .pipe($.size())
        .on('finish', function() {
            return gulp.src([
                    path.js.dest+'/components.js',
                    path.js.dest+'/components.min.js',
                ])
                .pipe(gulpCopy(appPath+'/js',{prefix: 2}));
        });
});

/*
 * Minify image sources
 */
gulp.task('imagemin', () => {
	return gulp.src(path.image.src)
		.pipe($.imagemin({
			progressive: true,
		}))
		.pipe(gulp.dest(path.image.dest));
});

/*
 * Sprite image sources
 */
gulp.task('sprite', function () {
    var cssSprite = require('gulp-css-spritesmith');
    gulp.src('dist/css.css').pipe(cssSprite({
        imagepath: 'dist/images/',
        imagepath_map: null,
        spritedest: 'images/',
        spritepath: '../images/',
        padding: 2,
        useimageset: false,
        newsprite: false,
        spritestamp: false,
        cssstamp: false
    }))
    .pipe(gulp.dest('dist/sprite'));
});

/*
 * Update sources to common resource ftp (公共静态资源服务器)
 */
gulp.task('update-ftp-common-resource', function () {
    return gulp.src(path.ftp.server162.filePath)
        .pipe($.sftp({
            host: '172.17.210.162',
            user: 'root',
            pass: '172.17.210.162_gt8qdj9qtd',
            remotePath: path.ftp.server162.remotePath
        }));
});

/*
 * Update lts resources in lg7 to member ftp (会员服务器)
 */
gulp.task('update-ftp-member-lg7-lts', function () {
    return gulp.src(path.ftp.server105.cssFilePath)
        .pipe($.sftp({
            host: '172.17.210.105',
            user: 'root',
            pass: 'belle',
            remotePath: path.ftp.server105.cssRemotePath
        }))
        .on('finish', function() {
            return gulp.src(path.ftp.server105.jsFilePath)
                .pipe($.sftp({
                    host: '172.17.210.105',
                    user: 'root',
                    pass: 'belle',
                    remotePath: path.ftp.server105.jsRemotePath
                }));
        });
});

/*
 * Update bs3 sources to member ftp (会员服务器)
 */
gulp.task('update-ftp-member-bs3', function () {
    return gulp.src(path.ftp.server105.filePath)
        .pipe($.sftp({
            host: '172.17.210.105',
            user: 'root',
            pass: 'belle',
            remotePath: path.ftp.server105.remotePath
        }))
});

/*
 * Update sources to front-end ftp (前端210.82服务器)
 */
gulp.task('update-ftp-frontend', function () {
    return gulp.src(path.ftp.server82.filePath)
        .pipe($.sftp({
            host: '172.17.210.82',
            user: 'root',
            pass: 'wonhigh@016',
            remotePath: path.ftp.server82.remotePath
        }));
});

/*
 * Clean any files
 */
gulp.task('clean', function () {
    return gulp.src(['dist'], { read: true }).pipe($.clean());
});

gulp.task('update-ftp-member', ['update-ftp-member-bs3']); //'update-ftp-member-lg7-lts', 
/*
 * Build All Resources
 */
// 4. upload
gulp.task('update-all-ftp', ['update-ftp-common-resource', 'update-ftp-frontend', 'update-ftp-member']);
// 3. build
gulp.task('compile', ['styles', 'scripts', 'jsbase', 'jsconcat'], function () {
    // gulp.start('updateAllFtp');
});
// 2. copy and revision
gulp.task('prepare', ['copy'], function () {
    gulp.start('compile');
});
// 1. clean dist
gulp.task('build', ['clean'], function () {
    gulp.start('prepare');
});


/*
 * Server
 */
gulp.task('serve', ['watch'], function () {
    browserSync.init(null, {
        server: {
            baseDir: 'app',
            directory: true
        },
        debugInfo: false,
        open: false,
        hostnameSuffix: ".xip.io"
    }, function (err, bs) {
        require('opn')(bs.options.url);
        console.log('Started connect web server on ' + bs.options.url);
    });
});

gulp.task('watch', function () {
    // watch for changes
    gulp.watch(['app/*.html','app/css/**/*','app/js/**/*'], reload);

    // gulp.watch('app/css/**/*.scss', ['styles']);
    // gulp.watch('app/js/**/*.js', ['scripts']);
    // gulp.watch('app/images/**/*', ['images']);
});


/*================== bs3: update local trunk resources =================*/

/*
 * Copy all files into trunk folder
 */
gulp.task('trunk-copy', function () {
    return gulp.src(path.trunk.src)
        .pipe(gulpCopy(path.trunk.dest,{prefix: 1}));
});

/*
 * replace all js files in boot.js with .min suffix
 */
gulp.task('trunk-replace', function () {
    return gulp.src(path.trunk.bootJsSrc)
        .pipe($.replace('ui.js', 'ui.min.js'))
        .pipe($.replace('base.js', 'base.min.js'))
        .pipe($.replace('components.js', 'components.min.js'))
        .pipe(gulp.dest(path.trunk.bootJsDest));
});

/*
 * Update trunk resources
 */
gulp.task('trunk', ['trunk-copy'], function () {
    gulp.start('trunk-replace');
});

