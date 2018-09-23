---
title: 09-JavaScript获取AngularJS的$scope对象
date: 2018-05-03 10:57:37
tags: 前端-06-Angular
categories: 前端-06-Angular
id : 1537686340235
---
## 方法1：通过App对象查找 

```
// 通过DOM操作获取ng-app对象
var element = angular.element(document.getElementById("myApp"));
// 通过app对象获取ctrl对象
var controller = element.controller();
// 通过ctrl对象获取$scope
var scope = element.scope();
```
## 方法2：通过Controller查找

```
// 输入参数为ctrl名字
var ctrl= document.querySelector('[ng-controller=ctrlName]');
var scope = angular.element(ctrl).scope();
```

## ★使修改后的数据生效

```
scope.$apply();
```
## 其他常用方法

```
// 获取当前元素的$socpe: 
angular.element(domElement).scope() 
// 获取当前app的injector：
angular.element(domElement).injector()
// 获取当前元素的controller：
angular.element(domElement).controller() 
```
