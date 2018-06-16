---
title: 05-vue
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---

## 1. css

-  **方案一**：
    - 一个公用的scss文件（包含变量和mixin，%），各个单文件引入这个公用scss文件（多次引入这个scss文件也不会多次生成重复样式）
    - 另建一个公用的scss在~~主入口main.j~~s==App.vue==引入，然后在各个单文件里写样式，避免git冲突。

    -  引入样式库后（比如mint-ui），style标签 加入scoped属性后，并不能修改ui框架样式库，所以建议不加scoped方便样式库修改，利用sass嵌套保护作用域,所以父级的类名需要慎重，且父级最好加，避免vue-cli生成的时候样式被覆盖掉。

- **方案二(针对方案一build后css顺序相反问题)**

    - 按照必企后台之前的方案，一个公用的common.scss,里面一些mixin，%，变量，公用类（只要有复用，建议放在里面，做好注释，后面维护就清楚是否可以修改。）
    
    - 新建两个scss文件，前端开发人员各一个，在common.scss里底部@import。

- CSS样式库引入一个就好，多余的样式库带来样式的重置与覆盖，flexible只引入js，css不引入。多余样式库慎重引用。

- 如果采用flexible和mui结合，mui样式里的宽度和高度，字体大小到时需要修改。转px可以弄编辑器插件。加上`<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">`

- 在单文件.vue里不需要写v-cloak,v-cloak只应用在多页面。 webpack打包之后是使用render函数去渲染出来。不用写双大括号`\{\{\}\}`

## 2. js

- 路由使用命名路由，方便维护。[官网文档](https://router.vuejs.org/zh-cn/essentials/named-routes.html)

- 生命周期：加载数据看实际情况，一般在 created 里面就可以，如果涉及到需要页面加载完成之后的话就用 mounted（用于dom操作）。

- 监听对象可利用 computed ，少用watch，节省性能。

- v-model不能加过滤器，可用computed代替,或者把v-model改为:value