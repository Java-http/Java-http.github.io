---
title: 86-webpack中的tree shaking
date: 2019-02-23 17:59:22
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1550915965282
---
## webpack中的tree shaking

`webpack 2` 正式版本内置支持 ES2015 模块（也叫做 harmony 模块）和未引用模块检测能力。新的 `webpack 4` 正式版本，扩展了这个检测能力，通过 `package.json` 的 `"sideEffects"` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 `"pure(纯的 ES2015 模块)"`，由此可以安全地删除文件中未使用的部分。


为了学会使用 tree shaking，你必须……

- 使用 ES2015 模块语法（即 import 和 export）。
- 在项目 package.json 文件中，添加一个 "sideEffects" 属性。
- 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。