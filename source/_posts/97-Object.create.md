---
title: 97-Object.create
date: 2019-08-31 15:52:14
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1567237937554
---

`object.create()` 是使用指定的原型proto对象及其属性`propertiesObject`去创建一个新的对象。
```
Object.myCreate = function (obj, properties)  {
  var F = function ()  {}
  F.prototype = obj
  if (properties) {
     Object.defineProperties(F, properties)
  }
  return new F()
}

Object.myCreate({}, {a: {value: 1}})     // {a: 1}
```
