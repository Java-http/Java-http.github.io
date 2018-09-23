---
title: 01-给用户添加sudo权限
date: 2018-07-06 16:17:46
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1537685552885
---
1. 进入超级用户模式。输入`su -`，系统会让你输入超级用户密码，输入密码后就进入了超级用户模式。（当然，你也可以直接用root进入）
添加文件的写权限。输入命令
```
chmod u+w /etc/sudoers
```

2. 编辑/etc/sudoers文件。输入命令
```
vi /etc/sudoers
```
，输入i进入编辑模式，找到这一 行
```
root ALL=(ALL) ALL
```
在起下面添加
```
xxx ALL=(ALL) ALL(这里的xxx用你的用户名)
```
，然后保存（就是先按一 下Esc键，然后输入:wq）退出。
3. 撤销文件的写权限。输入命令
```
chmod u-w /etc/sudoers
```
