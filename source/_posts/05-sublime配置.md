---
title: 05-sublime配置
date: 2018-05-03 10:57:37
tags: 前端-07-scss
categories: 前端-07-scss
---
## sublime配置
1. 安装sass ,sass bulid(ctrl+b),sass beautify 插件
2. sass beautify按键绑定

```
[
    {
        "keys": ["alt+w"],
        "command": "sass_beautify"
    }
]
```
## koala配置:解决中文编译问题

1.koala可视化编译工具，

找到安装目录里面sass-3.3.7模块下面的engine.rb文件，例如下面路径：

C:\Program Files (x86)\Koala\rubygems\gems\sass-3.3.7\lib\sass

在这个文件里面==engine.rb==，添加一行代码

```
Encoding.default_external = Encoding.find('utf-8')
```

放在所有的require XXXX 之后即可。