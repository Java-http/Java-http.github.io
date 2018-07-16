---
title: 12-vux环境搭建
date: 2018-06-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---

## 1. 采用 vux2 模板

```
npm install vue-cli -g # 如果还没安装
vue init airyland/vux2 projectPath

cd projectPath
npm install --registry=https://registry.npm.taobao.org # 或者 cnpm install 或者  yarn
npm run dev #  或者  yarn dev
```

> 建议在安装的时候询问是否安装 elsint，选择 Y，如果想关闭在 config/index.js 里把 useEslint 改为 false。配合 vscode 的 eslint 校验很有用。 [参考链接](https://juejin.im/post/59097cd7a22b9d0065fb61d2#heading-8)

## 2. 安装 sass-loader

```
cnpm i node-sass -D
cnpm i sass-loader -D
```

## 3.引入 flex.js

```
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<script>
     !function(a,b){function c(){var b=f.getBoundingClientRect().width;b/i>540&&(b=540*i);var c=b/10;f.style.fontSize=c+"px",k.rem=a.rem=c}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name="viewport"]'),h=e.querySelector('meta[name="flexible"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){var l=g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(j=parseFloat(l[1]),i=parseInt(1/j))}else if(h){var m=h.getAttribute("content");if(m){var n=m.match(/initial\-dpr=([\d\.]+)/),o=m.match(/maximum\-dpr=([\d\.]+)/);n&&(i=parseFloat(n[1]),j=parseFloat((1/i).toFixed(2))),o&&(i=parseFloat(o[1]),j=parseFloat((1/i).toFixed(2)))}}if(!i&&!j){var p=a.navigator.userAgent,q=(!!p.match(/android/gi),!!p.match(/iphone/gi)),r=q&&!!p.match(/OS 9_3/),s=a.devicePixelRatio;i=q&&!r?s>=3&&(!i||i>=3)?3:s>=2&&(!i||i>=2)?2:1:1,j=1/i}if(f.setAttribute("data-dpr",i),!g)if(g=e.createElement("meta"),g.setAttribute("name","viewport"),g.setAttribute("content","initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"),f.firstElementChild)f.firstElementChild.appendChild(g);else{var t=e.createElement("div");t.appendChild(g),e.write(t.innerHTML)}a.addEventListener("resize",function(){clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),"complete"===e.readyState?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",function(){e.body.style.fontSize=12*i+"px"},!1),c(),k.dpr=a.dpr=i,k.refreshRem=c,k.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},k.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window.lib||(window.lib={}));
</script>
```

## 4.配置路由

> views 文件夹存放页面组件

- 在 router 目录下新建两个文件，==\_import_development.js== 和 ==\_import_production.js==，

```
//_import_development.js ->

module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+

//_import_production.js ->

module.exports = file => () => import('@/views/' + file + '.vue')

// index.js ->

const _import = require('./_import_' + process.env.NODE_ENV)

...
{ path: '/login', component: _import('login/index'), hidden: true },
...
```

## 5.配置开发环境和生产环境 api

### 5.1 配置不同环境的请求网址

- 在 config 文件夹下 dev.env.js 里添加 `BASE_API: '"https://api-prod"'`
- 在 config 文件夹下 prod.env.js 里添加 `BASE_API: '"https://api-prod"'`

### 5.2 在 src 目录下新建一个 api 文件夹，写 api，方便后期维护

## 6.增加 styles 文件夹，写 scss

### 6.1 公用样式写在 src/styles/mixin.scss 和 src/styles/common.scss

### 6.2 组件样式写在单文件 scoped 里，覆盖公用样式请用 deep

6.2.1 添加依赖

```
npm install sass-resources-loader --save-dev
```

6.2.2 修改 build/utils.js

```
scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/your.scss')
        }
      }
    )
```

### 6.3 开发前须知:

```
/**
 * 开发前须知:
 *
 * 1. rem 字体大小:(字体大小统一请用scss变量)
 *  $sm: 0.32 rem => 12px
 *  $fz: 0.4 rem => 15px (目前暂以0.4rem为正文字体)
 *  
 * 2. common.scss主要为公用全局样式(请考虑类名的可读性,避免重复命名)
 *  此项目尝试BEM命名规范,参考文章 https://blog.csdn.net/chenmoquan/article/details/17095465
 *  
 *  .block{} // .block 代表了更高级别的抽象或组件。
 *  .block__element{} // .block__element 代表.block的后代，用于形成一个完整的.block的整体。
 *  .block--modifier{} // .block--modifier代表.block的不同状态或不同版本。
 *
 *
 */
```

## ~~7.自动加载 components 组件~~

> 视情况看设置不设置

**/src/components/componentRegister.js**

```
import Vue from 'vue'

/**
 * 首字母大写
 * @param str 字符串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 对符合'xx/xx.vue'组件格式的组件取组件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

const requireComponent = require.context('./', true, /\.vue$/)

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName
  Vue.component(componentName, componentConfig.default || componentConfig)
})
```

**文件结构**

```
components
│ componentRegister.js
├─BasicTable
│   BasicTable.vue
├─MultiCondition
│   index.vue
```

这里对组件名做了判断，如果是 index 的话就取组件中的 name 属性处理后作为注册组件名，所以最后注册的组件为：multi-condition、basic-table
最后我们在 main.js 中==import 'components/componentRegister.js'==，然后我们就可以随时随地使用这些基础组件，无需手动引入了~

> **全局注册方式必须在（通过 new Vue 创建的）Vue 根实例创建之前置入组件** <br/>
> 注：VUX 全局组件也可以创建一个 js 文件集中引入，在 main.js 中 import 引入

## 8. 写常用 util 方法

### 8.1 utils/auth.js --Token 设置文件

Web 端：(可采用下面一种方案)

```
import { cookie as Cookies } from 'vux'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
```

APP 端：(兼容 IOS 某些机型不支持 cookie 存储)

```
import { cookie as Cookies } from 'vux'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey) || sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
    Cookies.set(TokenKey, token)
    sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    Cookies.remove(TokenKey)
    sessionStorage.removeItem(TokenKey)
}
```

### 8.2 utils/request.js --Ajax 请求配置文件

### 8.3 设置 vuex user.js

> 8.2 8.3 见项目代码

### 8.4 登录状态验证流程说明

![image](https://note.youdao.com/yws/api/personal/file/7334D4F451454A6EA7E2384C14E9545E?method=download&shareKey=8de88e7c323634abfd8a42000cb1a19e)

## 9 封装 SVG Icon 组件

> [参考链接](https://juejin.im/post/59bb864b5188257e7a427c09)

- 安装`svg-sprite-loader`

```
cnpm i svg-sprite-loader -D
```

- 修改 /build/webpack.base.conf.js

```
      /*----------  注释原有loader  ----------*/
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //   }
      // },
      /*----------  此处区分svg文件引入  ----------*/
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      /*----------  此处区分svg文件引入 end ----------*/
```

- 新建 src/icons 文件夹

```
icons
│ index.js
├─svg
│   example.svg
│   *.svg
```

index.js

```
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```

## 10 主题颜色配置

> 为了配合项目主题颜色，有必要修改 vux weui 的主题色，方便项目复用，修改文件在 build/webpack.base.conf.js,在 vux 的 plugins 选项中补充，然后在 src/styles/ 下增加 theme.less

请配置 vux-loader 的 less-theme 插件，指定用以覆盖的 less 文件路径：

```
{
  name: 'less-theme',
  path: 'src/styles/theme.less' // 相对项目根目录路径
}
```

## 11 修改 build 生成项目中 css，js 引用路径

在/config/index.js 里找到 build.assetsPublicPath, 修改为 `assetsPublicPath: './',`

## 12 修改 host 地址让局域网内的其他机器访问

在 package.json 里找到 script.dev ,在后面添加上 `--host 0.0.0.0`

## 13 更改 eslint 规则

参考 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/blob/master/.eslintrc.js)

> 基本流程如上，后面写业务代码~
