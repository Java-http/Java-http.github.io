---
title: 10-with语句
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
```
with(document.forms[0]){
       name.value = "lee king";
       address.value = "Peking";
       zipcode.value = "10000";
}
```
===

```
document.forms[0].name.value = "lee king";
document.forms[0].address.value = "Peking";
document.forms[0].zipcode.value = "10000";
```


js的解释器需要检查with块中的变量是否属于with包含的对象，这将使with语句执行速度大大下降，并且导致js语句很难被优化。为了兼顾速度与代码量可以找到一个比较折衷的方案：

