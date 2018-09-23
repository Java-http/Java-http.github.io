---
title: 11-一个元素绑定了多个 click 事件，如何取消其中的一个。
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
id : 1537686447162
---

```
$('#btn').on('click.name1', function(){
    alert(1)
})
$('#btn').on('click.name2', function(){
    alert(2)
})

// 如果这么写，解绑name1，如何只取消绑定特定的一个
$('#btn').unbind('click.name1')
```
