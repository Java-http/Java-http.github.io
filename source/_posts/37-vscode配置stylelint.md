---
title: 37-vscode配置stylelint
date: 2019-06-29 16:35:48
categories: 前端-01-切图CSS
tags: 前端-01-切图CSS
id : 1561797351908
---
> 时隔两月,vscode prettier的设置已经更改,所以重新记录下

## 1 vscode安装插件prettier和stylelint

### 1.1 下载地址

- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint&ssr=false#review-details)
- [Prettier Formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 1.2 配置

在 `/.vscode/settings.json` 增加配置,这样做是为了同步项目中的配置，当然，你可以在全局设置中设置

> 附带vscode eslint配置如下 `^_^`

settings.json：
```
  // eslint 设置
  "eslint.validate": [
    "html",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  /* prettier配置遵循eslint规则 */
  "prettier.jsxSingleQuote": true,
  "prettier.semi": false,

  // stylelint配置
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "[scss]": {
    "editor.formatOnSave": true
  },
```

## 2 项目安装相应依赖包


```
yarn add --dev stylelint-config-prettier stylelint-prettier

yarn add prettier --dev --exact
```

然后,在根目录加上`.stylelintrc.js`

```
module.exports = {
  processors: [],
  plugins: [],
  extends: ["stylelint-prettier/recommended"],
  rules: {
    // 取消某些规则如下:
    "unit-case": null,
    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "declaration-block-trailing-semicolon": null,
    "selector-type-no-unknown": null
  }
};

```
最后,加上忽略文件`.prettierignore`和`.prettierignore`

```
node_modules
dist
```



**至此，设置完毕！~**

![](https://i.loli.net/2019/06/29/5d166774ed0c588040.gif)

## 3 taro项目单位PX大写自动格式化成小写问题

在 `Taro` 中尺寸单位建议使用 `px`、 百分比 `%`，`Taro` 默认会对所有单位进行转换。当前忽略单个属性的最简单的方法，就是 `px` 单位使用大写字母`Px` or `PX`。

由于我们之前已经设置`prettier`插件自动格式化`[scss]`文件，导致写`PX`会被自动格式化成小写`px`

如何避免这个问题，只要在上面写`/* prettier-ignore */`即可避免自动格式化成小写字母

```
  /* prettier-ignore */
  height: 44PX;
```

> 参考文章  
> [stylelint插件](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint&ssr=false#review-details)  
> [文档-prettier与Linters集成](https://prettier.io/docs/en/integrating-with-linters.html)  
> [掘金-css代码规范工具stylelint](https://juejin.im/post/5b4ffd1ef265da0f990d52e8)  
> [掘金-VScode下搭配ESLint、TSLint、stylelint的代码检查配方](https://juejin.im/post/5c85fe6ff265da2d8410ba74)  
> [掘金-vscode + prettier 专治代码洁癖（一）](https://juejin.im/post/5a791d566fb9a0634853400e)