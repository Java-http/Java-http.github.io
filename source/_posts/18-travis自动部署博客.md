---
title: 18-travis自动部署博客
date: 2018-06-19 09:51:21
tags: 前端-00-基础
categories: 前端-00-基础
id : 1537686704586
---
> [参考链接](https://www.jianshu.com/p/e6852a547f4c)

## travis-ci设置

打开[travis-ci主页](https://travis-ci.org/)，选择右上角的 `Sign in with Github`, 使用你的 Github账号登录，进入你的accounts页面：

![image](http://note.youdao.com/yws/api/personal/file/A8E0659E3DC94DF4A845BA98148D2F04?method=download&shareKey=51f244762ce2f5cd2c81dcb9216cd417)


选择你要使用travis-ci构建的Github repository, 这里我开启的是： `Java-http.github.io`

点击进入`setting`，点击右下角的`More options`

![image](http://note.youdao.com/yws/api/personal/file/15E51A4477E844DCBA429CD688829643?method=download&shareKey=27e3cc72f49243544d2bf7b257a670bd)

, 做一些设置，如：只有存在.travis.yml文件时才会触发自动build。

## travis-ci配置文件

travis-ci自动build依赖于.travis.yml文件，文件会配置你的语言环境，版本，branch信息，环境变量，以及before_install, install, script,after_success 之类的hook.

这里我先列出我的travis.yml文件内容，然后坐进一步介绍：


```
language: node_js
node_js: stable
branches:
  only:
  - develop
before_install:
- npm install -g hexo
- npm install -g hexo-cli
install:
- npm install
script:
- hexo clean
- hexo generate
after_success:
  - cd ./public
  - git init
  - git config --global user.name 'Java-http'
  - git config --global user.email 'Java_http@163.com'
  - git add .
  - git commit -m "generate static resources, triggerd by travis ci"
  - git push --force --quiet "https://Java-http.github.io:${REPO_TOKEN}@${GH_REF}" master:master
env:
  global:
    - GH_REF: github.com/Java-http/Java-http.github.io.git
```

> REPO_TOKEN 需要github生成一个Personal access tokens，访问： https://github.com/settings/tokens/new ， 选择权限

![image](https://upload-images.jianshu.io/upload_images/1718261-6ea54169aa8872a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

勾选repo，然后将会生成一个token.