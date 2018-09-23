---
title: 20-this
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686745541
---
> this： 指的是调用 当前 方法（函数）的那个对象


```
<div onclick="    this     fn1();      "></div>     fn1(); 里的 this 指的是 window
```

```
function fn1(){
	// this
}
// fn1();			this => window
// oDiv.onclick = fn1;			this => oDiv
```

```
oDiv.onclick = function (){
	fn1();					fn1() 里的this => window
}
```
