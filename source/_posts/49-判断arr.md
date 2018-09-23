---
title: 49-判断arr
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686981811
---
1. instanceof 判断

```
var ary = [1,23,4];
console.log(ary instanceof Array)//true;
```

2. 原型链方法
```
var ary = [1,23,4];
console.log(ary.__proto__.constructor==Array);//true
console.log(ary.constructor==Array)//true 这两段代码是一样的
 
```

3. 通用的方法
```
var ary = [1,23,4];
function isArray(o){
return Object.prototype.toString.call(o)=='[object Array]';
}
console.log(isArray(ary));

```

 
