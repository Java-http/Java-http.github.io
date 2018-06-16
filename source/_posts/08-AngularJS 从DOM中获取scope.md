---
title: 08-AngularJS 从DOM中获取scope
date: 2018-05-03 10:57:37
tags: 前端-06-Angular
categories: 前端-06-Angular
---
> [参考链接](http://www.cnblogs.com/mafeifan/p/5852640.html)

scope是附加在DOM上，使用了ng-app指令的DOM就是root scope。一般是<html ng-app="app">或body元素

如果要查看某个DOM附加的scope信息，可以按下面的步骤：

1. 打开chrome的调试面板右键元素，选择检查

2. 在console面板中输入$0并回车，可以显示当前所选的元素。

3. 获取附加在他上面的scope信息。执行angular.element($0).scope() 或 仅输入 $scope
![image](http://images2015.cnblogs.com/blog/336056/201609/336056-20160908123933551-1570551424.png)

