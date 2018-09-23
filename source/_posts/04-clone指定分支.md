---
title: 04-clone指定分支
date: 2018-09-23 15:45:06
tags: 前端-10-git
categories: 前端-10-git
id : 1537688336888
---
> [csdn](https://blog.csdn.net/yun__yang/article/details/74466059) [csdn](https://blog.csdn.net/hsany330/article/details/51820860)

近期服务器迁移，而且原来本地开发是在同一个目录中切换不同的分支，感觉有点挫，于是打算一个文件目录对应一个分支，这样不会有太大的文件差异。

记录下来本次操作，可能以后还会用到。

git初始化一般是这样。


```
git init 

git clone .git地址
```


之后重点来了，因为clone下来的一般为master分支，有可能不是想拉下来的分支。可以使用以下的方法


```
git branch -a 先查看当前远端分支情况

git  checkout origin/xxx  选择远端xxx分支

git branch xxx  创建本地xxx分支

git checkout xxx  选择新创建的分支就可以了
```
。

－－－－－－－－－－－－－－－

当然还有更简单的方法。

直接指定clone某个分支即可：


```
git clone -b xxx .git地址
```


