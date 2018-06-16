---
title: 04-package.json与gulpfile.js
date: 2018-05-03 10:57:37
tags: 前端-09-gulp
categories: 前端-09-gulp
---
## package.json
```
{
  "name": "website",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "browser-sync": "^2.18.8",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-cache": "^0.4.6",
    "gulp-clean": "^0.3.2",
    "gulp-clean-css": "^3.0.3",
    "gulp-copy": "^1.0.0",
    "gulp-htmlmin": "^3.0.0",
    "gulp-if": "^2.0.2",
    "gulp-imagemin": "^3.1.1",
    "gulp-load-plugins": "^1.5.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-uglify": "^2.0.1",
    "gulp-useref": "^3.1.2"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
## gulpfile.js

```
var gulp = require('gulp');	
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();

// 一步到位
gulp.task('useref', function() {
  return gulp.src('app/*.html')
 	// .pipe($.htmlmin({removeComments: true})) //这个不能放在useref之前
 	.pipe($.useref())
	.pipe($.if('*.js', $.uglify()))
	.pipe($.if('*.css', $.cleanCss({ compatibility: 'ie9' })))
	.pipe($.if('*.css', $.autoprefixer()))
	.pipe(gulp.dest('dist'));
});

// htmlmin
gulp.task('htmlmin',['useref'], function() {
    gulp.src('dist/*.html')
    .pipe($.htmlmin({removeComments: true}))
    .pipe(gulp.dest('dist'));
});

//压缩图片
gulp.task('imagemin', function(){
    gulp.src('app/img/**/*')
        .pipe($.imagemin())
        // .pipe($.cache($.imagemin()))
        .pipe(gulp.dest('dist/img'))
});

// 复制文件
gulp.task('copy', function() {
	gulp.src(['app/*','!app/*.html'])
	  	.pipe(gulp.dest('dist'))
});

// 删除
gulp.task('clean', function() {
	gulp.src('dist')
	  .pipe($.clean());
});

// 静态服务器
gulp.task('browser-sync', function() {
    var files = [
	    '**/*.html',
	    '**/*.css',
	    '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
// 监听
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch(['app/*.html','app/**/*.js','app/**/*.css'], ['htmlmin']);
	gulp.watch(['app/*','!app/*.html'], ['copy']);
	gulp.watch(['app/img/**/*'],['imagemin']);
});

gulp.task('default',['htmlmin','imagemin','copy']);
```
