---
title: 24-关于flexible的探讨
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
---
---
title: 24-关于flexible的探讨
date: 2018-05-03 10:05:30
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
---
> 首页，先给出原文出处,[点击查看](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)

最近看移动端1px的问题，由此联想到项目中使用的rem布局方案，先说说引入手淘flexible要注意的地方。

## 1. 加不加 viewport 标签

### 1.1介绍
```
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
```
对于这个问题，大漠（文章的作者）这样说，
![image](https://sfault-image.b0.upaiyun.com/315/921/3159212972-5a0bf1b53a302)
[查看原图](https://sfault-image.b0.upaiyun.com/315/921/3159212972-5a0bf1b53a302)

![image](https://sfault-image.b0.upaiyun.com/343/812/3438120248-5a0bf20a3976e)  
[查看原图](https://sfault-image.b0.upaiyun.com/343/812/3438120248-5a0bf20a3976e)


---

**加不加viewport，在iPhone6下分别看下他们的情况**

```
<html data-dpr="2" style="font-size: 75px;"><head>
...
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
```

如果加了viewport 标签

```
<html data-dpr="1" style="font-size: 37.5px;">
...
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
```

二者效果我感觉是一致的，因为不加viewport标签下，initial-scale=0.5（缩放0.5），会帮你还原跟`<html data-dpr="1" style="font-size: 37.5px;">`一样。

文章作者意思好像是为了做到高清。

### 1.2 ios动态设置dpr带来的问题

由于ios动态设置了dpr，带来了initial-scale的变化，这意味着，如果我们想在css里使用
```
div{width:200px;height:200px}
```
在苹果下会缩放，

![image](https://note.youdao.com/yws/api/personal/file/9A6144377A344070891DCCD33E58F0FE?method=download&shareKey=524aef53df20da4f5205d72e18ad0dce)

[查看原图](https://note.youdao.com/yws/api/personal/file/9A6144377A344070891DCCD33E58F0FE?method=download&shareKey=524aef53df20da4f5205d72e18ad0dce)

![image](https://note.youdao.com/yws/api/personal/file/FBE90B463E0C4E6FA14BEA8058C0FB44?method=download&shareKey=e5483dad08878615f35c4228b79ab6d5)

[查看原图](https://note.youdao.com/yws/api/personal/file/FBE90B463E0C4E6FA14BEA8058C0FB44?method=download&shareKey=e5483dad08878615f35c4228b79ab6d5)

我们需要对不同dpr下做适配

```
div { 
    width:200px;
    height:200px
} 
[data-dpr="2"] div { 
    width:400px;
    height:400px
} 
[data-dpr="3"] div { 
    width:600px;
    height:600px
}
```
作者给了一个字体设置的sass混合宏，

```
@mixin font-dpr($font-size){
    font-size: $font-size;
    
    [data-dpr=\"2\"] & {
    font-size: $font-size * 2;
    }
    
    [data-dpr=\"3\"] & {
    font-size: $font-size * 3;
    }
}
```


---

## 1.3分割线

为了避免这样的匹配，**==感觉还是加个viewport吧==**，不用去匹配[dpr=2][dpr=3]，而且必企的项目里有加，也没产生多大影响，@2x的图片也可以做到高清。==也不用为后面的1px分别匹配。==

> 注：切图也可以在ps里精准量测，然后转rem，上次估计是效果图原因。

## 2. 移动端 1px 问题

> 移动端1px变粗的原因
> 
> viewport的设置和屏幕物理分辨率是按比例而不是相同的. 移动端window对象有个devicePixelRatio属性, 它表示设备物理像素和css像素的比例, 在retina屏的iphone手机上, 这个值为2或3, css里写的1px长度映射到物理像素上就有2px或3px那么长.
> 
> 也就是罪魁祸首就是设备像素比（window.devicePixelRatio），即：
> 
> 设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。

例子可看必企底部栏border-top

![image](https://sfault-image.b0.upaiyun.com/197/317/197317187-5a1791b0935fc)

[查看原图](https://sfault-image.b0.upaiyun.com/197/317/197317187-5a1791b0935fc)

![image](https://note.youdao.com/yws/api/personal/file/A2C6B885732D412A8CD0806423F9479F?method=download&shareKey=b8d7231c12f62e781ddb654d855bfa2c)

[查看原图](https://note.youdao.com/yws/api/personal/file/A2C6B885732D412A8CD0806423F9479F?method=download&shareKey=b8d7231c12f62e781ddb654d855bfa2c)

> 参考[网上链接1](http://www.jianshu.com/p/7e63f5a32636) [网上链接2](https://github.com/Mmzer/think/issues/3#onepx)

我写了个@mixin，仅供参考

```
@mixin onepx($position: bottom, $color: #666, $radius: 0) {
  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    & {
      border: none;
      position: relative;
      // box-sizing: border-box;
      @if $position=='bottom' {
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          right:0;
          width: 100%;
          height: 1px;
          background: $color;
          border-radius: $radius;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
        }
      }
      @else if $position=='top' {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right:0;
          width: 100%;
          height: 1px;
          background: $color;
          border-radius: $radius;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
        }
      }
      @else if $position=='right' {
        &:after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom:0;
          width: 1px;
          height: 100%;
          background: $color;
          border-radius: $radius;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
        }
      }
      @else if $position=='left' {
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom:0;
          width: 1px;
          height: 100%;
          background: $color;
          border-radius: $radius;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
        }
      }
      @else if $position=='all' {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid $color;
          // -webkit-box-sizing: border-box;
          // box-sizing: border-box;
          width: 200%;
          height: 200%;
          border-radius: $radius;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-transform-origin: left top;
          transform-origin: left top;
          pointer-events: none;
        }
      }
    }
  }
}


```


> 后话：目前项目还是使用scss为主，如果等以后前端项目成熟了，再考虑换post-css，前端实在折腾~~


