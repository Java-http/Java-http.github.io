---
title: 67-fastclick的坑
date: 2018-11-28 11:22:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1543375366583
---
> [sf](https://segmentfault.com/a/1190000009246194) [码经笔记](https://majing.io/posts/10000007721218)

如果想触发原生click事件，请将needsclick绑定在实际点击的元素上，即e.target上，而不是你手动触发的元素上。这可以说是fastclick的一个小bug，因为之前的点击影响了后面的点击。

只能在click的回调函数中手动触发element.click() ，否则无效，有兴趣的可以试试。这个在MDN上没写，算是意外收获。