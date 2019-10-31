---
title: 05-taro开发微信H5记录
date: 2019-10-31 18:25:36
tags: 前端-12-微信小程序
categories: 前端-12-微信小程序
id : 1572517533244
---
> 本文记录Taro开发H5项目中存在的一些问题,不局限于Taro本身,其他方面的问题也记录在此

## 1  设置镜像源

### mirror-config-china

[mirror-config-china](https://www.npmjs.com/package/mirror-config-china) 会在 `npm`用户配置文件(`~/.npmrc`)写入一系列镜像配置,包括`registry=https://registry.npmjs.org`,
如果你想切换到官方npm源,请用命令`npm config set registry https://registry.npmjs.org`

> 如果你项目中用的`yarn`,那么`mirror-config-china`这个包好像就没啥用了,因为`yarn`修改配置是用的`.yarnrc`,而不是`.npmrc`

## 2 内置环境变量 

### process.env.TARO_ENV

- `weapp`
- `swan`
- `alipay`
- `h5`
- `rn`
- `tt`
- `qq`
- `quickapp`

## 3 小程序原生作用域获取

一般我们需要获取 `Taro` 的页面和组件所对应的小程序原生页面和组件的实例，这个时候我们可以通过 `this.$scope` 就能访问到它们。

> [官网文档](https://taro-docs.jd.com/taro/docs/relations.html)

## 4 eslint调整

### 4.1 项目调整

主要将`config`以及mobx `componentWillReact` 加入顺序中

```
"react/sort-comp": [
  1,
  {
    "order": [
      "/^config$/",
      "static-methods",
      "lifecycle",
      "everything-else",
      "render"
    ],
    "groups": {
      "lifecycle": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "state",
        "getInitialState",
        "getChildContext",
        "getDerivedStateFromProps",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentWillReact",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "getSnapshotBeforeUpdate",
        "componentDidUpdate",
        "componentDidCatch",
        "componentWillUnmount"
      ]
    }
  }
]
```

### 4.2 自定义eslint规则

由于`Taro`里的组件都是开头大写字母，由此我们可以写一条`eslint`规则来自动转首字母大写。 
[github地址](https://github.com/Java-http/eslint-plugin-linklink)

![https://camo.githubusercontent.com/b3ec116d2d58ab81986773633ad49c8cb324c28a/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30392f32342f76426d62616b736c4c4b41397453432e676966](https://camo.githubusercontent.com/b3ec116d2d58ab81986773633ad49c8cb324c28a/68747470733a2f2f692e6c6f6c692e6e65742f323031392f30392f32342f76426d62616b736c4c4b41397453432e676966)

## 5 stylelint配置

> [参考我另外一篇文章](https://note.youdao.com/ynoteshare1/index.html?id=e92e2d5a61bb90484372cc85a14165ae&type=note)

## 6 双向绑定设置

由于`Taro`不能像小程序`setData{'a.b.c':value}`设置`key`数据路径的形式,这里写了一个方法

```
const mergeWith = require('./lodash.mergewith')

/**
 * input绑定事件
 *
 * @example
 * `onInput={handleInput.bind(this, "a.b.c")}`
 *
 * @tutorial https://github.com/NervJS/taro/issues/2642
 */
export function handleInput(keyName, event) {
  let value = event.detail.value

  let arr = keyName.split(".")
  let key = arr.shift()
  let obj = this.state[key]

  if(!arr.length){
    this.setState({ [key]: value })
    return value
  }

  let reverseArr=arr.reverse()
  let sourceObj={}
  let tmp={}
  for (let i = 0; i < reverseArr.length; i++) {
    if(i==0){
      tmp[arr[i]]=value
      sourceObj=tmp
    }else{
      sourceObj={}
      sourceObj[arr[i]]=tmp
      tmp=sourceObj
    }
  }

  /**
   * @see
   * https://www.lodashjs.com/docs/latest#_mergewithobject-sources-customizer
   * 
   */
  function customizer(objValue, srcValue) {
    if(Array.isArray(objValue)){
      return srcValue
    }
  }
  let re=mergeWith({},obj,sourceObj,customizer)

  this.setState({ [key]: re })

  return value
}
```
使用方法:`onInput={handleInput.bind(this, "a.b.c")}`,这样就可以设置`this.state.a.b.c`的值了

## 7 Taro更新问题

1. `windows`系统建议使用管理员权限运行`cmd`窗口  
2. 建议 `npm i -g @tarojs/cli@latest` 更新,不使用 `taro update self(试过两次均不成功)`

## 8 微信公众号相关问题

1. [101-webpack怎么使用微信sdk](http://note.youdao.com/noteshare?id=60d5bf4b2f1809886cc9bbaa94ff6f78&sub=DF7FD923BD2D4926949719245FF9580E)
2. 微信公众号登录:跳转认证页时`redirect_uri`参数必须`encodeURIComponent`转码

```
getAppId(showLoading).then(appid => {
  // redirect_uri参数必须encodeURIComponent转码
  var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo&state=${Math.floor(Math.random()*1000)}#wechat_redirect`
  window.location.replace(url)
})
```

## 9 H5页面使用HOC,无法触发componentDidShow

> 目前，在h5端实现HOC的componentDidShow会比较麻烦。由于router只触发了页面组件的componentDidShow，换句话说，只会触发最外层的组件的componentDidShow，所以需要手动在最外层高阶组件的componentDidShow中手动调用子组件对应的生命周期。  
> -- [issues](https://github.com/NervJS/taro/issues/3537)

**HOC组件:**
```
function title(iTitle='') {
  return function (WrappedComponent){
    return class extends Component{
      static displayName=`title(${WrappedComponent.displayName})`

      componentDidShow(){
        tryToCall(this.wrappedRef.componentDidShow, this.wrappedRef)
      }

      render(){
        return <WrappedComponent ref={ref => { this.wrappedRef = ref }} {...this.props} />
      } 
    }
  }
}
```
**tryToCall.js**
```
/**
 * 尝试调用函数
 * 
 * @param {function} func 调用的函数
 * @param {any} ctx 调用上下文
 * @param  {...any} args 函数调用参数
 * @returns {any} returnValue
 */
export const tryToCall = (func, ctx = null, ...args) => {
  if (!func) return
  if (ctx) {
    return func.apply(ctx, args)
  } else {
    return func(...args)
  }
}
```

> 注意,如果使用了`Mobx`,请将HOC组件设置在最外层
> ```
> @title("课程详情") // 请将HOC组件设置在最外层
> @inject('loginStore','userStore')
> @observer
> ```