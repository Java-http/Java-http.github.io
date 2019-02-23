---
title: 39-new 的作用
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686931330
---
## 1.
```
var Func=function(){  
};  
var func=new Func ();  
```
new共经过了4几个阶段

1、创建一个空对象
```
varobj=new Object();  
```
2、设置原型链

```
obj.__proto__= Func.prototype;  
```
3、让Func中的this指向obj，并执行Func的函数体。

```
var result =Func.call(obj);  
```
4、判断Func的返回值类型：

如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。


```
if (typeof(result) == "object"){  
  func=result;  
}  
else{  
    func=obj;;  
}  
```
## 2.第二种解析


```
function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
```

Arguments对象有一个callee 属性，可以获取当前函数，这个属性在arguments的第一个位置 ，所以 [].shift.call(arguments) 将arguments转为数组后调用shift, 拿到第一个元素 callee

> [参考链接](https://juejin.im/post/5c1bbc16e51d4552e01a0114)