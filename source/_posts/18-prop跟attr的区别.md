---
title: 18-prop跟attr的区别
date: 2018-10-18 09:23:37
categories: 前端-03-jQuery
tags: 前端-03-jQuery
id : 1539825813537
---
> [link](https://www.cnblogs.com/jiajia123/p/6539326.html)
attr是通过[setAtrribute和getAttribute](https://www.cnblogs.com/wangfupeng1988/p/3631853.html)来设置的，使用的是DOM属性节点，而prop是通过document.getElementById(el)[name] = value来设置的，是转化为js对象的属性。

通常在获取或者设置checked，selected，readonly，disabled等的时候使用prop效果更好，减少了访问dom属性节点的频率。

大家知道，有的浏览器只要写checked，disabled就可以了，而有的则需要些checked=“checked”，disabled=“disabled”。比如用attr来获取checked，选中状态获取attr（“checked”）为checked，没有选中则为undefined。。而prop来获取的为，选中为true，没有选中为false。

另外，用prop来设置属性名，html结构是不会发生变化的。而用attr来设置属性名，html结构是会发生变化的。

**总的来说，按照我自己的理解，一般如果是标签自身自带的属性，我们用prop方法来获取；如果是自定义的属性，我们用attr方法来获取。**

