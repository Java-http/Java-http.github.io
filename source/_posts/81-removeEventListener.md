---
title: 81-removeEventListener
date: 2019-02-23 17:43:21
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1550915003986
---
removeEventListener() 方法用于移除由 addEventListener() 方法添加的事件句柄。

> 注意： 如果要移除事件句柄，addEventListener() 的执行函数必须使用**外部函数**

匿名函数，类似 "document.removeEventListener("event", function(){ myScript });" 该事件是无法移除的。