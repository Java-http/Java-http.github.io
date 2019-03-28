---
title: 14-centos7安装mysql
date: 2019-03-28 08:55:32
tags: 前端-13-Linux
categories: 前端-13-Linux
id : 1553734534741
---

##  1.下载mysql源安装包

```
wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm
```
## 2.安装mysql源

```
yum localinstall mysql57-community-release-el7-8.noarch.rpm
```
## 3.检查mysql源是否安装成功

```
yum repolist enabled | grep "mysql.*-community.*"
```
5.安装MySQL

```
yum install mysql-community-server
```

 
6.启动MySQL服务

```
systemctl start mysqld
```

 
7.开机启动

```
systemctl enable mysqld
systemctl daemon-reload
```
## 8.修改root本地登录密码

###  1）查看mysql密码

```
shell> grep 'temporary password' /var/log/mysqld.log
```
### 2）连接mysql

```
shell> mysql -uroot -p
```
### 3）修改密码[注意：后面的分号一定要跟上]

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';
```

或者：

```
mysql> set password for 'root'@'localhost'=password('MyNewPass4!');
```

## 9.添加远程登录用户

```
grant all privileges  on *.* to root@'%' identified by "密码";
```
更新
```
flush privileges;
```
最后退出搞定！

```
exit
```
> 参考链接：  
> [博客园](https://www.cnblogs.com/caoxb/p/9405323.html)
> [博客园](https://www.cnblogs.com/weifeng1463/p/7941625.html?tdsourcetag=s_pctim_aiomsg)