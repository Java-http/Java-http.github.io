---
title: 07-git更新远程仓库分支
date: 2019-06-15 18:20:03
tags: 前端-10-git
categories: 前端-10-git
id : 1560594006105
---

我们常常会根据远程分支创建本地分支，命令如下

```
git checkout -b dev origin/dev
```
上面的命令我是想把远程分支 dev 拉到本地来，但是有时候没有用，提示远程分支不存在，我们需要通过下面的命令来操作

```
git fetch origin 
```
可以运行 git fetch origin 来同步远程服务器上的数据到本地。

已经同步了分支，现在就可以拉取远程分支了

```
git checkout -b dev origin/dev
```
