---
title: 10-AngularJS如何判断不同情况设置不同背景色
date: 2018-05-03 10:57:37
tags: 前端-06-Angular
categories: 前端-06-Angular
---
html代码：使用ng-style

```
<ul style="float: left;overflow:hidden;" ng-repeat='node in nodedata'>
    <li style="list-style-type:none;">
        <span ng-style="setColor(node.status)" uib-popover="{{node.nodeIndex|getNodeNameFliter}}"
              popover-trigger="mouseenter" type="button" class="btn btn-default dd breath_light"
              popover-placement="bottom">{{node.nodeIndex|getNodeNameFliter}}</span>
        <i class="icon-chevron-right" style="margin-left:10px;color:green;font-size:20px;"></i>
    </li>
</ul>
```
js代码：

```
$scope.setColor = function (status) {
    var p = "";
    if (1 == status) {
        p = 'red';
    } else if (2 == status) {
        p = 'yellow';
    } else if (3 == status) {
        p = 'green';
    } else if (4 == status) {
        p = 'black';
    }
    return {"background-color": p};
};
```
