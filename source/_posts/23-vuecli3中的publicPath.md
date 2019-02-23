---
title: 23-vuecli3中的publicPath
date: 2019-02-23 17:50:45
tags: 前端-08-vue
categories: 前端-08-vue
id : 1550915454915
---
这个值也可以被设置为空字符串 `('')` 或是相对路径 `('./')`，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 `Cordova hybrid` 应用的文件系统中。

## 相对 publicPath 的限制

相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:

- 当使用基于 `HTML5 history.pushState` 的路由时；
- 当使用 `pages` 选项构建多页面应用时。

