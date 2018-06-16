---
title: 55-构造函数return语句
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---

> [CSDN](http://blog.csdn.net/spicyboiledfish/article/details/70858565)


```
<script>  
    function Person(){  
//      return 123;                         //值类型  
//      return "abcdef";                    //值类型  
//      return ["a","b"];                   //引用类型  
//      return {a:2};                       //引用类型  
         return function(){ console.log(1)};   //引用类型  
 }  
     Person.prototype.sayHello =  
           function() {  
             console.log('hello world');  
     };  
     console.log(new Person());  
  
//new Person()分别返回以下:  
//        1. Person{}  
//        2. Person{}  
//        3. ["a","b"];  
//        4. Object {a:2}  
//        5. function(){ console.log(1)};  
</script>  
```
可以看出：在JavaScript构造函数中：如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；如果return引用类型（数组，函数，对象），那么实例化对象就会返回该引用类型；


```
function Super(a){  
    this.a=a;  
    return 123;  
}  
Super.prototype.sayHello=function(){  
     console.log("Hello")  
}  
function Super1(a){  
     this.a=a;  
     return {a:2};  
}  
Super1.prototype.sayHello=function(){  
     console.log("Hello")  
}  
console.log(new Super(1));      //返回Super{a:1},有原型方法sayHello  
console.log(new Super1(2));     //返回Object{a:2},没有原型方法sayHello  
```
