---
title: 01-import路径问题
date: 2018-05-03 09:31:35
categories: 前端-04-es6
tags: 前端-04-es6
id: 1537685175752
---
```
import { lastName as surname } from './profile';
```
import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。

如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

```
import {myMethod} from 'util';
```
上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。