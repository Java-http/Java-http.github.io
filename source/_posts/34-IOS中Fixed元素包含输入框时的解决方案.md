---
title: 34-IOS中Fixed元素包含输入框时的解决方案
date: 2018-11-28 11:48:36
tags: 前端-01-切图CSS
categories: 前端-01-切图CSS
id : 1543376918803
---
> [原链接](https://www.lovchun.com/posts/2018/2/9/IOS%E4%B8%ADFixed%E5%85%83%E7%B4%A0%E5%8C%85%E5%90%AB%E8%BE%93%E5%85%A5%E6%A1%86%E6%97%B6%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html)
[掘金](https://juejin.im/post/5bce7c806fb9a05d1658c3e4)




# 1.fixed问题

使用 position: fixed; 来固定父容器（模态框）在页面中的位置，父容器（模态框）中包含一个或多个 input 输入框的子节点：

在 IOS 上，在键盘被唤起时，由于模态框绝对定位，导致输入框焦点乱跑，输入不正常等问题：

**软键盘唤起后，页面的 fixed 元素将失效（即无法浮动，也可以理解为变成了 absolute 定位），所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了，因此我们需要使用相对定位进行布局。**

![image](https://ws3.sinaimg.cn/large/006OyqbNgy1foaa05ixoxj30gt0f9jt1.jpg)

在移动端开发中，针对 IOS 及 Android 滚动兼容问题，尽量做局部滚动，不要做全局滚动。

# 2. 微信页面当打开输入法时，固定底部的按钮被顶上去的解决办法

可以设置当页面高度小于某个数值时底部的按钮自动隐藏

```
#butt {
    position: fixed;
    left: 0;
    bottom: 0;
}
@media screen and (max-height: 360px) {
    #butt {
        display: none;
    }
}
```

