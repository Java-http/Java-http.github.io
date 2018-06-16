---
title: 61-assign是深拷贝还是浅拷贝
date: 2018-05-15 16:27:40
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
---
> [CSDN博客](https://blog.csdn.net/lpf1215/article/details/77856971)
## 1.仅仅merge根属性

```
const defaultOpt = {
    title: {
        text: 'hello world',
        subtext: 'It\'s my world.'
    }
};

const opt = Object.assign({}, defaultOpt, {
    title: {
        subtext: 'Yes, your world.'
    }
});

console.log(opt);

// 预期结果
{
    title: {
        text: 'hello world',
        subtext: 'Yes, your world.'
    }
}
// 实际结果
{
    title: {
        subtext: 'Yes, your world.'
    }
}
```
很明显其实它直接覆盖了整个title，而不是覆盖subtext

## 2.除了根属性是深拷贝，其余都是浅拷贝

```
const defaultOpt = {
    title: {
        text: 'hello world',
        subtext: 'It\'s my world.'
    } 
};

const opt1 = Object.assign({}, defaultOpt);
const opt2 = Object.assign({}, defaultOpt);
opt2.title.subtext = 'Yes, your world.';

console.log('opt1:');
console.log(opt1);
console.log('opt2:');
console.log(opt2);

// 结果
opt1:
{
    title: {
        text: 'hello world',
        subtext: 'Yes, your world.'
    }
}
opt2:
{
    title: {
        text: 'hello world',
        subtext: 'Yes, your world.'
    }
}
```
上面结果发现两个配置变得一模一样，而其实我们并没有去更改opt1 的subtext ，只是改了opt2 的。 

这说明一点：在title 这一层只是简单的浅拷贝 ，而没有继续深入的深拷贝。

## 总结
Object.assign() 只是一级属性复制，比浅拷贝多深拷贝了一层而已。 
发现一个可以简单实现深拷贝的方法，当然，有一定限制，如下：

```
const obj1 = JSON.parse(JSON.stringify(obj));
```
思路就是将一个对象转成json字符串，然后又将字符串转回对象。