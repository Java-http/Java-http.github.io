---
title: 26-JSON转换的坑
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686813820
---
```
JSON.parse('[{"start":"D","id":""}]')
```
==**要把单引号写在双引号外面**==

[CSDN博客链接](http://blog.csdn.net/shareus/article/details/50429006)