---
title: 24-sessionStorage
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686791681
---
- sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。
- 不同浏览器无法共享localStorage或sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的localStorage（页面属于相同域名和端口），但是不同页面或标签页间==无法共享==sessionStorage的信息。这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。 ==要理解共享的意思==
- 打开的新页面的sessionStorage是通过原网页的sessionStroage复制传递过来的，也可以理解为新网页的sessionStorage是原网页的sessionStorage的复制出来的独立体，每个网页的sessionStorage都是一个独立的，不共享。==一旦一个网页的sessionStorage发生变化，另外一个页面的sessionStorage不受影响。==