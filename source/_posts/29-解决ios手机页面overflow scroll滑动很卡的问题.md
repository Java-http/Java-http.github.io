---
title: 29-解决ios手机页面overflow scroll滑动很卡的问题
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1537686868906
---
在移动端html中经常出现横向/纵向滚动的效果,但是在iPhone中滚动速度很慢,感觉不流畅,有种卡卡的感觉,但是在安卓设备上没有这种感觉;

要解决这个问题很简单:

一行代码搞定


```
-webkit-overflow-scrolling : touch;
```
