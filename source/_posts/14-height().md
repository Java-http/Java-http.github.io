---
title: 14-height()
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
---
> [链接](https://www.cnblogs.com/jiji262/archive/2013/04/26/3045345.html)

## jQuery中的.height()、.innerHeight()和.outerHeight()

### 1. .height()

获取匹配元素集合中的第一个元素的当前计算高度值 或 设置每一个匹配元素的高度值（带一个参数）。

![image](http://images.cnitblog.com/blog/19094/201304/26173347-f8b548330ffc4bd3804b79dd6cd39241.png)

> 注意：1）.css('height') 和 .height()之间的区别是后者返回一个没有单位的数值（例如，400），前者是返回带有完整单位的字符串（例如，400px）。

> 2）.height()总是返回内容高度,不管CSS box-sizing属性值。~~.height('value')设置的容器宽度是根据CSS box-sizing属性来定的, 将这个属性值改成border-box，将造成这个函数改变这个容器的outerHeight，而不是原来的内容高度。~~ jq3改变的是内容高度

### 2. .innerHeight()

为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。

![image](http://images.cnitblog.com/blog/19094/201304/26173422-98459e9faef24401b2d39849f47909e8.png)

### 3. .outerHeight()

获取元素集合中第一个元素的当前计算高度值,包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值 ，或如果在一个空集合上调用该方法，则会返回 null。

![image](http://images.cnitblog.com/blog/19094/201304/26173438-20b7bea37b904861bf157eee7bb34c63.png)

## 原生js


```
<div id="box"></div>
#box{
    background-color: lightgrey;
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
    height:60px;
}
//获取盒子的内容高度，内容高度也可用用box.clientHeight获取，内容高度不包括边框和外边距和滚动条
var box = document.getElementById("box")
var contentHeight = window.getComputedStyle(box).height //输出 '60px'

//获取盒子客户端的高度
box.clientHeight //输出110 (内容高度+padding * 2)

//获取盒子自身实际高度
box.offsetHeight //输出160 (内容高度 + 内边距*2 +边框*2)
```
