---
title: 09-在create-react-app中安装mobx
date: 2019-03-27 11:51:39
tags: 前端-05-react
categories: 前端-05-react
id : 1553658696846
---

> [中文文档](https://cn.mobx.js.org/best/decorators.html)

## 1. 执行`npm run eject`

## 2. 启用装饰器语法

- 如果是`TypeScript`环境

在 `tsconfig.json` 中启用编译器选项 `"experimentalDecorators"`: true 。

- 如果是`js`环境

新建`jsconfig.json`

```
{
  "compilerOptions": {
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
  }
}
```

接下来，执行 

```
npm install --save-dev babel-preset-mobx
```

在`package.json` babel字段增加 ` "mobx"`


```
  "babel": {
    "presets": [
      "react-app"
++++  "mobx"
    ]
  },
```
