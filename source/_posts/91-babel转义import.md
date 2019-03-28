---
title: 91-babel转义import
date: 2019-03-28 08:46:51
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1553734007761
---

## fu()和(0，fu)()有什么区别

```
import { a } from 'b';

function x () {
  a()
}
```
babel转成以下代码：

```
'use strict';

var _b = require('b');

function x() {
  (0, _b.a)();
}
```
> (0, _b.a)() ensures that the function _b.a is called with this set to the global object (or if strict mode is enabled, to undefined). 

`(0, _b.a)()`确保 `function _b.a` this 绑定到当前全局变量，如果是在严格模式，则绑定到`undefined`。 如果你直接使用`_b.a`,则`this`指向的是`_b`