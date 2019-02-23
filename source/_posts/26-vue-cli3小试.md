---
title: 26-vue-cli3小试
date: 2019-02-23 18:00:23
tags: 前端-08-vue
categories: 前端-08-vue
id : 1550916025434
---
## Vue CLI 有几个独立的部分

1. CLI
2. CLI 服务 (@vue/cli-service)
3. CLI 插件

##  简单的配置方式

下面的代码 演示了如何全局引用`jquery`，以及使用`dllPlugin`将其单独打包出来

`webpack_dll.config.js`

```
const path = require('path')
const webpack = require('webpack')
const CleanWebpaclPlugin = require('clean-webpack-plugin')
const FirendlyErrorePlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    // 将 lodash 模块作为入口编译成动态链接库
    jquery: ['jquery']
  },
  output: {
    // 指定生成文件所在目录
    // 由于每次打包生产环境时会清空 dist 文件夹，因此这里我将它们存放在了 public 文件夹下
    path: path.resolve(__dirname, 'static'),
    // 指定文件名
    filename: '[name].dll.js',
    // 存放动态链接库的全局变量名称，例如对应 lodash 来说就是 lodash_dll_lib
    // 这个名称需要与 DllPlugin 插件中的 name 属性值对应起来
    // 之所以在前面 _dll_lib 是为了防止全局变量冲突
    library: '[name]_dll_lib'
  },
  plugins: [
    new CleanWebpaclPlugin(['static']),
    new FirendlyErrorePlugin(),

    // 接入 DllPlugin
    new webpack.DllPlugin({
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      // 由于每次打包生产环境时会清空 dist 文件夹，因此这里我将它们存放在了 public 文件夹下
      path: path.join(__dirname, 'static', '[name].manifest.json'),
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 lodash.manifest.json 中就有 "name": "lodash_dll_lib"
      name: '[name]_dll_lib'
    })
  ]
}

```


`vue.config.js`


```
const path = require('path')

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('ProvidePlugin')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [
        {
          $: 'jquery',
          jQuery: 'jquery'
        }
      ])

    config
      .plugin('DllReferencePlugin')
      .use(require.resolve('webpack/lib/DllReferencePlugin'), [
        {
          // 描述 jquery 动态链接库的文件内容
          manifest: require('./static/jquery.manifest.json')
        }
      ])

    // 该插件将把给定的 JS 或 CSS 文件添加到 webpack 配置的文件中，并将其放入资源列表 html webpack插件注入到生成的 html 中。
    config
      .plugin('AddAssetHtmlPlugin')
      .use(require.resolve('add-asset-html-webpack-plugin'), [
        {
          // 要添加到编译中的文件的绝对路径，以及生成的HTML文件。支持globby字符串
          filepath: require.resolve(path.resolve(__dirname, 'static/jquery.dll.js')),
          // 文件输出目录
          outputPath: 'static',
          // 脚本或链接标记的公共路径
          publicPath: 'static'
        }
      ])
  }
}

```
`.eslintrc.js` 注意加上全局变量,`globals`不能加双引号，语法较为严格

```
  globals:{
    "$":false,
    "jQuery":false
  }
```

> [参考链接](https://juejin.im/post/5c665c6151882562986ce988)
> [github项目文件](https://github.com/Java-http/vue-cli3-demo)

## 使用cdn引用jquery

此方法更为简单，
1. 按往常一样,`npm i jquery -S`，引入jquery
2. 新建vue.config.js
```
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('ProvidePlugin')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [
        {
          $: 'jquery',
          jQuery: 'jquery'
        }
      ])

    config.externals({
      jquery: 'jQuery'
    })
  }
}

```
3. 在`public/index.html`中引入cdn资源
```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
```
4. 注意`.eslintrc`文件添加 `jquery`为全局变量

```
  globals:{
    "$":false,
    "jQuery":false
  }
```

> [中文文档](https://webpack.docschina.org/configuration/externals/)
> [参考链接](https://segmentfault.com/a/1190000015709430)