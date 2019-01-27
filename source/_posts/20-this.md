---
title: 20-this
date: 2018-05-03 10:28:37
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1537686745541
---
> this： 指的是调用 当前 方法（函数）的那个对象


```
<div onclick="    this     fn1();      "></div>     fn1(); 里的 this 指的是 window
```

```
function fn1(){
	// this
}
// fn1();			this => window
// oDiv.onclick = fn1;			this => oDiv
```

```
oDiv.onclick = function (){
	fn1();					fn1() 里的this => window
}
```

## js中this的绑定

   this的绑定一共有四种绑定：
1. 默认绑定（即没有明确的调用对象）
2. 隐性绑定（即作为对象方法调用，this会被绑定到该对象）
3. 显性绑定（使用apply()和call()调用，两个方法的第一个参数为一个对象，this被绑定到该对象）  
4. new绑定（使用new来调用函数，会构造一个新对象，并且把this绑定到该对象）

this绑定的四条规则的优先级： **new绑定  >  显示绑定  >  隐式绑定   >  默认绑定**
                                    