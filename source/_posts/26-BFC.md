---
title: 26-BFC
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1537686809947
---
> [链接](https://juejin.im/entry/5a39ef2e518825696f7e245f)

## 1.BFC布局规则：

- 内部的Box会在垂直方向，一个接一个地放置。
-Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
- 每个元素的margin box的左边， 与包含块border - - box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算

## 二、哪些元素会生成BFC?

- 根元素
- float属性不为none
- position为absolute或fixed
- display为inline-block, table-cell, table-caption, flex, inline-flex
- overflow不为visible

## 三、BFC的作用及原理

- 1. 自适应两栏布局
- 2. 清除内部浮动