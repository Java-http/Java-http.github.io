---
title: 93-Array.filter(Boolean)
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537685400414
---

**Boolean 是一个函数，它会对遍历数组中的元素，并根据元素的真假类型，对应返回 true 或 false.**


```
b = a.filter(Boolean);
```
它等价于

```
b = a.filter(function (x) { return Boolean(x); });
```
