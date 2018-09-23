---
title: 07-centos7安装nvm
date: 2018-07-06 16:27:25
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1537686246723
---
> [nvm github](https://github.com/creationix/nvm)

## 1.安装
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

```
source ~/.bashrc
```

```
nvm install node
```

## 2.命令

#### 2.1 列出全部可以安装的版本号

```
nvm ls-remote
```

#### 2.2 nvm install 版本号

 
```
nvm install v7.9.0  #命令后加版本号就可以进行安装，字母v可以不写，如下图
```

#### 2.3 nvm use 版本号

```
nvm use v7.8.0
```
#### 2.4 nvm current

查看当前使用的版本

```
nvm current
```

#### 2.5 nvm ls

查看该系统已经安装的版本，这个命令也能看到当前使用的是哪个版本

```
nvm ls
```
