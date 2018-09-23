---
title: 15-vux踩坑
date: 2018-09-23 15:47:02
tags: 前端-08-vue
categories: 前端-08-vue
id : 1537686621065
---
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

**main.js入口引入**

```
/* ----------  引入防抖函数  ----------*/
import { throttle } from 'vux'
Vue.prototype.throttle = throttle

/* ----------  引入防抖函数 end  ----------*/
```
**引用**

```
@click.native="throttle(sendVerifyCode,2000)()"
```

注意后面加个()

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
