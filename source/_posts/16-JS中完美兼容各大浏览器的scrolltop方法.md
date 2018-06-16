---
title: 16-JS中完美兼容各大浏览器的scrolltop方法
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
## 1、各浏览器下 scrollTop的差异

### IE6/7/8/9/10：

对于没有doctype声明的页面里可以使用  ==document.body.scrollTop== 来获取 scrollTop高度 ；

 对于有doctype声明的页面则可以使用 ==document.documentElement.scrollTop==  ；

### Safari:

safari 比较特别，有自己获取scrollTop的函数 ： ==window.pageYOffset== ；

### Firefox:

火狐等等相对标准些的浏览器就省心多了，直接用 ==document.documentElement.scrollTop== ；

## 2、获取scrollTop值
完美的获取scrollTop 赋值短语 ：

```
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
```
## 3、自己的方案

```
        $(document.body).animate({scrollTop:0}, 600);
        $(document.documentElement).animate({scrollTop:0}, 600);
```
