---
title: 66-HTTP协议的8种请求类型介绍
date: 2018-08-03 20:12:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537687073176
---
# 1.HTTP协议的8种请求类型介绍

HTTP协议中共定义了八种方法或者叫“动作”来表明对Request-URI指定的资源的不同操作方式，具体介绍如下： 

- OPTIONS：返回服务器针对特定资源所支持的HTTP请求方法。也可以利用向Web服务器发送'*'的请求来测试服务器的功能性。 
- HEAD：向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。 
- GET：向特定的资源发出请求。 
- POST：向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的创建和/或已有资源的修改。 
- PUT：向指定资源位置上传其最新内容。 
- DELETE：请求服务器删除Request-URI所标识的资源。 
- TRACE：回显服务器收到的请求，主要用于测试或诊断。 

- CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。

   虽然HTTP的请求方式有8种，但是我们在实际应用中常用的也就是get和post，其他请求方式也都可以通过这两种方式间接的来实现。
   
# 2.content-type的几种取值

- application/x-www-form-urlencoded
- multipart/form-data
- application/json
- text/xml

application/x-www-form-urlencoded方式是Jquery的Ajax请求默认方式，这种方式的好处就是浏览器都支持，在请求发送过程中会对数据进行序列化处理，以键值对形式？key1=value1&key2=value2的方式发送到服务器，如果用Jquery，它内部已经进行了处理，如果自己写原生的Ajax请求，就需要自己对数据进行序列化。 

application/json，随着json规范的越来越流行，并且浏览器支持程度原来越好，许多开发人员易application/json作为请求content-type，告诉服务器请求的主题内容是json格式的字符串，服务器端会对json字符串进行解析，这种方式的好处就是前端人员不需要关心数据结构的复杂度，只要是标准的json格式就能提交成功，application/json数据格式越来越得到开发人员的青睐。
