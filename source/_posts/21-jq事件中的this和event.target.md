---
title: 21-jq事件中的this和event.target
date: 2018-11-28 11:52:30
tags: 前端-03-jQuery
categories: 前端-03-jQuery
id : 1543377144967
---
> [codepen](https://codepen.io/fengdou/pen/VEJpGV?editors=1111)

## jq中`this`和`event.target`的区别：

　　1.js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远指向触发事件的DOM元素本身；

　　2.this和event.target都是dom对象，使用jQuey中的方法可以将他们转换为jquery对象：$(this)和$(event.target).
　　
　　

---



event.target表示发生点击事件的元素；

this表示的是注册点击事件的元素。

有些时候 event.target 与 this 相等，即$(this) =$(event.target)

## 1 不代理事件时

不代理事件时，当前 谁注册了事件,this就指向谁

```
$("body").on("click",function(e){
  console.log(e.target)
  console.log($(this))
})
```
![image](https://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/4FF13ECE52824F68AAC6743822FD4B94/11803)

 
 ## 2 代理事件时
 
 代理事件时，e.target == this
 
```
$("body").on("click",".a",function(e){
  console.log(e.target)
  console.log($(this))
})
```
 
 ![image](https://note.youdao.com/yws/public/resource/ade1ce783b8d152f281c793ec03caff9/xmlnote/5F4607BAB33147569CBDEBEF164807EA/11810)
 