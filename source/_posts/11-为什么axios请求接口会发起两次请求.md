---
title: 11-为什么axios请求接口会发起两次请求
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---
之前在使用axios发现每次调用接口都会有两个请求，第一个请求时option请求，而且看不到请求参数，当时也没注意，只当做是做了一次预请求，判断接口是否通畅，但是最近发现并不是那么回事。

首先我们知道了额外的一次请求时option请求，那么这个是干嘛用的呢？

如果只是普通的 ajax 请求，也不会发起这个请求，==只有当 ajax 请求绑定了 upload 的事件并且跨域的时候==，就会自动发起这个请求。详细看http://www.tuicool.com/articles/3UBzIbb。

这样就明了了，就是我们有upload事件绑定（一般都是本地调试，所以会有跨域），我仔细看了下axios文档，发现config配置文件中有两个参数


```
// onUploadProgress: function(progressEvent) {
    //     // Do whatever you want with the native progress event
    // },


 // onDownloadProgress: function(progressEvent) {
 //     // Do whatever you want with the native progress event
 // },
```
分别处理上传和下载事件，也就是这里绑定了upload事件，所以每次请求都会有个option请求。

解决方案很简单，直接注释掉就好了，当然如果开发的工程上线使用跟请求的接口是同一个域名下自然不会两次请求。都看个人需求吧，关于axios的使用上一篇博文有介绍

## 解决办法-后端cors

```
header('Access-Control-Allow-Methods:OPTIONS, GET, POST');
header('Access-Control-Allow-Headers:x-requested-with');
header('Access-Control-Max-Age:86400');  
header('Access-Control-Allow-Origin:'.$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Access-Control-Allow-Headers:Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
```
