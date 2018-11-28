---
title: 33--webkit-line-clamp 实现限制文字显示多行省略（CSS 多行省略）
date: 2018-11-28 11:22:37
tags: 前端-01-切图CSS
categories: 前端-01-切图CSS
id : 1543375366583
---

```
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
white-space: normal;

```
