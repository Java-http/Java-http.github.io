---
title: 101-webpack怎么使用微信sdk
date: 2019-10-31 18:17:44
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1572517067380
---
将开头代码

```
!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,
```
改为:
```
!function(e,n){module.exports=n(e,!0)}(window,
```

> [参考地址](https://github.com/yanxi-me/weixin-js-sdk/blob/master/index.js)