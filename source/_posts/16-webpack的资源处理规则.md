---
title: 16-webpack的资源处理规则
date: 2018-08-06 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
id : 1537686662771
---
# 资源处理规则

- **相对URL**, e.g. ./assets/logo.png 将会被解释成一个模块依赖。它们会被一个基于你的Webpack输出配置自动生成的URL替代。
- **没有前缀的URL**, e.g. assets/logo.png 将会被看成相对URL，并且转换成./assets/logo.png
- **前缀带~的URL** 会被当成模块请求, 类似于**require('some-module/image.png')**. 如果你想要利用Webpack的模块处理配置，就可以使用这个前缀。例如，如果你有一个对于assets的路径解析，你需要使用<img src="~assets/logo.png">来确保解析是对应上的。
- **相对根目录的URL**, e.g. /assets/logo.png 是不会被处理的.
