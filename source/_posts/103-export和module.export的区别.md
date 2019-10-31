---
title: 103-export和module.export的区别
date: 2019-10-31 18:16:46
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1572517009253
---
```
// hello.js
funciton hello () {
    console.log('hello');
}
```

```
export.hello = hello;

var aaa = require('hello.js');
aaa.hello();    // console.log('hello');
```

```
module.export = hello;

var aaa = require('hello.js');
aaa();      // console.log('hello');
```
