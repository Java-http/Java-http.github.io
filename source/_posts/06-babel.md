---
title: 06-babel
date: 2018-05-03 10:28:37
tags: 前端-00-基础
categories: 前端-00-基础
---
##### webstorm 配置 es6
1.  `cnpm install --save-dev babel-cli `
2.  `cnpm install --save-dev babel-preset-es2015`
3.  新建一个.babelrc文件:

```
{
  "presets": [
    "es2015"
  ]
}
```
4.打开webstorm,进入设置，把JavaScript language version改成ECMAScript 6；  
5.点Add watcher ++(file-settings-Tools-file watches)++ 啦，点完之后会弹出一个框，其中大部分设置IDE都帮你搞定了,  
下面第三行，Program那一项，填
`$ProjectFileDir$/node_modules/.bin/babel.cmd`



