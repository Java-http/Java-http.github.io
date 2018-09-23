---
title: 11-css中margin-top或者margin-bottom失效
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1537686430970
---
css中margin-top是设置容器的外间距了距离了，但有朋友会发现div嵌套后，margin-top或者margin-bottom失效了，下面来看看此问题解决办法。

设计页面的时候遇到一个神奇的问题，下面是html的代码

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			margin: 0;
			padding: 0;
		}
		.parent{
			width: 200px;
			height: 200px;
			background: blue;
			/* padding: 0; */
		}
		.box{
			width: 100px;
			height: 100px;
			background: red;
			margin-top: 100px;
		}
	</style>
</head>
<body>
	<div class="parent">
		<div class="box"></div>
	</div>
</body>
</html>
```
发现margin相对的父容器搞错了，找到body去了，成了相对于body来设置margin，此时设置了homeNav 的高度和宽度都没效果，让我抓狂不已，div都不听话了，调试了半天终于找到了原因。
[图片地址](http://note.youdao.com/noteshare?id=eedfcedc72d4673d1a7bc23c31d1ad03&sub=D54BD29A546E47918C8C3F7A16605B35)

> IE6 7下正常，IE8及以上和ff、chrome表现一致

#### 原因：

在两个嵌套的div，如果外层div的父容器padding值为0，
那么内层div的margin-top或者margin-bottom的值会”转移”给外层div，也就是父容器的父容器。

解决办法：
1. 设置父容器的的样式加上：overflow:hidden。
2. 把对父容器的margin-top外边距改成padding-top内边距。
3. 给父容器div加样式， padding-top: 1px。
4. 给父容器div加样式，position: absolute。
5. 把父元素变成一个 block formating context ，下面是可选的方法
a、float: left/right

b、position: absolute

c、display: inline-block/table-cell

d、overflow: hidden/auto

我自己使用的是第一种方法，建议方法1。