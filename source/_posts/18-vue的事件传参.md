---
title: 18-vue的事件传参
date: 2018-10-18 09:17:08
tags: 前端-08-vue
categories: 前端-08-vue
id : 1539825420740
---
# vue的事件传参

## 1. Vue的@click="doXX" 和 @click = "doXX()"有什么区别？

不带括号会传进来一个事件对象，带括号的不会

## 2. 子组件会将数据自动作为参数传给父组件的回调函数,可是如果我们想在回调函数传其他的参数值怎么传呢？


```
<json-editor @change="onSettingChange(arg，arguments)"></json-editor>
```
这样子组件传来的参数值可以通过`arguments`这个数组读取，多余的参数则按照一般的方式传值即可：


```
onSettingChange：function （arg，data）{

    里面的arg是一般的传值，
    
    data[0]里面是子组件传过来的数据

 }
```

> [vue中自定义事件回调函数传参](https://blog.csdn.net/orq18810575870/article/details/82027539) [知乎](https://www.zhihu.com/question/49533859)