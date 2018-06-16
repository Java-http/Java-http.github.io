---
title: 15-原生event
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
## jquery之event与originalEvent的关系、event事件对象用法浅析

在jquery中，最终传入事件处理程序的 event 其实已经被 jQuery 做过标准化处理，

其原有的事件对象则被保存于 event 对象的 ==originalEvent== 属性之中，

每个 event 都是 jQuery.Event 的实例