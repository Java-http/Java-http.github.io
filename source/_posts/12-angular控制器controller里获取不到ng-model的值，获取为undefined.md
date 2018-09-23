---
title: 12-angular控制器controller里获取不到ng-model的值，获取为undefined
date: 2018-05-17 15:04:39
tags: 前端-06-Angular
categories: 前端-06-Angular
id : 1537686464403
---
> [博客园](https://www.cnblogs.com/xiaoli52qd/p/7245274.html)

所遇问题：

html：ng-model=“test”，

但是在controller里打印的$scope属性里面并未发现test，控制台打印test为undefined，页面上{{test}}却可以正常输出来。

原因：

scope不一样?

解决方法：

在html里添加$parent


```
ng-model="$parent.test"
```
另一种方法：https://segmentfault.com/q/1010000003986262