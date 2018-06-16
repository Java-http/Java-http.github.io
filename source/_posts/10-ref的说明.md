---
title: 10-ref的说明
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---
## ref 

- 期望类型： string

ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例:

```
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>
```

```
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile
```
