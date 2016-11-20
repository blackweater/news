//npm install gulp-minify-css gulp-minify-html gulp-concat gulp-uglify gulp-rename del --save-dev
var gulp = require('gulp');
//引入压缩JS的模块
var uglify = require('gulp-uglify');
//替文件重命名
//var rename = require('gulp-rename');
//////合并代码的模块
////var concat = require('gulp-concat');
////压缩html
var minifyhtml = require('gulp-minify-html');
////压缩CSS//这个模块没有用
var cssmin = require('gulp-clean-css');
////压缩图片
//var  imagemin = require('gulp-imagemin');
////转化less
//var less = require("gulp-less")
//gulp.task定义任务压缩JS
gulp.task("minify", function() {
		//gulp.src引入我们需要处理的文件
		gulp.src(['./js/*.js'])
			//pipe方法里面执行压缩
			.pipe(uglify())
			//合并所有的js到main.js
//			.pipe(concat('main.js'))
			//执行重命名
//			.pipe(rename({
//				suffix: '.min',
//			}))
			
			//导出被压缩的js
			.pipe(gulp.dest('./dist/js'))
})
//gulp.watch('./js/base.js',["minify"])
//压缩html
gulp.task("minifyhtml", function() {
		//gulp.src引入我们需要处理的文件
		gulp.src(['./views/*.html'])
			//pipe方法里面执行压缩
			.pipe(minifyhtml())
			.pipe(gulp.dest('./dist/views'))
	})
////压缩CSS
gulp.task("cleancss", function() {
	//gulp.src引入我们需要处理的文件
	gulp.src(['./css/*.css'])
		//pipe方法里面执行压缩
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'))
})
//gulp.task('imagemin', function () {
//  gulp.src('./images/*.{png,jpg,gif,ico}')
//      .pipe(imagemin())
//      .pipe(gulp.dest('dist/images'));
//});
//压缩图片
//gulp.task("imagemin", function() {
//	//gulp.src引入我们需要处理的文件
//	gulp.src(['./images/*.+(jpeg|jpg|png|gif)'])
//		//pipe方法里面执行压缩
//		.pipe(
//			imagemin({
//			optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
//			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//		}))
//		.pipe(gulp.dest('./dist/images'));
//})

//处理less文件
//gulp.task("less", function() {
//	//gulp.src引入我们需要处理的文件
//	gulp.src(['./less/bootstrap.less'])
//		//pipe方法里面执行压缩
//		.pipe(less())
//		.pipe(minifycss())
//		.pipe(gulp.dest('./dist/less')), 'less',
//}),'imagemin'

//执行任务
gulp.task('default', ['minify', 'minifyhtml', 'cleancss']);