---
title: 69-apply的妙用
date: 2018-08-03 20:46:10
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---

```
function reduceDimension(arr) {
    return Array.prototype.concat.apply([], arr);
}
```

arr 作为 apply 方法的第二个参数，本身是一个数组，数组中的每一个元素（还是数组，即二维数组的第二维）会被作为参数依次传入到 concat 中，效果等同于`[].concat([1,2], [3,4], [5,6])`。

利用 apply 方法，我们将单重循环优化为了一行代码，很简洁有型有木有啊~
