---
title: 01-egg小试
date: 2019-03-28 08:54:19
tags: 前端-16-Node
categories: 前端-16-Node
id : 1553734461076
---
## 1 eslint规则修改

在win10上面开发，报了一条eslint规则报错

在`.eslintrc`文件 `rules` 里面 配置 `"linebreak-style": [0 ,"error", "windows"]`, //允许windows开发环境

> 此外，在mac平台下，vscode的eslint自动校验不起作用，安装`npm i eslint-plugin-html -D `即可

## 2 如何在vscode调试代码

官方提供的eggjs插件在vscode中debug配置好像有点问题，启动不起来，百度搜了一个配置如下：

按F5启动即可

```
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Egg",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "runtimeExecutable": "npm",
      "windows": { "runtimeExecutable": "npm.cmd" },
      "runtimeArgs": [ "run", "debug" ],
      "console": "integratedTerminal",
      "protocol": "auto",
      "restart": true,
      "port": 9999
    }
  ]
}
```
## 3 使用egg-redis如何存储其他类型的数据

偷懒请使用 JSON.stringify ~，另外Redis 现在也支持 JSON 格式了。

```
await app.redis.set('foo', { aaaa: 123, bbbb: '123' });
```
## 4 token鉴权

> [参考](https://segmentfault.com/a/1190000017248226)

中间件代码

```
'use strict'
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken') //引入jsonwebtoken

module.exports = (options, app) => {
  return async function userInterceptor(ctx, next) {
    let authToken = ctx.header.authorization // 获取header里的authorization
    if (authToken) {
      const res = verifyToken(authToken) // 解密获取的Token
      if (!(res.id && res.username)) {
        ctx.body = { code: 402, msg: '登录状态已过期' }
      } else{
        await next()
      }
    } else {
      ctx.body = { code: 401, msg: '请登陆后再进行操作' }
    }
  }
}

// 解密，验证
function verifyToken(token) {
  let res = ''
  try {
    const result = jwt.verify(token, 'myfirsteggdemo') || {}
    const { exp } = result,
      current = Math.floor(Date.now() / 1000)
    if (current <= exp) res = result.data || {}
  } catch (e) {
    console.log(e)
  }
  return res
}
```
## 生成token

```
const loginToken=function(data, expires = 7200) {
  const exp = Math.floor(Date.now() / 1000) + expires
  const token = jwt.sign({ data, exp }, 'myfirsteggdemo')
  return {token,expire:exp}
}
```
## 6 egg-validate验证参数

## 6.1 ~~application/x-www-form-urlencoded~~

一般传参`content-type`为`application/x-www-form-urlencoded`,这样参数值为数字时，传到后台是字符类型，需要做个转换


```
// config/config.default.js
exports.validate = {
  convert: true,
};
```

```
this.ctx.validate({
  type: { type: 'string' },
  img_address: { type: 'string' },
  img_link: { type: 'string' },
  img_title: { type: 'string' },
  order: { type: 'number' }, // 本来传过来是字符，现在设置type为number，这里会默认转换为数字再做验证
});
```

### 6.2 `application/x-www-form-urlencoded`由于并不能很好地解析嵌套数据的类型，后面`content-type`设置为'application/json',postman测试请用raw

```
this.ctx.validate({
  title: { type: 'string' },
  date: { type: 'number' },
  introduce: { type: 'string' },
  cover_img: { type: 'string' },
  source: { type: 'string' },
  content: { type: 'string' },
  label: {
    type: 'array',
    itemType: 'string',
    default: [],
    required: false,
  },
});
```
## 7 数据库操作

由于`egg-mysql`提供的功能较为简单，egg提供了另外一种方案`Sequelize`，

安装：
```
npm install --save egg-sequelize mysql2
```
在 config/plugin.js 中引入 egg-sequelize 插件


```
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```
在 `config/config.default.js` 中编写 `sequelize` 配置

```
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: '用户名',
    password: '数据库密码',
    database: 'learn',
    define: {
      underscored: true, // 字段以下划线（_）来分割（默认是驼峰命名风格），underscored:true 只适用于createAt updateAt字段（这两个字段是Sequelize自动添加的），其他字段没有作用。
      freezeTableName: true, // 禁止sequelize更改表名为复数
      timestamps: false, // 默认情况下，Sequelize会将createdAt和updatedAt属性添加到您的模型中,个人选择在此关掉
    },
    hooks: {
      beforeDefine: attributes => {
        Object.keys(attributes).forEach(key => {
          if (typeof attributes[key] !== 'function') {
            attributes[key].field = decamelize(key);
          }
        });
      },
    },
    timezone: '+08:00', // sequelize默认时区要调整为东八区
  };
```
由于mysql推荐命名为小写字母+下划线，接口使用驼峰命名法，需要做一个转换，官方并没有提供配置，这里找了issue上提供的一个方法，加上`hooks`

使用：
```
  const User = app.model.define('user', {
    ...
    userAge: { //由于加上hook设置后，这里会自动加上field对应user-age
      type: INTEGER,
    },
  });
```
## 8 centos7部署部分

> 请参考我另外几篇笔记

- [centos7安装nvm](https://java-http.github.io/1537686246723/)
- [centos7安装git](https://java-http.github.io/1553736263078/)
- [centos7安装mysql](https://java-http.github.io/1553734534741/)

> 参考链接  
> [segmentfault-Sequelize 字段下划线转驼峰](https://segmentfault.com/q/1010000014181331)  
> [sequelize issues](https://github.com/sequelize/sequelize/issues/6423)