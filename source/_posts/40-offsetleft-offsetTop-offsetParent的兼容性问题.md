---
title: 40-offsetleft、offsetTop、offsetParent的兼容性问题
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
## 先来看看offsetParent返回的是什么值
ele.offsetParent返回的是ele元素最近的并且是定位过(relative,absolute)的父元素，如果没有父元素或者是父元素中没有一个是定位过的，返回值就是body元素

## ele.offsetLeft和ele.offsetTop取值问题，分多种情况：
如果ele是body的直接子元素，返回值则是ele距离body左侧或顶部的距离
如果ele不是body的直接子元素，在父元素进行定位(relative,absolute)的情况下，各浏览器返回值都是ele距离父元素左侧或者是顶部的距离（唯一的区别就是chrome没有把边框计算进去，IE,firefox都计算进去了）
如果ele不是body的直接子元素，父元素也没有进行定位的情况下，各浏览器返回的直接是ele元素距body的距离
 
 
从上面可以看出offsetLeft、offsetTop返回的值就是ele到offsetParent的距离，这个offsetParent是什么元素要看ele的父元素有没有进行定位（relative、absolute）

[参考链接](https://www.cnblogs.com/diantao/p/5264229.html)