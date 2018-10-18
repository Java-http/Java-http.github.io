---
title: 19-jq跳出each循环
date: 2018-10-18 09:19:39
categories: 前端-03-jQuery
tags: 前端-03-jQuery
id : 1539825575235
---
## jQuery中each的用法之退出循环和结束本次循环

jQuery中each类似于javascript的for循环 

但不同于for循环的是在each里面不能使用break结束循环，也不能使用continue来结束本次循环，想要实现类似的功能就只能用return,

break           用return false

continue      用return ture