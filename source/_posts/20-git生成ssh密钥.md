---
title: 20-git生成ssh密钥
date: 2018-09-23 15:47:32
categories: 前端-00-基础
tags: 前端-00-基础
id : 1537687971656
---
## 1.git 初始化

```
$ git config --global user.name author #将用户名设为author
$ git config --global user.email author@corpmail.com #将用户邮箱设为author@corpmail.com
```
## 2.生成秘钥

进入.ssh文件夹,若没有.ssh文件夹，则创建该文件夹：
```
cd ~/.ssh
```


输入如下命令

```
ssh-keygen -t rsa -C "your_email@example.com"
```

按三次回车，最后在.ssh文件夹下得到id_rsa和id_rsa.pub两个文件。

在用户目录就出现了一个.ssh文件夹 `C:\Users\admin\.ssh\`

> tortoiseGit的密钥跟git的密钥不起冲突，可以共用