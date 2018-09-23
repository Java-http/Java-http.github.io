---
title: 63-eventLoop
date: 2018-07-06 16:00:31
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537687054290
---
> [JavaScript 运行机制详解：再谈Event Loop-阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。