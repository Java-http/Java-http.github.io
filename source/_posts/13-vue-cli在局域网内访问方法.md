---
title: 13-vue-cli在局域网内访问方法
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---
package.json中找到 scripts.dev，在后面加上host参数 --host 0.0.0.0

```
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 0.0.0.0",
```
