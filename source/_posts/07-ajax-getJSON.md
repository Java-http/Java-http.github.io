---
title: 07-ajax-getJSON
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
id : 1537686242480
---
jQuery中的$.getJSON( )方法函数主要用来从服务器加载json编码的数据，它使用的是GET HTTP请求。使用方法如下：

```
$.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )
```


- url是必选参数，表示json数据的地址；
- data是可选参数，用于请求数据时发送数据参数；
- success是可参数，这是一个回调函数，用于处理请求到的数据。
