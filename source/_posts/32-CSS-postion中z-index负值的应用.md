---
title: 32-CSS postion中z-index负值的应用
date: 2018-09-28 09:44:52
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1538099094626
---
[CSDN](https://blog.csdn.net/lihefei_coder/article/details/72869065)
[掘金](https://juejin.im/post/5ba4efe36fb9a05cf52ac192)

从层叠的底部开始，共有七种层叠顺序：

1. 背景和边框：形成层叠上下文的元素的背景和边框。
2. 负z-index值：层叠上下文内有着负z-index值的定位子元素，负的越大层叠等级越低；
3. 块级盒：文档流中块级、非定位子元素；
4. 浮动盒：非定位浮动元素；
5. 行内盒：文档流中行内、非定位子元素；
6. z-index: 0：z-index为0或auto的定位元素， 这些元素形成了新的层叠上下文；
7. 正z-index值：z-index 为正的定位元素，正的越大层叠等级越高；

![image](https://segmentfault.com/img/bVbgakw?w=768&h=383)