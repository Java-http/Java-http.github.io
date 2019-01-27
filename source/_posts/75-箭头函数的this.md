---
title: 75-箭头函数的this
date: 2019-01-27 09:19:12
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1548551960995
---
[github](https://github.com/ruanyf/es6tutorial/issues/150)

## 箭头函数里不但没有 this，也没有 arguments, super ……

## “箭头函数”的this，总是指向定义时所在的对象，而不是运行时所在的对象。


```
function foo(){
  setTimeout(() => {
    console.log("id:", this.id)
  }, 100);
}

foo.call({id:42});
```

请问，上面代码的{id: 42}，到底是箭头函数定义时所在的对象，还是运行时所在的对象？

你认为，答案是后者。这是不对的。

因为，这个例子中，箭头函数位于foo函数内部。只有foo函数运行后，它才会按照定义生成，所以**foo运行时所在的对象，恰好是箭头函数定义时所在的对象**。

