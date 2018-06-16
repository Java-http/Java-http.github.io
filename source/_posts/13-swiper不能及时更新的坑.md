---
title: 13-swiper不能及时更新的坑
date: 2018-05-03 09:31:35
categories: 前端-03-jQuery
tags: 前端-03-jQuery
---
> [参考链接](http://www.cnblogs.com/DivHao/p/6866399.html)

![image](http://images2015.cnblogs.com/blog/1103090/201705/1103090-20170517104059369-168018845.png)
```
observer:true,//修改swiper自己或子元素时，自动初始化swiper 
observeParents:false,//修改swiper的父元素时，自动初始化swiper 
onSlideChangeEnd: function(swiper){ 
　　　swiper.update();  
　　　mySwiper.startAutoplay();
　　   mySwiper.reLoop();  
}
```
加上这串代码后，使用基本正常

mySwiper.reLoop(); 重新对需要循环的slide个数进行计算，当你改变了slidesPerView参数时需要用到，需要自动轮播的时候必须要加上；

swiper.update();  更新Swiper，这个方法包含了updateContainerSize，updateSlidesSize，updateProgress，updatePagination，updateClasses方法。也就是数据改变是重新初始化一次swiper；

mySwiper.startAutoplay(); 重新开始自动切换；

但是还会有一个问题，比如说在初始化页面是，初始化加载一组数据，但是这组数据里面只有一条信息，但是其他组数据里面包含了多条信息，在这种情况下必须要手动切换一次才能触发自动轮播，还没找到解决办法。

以上就是遇到的一些问题，记录一下，以后遇到还可以看看。