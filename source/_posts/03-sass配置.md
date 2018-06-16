---
title: 03-sass配置
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---
> 本人于17年8月8日进行的测试。在使用 webpack + vue 的时候，webpack 的 的配置文件中对于 vue 的配置，只需要在 module 中写： { text: /\.vue$/, loader: 'vue-loader' } 即可，无需配置 option，在安装了 node-sass 和 sass-loader 2个包的情况下 .vue 的 style 写成 <style lang="scss"> </style>，编译的时候会自动应用 sass-loader 进行编译。

# 只要安装 安装 node-sass 和 sass-loader 就行