---
title: 14-angular controller之间通信方式
date: 2019-03-27 11:49:28
tags: 前端-06-Angular
categories: 前端-06-Angular
id : 1553658564264
---

> [博客园](https://www.cnblogs.com/freefish12/p/5761164.html)

在 Angular 中，Controller 之间通信的方式主要有三种：

1）作用域继承。利用子 Controller 控制父 Controller 上的数据。（父 Controller 中的数据要为引用类型，不能是基本类型）

2）注入服务。把需要共享的数据注册为一个 service，在需要的 Controller 中注入。

3）基于事件。利用 Angular 的事件机制，使用 $on、$emit 和 $boardcast