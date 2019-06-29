---
title: 37-vscode配置stylelint
date: 2019-06-29 16:35:48
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1561797351908
---

## 1 css代码规范工具stylelint

一般我们在项目根目录中添加 `.stylelintrc.js`

```
module.exports = {
  processors: [],
  plugins: [],
  extends: "stylelint-config-standard", // 这是官方推荐的扩展
  rules: {
    "block-no-empty": null // 值为null时表示禁用该规则：
  }
};

```

> [官网-规则列表](https://stylelint.io/user-guide/rules/)   
> [参考-简书-stylelint介绍](https://www.jianshu.com/p/d29c1b652fef)


## 2 项目中安装 stylelint-config-standard npm包

```
yarn add stylelint-config-standard --dev
```
或者 

```
npm i -D stylelint-config-standard
```

## 3 vscode安装插件stylelint

### 3.1 下载地址

[stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint&ssr=false#review-details)

### 3.2 配置

在 `/.vscode/settings.json` 增加配置,这样做是为了同步项目中的配置，当然，你可以在全局设置中设置

settings.json：
```
  // stylelint配置
  "stylelint.enable":true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // 这里你需要安装vscode插件Prettier才可配置
  "prettier.stylelintIntegration": true,
  "[scss]": {
    "editor.formatOnSave": true
  }
```
## 4 配置忽略文件

项目根目录中增加`.stylelintignore`和`.prettierignore`

```
node_modules
```


**至此，设置完毕！~**

![](https://i.loli.net/2019/06/29/5d166774ed0c588040.gif)

## 5 taro项目单位PX大写自动格式化成小写问题

在 `Taro` 中尺寸单位建议使用 `px`、 百分比 `%`，`Taro` 默认会对所有单位进行转换。当前忽略单个属性的最简单的方法，就是 `px` 单位使用大写字母`Px` or `PX`。

由于我们之前已经设置`prettier`插件自动格式化`[scss]`文件，导致写`PX`会被自动格式化成小写`px`

如何避免这个问题，只要在上面写`/* prettier-ignore */`即可避免自动格式化成小写字母

```
  /* prettier-ignore */
  height: 44PX;
```

> 参考文章  
> [掘金-css代码规范工具stylelint](https://juejin.im/post/5b4ffd1ef265da0f990d52e8)  
> [掘金-VScode下搭配ESLint、TSLint、stylelint的代码检查配方](https://juejin.im/post/5c85fe6ff265da2d8410ba74)  
> [掘金-vscode + prettier 专治代码洁癖（一）](https://juejin.im/post/5a791d566fb9a0634853400e)