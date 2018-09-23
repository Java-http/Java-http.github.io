---
title: 02-wepy使用sass配置
date: 2018-05-03 10:57:37
tags: 前端-12-微信小程序
categories: 前端-12-微信小程序
id : 1537685837004
---
[link](https://github.com/Tencent/wepy/issues/938)

wepy.confing.js 取消注释
```
sass: {
      outputStyle: 'compressed'
    },
```

安装 compilers

```
cnpm install node-sass -D
npm install wepy-compiler-sass@1.3.12 --save
```

