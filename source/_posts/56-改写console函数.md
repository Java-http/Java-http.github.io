---
title: 56-改写console函数
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537687016607
---

```
		console.log=(function(log) {
			var i=0;
			return function(str) {
				i++;
				log.call(console,i+":"+str)
			}
		})(console.log)
```
