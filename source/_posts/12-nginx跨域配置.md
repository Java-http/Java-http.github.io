---
title: 12-nginx跨域配置
date: 2018-09-23 15:46:42
categories: 前端-13-Linux
tags: 前端-13-Linux
id : 1537688188081
---
> [博客园](https://www.cnblogs.com/lianxuan1768/p/8383804.html)

url的/问题
在nginx中配置proxy_pass时，当在后面的url加上了/，相当于是绝对根路径，则nginx不会把location中匹配的路径部分代理走;如果没有/，则会把匹配的路径部分也给代理走。

下面四种情况分别用`http://192.168.1.4/proxy/test.html` 进行访问。

### 第一种：

```
location /proxy/ {
     proxy_pass http://127.0.0.1:81/;
}
```

会被代理到http://127.0.0.1:81/test.html 这个url
 
### 第二种(相对于第一种，最后少一个 /)

```
location /proxy/ {
     proxy_pass http://127.0.0.1:81;
}
```

会被代理到http://127.0.0.1:81/proxy/test.html 这个url
 
### 第三种：

```
location /proxy/ {
     proxy_pass http://127.0.0.1:81/ftlynx/;
}
```

会被代理到http://127.0.0.1:81/ftlynx/test.html 这个url。
 
### 第四种情况(相对于第三种，最后少一个 / )：

```
location /proxy/ {
     proxy_pass http://127.0.0.1:81/ftlynx;
}
```

会被代理到http://127.0.0.1:81//ftlynx/proxy/test.html 这个url