---
title: 15-vux踩坑
date: 2019-02-23 17:45:45
tags: 前端-08-vue
categories: 前端-08-vue
id : 1537686621065
---
> 本文不仅限于vux组件，包括项目中遇到的一些问题记录
> 本文不仅限于vux组件，包括项目中遇到的一些问题记录
## 1. AlertModule 组件

原先写法：
```
AlertModule.show({
  title: '提示',
  content: '请输入手机号码',
  maskTransition: '' // 原生的 maskTransition 动画慢一拍，设置为空取消动画
})
```

### 解决：

每次写都要加`maskTransition: '' // 原生的 maskTransition 动画慢一拍，设置为空取消动画`，为了简写，封装一个函数，预设设置。

src/plugins/Alert.js:
```
import { AlertModule } from 'vux'

export default function(tip, payload = {}) {
  AlertModule.show({
    title: '提示',
    ...payload,
    content: tip,
    maskTransition: '' // 原生的 maskTransition 动画慢一拍，设置为空取消动画
  })
}
```
并将yxAlert写到 Vue.prototype.$yxAlert 上


src/plugins/index.js:
```
import yxAlert from './Alert'
export default {
  install: (Vue, options) => {
    Vue.prototype.$yxAlert = yxAlert
  }
}

```

## 2. toast 组件

同理，src/plugins/Alert.js:

```
export function yxToast(tip, position = 'bottom') {
  Vue.$vux.toast.text(tip, position)
  return Vue.$vux.toast
}
```
引用：

```
this.$yxToast('请输入您的手机号码')
```


## 3. 防抖函数

`vux`自带防抖函数，简单包装在工具函数js里`src/utils`

```
import { dateFormat, debounce as vuxDebounce } from 'vux'

// 防抖
export function throttle(fn, time) {
  return vuxDebounce(fn, time, {
    'leading': true,
    'trailing': false
  })
}
```
使用方法：
```
// 上拉加载
onPullingUp: throttle(function() {
  this.SearchOranizations()
}, 2000),
```


## 3. 验证插件

由于vux没有element-ui一套完整的验证规则，可采用[vee-validate](https://baianat.github.io/vee-validate/)插件

## 4. vue-awesome-swiper 插件使用

[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper) 当你使用了 loop 模式，尽量用 v-if 来控制 swiper 组件的渲染，并且，swiper 对 图片懒加载不友好。

```
<swiper :options="swiperOption" ref="swiperOption" v-if="value.length > 0">
    <swiper-slide v-for="(slide, index) in value" :key="index" ><img class="slider-img" :src="slide.F_PictureUrl" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
```

## 5. 手机侧滑插件

采用插件[sideout.](https://github.com/Mango/slideout)

## 6. 判断浏览器内核

请查看 [Browser.js](https://github.com/mumuy/browser/blob/master/Browser.js)

## 7. 上拉下滑插件

本项目使用 [better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/),封装从 cube-ui的 [Scroll](https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start) 组件，api可查看[文档](https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start)


bs有个问题，在手机uc浏览器，手机safria浏览器，底部栏会遮挡底部内容
```
      _calculateMinHeight() {
        if (this.$refs.listWrapper) {
          this.$refs.listWrapper.style.minHeight = this.pullDownRefresh || this.pullUpLoad ? `${getRect(this.$refs.wrapper).height + 1}px` : 0
        }
        /* 给 UC，safira浏览器增加 padding-bottom，防止底部栏遮挡内容 */
        var _navigator = typeof navigator !== 'undefined' ? navigator : {}
        var u = _navigator.userAgent || {}
        var isUC = u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1
        // var Safari = u.indexOf('Safari') > -1
        if (isUC) {
          this.$refs.listWrapper.style.paddingBottom = '50px'
        }
      },
```
## 8.upload图片上传组件

由于vux没有图片上传组件，故采用`ube-ui`的upload组件,并简单封装一下。


```
  <yx-upload
    v-model="value" // 图片链接，上传1张用字符串，多张用字符串数组
    @file-error="fileError"
    @file-success="fileSuccess"
    folderName="companyInsert"
    :maxSize="2*1024*1024"
    :amount="1">
  </yx-upload>
```
