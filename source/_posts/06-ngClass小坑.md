---
title: 06-ngClass小坑
date: 2018-05-03 10:57:37
tags: 前端-06-Angular
categories: 前端-06-Angular
id : 1537686179626
---

```
ng-class="{box-red:true}"
```
这样加了-会报错，在box-add 外面加个引号就可以了

```
ng-class="{'box-red':true}"
```

