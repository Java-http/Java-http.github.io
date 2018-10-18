---
title: 08-zsh环境变量
date: 2018-10-18 09:22:23
categories: 前端-14-Mac
tags: 前端-14-Mac
id : 1539825746123
---
# Mac配置环境变量的地方
## 一、/etc/profile （建议不修改这个文件 ）
全局（公有）配置，不管是哪个用户，登录时都会读取该文件。

## 二、/etc/bashrc （一般在这个文件中添加系统级环境变量）
全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。

## 三、~/.bash_profile （一般在这个文件中添加用户级环境变量）
每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该文件仅仅执行一次!
但是有时在.bash_profile 文件中的环境变量并没有起到作用
这时可以查看使用的Mac OS X是什么样的Shell

```
➜  ~ echo $SHELL
/bin/zsh
```

四、当mac上安装了zsh后，修改环境变量就需要在~/.zshrc中修改，比如加入代理：

```
export http_prox=http://10.199.75.12:8080
export https_proxy=http://10.199.75.12:8080
```

如果想要修改立即生效，需要执行


```
source ~/.zshrc
```
