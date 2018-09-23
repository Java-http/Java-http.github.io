---
title: 11-ng事件中的this
date: 2018-05-03 10:57:37
tags: 前端-06-Angular
categories: 前端-06-Angular
id : 1537686438660
---
ng事件中的this是 $scope ,而不是自己本身

ng-click="shareGoods({{item.goods_id}},$event)" 传递一个$event对象
通过事件对象 ==$event.target==  获取事件源