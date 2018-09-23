---
title: 13-vue中eventbus被多次触发（vue中使用eventbus踩过的坑）
date: 2018-07-06 16:01:26
tags: 前端-08-vue
categories: 前端-08-vue
id : 1537686565184
---
> [简书地址](https://www.jianshu.com/p/fde85549e3b0)

一开始的需求是这样子的，我为了实现两个页面组件之间的数据传递，假设我有页面A，点击页面A上的某一个按钮之后，页面会自动跳转到页面B，同时我希望将页面A上的某一些参数携带过去给页面B。

==总结： 所以，如果想要用bus 来进行页面组件之间的数据传递，需要注意亮点，组件A$emit事件应在beforeDestory生命周期内。其次，组件B内的$on记得要销毁。==