---
title: 21-vue-loader
date: 2019-02-23 17:41:41
tags: 前端-08-vue
categories: 前端-08-vue
id : 1550914906301
---
## 加载一个全局设置文件

在每个组件里加载一个设置文件，而无需每次都将其显式导入，是一个常见的需求。比如为所有组件全局使用 scss 变量。为了达成此目的：


```
npm install sass-resources-loader --save-dev
```

（如果你使用了 vuejs-templates/webpack，请如下修改 build/utils.js：）

```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/style/_variables.scss')
    }
  }
),
```

## 编译规则


- 如果路径是绝对路径，会原样保留。

- 如果路径以 . 开头，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析。

- 如果路径以 ~ 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 node 依赖中的资源：
```
<img src="~some-npm-package/foo.png">
```
- (13.7.0+) 如果路径以 `@` 开头，也会被看作模块依赖。如果你的 `webpack` 配置中给 `@`配置了 `alias`，这就很有用了。所有 `vue-cli` 创建的项目都默认配置了将 `@` 指向 `/src`。