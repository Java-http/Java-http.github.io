---
title: 105-移动端input键盘落下，页面未落下
date: 2019-10-31 18:14:54
tags: 前端-02-js基础复习
categories: 前端-02-js基础复习
id : 1572516897324
---
> 移动端项目，当前页面只有一个输入框，填充内容后，点击提交，键盘落下，页面未落下
后续会有弹框，页面如果未落下，则弹框展示有问题，切点击弹框按钮不起作用

## 解决方案

第一种

```
$("input").on("blur",function(){
    window.scroll(0,0);//失焦后强制让页面归位
});
```

第二种


```
<input v-model="code" type="text" 
@focus="isDown = false" @blur="downKey()" 
placeholder="请输入兑换码">

// data 定义
isDown: true
// 收回键盘
      downKey() {
        let timer = setTimeout(() => {
          clearTimeout(timer)
          document.documentElement.scrollTop = document.body.scrollHeight
          document.body.scrollTop = document.body.scrollHeight
          this.isDown = true
        }, 20)
      }
      
  // 点击兑换
  change() {
        if(!this.isDown) this.downKey()
        // xxxxx
  }  
```
如果只给input加失焦事件，用户输入完数据，直接点击按钮，则失焦事件可能不起作用，所以需要在 提交事件 中增加判断。