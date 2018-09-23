---
title: 22-js正则表达exec与match的区别说明
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686763697
---
## 1、exec是正则表达式的方法，而不是字符串的方法，它的参数才是字符串，如下所示：

如上定义 

```
var reg = new RegExp("abc") ; 
var str = "3abc4，5abc6";
reg.exec(str );
```
## 2、match是字符串执行匹配正则表达式规则的方法，他的参数是正则表达，如

```
var reg = new RegExp("abc") ; 
var str = "3abc4,5abc6";
str.match(reg);
```
## 3、exec和match返回的都是数组；

如果exec执行的正则表达式没有子表达式(小括号内的内容，如/abc(\s*)/中的(\s*) )，如果有匹配，就返回第一个匹配的字符串内容，此时的数组仅有一个元素，如果没有匹配返回null;


```
var reg = new RegExp("abc") ; 
var str = "3abc4,5abc6";
alert(reg.exec(str));
alert(str.match(reg));
```
执行如上代码，你会发现两者内容均为一样：abc，

## 4、如果定义正则表达对象为全局匹配如:

```
var reg = new RegExp("abc","g") ; 
var str = "3abc4,5abc6";
alert(reg.exec(str));
alert(str.match(reg)); 
```
==则为abc和abc,abc；因为match执行了全局匹配查询；而exec如果没有子表达式只会找到一个匹配的即返回。==

## 5、当表示中含有子表达式的情况：

```
var reg = new RegExp("a(bc)") ; 
var str = "3abc4,5abc6";
alert(reg.exec(str));
alert(str.match(reg));
```
你会发现两者执行的结果都是：abc,bc; 

## 6、当如果正则表达式对象定义为为全局匹配

```
var reg = new RegExp("a(bc)","g") ; 
var str = "3abc4,5abc6";
alert(reg.exec(str));//["abc", "bc", index: 1, input: "3abc4,5abc6"]
alert(str.match(reg));//["abc", "abc"]
```
则两者返回的结果是abc,bc和abc,abc,

## 总结为：

1. 当正则表达式无子表达式，并且定义为非全局匹配时，exec和match执行的结果是一样，均返回第一个匹配的字符串内容；

2. 当正则表达式无子表达式，并且定义为全局匹配时，exec和match执行，做存在多处匹配内容，则match返回的是多个元素数组；

3. 当正则表达式有子表示时，并且定义为非全局匹配，exec和match执行的结果是一样如上边的第5种情况；

4. 当正则表达式有子表示时，并且定义为全局匹配，exec和match执行的结果不一样，此时match将忽略子表达式，只查找全匹配正则表达式并返回所有内容，如上第6种情况；

也就说，exec与全局是否定义无关系，而match则于全局相关联，当定义为非全局，两者执行结果相同
