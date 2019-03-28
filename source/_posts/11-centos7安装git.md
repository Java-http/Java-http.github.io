---
title: 11-centos7安装git
date: 2019-03-28 09:08:46
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1553735546353
---

## 1.查看系统是否已经安装git

```
git --version
```
## 2.CentOS7 yum 安装git

```
yum install git
```

## 3.安装成功

```
git --version
```

卸载git

```
yum remove git
```

## 4. 配置用户和邮箱

```
git config  --global user.name "jingxiu"
git config  --global user.email "Java_http@163.com"
```

## 5. 生成密钥

查看是否有密钥文件：

```
ls -al ~/.ssh/
```
添加密钥：

```
ssh-keygen -C 'Java_http@163.com' -t rsa
```
密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于SSH-2的RSA密钥。这里使用的是rsa。

同时在密钥中有一个注释字段，用-C来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行。

输入完毕后程序同时要求输入一个密语字符串(passphrase)，空表示没有密语。接着会让输入2次口令(password)，空表示没有口令。3次回车即可完成当前步骤，此时~/.ssh/目录下已经生成好了。

> 参考链接  
> [博客园-Git 中 SSH key 生成步骤](https://www.cnblogs.com/horanly/p/6604104.html)