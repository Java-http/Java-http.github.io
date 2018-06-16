---
title: 10-jsonp的坑
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
---

```
$.ajax({
 9             type : "get",
10             async:false,
11             url : "ajax.ashx",
12             dataType : "jsonp",
13             jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
14             jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
15             success : function(json){
16                 alert(json);
17                 alert(json[0].name);
18             },
19             error:function(){
20                 alert('fail');
21             }
22         });
```
jsonp: "callbackparam",//==传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)==
    
jsonpCallback:"success_jsonpCallback",//==自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名==

> 如何使用JSONP，使用JSONP，我们必须带一个参数传给程序员，在后面加一个callback=？的参数，“？”为前端页面JS函数的名称，如果不是使用JQ库的，这个需要根据前端工作人员来定义。如果使用JQ库，那么这里比较方便了，JQ库会直接把返回过来的”？”进行解析

> 这里注意下，如果url中带了”callback=？”，那么dataType只要写json就可以，如果dataType为jsonp，那么url的链接可以不带”callback=？”，JQ会自动在链接中加上”callback=？”,如果参数不是默认callback，则添加 jsonp：cb（其他参数），用来代替”callback=？”
