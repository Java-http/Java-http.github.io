---
title: 07-sync
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
id : 1537686268187
---

## 1. sync

从 2.3.0 起我们重新引入了 .sync 修饰符，但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。
如下代码

```
<comp :foo.sync="bar"></comp>
```

会被扩展为：

```
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```

当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：

```
this.$emit('update:foo', newValue)
```

## 2. v-model

```
<input v-model="searchText">
```
等同于如下：
```
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```
