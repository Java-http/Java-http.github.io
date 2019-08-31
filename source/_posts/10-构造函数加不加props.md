---
title: 10-构造函数加不加props
date: 2019-08-31 16:14:35
tags: 前端-05-react
categories: 前端-05-react
id : 1567239277848
---

## 加与不加props的区别究竟在哪里呢？

> 以下来自stackoverflow的解释：
> 
> [What's the difference between “super()” and “super(props)” in React when using es6 classes?](https://note.youdao.com/)

不加`props`

```
constructor(props) {
    super();
    console.log(this.props) //undefined
}
```
加`props`
```
constructor(props) {
    super(props);
    console.log(this.props) //props will get logged.
}
```
