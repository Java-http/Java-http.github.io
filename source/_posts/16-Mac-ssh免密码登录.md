---
title: 16-Mac ssh 免密码登录 Mac 或者 Linux
date: 2019-10-31 18:23:26
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1572517409229
---
最近在 Mac上操作另一台 Mac 和 Linux 服务器，每次输密码太麻烦。所以直接设置 ssh 免密码登录，省去输入密码的过程。

先在本机执行 `ls ~/.ssh` 若不存在 `id_rsa`，`id_rsa.pub` 公钥文件，可执行如下命令即可生成。


```
ssh-keygen -t rsa
```
将其中 `id_rsa.pub` 需要传送到 Mac 或者 Linux 服务器的 `~/.ssh` 目录下，并重命名为 `authorized_keys` ，若 `authorized_keys` 已经存在则换行添加 `id_rsa.pub` 里面的公钥即可。

这样你就可以直接免密登录你的 Mac 或者 Linux 服务器了。


```
ssh root@172.16.30.31
```
如果你发现没能成功的话，那么修改文件 `authorized_keys` 的权限为`600`即可

```
chmod 600 ~/.ssh/authorized_keys
```

## 2 通过ssh-copy-id传送密钥

使用`ssh-copy-id -i ~/.ssh/id_rsa.pub root@$ipaddress`将公钥发送到网站服务器，记得将IP地址填入，需要输入网站服务器的密码。

> [参考地址](https://www.jianshu.com/p/c68f0707cc86)