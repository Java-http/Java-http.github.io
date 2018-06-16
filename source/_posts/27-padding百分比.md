---
title: 27-padding百分比
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
---
## 1.padding百分比
问题：当margin-top、padding-top的值是百分比时，分别是如何计算的？ 
- A 相对父级元素的height，相对自身的height 
- B 相对最近父级块级元素的height，相对自身的height 
- C 相对父级元素的width，相对自身的width 
- D 相对最近父级块级元素的width，相对最近父级块级元素的width

可以对元素的margin设置百分数，百分数是相对于父元素的width计算，不管是margin-top/margin-bottom还是margin-left/margin-right。（padding同理）

如果没有为元素声明width，在这种情况下，元素框的总宽度包括外边距取决于父元素的width，这样可能得到“流式”页面，即元素的外边距会扩大或缩小以适应父元素的实际大小。如果对这个文档设置样式，使其元素使用百分数外边距，当用户修改浏览窗口的宽度时，外边距会随之扩大或缩小。

# 2.css中如何规定某一元素高度等于其宽度


```
<style type="text/css">
#container {
    width: 80%;
    height: 500px;
}

.attr {
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    background-color: #008b57;
}
</style>



<div id='container'>
    <div class='attr'></div>
</div>
```
[codepen](https://codepen.io/fengdou/pen/EENawx)
