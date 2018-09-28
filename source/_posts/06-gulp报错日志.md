---
title: 06-gulp报错日志
date: 2018-09-28 08:40:40
tags: 前端-06-gulp
categories: 前端-06-gulp
id : 1538095934940
---
> [链接](https://blog.csdn.net/shu580231/article/details/79258296)

gulp有一个插件，gulp-util，用来打印日志，看具体什么地方出错了。


```
/ 合并，压缩文件
    gulp.task('scripts',['copy'], function() {
        gulp.src('./dist/js/page/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(uglify({
                mangle:true,
                compress: true
            }
            ))
            .on('error', function (err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
            })
            .pipe(sourcemaps.write('../maps'))
            .pipe(gulp.dest('./dist/js/page'));
    });

```
