---
title: 45-Javascript中递归造成的堆栈溢出及解决方案
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
> [博客园](https://www.cnblogs.com/cuew1987/p/4122856.html) 

关于堆栈的溢出问题，在Javascript日常开发中很常见，Google了下，相关问题还是比较多的。本文旨在描述如何解决此类问题。 首先看一个实例(当然你可以使用更容易的方式实现，这里我们仅探讨递归)：


```
function isEven (num) {
    if (num === 0) {
        return true;
    }
 
    if (num === 1) {
        return false;
    }
 
    return isEven(Math.abs(num) - 2);
}
 
//Outputs: true
console.log(isEven(10));
 
//Outputs: false
console.log(isEven(9));
```
当我们把参数改成10000时，运行下例会发生堆栈溢出：`//Outputs: Uncaught RangeError: Maximum call stack size exceeded `

## 使用闭包：

```
function isEven (num) {
    if (num === 0) {
        return true;
    }
 
    if (num === 1) {
        return false;
    }
 
    return function() {
        return isEven(Math.abs(num) - 2);
    }
}
//Outputs: true
console.log(isEven(4)()());
```

```
function isEven(n) {
    /**
     * [isEvenInner 递归]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    function isEvenInner (n) {
        if (n === 0) {
            return true;
        }
 
        if (n === 1) {
            return false;
        }
 
        return function() {
            return isEvenInner(Math.abs(n) - 2);
        }
    }
    /**
     * [trampoline 迭代]
     * @param  {[type]} func [description]
     * @param  {[type]} arg  [description]
     * @return {[type]}      [description]
     */
    function trampoline (func, arg) {
        var value = func(arg);
 
        while(typeof value === "function") {
            value = value();
        }
 
        return value;
    }
 
    return trampoline.bind(null, isEvenInner)(n);
}
//Outputs: true
console.log(isEven(10000));
 
//Outputs: false
console.log(isEven(10001));
```
