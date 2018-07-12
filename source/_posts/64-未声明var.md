---
title: 64-未声明var
date: 2018-07-12 21:04:27
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---

声明变量 b 的时候没有加 var，因此 js 引擎默认将变量 b 声明为全局变量（值为 undefined）并提升到作用域顶部

```
(function(){var a=b=5;})()
console.log(b) //5
```
在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。

```
"use strict";
(function(){var a=b=5;})()
console.log(b) // Uncaught ReferenceError: b is not defined
```


未使用 var 声明的全局变量的configurable 属性是 true，也就是说，未通过 var 声明的变量是可以删除的，如下：

```
var a = 1
b = 2

console.log(Object.getOwnPropertyDescriptor(window, a))
// { value: 1, writable: true, enumerable: true, configurable: false }

console.log(Object.getOwnPropertyDescriptor(window, b))
// { value: 2, writable: true, enumerable: true, configurable: true }
```

```
delete a
// false

delete b
// true
```
