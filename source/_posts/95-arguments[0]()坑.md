---
title: 95-arguments[0]()坑
date: 2019-06-15 18:23:38
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1560594220363
---

```
var length = 10;
function fn(){
    console.log(this.length);
}
var obj = {
    length:5,
    methods:function(fn){
        fn();
        arguments[0]();
    }
};
obj.methods(fn, 1);  // 10 2
/*
    第一个 fn  this指向window   输出10
    第二个 arguments[0]() 可以理解为arguments.0() [只是方便理解] ，
                即argument对象调用fn函数，所以this指向arguments对象
    arguments = {
      0:fn,    //function fn(){console.log(this.length);}
      1:第二个参数 1，
      length:2
    }
*/
```
附一个例子(手写new的实现)

```
function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
```
